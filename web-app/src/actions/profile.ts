"use server";

import prisma from "@/libs/db";
import { auth } from "@/libs/auth";
import passManage from "@/utils/password";

export type GetProfileRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
        username: string;
        first_name: string;
        last_name: string;
        email: string | null;
        role: {
            id: number;
            name: string;
            detail: string;
        };
    };
}>;
export const GetProfile = async (): GetProfileRes => {
    const session = await auth();

    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }

    try {
        const user = await prisma.users.findUnique({
            where: { id: session.user.id },
            select: {
                id: true,
                username: true,
                first_name: true,
                last_name: true,
                email: true,
                role: true,
            },
        });

        if (!user) {
            return {
                ok: false,
                error: "ไม่พบผู้ใช้",
            };
        }

        return {
            ok: true,
            data: user,
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
            error: "เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้",
        };
    }
};

// ------------------------------------------------------------------------------------

export type UpdateProfileReq = {
    first_name: string;
    last_name: string;
    email?: string | null;
};
export type UpdateProfileRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
        username: string;
        first_name: string;
        last_name: string;
        email?: string | null;
        role: {
            id: number;
            name: string;
            detail: string;
        };
    };
}>;
export const UpdateProfile = async (
    req: UpdateProfileReq
): UpdateProfileRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    const { first_name, last_name, email } = req;
    const userId = session.user.id;
    try {
        const updatedUser = await prisma.users.update({
            where: { id: userId },
            data: {
                first_name,
                last_name,
                email: email?.trim() || null,
                updated_at: new Date(),
            },
            include: {
                role: true,
            },
        });

        if (!updatedUser) {
            return {
                ok: false,
                error: "ไม่สามารถอัพเดทข้อมูลผู้ใช้ได้",
            };
        }

        return {
            ok: true,
            data: {
                id: updatedUser.id,
                username: updatedUser.username,
                first_name: updatedUser.first_name,
                last_name: updatedUser.last_name,
                email: updatedUser.email,
                role: updatedUser.role,
            },
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
            error: "เกิดข้อผิดพลาดในการอัพเดทข้อมูลผู้ใช้",
        };
    }
};

// ------------------------------------------------------------------------------------

export type ChangePasswordReq = {
    current_password: string;
    new_password: string;
    confirm_new_password: string;
};
export type ChangePasswordRes = Promise<{
    ok: boolean;
    error?: string;
}>;
export const ChangePassword = async (
    req: ChangePasswordReq
): ChangePasswordRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    const { current_password, new_password, confirm_new_password } = req;
    const userId = session.user.id;

    if (!current_password || !new_password || !confirm_new_password) {
        return {
            ok: false,
            error: "กรุณากรอกข้อมูลให้ครบถ้วน",
        };
    }

    if (new_password !== confirm_new_password) {
        return {
            ok: false,
            error: "รหัสผ่านใหม่และยืนยันรหัสผ่านไม่ตรงกัน",
        };
    }

    try {
        const user = await prisma.users.findUnique({
            where: { id: userId },
        });

        if (!user) {
            return {
                ok: false,
                error: "ไม่พบผู้ใช้",
            };
        }

        // Assuming you have a password utility to verify and hash passwords
        const isValidCurrentPassword = await passManage.comparePassword(
            current_password,
            user.password
        );

        if (!isValidCurrentPassword) {
            return {
                ok: false,
                error: "รหัสผ่านปัจจุบันไม่ถูกต้อง",
            };
        }

        const hashedNewPassword = await passManage.hashPassword(new_password);

        await prisma.users.update({
            where: { id: userId },
            data: {
                password: hashedNewPassword,
                updated_at: new Date(),
            },
        });

        return {
            ok: true,
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
            error: "เกิดข้อผิดพลาดในการเปลี่ยนรหัสผ่าน",
        };
    }
};
