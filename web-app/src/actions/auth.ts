"use server";

import { signIn, signOut } from "@/libs/auth";

type LogInReq = {
    username: string | null;
    password: string | null;
};
type LogInRes = Promise<{
    ok: boolean;
    error?: string;
    url?: string;
}>;
export const CredentialLogin = async (req: LogInReq): LogInRes => {
    try {
        const response = await signIn("credentials", {
            username: req.username,
            password: req.password,
            redirectTo: "/dashboard",
            redirect: false,
        });
        return {
            ok: true,
            url: response?.url,
        };
    } catch (err) {
        if (err instanceof Error) {
            return {
                ok: false,
                error: err.message,
            };
        }
        return {
            ok: false,
            error: "เกิดข้อผิดพลาดในการเข้าสู่ระบบ",
        };
    }
};

// ------------------------------------------------------------------------------------

type LogOutRes = Promise<{
    ok: boolean;
    error?: string;
    url?: string;
}>;
export const Logout = async (): LogOutRes => {
    try {
        const response = await signOut({
            redirectTo: "/login",
            redirect: false,
        });
        return {
            ok: true,
            url: response?.redirect,
        };
    } catch (err) {
        if (err instanceof Error) {
            return {
                ok: false,
                error: err.message,
            };
        }
        return {
            ok: false,
            error: "เกิดข้อผิดพลาดในการออกจากระบบ",
        };
    }
};
