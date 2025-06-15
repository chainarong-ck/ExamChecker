// types/next-auth.d.ts หรือ src/next-auth.d.ts
import "next-auth";
import "next-auth/jwt";
import { DefaultSession } from "next-auth";

// ขยาย interface ของ Session เพื่อเพิ่มข้อมูลเพิ่มเติม
declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            role: number;
            username: string;
        } & DefaultSession["user"];
    }

    interface User {
        id: string;
        role: number;
        username: string;
    }
}

// ขยาย interface ของ JWT Token เพื่อเพิ่มข้อมูลเพิ่มเติม
declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        role: number;
        username: string;
    }
}
