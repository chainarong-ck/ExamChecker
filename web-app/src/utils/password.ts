import bcrypt from "bcryptjs";
import config from "@/config";

class PassManage {

    /**
     * 
     * @param passwordSalt จำนวนรอบในการแฮชรหัสผ่าน (ใช้สำหรับ bcrypt)
     */
    constructor(private passwordSalt: number) {
        if (passwordSalt <= 0) {
            throw new Error("รหัสผ่าน Salt ต้องเป็นตัวเลขที่มากกว่า 0");
        }
    }

    /**
     * ฟังก์ชันสำหรับเข้ารหัสรหัสผ่านโดยใช้ bcrypt
     *
     * @param password - รหัสผ่านที่เป็นข้อความปกติ
     * @param passwordSalt - จำนวนรอบในการแฮชรหัสผ่าน
     * @returns string - รหัสผ่านที่ถูกเข้ารหัสแล้ว
     */
    hashPassword = async (password: string, passwordSalt: number = this.passwordSalt): Promise<string> => {
        return await bcrypt.hash(password, passwordSalt);
    };

    /**
     * ฟังก์ชันสำหรับเปรียบเทียบรหัสผ่านที่ป้อนเข้ามา กับรหัสผ่านที่ถูกเข้ารหัสไว้
     *
     * @param password - รหัสผ่านที่เป็นข้อความปกติ
     * @param hashPassword - รหัสผ่านที่ถูกเข้ารหัสไว้
     * @returns boolean - คืนค่า true ถ้ารหัสผ่านตรงกัน, คืนค่า false ถ้าไม่ตรงกัน
     */
    comparePassword = async (
        password: string,
        hashPassword: string
    ): Promise<boolean> => {
        return await bcrypt.compare(password, hashPassword);
    };
}

const passManage = new PassManage(config.PASSWORD_SALT || 10);

export default passManage;
