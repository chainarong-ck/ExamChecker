"use server";

import prisma from "@/libs/db";
import passManage from "@/utils/password";

export type GetAllUserReq = {
    page: number;
    limit: number;
    orderBy?: {
        field: string;
        direction: "asc" | "desc";
    }[];
};
export type GetAllUserRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
        username: string;
        first_name: string;
        last_name: string;
        role: {
            id: number;
            name: string;
            detail: string;
        };
    }[];
    total?: number;
}>;
export const GetAllUser = async (req: GetAllUserReq): GetAllUserRes => {
    const { page, limit, orderBy } = req;

    try {
        const [users, totalCount] = await Promise.all([
            prisma.users.findMany({
                skip: (page - 1) * limit,
                take: limit,
                select: {
                    id: true,
                    username: true,
                    first_name: true,
                    last_name: true,
                    role: true,
                },
                orderBy: orderBy
                    ? orderBy.map((order) => ({
                          [order.field]: order.direction,
                      }))
                    : undefined,
            }),
            prisma.users.count(),
        ]);

        return {
            ok: true,
            data: users,
            total: totalCount,
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                ok: false,
                error: error.message,
            };
        }
        return {
            ok: false,
            error: "เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้",
        };
    }
};

// ------------------------------------------------------------------------------------

export type GetUserReq = {
    id: string;
};
export type GetUserRes = Promise<{
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
export const GetUser = async (req: GetUserReq): GetUserRes => {
    const id = req.id;

    try {
        const user = await prisma.users.findUnique({
            where: { id },
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
                error: "ไม่พบผู้ใช้ที่ต้องการดูข้อมูล",
            };
        }

        return {
            ok: true,
            data: user,
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                ok: false,
                error: error.message,
            };
        }
        return {
            ok: false,
            error: "เกิดข้อผิดพลาดในการดึงข้อมูลผู้ใช้",
        };
    }
};

// ------------------------------------------------------------------------------------

export type DeleteUserReq = {
    id: string;
};
export type DeleteUserRes = Promise<{
    ok: boolean;
    error?: string;
}>;
export const DeleteUser = async (req: DeleteUserReq): DeleteUserRes => {
    const id = req.id;

    try {
        const user = await prisma.users.findUnique({
            where: { id },
        });

        if (!user) {
            return {
                ok: false,
                error: "ไม่พบผู้ใช้ที่ต้องการลบ",
            };
        }

        await prisma.users.delete({
            where: { id },
        });

        return {
            ok: true,
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                ok: false,
                error: error.message,
            };
        }
        return {
            ok: false,
            error: "เกิดข้อผิดพลาดในการลบผู้ใช้",
        };
    }
};

// ------------------------------------------------------------------------------------

export type CreateUserReq = {
    username: string;
    password: string;
    confirm_password: string;
    first_name: string;
    last_name: string;
    email?: string | null;
    role_id: number;
};
export type CreateUserRes = Promise<{
    ok: boolean;
    data?: {
        id: string;
        username: string;
        first_name: string;
        last_name: string;
        role: {
            id: number;
            name: string;
            detail: string;
        };
    };
    error?: string;
}>;
export const CreateUser = async (req: CreateUserReq): CreateUserRes => {
    const {
        username,
        password,
        confirm_password,
        first_name,
        last_name,
        email,
        role_id,
    } = req;

    if (password !== confirm_password) {
        return {
            ok: false,
            error: "รหัสผ่านไม่ตรงกัน",
        };
    }
    if (!username || !password || !first_name || !last_name) {
        return {
            ok: false,
            error: "กรุณากรอกข้อมูลให้ครบถ้วน",
        };
    }

    try {
        const existingUser = await prisma.users.findUnique({
            where: { username },
        });
        if (existingUser) {
            return {
                ok: false,
                error: "ชื่อผู้ใช้นี้มีอยู่แล้ว",
            };
        }

        const existingEmail = email
            ? await prisma.users.findUnique({
                  where: { email },
              })
            : null;
        if (existingEmail) {
            return {
                ok: false,
                error: "อีเมลนี้ถูกใช้ไปแล้ว",
            };
        }

        const hashedPassword = await passManage.hashPassword(password);

        const newUser = await prisma.users.create({
            data: {
                username,
                password: hashedPassword,
                first_name,
                last_name,
                email: email || null,
                role_id,
            },
            include: {
                role: true,
            },
        });

        return {
            ok: true,
            data: {
                id: newUser.id,
                username: newUser.username,
                first_name: newUser.first_name,
                last_name: newUser.last_name,
                role: newUser.role,
            },
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                ok: false,
                error: error.message,
            };
        }
        return {
            ok: false,
            error: "เกิดข้อผิดพลาดในการสร้างผู้ใช้",
        };
    }
};

// ------------------------------------------------------------------------------------

export type UpdateUserReq = {
    id: string;
    username?: string;
    password?: string;
    confirm_password?: string;
    first_name: string;
    last_name: string;
    email?: string | null;
    role_id: number;
};
export type UpdateUserRes = Promise<{
    ok: boolean;
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
    error?: string;
}>;
export const UpdateUser = async (req: UpdateUserReq): UpdateUserRes => {
    const {
        id,
        password,
        confirm_password,
        first_name,
        last_name,
        email,
        role_id,
    } = req;

    if (password && password.trim() !== "") {
        if (!confirm_password || confirm_password.trim() === "") {
            return {
                ok: false,
                error: "กรุณายืนยันรหัสผ่าน",
            };
        }
        if (password !== confirm_password) {
            return {
                ok: false,
                error: "รหัสผ่านไม่ตรงกัน",
            };
        }
    }

    try {
        const user = await prisma.users.findUnique({
            where: { id },
        });

        if (!user) {
            return {
                ok: false,
                error: "ไม่พบผู้ใช้ที่ต้องการแก้ไข",
            };
        }

        const updatedUser = await prisma.users.update({
            where: { id: user.id },
            data: {
                password: password
                    ? await passManage.hashPassword(password)
                    : undefined,
                first_name:
                    first_name.trim() === "" ? user.first_name : first_name,
                last_name: last_name.trim() === "" ? user.last_name : last_name,
                email: email ? (email.trim() === "" ? null : email) : null,
                role_id: role_id,
                updated_at: new Date(),
            },
            select: {
                id: true,
                username: true,
                first_name: true,
                last_name: true,
                email: true,
                role: true,
            },
        });

        return {
            ok: true,
            data: updatedUser,
        };
    } catch (error) {
        if (error instanceof Error) {
            return {
                ok: false,
                error: error.message,
            };
        }
        return {
            ok: false,
            error: "เกิดข้อผิดพลาดในการอัปเดตผู้ใช้",
        };
    }
};
