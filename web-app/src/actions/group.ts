"use server";

import prisma from "@/libs/db";
import { auth } from "@/libs/auth";
import config from "@/config";

export type GetAllGroupsReq = {
    page: number;
    limit: number;
};
export type GetAllGroupsRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
        name: string;
        subject: string;
        year: number;
        term: number;
        template: {
            name: string;
        } | null;
        answer: {
            name: string;
        } | null;
        _count: {
            sheets: number;
        };
    }[];
    total?: number;
}>;
export const GetAllGroups = async (req: GetAllGroupsReq): GetAllGroupsRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    const { page, limit } = req;
    try {
        const [groups, totalCount] = await Promise.all([
            prisma.groups.findMany({
                skip: (page - 1) * limit,
                take: limit,
                where: { owner_id: session.user.id },
                select: {
                    id: true,
                    name: true,
                    subject: true,
                    year: true,
                    term: true,
                    answer: {
                        select: {
                            name: true,
                        },
                    },
                    template: {
                        select: {
                            name: true,
                        },
                    },
                    _count: {
                        select: {
                            sheets: true,
                        },
                    },
                },
            }),
            prisma.groups.count({
                where: { owner_id: session.user.id },
            }),
        ]);
        return {
            ok: true,
            data: groups,
            total: totalCount,
        };
    } catch (err) {
        return {
            ok: false,
            error:
                err instanceof Error
                    ? err.message
                    : "เกิดข้อผิดพลาดในการดึงข้อมูลกลุ่ม",
        };
    }
};

// ------------------------------------------------------------------------------------
export type GetGroupReq = {
    id: string;
};
export type GetGroupRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        name: string;
        id: string;
        subject: string;
        year: number;
        term: number;
        owner_id: string;
        template_id: string | null;
        answer_id: string | null;
        disable: boolean;
        created_at: Date;
        updated_at: Date;
    };
}>;
export const GetGroup = async (req: GetGroupReq): GetGroupRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    const { id } = req;
    try {
        const group = await prisma.groups.findUnique({
            where: { id },
        });
        if (!group) {
            return {
                ok: false,
                error: "ไม่พบกลุ่มที่ระบุ",
            };
        }
        return {
            ok: true,
            data: group,
        };
    } catch (err) {
        return {
            ok: false,
            error:
                err instanceof Error
                    ? err.message
                    : "เกิดข้อผิดพลาดในการดึงข้อมูลกลุ่ม",
        };
    }
};

// ------------------------------------------------------------------------------------

export type CreateGroupReq = {
    name: string;
    subject: string;
    year: number;
    term: number;
    answer_id: string;
    template_id: string;
};
export type CreateGroupRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
    };
}>;
export const CreateGroup = async (req: CreateGroupReq): CreateGroupRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    const { name, subject, year, term, answer_id, template_id } = req;
    try {
        const newGroup = await prisma.groups.create({
            data: {
                name,
                subject,
                year,
                term,
                answer_id,
                template_id,
                owner_id: session.user.id,
            },
        });
        return {
            ok: true,
            data: {
                id: newGroup.id,
            },
        };
    } catch (err) {
        return {
            ok: false,
            error:
                err instanceof Error
                    ? err.message
                    : "เกิดข้อผิดพลาดในการสร้างกลุ่ม",
        };
    }
};

// ------------------------------------------------------------------------------------

export type UpdateGroupReq = {
    id: string;
    name: string;
    subject: string;
    year: number;
    term: number;
};
export type UpdateGroupRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
        name: string;
        subject: string;
        year: number;
        term: number;
        answer_id: string | null;
        template_id: string | null;
        owner_id: string;
        disable: boolean;
        created_at: Date;
        updated_at: Date;
    };
}>;
export const UpdateGroup = async (req: UpdateGroupReq): UpdateGroupRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    const { id, name, subject, year, term } = req;
    try {
        const updatedGroup = await prisma.groups.update({
            where: { id },
            data: {
                name,
                subject,
                year,
                term,
                updated_at: new Date(),
            },
        });
        return {
            ok: true,
            data: updatedGroup,
        };
    } catch (err) {
        return {
            ok: false,
            error:
                err instanceof Error
                    ? err.message
                    : "เกิดข้อผิดพลาดในการอัปเดตกลุ่ม",
        };
    }
};

// ------------------------------------------------------------------------------------

export type DeleteGroupReq = {
    id: string;
};
export type DeleteGroupRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
    };
}>;
export const DeleteGroup = async (req: DeleteGroupReq): DeleteGroupRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    const { id } = req;
    let deletedGroup: {
        id: string;
    } | null = null;
    try {
        deletedGroup = await prisma.groups.delete({
            where: { id },
            select: {
                id: true,
            },
        });

        if (!deletedGroup) {
            return {
                ok: false,
                error: "ไม่พบกลุ่มที่ระบุ",
            };
        }
    } catch (err) {
        return {
            ok: false,
            error:
                err instanceof Error
                    ? err.message
                    : "เกิดข้อผิดพลาดในการลบกลุ่ม",
        };
    }

    try {
        await fetch(`${config.FILE_STORAGE_API_URL}/folder/${id}`, {
            method: "DELETE",
        });
    } catch (err) {
        console.error("Error deleting group folder:", err);
    }

    return {
        ok: true,
        data: deletedGroup,
    };
};
