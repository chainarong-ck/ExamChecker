class Config {
    PASSWORD_SALT = 12;
    IMAGE_PROCESS_API_URL = "http://localhost:3001/api/v1";
    FILE_STORAGE_API_URL = "http://localhost:3002/api/v1";

    AUTH_JWT_ALG = "dir"; // อัลกอริธึมสำหรับการเข้ารหัส JSON Web Encryption (ใช้ได้เฉพาะ 'dir')
    AUTH_JWT_ENC = "A256CBC-HS512"; // อัลกอริธึมสำหรับการเข้ารหัสข้อมูลของ JSON Web Encryption (เลือกได้ระหว่าง 'A256CBC-HS512' หรือ 'A256GCM')
    AUTH_JWT_MAX_AGE = 30 * 24 * 60 * 60; // อายุสูงสุดของ JWT โดยค่าเริ่มต้น (วัดเป็นวินาที) --> 30 วัน
    AUTH_JWT_SALT = "authjs-jwt"; // ค่าที่ใช้ในการสร้างคีย์สำหรับการเข้ารหัส JWT
    AUTH_JWT_SECRET =
        process.env.AUTH_JWT_SECRET ||
        "q52iLrzwwYNi07vGLcQ22e4Hv0gH3ryaCA5xAX4ZAYQ="; // คีย์ลับสำหรับการเข้ารหัส JWT (ควรเก็บเป็นความลับและไม่เปิดเผยในโค้ด)
}

const config = new Config();
export default config;
