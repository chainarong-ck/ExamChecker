"use server";

import prisma from "@/libs/db";
import { auth } from "@/libs/auth";

export type GetAllAnswersReq = {
    page: number;
    limit: number;
};
export type GetAllAnswersRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
        name: string;
        subject: string;
        year: number;
        term: number;
        total_no: number;
    }[];
    total?: number;
}>;
export const GetAllAnswers = async (
    req: GetAllAnswersReq
): GetAllAnswersRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    const { page, limit } = req;

    try {
        const [answers, totalCount] = await Promise.all([
            prisma.answers.findMany({
                skip: (page - 1) * limit,
                take: limit,
                where: { owner_id: session.user.id },
                select: {
                    id: true,
                    name: true,
                    subject: true,
                    year: true,
                    term: true,
                    total_no: true,
                },
            }),
            prisma.answers.count(),
        ]);

        return {
            ok: true,
            data: answers,
            total: totalCount,
        };
    } catch (err) {
        return {
            ok: false,
            error:
                err instanceof Error
                    ? err.message
                    : "เกิดข้อผิดพลาดในการดึงข้อมูลชุดเฉลย",
        };
    }
};

// ------------------------------------------------------------------------------------

export type GetAnswerReq = {
    id: string;
};
export type GetAnswerRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
        name: string;
        owner_id: string;
        subject: string;
        year: number;
        term: number;
        total_no: number;
        shared: boolean;
        disable: boolean;
        created_at: Date;
        updated_at: Date;
        answer_details: {
            id: number;
            answer_id: string;
            no: number;
            point: number;
            correct_all: boolean;
            choice_correct: string | null;
        }[];
    };
}>;
export const GetAnswer = async (req: GetAnswerReq): GetAnswerRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    const { id } = req;
    try {
        const answer = await prisma.answers.findUnique({
            where: { id },
            include: {
                answer_details: true,
            },
        });
        if (!answer) {
            return {
                ok: false,
                error: "ไม่พบชุดเฉลยที่ระบุ",
            };
        }
        return {
            ok: true,
            data: {
                id: answer.id,
                name: answer.name,
                owner_id: answer.owner_id,
                subject: answer.subject,
                year: answer.year,
                term: answer.term,
                total_no: answer.total_no,
                shared: answer.shared,
                disable: answer.disable,
                created_at: answer.created_at,
                updated_at: answer.updated_at,
                answer_details: answer.answer_details.map((detail) => ({
                    id: detail.id,
                    answer_id: detail.answer_id,
                    no: detail.no,
                    point: detail.point,
                    correct_all: detail.correct_all,
                    choice_correct: JSON.stringify(detail.choice_correct),
                })),
            },
        };
    } catch (err) {
        return {
            ok: false,
            error:
                err instanceof Error
                    ? err.message
                    : "เกิดข้อผิดพลาดในการดึงข้อมูลชุดเฉลย",
        };
    }
};

// ------------------------------------------------------------------------------------

export type CreateAnswerReq = {
    name: string;
    subject: string;
    year: number;
    term: number;
    total_no: number;
    answer: Answer[];
};
export type CreateAnswerRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
    };
}>;
export const CreateAnswer = async (req: CreateAnswerReq): CreateAnswerRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    const { name, subject, year, term, total_no, answer } = req;
    try {
        const newAnswer = await prisma.answers.create({
            data: {
                name,
                subject,
                year,
                term,
                total_no,
                owner_id: session.user.id,
                answer_details: {
                    createMany: {
                        data: answer.map((ans, index) => ({
                            no: index + 1,
                            point: ans.point,
                            correct_all: ans.all,
                            choice_correct: JSON.stringify({
                                a: ans.a,
                                b: ans.b,
                                c: ans.c,
                                d: ans.d,
                            }),
                        })),
                    },
                },
            },
            select: {
                id: true,
            },
        });
        return {
            ok: true,
            data: newAnswer,
        };
    } catch (err) {
        return {
            ok: false,
            error:
                err instanceof Error
                    ? err.message
                    : "เกิดข้อผิดพลาดในการสร้างชุดเฉลย",
        };
    }
};

// ------------------------------------------------------------------------------------

export type UpdateAnswerReq = {
    id: string;
    name: string;
    subject: string;
    year: number;
    term: number;
    total_no: number;
    answer: Answer[];
};
export type UpdateAnswerRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
        name: string;
        subject: string;
        year: number;
        term: number;
        total_no: number;
        updated_at: Date;
    };
}>;
export const UpdateAnswer = async (req: UpdateAnswerReq): UpdateAnswerRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    const { id, name, subject, year, term, total_no, answer } = req;
    try {
        await prisma.answer_details.deleteMany({
            where: {
                answer_id: id,
            },
        });

        const updatedAnswer = await prisma.answers.update({
            where: { id },
            data: {
                name,
                subject,
                year,
                term,
                total_no,
                updated_at: new Date(),
                answer_details: {
                    createMany: {
                        data: answer.map((ans, index) => ({
                            no: index + 1,
                            point: ans.point,
                            correct_all: ans.all,
                            choice_correct: JSON.stringify({
                                a: ans.a,
                                b: ans.b,
                                c: ans.c,
                                d: ans.d,
                            }),
                        })),
                    },
                },
            },
        });
        return {
            ok: true,
            data: updatedAnswer,
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
            error: "เกิดข้อผิดพลาดในการอัปเดตชุดเฉลย",
        };
    }
};

// ------------------------------------------------------------------------------------

export type DeleteAnswerReq = {
    id: string;
};
export type DeleteAnswerRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        name: string;
        id: string;
        owner_id: string;
        subject: string;
        year: number;
        term: number;
        total_no: number;
        shared: boolean;
        disable: boolean;
        created_at: Date;
        updated_at: Date;
    };
}>;
export const DeleteAnswer = async (req: DeleteAnswerReq): DeleteAnswerRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    const { id } = req;
    try {
        const deletedAnswer = await prisma.answers.delete({
            where: { id },
        });
        return {
            ok: true,
            data: deletedAnswer,
        };
    } catch (err) {
        return {
            ok: false,
            error:
                err instanceof Error
                    ? err.message
                    : "เกิดข้อผิดพลาดในการลบชุดเฉลย",
        };
    }
};
