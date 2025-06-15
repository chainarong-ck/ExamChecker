"use server";

import { auth } from "@/libs/auth";
import config from "@/config";

export type GetImage = {
    foldername: string;
    filename: string;
};
export type GetImageRes = Promise<{
    ok: boolean;
    error?: string;
    file?: Blob;
}>;
export const GetImage = async (req: GetImage): GetImageRes => {
    const { foldername, filename } = req;
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }

    try {
        const file = await fetch(
            `${config.FILE_STORAGE_API_URL}/${foldername}/${filename}`
        );
        if (!file.ok) {
            throw new Error("ไม่พบไฟล์ที่ต้องการ");
        }
        const blob = await file.blob();

        return {
            ok: true,
            file: blob,
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
            error: "เกิดข้อผิดพลาดไม่ทราบสาเหตุ",
        };
    }
};
