"use server";
import prisma from "@/libs/db";

export type GetAllRoleRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: number;
        name: string;
    }[];
}>;
export const GetAllRole = async (): GetAllRoleRes => {
    try {
        const roles = await prisma.roles.findMany({
            select: {
                id: true,
                name: true,
            },
        });

        return {
            ok: true,
            data: roles,
        };
    } catch (error) {
        return {
            ok: false,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
};

// ------------------------------------------------------------------------------------

export type GetRoleReq = {
    id: number;
};
export type GetRoleRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: number;
        name: string;
        detail: string;
    };
}>;
export const GetRole = async (req: GetRoleReq): GetRoleRes => {
    const id = req.id;

    try {
        const role = await prisma.roles.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                detail: true,
            },
        });

        if (!role) {
            return {
                ok: false,
                error: "ไม่พบข้อมูลบทบาทที่ต้องการ",
            };
        }

        return {
            ok: true,
            data: role,
        };
    } catch (error) {
        return {
            ok: false,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
};
