import hkdf from "@panva/hkdf";
import {
    calculateJwkThumbprint,
    base64url,
    EncryptJWT,
    jwtDecrypt,
} from "jose";
import config from "@/config";
import type { TokenPayload } from "@/types/jwt";

type Digest = Parameters<typeof calculateJwkThumbprint>[1];

class JWTManage {
    /**
     *
     * @param alg อัลกอริธึมการจัดการคีย์ (key management algorithm) สำหรับ JWT
     * @param enc อัลกอริธึมการเข้ารหัสเนื้อหา (content encryption algorithm) สำหรับ JWT
     * @param maxAge อายุสูงสุดของ JWT (วัดเป็นวินาที)
     * @param salt ค่าความเค็ม (salt) ที่ใช้ในการสร้างคีย์สำหรับการเข้ารหัส JWT
     * @param secret คีย์ลับสำหรับการเข้ารหัส JWT (สามารถเป็นข้อความเดียวหรืออาร์เรย์ของข้อความ)
     */
    constructor(
        private alg: string,
        private enc: string,
        private maxAge: number,
        private salt: string,
        private secret: string | string[]
    ) {
        if (this.alg !== "dir") {
            throw new Error(
                "ไม่รองรับอัลกอริธึมการเข้ารหัส JWT ที่ไม่ใช่ 'dir'"
            );
        }
        if (!["A256CBC-HS512", "A256GCM"].includes(this.enc)) {
            throw new Error(
                "ไม่รองรับอัลกอริธึมการเข้ารหัส JWT ที่ไม่ใช่ 'A256CBC-HS512' หรือ 'A256GCM'"
            );
        }
        if (typeof this.maxAge !== "number") {
            throw new Error("ระยะเวลาสูงสุดของ JWT ต้องเป็นตัวเลข (วินาที)");
        }
        if (typeof this.salt !== "string") {
            throw new Error("ค่าความเค็ม (Salt) ต้องเป็นข้อความ");
        }
        if (typeof this.secret !== "string" && !Array.isArray(this.secret)) {
            throw new Error(
                "คีย์ลับสำหรับ JWT ต้องเป็นข้อความหรืออาร์เรย์ของข้อความ"
            );
        }
    }

    /**
     * สร้างคีย์สำหรับเข้ารหัสข้อมูล จากค่า key material, salt และอัลกอริธึมการเข้ารหัส
     *
     * @param enc - อัลกอริธึมการเข้ารหัส (เช่น A256GCM หรือ A256CBC-HS512)
     * @param keyMaterial - ค่าพื้นฐานสำหรับสร้างคีย์
     * @param salt - ค่าความเค็ม (Salt) เพื่อเพิ่มความปลอดภัย
     * @returns Uint8Array - คีย์ที่ผ่านการแปลงแล้วพร้อมใช้เข้ารหัส
     * @throws Error - หากอัลกอริธึมการเข้ารหัสไม่รองรับ
     */
    private getDerivedEncryptionKey = async (
        enc: string,
        keyMaterial: Parameters<typeof hkdf>[1],
        salt: string
    ) => {
        let length: number;
        switch (enc) {
            case "A256CBC-HS512":
                length = 64;
                break;
            case "A256GCM":
                length = 32;
                break;
            default:
                throw new Error("Unsupported JWT Content Encryption Algorithm");
        }
        return await hkdf(
            "sha256",
            keyMaterial,
            salt,
            `Chainarong_CK Generated Encryption Key (${salt})`,
            length
        );
    };

    /**
     * เข้ารหัส payload ให้อยู่ในรูปแบบ JSON Web Token (JWT)
     *
     * @param token - ข้อมูล payload ที่ต้องการเข้ารหัส
     * @param maxAge - อายุของ token (ค่าเริ่มต้นคือ AUTH_JWT_MAX_AGE)
     * @returns string - JWT ที่ถูกเข้ารหัสเรียบร้อยแล้ว
     */
    encode = async (token: TokenPayload, maxAge: number = this.maxAge) => {
        const secrets = Array.isArray(this.secret)
            ? this.secret
            : [this.secret];
        const encryptionSecret = await this.getDerivedEncryptionKey(
            this.enc,
            secrets[0],
            this.salt
        );

        const thumbprint = await calculateJwkThumbprint(
            { kty: "oct", k: base64url.encode(encryptionSecret) },
            `sha${encryptionSecret.byteLength << 3}` as Digest
        );

        return await new EncryptJWT(token)
            .setProtectedHeader({
                alg: this.alg,
                enc: this.enc,
                kid: thumbprint,
            })
            .setIssuedAt()
            .setExpirationTime(maxAge)
            .setJti(crypto.randomUUID())
            .encrypt(encryptionSecret);
    };

    /**
     * ถอดรหัส JWT และดึง payload กลับออกมา
     *
     * @param token - JWT ที่ได้รับ
     * @returns - ข้อมูล payload ภายใน token หรือ null ถ้าไม่สามารถถอดรหัสได้
     */
    decode = async (token: string) => {
        const secrets = Array.isArray(this.secret)
            ? this.secret
            : [this.secret];
        if (!token) return null;
        const { payload } = await jwtDecrypt(
            token,
            async ({ kid, enc }) => {
                for (const secret of secrets) {
                    const encryptionSecret = await this.getDerivedEncryptionKey(
                        enc,
                        secret,
                        this.salt
                    );
                    if (kid === undefined) return encryptionSecret;

                    const thumbprint = await calculateJwkThumbprint(
                        { kty: "oct", k: base64url.encode(encryptionSecret) },
                        `sha${encryptionSecret.byteLength << 3}` as Digest
                    );
                    if (kid === thumbprint) return encryptionSecret;
                }

                throw new Error("no matching decryption secret");
            },
            {
                clockTolerance: 15,
                keyManagementAlgorithms: [this.alg],
                contentEncryptionAlgorithms: [this.enc, "A256GCM"],
            }
        );
        return payload as TokenPayload;
    };
}

const jwtManage = new JWTManage(
    config.AUTH_JWT_ALG || "dir",
    config.AUTH_JWT_ENC || "A256CBC-HS512",
    config.AUTH_JWT_MAX_AGE || 24 * 60 * 60, // 1 days
    config.AUTH_JWT_SALT || "authjs-jwt",
    config.AUTH_JWT_SECRET || "q52iLrzwwYNi07vGLcQ22e4Hv0gH3ryaCA5xAX4ZAYQ="
);

export default jwtManage;
