"use server";
import prisma from "@/libs/db";
import { auth } from "@/libs/auth";
import config from "@/config";

export type CheckCompatibilityReq = FormData;
export type CheckCompatibilityRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        compatible: boolean;
        marker_tl_center: Point | null;
        marker_tr_center: Point | null;
        marker_bl_center: Point | null;
        marker_br_center: Point | null;
        invert?: boolean;
    };
}>;
export const CheckCompatibility = async (
    req: CheckCompatibilityReq
): CheckCompatibilityRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }

    try {
        const file = req.get("file");
        const templateId = req.get("template_id");

        // ตรวจสอบว่าไฟล์ที่อัปโหลดเป็นไฟล์จริงหรือไม่
        if (!file || !(file instanceof File)) {
            return {
                ok: false,
                error: "กรุณาอัปโหลดไฟล์",
            };
        }

        // ตรวจสอบว่ามี template_id หรือไม่
        if (!templateId || typeof templateId !== "string") {
            return {
                ok: false,
                error: "กรุณาระบุ ID ของเทมเพลต",
            };
        }

        // ดึงข้อมูลเทมเพลตจากฐานข้อมูล
        let templateMarkerData: {
            marker_tl: SquareWithId;
            marker_tr: SquareWithId;
            marker_bl: SquareWithId;
            marker_br: SquareWithId;
            line_1?: SquareWithId;
            line_2?: SquareWithId;
        };
        try {
            const template = await prisma.templates.findUnique({
                where: { id: templateId },
                select: {
                    template_regions: {
                        select: {
                            sx: true,
                            sy: true,
                            ex: true,
                            ey: true,
                            region: true,
                        },
                        where: {
                            OR: [
                                {
                                    region: {
                                        region_type: {
                                            name: "marker",
                                        },
                                    },
                                },
                                {
                                    region: {
                                        region_type: {
                                            name: "line",
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            });

            if (!template) {
                return {
                    ok: false,
                    error: "ไม่พบเทมเพลตที่ระบุ",
                };
            }
            const marker_tl =
                template.template_regions.findLast(
                    (r) => r.region.name === "marker_tl"
                ) || null;
            const marker_tr =
                template.template_regions.findLast(
                    (r) => r.region.name === "marker_tr"
                ) || null;
            const marker_bl =
                template.template_regions.findLast(
                    (r) => r.region.name === "marker_bl"
                ) || null;
            const marker_br =
                template.template_regions.findLast(
                    (r) => r.region.name === "marker_br"
                ) || null;

            // ตรวจสอบว่าเทมเพลตมี marker ทั้ง 4 จุดหรือไม่
            if (!marker_tl || !marker_tr || !marker_bl || !marker_br) {
                return {
                    ok: false,
                    error: "เทมเพลตต้องมี marker ทั้ง 4 จุด",
                };
            }

            const line_1 =
                template.template_regions.findLast(
                    (r) => r.region.name === "line_1"
                ) || null;
            const line_2 =
                template.template_regions.findLast(
                    (r) => r.region.name === "line_2"
                ) || null;

            // ตรวจสอบว่าเทมเพลตมี line ทั้ง 2 เส้นหรือไม่
            if (!line_1) {
                return {
                    ok: false,
                    error: "เทมเพลตต้องมีเส้นที่ 1",
                };
            }

            templateMarkerData = {
                marker_tl: {
                    sx: marker_tl.sx,
                    sy: marker_tl.sy,
                    ex: marker_tl.ex,
                    ey: marker_tl.ey,
                    region_id: "marker_tl",
                },
                marker_tr: {
                    sx: marker_tr.sx,
                    sy: marker_tr.sy,
                    ex: marker_tr.ex,
                    ey: marker_tr.ey,
                    region_id: "marker_tr",
                },
                marker_bl: {
                    sx: marker_bl.sx,
                    sy: marker_bl.sy,
                    ex: marker_bl.ex,
                    ey: marker_bl.ey,
                    region_id: "marker_bl",
                },
                marker_br: {
                    sx: marker_br.sx,
                    sy: marker_br.sy,
                    ex: marker_br.ex,
                    ey: marker_br.ey,
                    region_id: "marker_br",
                },
                line_1: line_1
                    ? {
                          sx: line_1.sx,
                          sy: line_1.sy,
                          ex: line_1.ex,
                          ey: line_1.ey,
                          region_id: "line_1",
                      }
                    : undefined,
                line_2: line_2
                    ? {
                          sx: line_2.sx,
                          sy: line_2.sy,
                          ex: line_2.ex,
                          ey: line_2.ey,
                          region_id: "line_2",
                      }
                    : undefined,
            };
        } catch (error) {
            return {
                ok: false,
                error:
                    "ไม่สามารถดึงข้อมูลเทมเพลตได้: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }

        // ตรวจสอบรูปว่ามีเครื่องหมายมุมกระดาษครบถ้วนหรือไม่ (ระบบตรวจจับได้ครบถ้วน)
        let marker_center: {
            marker_tl: Point | null;
            marker_tr: Point | null;
            marker_bl: Point | null;
            marker_br: Point | null;
            invert?: boolean;
        } = {
            marker_tl: null,
            marker_tr: null,
            marker_bl: null,
            marker_br: null,
        };
        try {
            const checkMarkerFormData = new FormData();
            checkMarkerFormData.append("file", file);
            checkMarkerFormData.append(
                "marker_tl",
                JSON.stringify(templateMarkerData.marker_tl)
            );
            checkMarkerFormData.append(
                "marker_tr",
                JSON.stringify(templateMarkerData.marker_tr)
            );
            checkMarkerFormData.append(
                "marker_bl",
                JSON.stringify(templateMarkerData.marker_bl)
            );
            checkMarkerFormData.append(
                "marker_br",
                JSON.stringify(templateMarkerData.marker_br)
            );

            const fetchRes = await fetch(
                `${config.IMAGE_PROCESS_API_URL}/checkMarkerLineForUploadFileAtGroup`,
                {
                    method: "POST",
                    body: checkMarkerFormData,
                }
            );

            const resData = await fetchRes.json();
            if (!resData.success) {
                return {
                    ok: false,
                    error:
                        "เกิดข้อผิดพลาดในการตรวจสอบเครื่องหมายมุมกระดาษ: " +
                        resData.message,
                };
            }

            // หากเครื่องหมายมุมกระดาษครบถ้วน
            marker_center = {
                marker_tl: resData.marker_tl.supported
                    ? {
                          x: resData.marker_tl.center.x as number,
                          y: resData.marker_tl.center.y as number,
                      }
                    : null,
                marker_tr: resData.marker_tr.supported
                    ? {
                          x: resData.marker_tr.center.x as number,
                          y: resData.marker_tr.center.y as number,
                      }
                    : null,
                marker_bl: resData.marker_bl.supported
                    ? {
                          x: resData.marker_bl.center.x as number,
                          y: resData.marker_bl.center.y as number,
                      }
                    : null,
                marker_br: resData.marker_br.supported
                    ? {
                          x: resData.marker_br.center.x as number,
                          y: resData.marker_br.center.y as number,
                      }
                    : null,
                invert: resData.invert as boolean,
            };
        } catch (error) {
            return {
                ok: false,
                error:
                    "ไม่สามารถตรวจสอบความเข้ากันได้ของไฟล์: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }

        // ตรวจสอบว่าเครื่องหมายมุมกระดาษครบถ้วนหรือไม่
        if (
            !marker_center.marker_tl ||
            !marker_center.marker_tr ||
            !marker_center.marker_bl ||
            !marker_center.marker_br
        ) {
            return {
                ok: true,
                error: "ไฟล์ไม่สามารถใช้งานได้ เนื่องจากเครื่องหมายมุมกระดาษไม่ครบถ้วน",
                data: {
                    compatible: false,
                    marker_tl_center: marker_center.marker_tl,
                    marker_tr_center: marker_center.marker_tr,
                    marker_bl_center: marker_center.marker_bl,
                    marker_br_center: marker_center.marker_br,
                    invert: marker_center.invert,
                },
            };
        }
        return {
            ok: true,
            data: {
                compatible: true,
                marker_tl_center: marker_center.marker_tl,
                marker_tr_center: marker_center.marker_tr,
                marker_bl_center: marker_center.marker_bl,
                marker_br_center: marker_center.marker_br,
                invert: marker_center.invert,
            },
        };
    } catch (error) {
        return {
            ok: false,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
};

// ------------------------------------------------------------------------------------

export type UploadSheetReq = FormData;
export type UploadSheetRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        sheet_id: string;
    };
}>;
export const UploadSheet = async (req: UploadSheetReq): UploadSheetRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }

    try {
        const image_file = req.get("file");
        const groupId = req.get("group_id");
        const marker_tl_center = req.get("marker_tl_center");
        const marker_tr_center = req.get("marker_tr_center");
        const marker_bl_center = req.get("marker_bl_center");
        const marker_br_center = req.get("marker_br_center");

        // ตรวจสอบว่า marker_tl_center, marker_tr_center, marker_bl_center, marker_br_center ถูกส่งมาหรือไม่
        if (
            !marker_tl_center ||
            !marker_tr_center ||
            !marker_bl_center ||
            !marker_br_center ||
            typeof marker_tl_center !== "string" ||
            typeof marker_tr_center !== "string" ||
            typeof marker_bl_center !== "string" ||
            typeof marker_br_center !== "string"
        ) {
            return {
                ok: false,
                error: "กรุณาระบุตำแหน่งของเครื่องหมายมุมกระดาษ",
            };
        }

        // แปลงตำแหน่งเครื่องหมายมุมกระดาษเป็น JSON
        const marker_tl_center_json: Point = JSON.parse(marker_tl_center);
        const marker_tr_center_json: Point = JSON.parse(marker_tr_center);
        const marker_bl_center_json: Point = JSON.parse(marker_bl_center);
        const marker_br_center_json: Point = JSON.parse(marker_br_center);

        // ตรวจสอบว่าตำแหน่งเครื่องหมายมุมกระดาษถูกต้องหรือไม่
        if (
            !marker_tl_center_json ||
            !marker_tr_center_json ||
            !marker_bl_center_json ||
            !marker_br_center_json ||
            typeof marker_tl_center_json.x !== "number" ||
            typeof marker_tl_center_json.y !== "number" ||
            typeof marker_tr_center_json.x !== "number" ||
            typeof marker_tr_center_json.y !== "number" ||
            typeof marker_bl_center_json.x !== "number" ||
            typeof marker_bl_center_json.y !== "number" ||
            typeof marker_br_center_json.x !== "number" ||
            typeof marker_br_center_json.y !== "number"
        ) {
            return {
                ok: false,
                error: "ตำแหน่งของเครื่องหมายมุมกระดาษไม่ถูกต้อง",
            };
        }

        // ตรวจสอบว่าไฟล์ที่อัปโหลดเป็นไฟล์จริงหรือไม่
        if (!image_file || !(image_file instanceof File)) {
            return {
                ok: false,
                error: "กรุณาอัปโหลดไฟล์",
            };
        }

        // ตรวจสอบว่ามี template_id หรือไม่
        if (!groupId || typeof groupId !== "string") {
            return {
                ok: false,
                error: "กรุณาระบุ ID ของกลุ่มการตรวจ",
            };
        }

        // ตรวจสอบว่ากลุ่มการตรวจสอบมีอยู่ในฐานข้อมูลหรือไม่
        try {
            const group = await prisma.groups.findUnique({
                where: { id: groupId },
                select: {
                    id: true,
                },
            });

            if (!group) {
                return {
                    ok: false,
                    error: "ไม่พบกลุ่มการตรวจที่ระบุ",
                };
            }
        } catch (error) {
            return {
                ok: false,
                error:
                    "ไม่สามารถดึงข้อมูลกลุ่มการตรวจได้: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }

        // อัปโหลดไฟล์ไปยัง file storage
        let image_filename: string;
        try {
            const imageUploadFormData = new FormData();
            imageUploadFormData.append("file", image_file);
            const imageUploadRes = await fetch(
                `${config.FILE_STORAGE_API_URL}/${groupId}`,
                {
                    method: "POST",
                    body: imageUploadFormData,
                }
            );
            const imageUploadData = await imageUploadRes.json();
            if (!imageUploadData.success) {
                // หากเกิดข้อผิดพลาดในการอัพโหลดไฟล์รูปภาพ
                return {
                    ok: false,
                    error: "เกิดข้อผิดพลาดในการอัพโหลดไฟล์รูปภาพ",
                };
            }
            image_filename = imageUploadData.filename;
        } catch (error) {
            return {
                ok: false,
                error:
                    "เกิดข้อผิดพลาดในการอัพโหลดไฟล์: " +
                    (error instanceof Error
                        ? error.message
                        : "เกิดข้อผิดพลาดไม่ทราบสาเหตุ"),
            };
        }

        // บันทึกข้อมูลการอัปโหลดลงฐานข้อมูล
        try {
            const uploadImage = await prisma.sheets.create({
                data: {
                    image_filename,
                    original_name: image_file.name,
                    group_id: groupId,
                    marker_tl_center: marker_tl_center_json,
                    marker_tr_center: marker_tr_center_json,
                    marker_bl_center: marker_bl_center_json,
                    marker_br_center: marker_br_center_json,
                },
                select: {
                    id: true,
                },
            });
            return {
                ok: true,
                data: {
                    sheet_id: uploadImage.id,
                },
            };
        } catch (error) {
            await fetch(
                `${config.FILE_STORAGE_API_URL}/${groupId}/${image_filename}`,
                {
                    method: "DELETE",
                }
            );
            return {
                ok: false,
                error:
                    "ไม่สามารถบันทึกข้อมูลการอัปโหลดได้: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }
    } catch (error) {
        return {
            ok: false,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
};

// ------------------------------------------------------------------------------------

export type GetSheetReq = {
    sheetId: string;
};
export type GetSheetRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
        original_name: string;
        image_filename: string;
        group_id: string;
        total_scores: number | null;
        sheet_status_id: number;
        process_id: string | null;
        predict_ans_detail: string | null;
        predict_ans_result: string | null;
        predict_std_fill_detail: string | null;
        predict_std_fill_result: string | null;
        created_at: Date;
        updated_at: Date;
    };
}>;
export const GetSheet = async (req: GetSheetReq): GetSheetRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }

    try {
        const { sheetId } = req;

        // ตรวจสอบว่ามี sheet_id หรือไม่
        if (!sheetId || sheetId.trim() === "") {
            return {
                ok: false,
                error: "กรุณาระบุ ID ของแผ่นกระดาษ",
            };
        }

        // ดึงข้อมูลแผ่นกระดาษจากฐานข้อมูล
        try {
            const sheet = await prisma.sheets.findUnique({
                where: { id: sheetId },
            });

            if (!sheet) {
                return {
                    ok: false,
                    error: "ไม่พบแผ่นกระดาษที่ระบุ",
                };
            }

            return {
                ok: true,
                data: {
                    id: sheet.id,
                    original_name: sheet.original_name,
                    image_filename: sheet.image_filename,
                    group_id: sheet.group_id,
                    total_scores: sheet.total_scores,
                    sheet_status_id: sheet.sheet_status_id,
                    process_id: sheet.process_id,
                    predict_ans_detail: sheet.predict_ans_detail as
                        | string
                        | null,
                    predict_ans_result: sheet.predict_ans_result as
                        | string
                        | null,
                    predict_std_fill_detail: sheet.predict_std_fill_detail as
                        | string
                        | null,
                    predict_std_fill_result: sheet.predict_std_fill_result as
                        | string
                        | null,
                    created_at: sheet.created_at,
                    updated_at: sheet.updated_at,
                },
            };
        } catch (error) {
            return {
                ok: false,
                error:
                    "ไม่สามารถดึงข้อมูลแผ่นกระดาษได้: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }
    } catch (error) {
        return {
            ok: false,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
};

// ------------------------------------------------------------------------------------

export type GetSheetByGroupReq = {
    groupId: string;
};
export type GetSheetByGroupRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
        original_name: string;
        image_filename: string;
        group_id: string;
        total_scores: number | null;
        sheet_status_id: number;
        process_id: string | null;
        predict_ans_detail: string | null;
        predict_ans_result: string | null;
        predict_std_fill_detail: string | null;
        predict_std_fill_result: string | null;
        created_at: Date;
        updated_at: Date;
        sheet_status: {
            id: number;
            name: string;
            detail: string;
        };
    }[];
}>;
export const GetSheetByGroup = async (
    req: GetSheetByGroupReq
): GetSheetByGroupRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }

    try {
        const { groupId } = req;

        // ตรวจสอบว่ามี group_id หรือไม่
        if (!groupId || groupId.trim() === "") {
            return {
                ok: false,
                error: "กรุณาระบุ ID ของกลุ่มการตรวจ",
            };
        }

        // ตรวจสอบว่ากลุ่มการตรวจสอบมีอยู่ในฐานข้อมูลหรือไม่
        try {
            const group = await prisma.groups.findUnique({
                where: { id: groupId },
                select: {
                    id: true,
                },
            });

            if (!group) {
                return {
                    ok: false,
                    error: "ไม่พบกลุ่มการตรวจที่ระบุ",
                };
            }
        } catch (error) {
            return {
                ok: false,
                error:
                    "ไม่สามารถดึงข้อมูลกลุ่มการตรวจได้: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }

        // ดึงข้อมูลสถานะของแผ่นกระดาษ
        let sheetStatus;
        try {
            sheetStatus = await prisma.sheet_statuses.findMany();

            if (!sheetStatus) {
                return {
                    ok: false,
                    error: "ไม่พบกลุ่มการตรวจที่ระบุ",
                };
            }
        } catch (error) {
            return {
                ok: false,
                error:
                    "ไม่สามารถดึงข้อมูลสถานะของแผ่นกระดาษได้: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }

        // ดึงข้อมูลแผ่นกระดาษทั้งหมดในกลุ่ม
        try {
            const sheets = await prisma.sheets.findMany({
                where: { group_id: groupId },
                orderBy: {
                    created_at: "desc",
                },
            });

            return {
                ok: true,
                data: sheets.map((sheet) => ({
                    id: sheet.id,
                    original_name: sheet.original_name,
                    image_filename: sheet.image_filename,
                    group_id: sheet.group_id,
                    total_scores: sheet.total_scores,
                    sheet_status_id: sheet.sheet_status_id,
                    process_id: sheet.process_id,
                    predict_ans_detail: sheet.predict_ans_detail
                        ? JSON.stringify(sheet.predict_ans_detail)
                        : null,
                    predict_ans_result: sheet.predict_ans_result
                        ? JSON.stringify(sheet.predict_ans_result)
                        : null,
                    predict_std_fill_detail: sheet.predict_std_fill_detail
                        ? JSON.stringify(sheet.predict_std_fill_detail)
                        : null,
                    predict_std_fill_result: sheet.predict_std_fill_result
                        ? JSON.stringify(sheet.predict_std_fill_result)
                        : null,
                    created_at: sheet.created_at,
                    updated_at: sheet.updated_at,
                    sheet_status: sheetStatus.find(
                        (status) => status.id === sheet.sheet_status_id
                    ) || {
                        id: 0,
                        name: "Unknown",
                        detail: "ไม่ทราบสถานะ",
                    },
                })),
            };
        } catch (error) {
            return {
                ok: false,
                error:
                    "ไม่สามารถดึงข้อมูลแผ่นกระดาษได้: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }
    } catch (error) {
        return {
            ok: false,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
};

// ------------------------------------------------------------------------------------

export type DeleteSheetReq = {
    sheetId: string;
};
export type DeleteSheetRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        sheetId?: string;
    };
}>;
export const DeleteSheet = async (req: DeleteSheetReq): DeleteSheetRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }

    try {
        const { sheetId } = req;

        // ตรวจสอบว่ามี sheet_id หรือไม่
        if (sheetId.trim() === "") {
            return {
                ok: false,
                error: "กรุณาระบุ ID ของแผ่นกระดาษ",
            };
        }

        // ดึงข้อมูลแผ่นกระดาษจากฐานข้อมูล
        let sheet;
        try {
            sheet = await prisma.sheets.findUnique({
                where: { id: sheetId },
                select: {
                    id: true,
                    image_filename: true,
                    group_id: true,
                },
            });

            if (!sheet) {
                return {
                    ok: false,
                    error: "ไม่พบแผ่นกระดาษที่ระบุ",
                };
            }
        } catch (error) {
            return {
                ok: false,
                error:
                    "ไม่สามารถดึงข้อมูลแผ่นกระดาษได้: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }

        // ลบไฟล์จาก file storage
        try {
            const deleteFileRes = await fetch(
                `${config.FILE_STORAGE_API_URL}/${sheet.group_id}/${sheet.image_filename}`,
                {
                    method: "DELETE",
                }
            );
            const deleteFileData = await deleteFileRes.json();
            if (!deleteFileData.success) {
                return {
                    ok: false,
                    error: "เกิดข้อผิดพลาดในการลบไฟล์รูปภาพ",
                };
            }
        } catch (error) {
            return {
                ok: false,
                error:
                    "เกิดข้อผิดพลาดในการลบไฟล์: " +
                    (error instanceof Error
                        ? error.message
                        : "เกิดข้อผิดพลาดไม่ทราบสาเหตุ"),
            };
        }

        // ลบข้อมูลจากฐานข้อมูล
        try {
            await prisma.sheets.delete({
                where: { id: sheetId },
            });
            return {
                ok: true,
                data: {
                    sheetId,
                },
            };
        } catch (error) {
            return {
                ok: false,
                error:
                    "ไม่สามารถลบข้อมูลแผ่นกระดาษได้: " +
                    (error instanceof Error ? error.message : String(error)),
            };
        }
    } catch (error) {
        return {
            ok: false,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
};
