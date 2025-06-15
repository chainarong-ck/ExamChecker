"use server";

import prisma from "@/libs/db";
import { auth } from "@/libs/auth";
import config from "@/config";
import { GetImage } from "./file_storage";

export type PredictReq = {
    groupId: string;
};
export type PredictRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        message: string;
        processedSheets: number;
        results: { sheetId: string; taskId: string }[];
    };
}>;
export const Predict = async (req: PredictReq): PredictRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    const { groupId } = req;
    let groupData;
    try {
        groupData = await prisma.groups.findUnique({
            where: { id: groupId },
            select: {
                answer: {
                    select: {
                        updated_at: true,
                        _count: {
                            select: {
                                answer_details: true,
                            },
                        },
                    },
                },
                template: {
                    select: {
                        template_regions: {
                            select: {
                                sx: true,
                                sy: true,
                                ex: true,
                                ey: true,
                                template_marker_centers: {
                                    select: {
                                        x: true,
                                        y: true,
                                    },
                                },
                                region: {
                                    select: {
                                        id: true,
                                        name: true,
                                        region_type: {
                                            select: {
                                                id: true,
                                                name: true,
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
                sheets: {
                    select: {
                        id: true,
                        image_filename: true,
                        original_name: true,
                        marker_tl_center: true,
                        marker_tr_center: true,
                        marker_bl_center: true,
                        marker_br_center: true,
                        updated_at: true,
                        sheet_status: {
                            select: {
                                id: true,
                                name: true,
                            },
                        },
                    },
                },
            },
        });

        if (!groupData) {
            return {
                ok: false,
                error: "ไม่พบกลุ่มการตรวจ",
            };
        }
    } catch (error) {
        return {
            ok: false,
            error:
                error instanceof Error
                    ? error.message
                    : "เกิดข้อผิดพลาดในการดึงข้อมูล",
        };
    }

    const { answer, template, sheets } = groupData;
    if (!template) {
        return {
            ok: false,
            error: "ไม่พบเทมเพลตสำหรับกลุ่มนี้",
        };
    }
    if (!answer || !answer._count || answer._count.answer_details === 0) {
        return {
            ok: false,
            error: "จำนวนเฉลยไม่เพียงพอสำหรับการตรวจ",
        };
    }
    if (!sheets || sheets.length === 0) {
        return {
            ok: false,
            error: "ไม่พบกระดาษคำตอบที่จะตรวจภายในกลุ่มนี้",
        };
    }

    // เตรียมข้อมูล template regions
    const templateRegions = template.template_regions;

    // แยก regions ตามประเภท
    const answerRegions = templateRegions.filter(
        (region) => region.region.region_type.name === "answer"
    );
    const studentIdRegions = templateRegions.filter(
        (region) => region.region.region_type.name === "std-id-fill"
    );
    const markerRegions = templateRegions.filter(
        (region) => region.region.region_type.name == "marker"
    );

    // จัดกลุ่ม answer regions ตามแถวและคอลัมน์
    const groupedAnswerRegions: {
        sx: number;
        sy: number;
        ex: number;
        ey: number;
        region_id: string;
    }[][] = [];
    const answerMap = new Map<number, Map<number, (typeof answerRegions)[0]>>();
    answerRegions.forEach((region) => {
        const match = region.region.name.match(/answer_(\d+)_(\d+)/);
        if (match) {
            const x = parseInt(match[1]);
            const y = parseInt(match[2]);

            if (!answerMap.has(x)) {
                answerMap.set(x, new Map());
            }
            answerMap.get(x)!.set(y, region);
        }
    });
    const sortedX = Array.from(answerMap.keys()).sort((a, b) => a - b);
    for (const x of sortedX) {
        const yMap = answerMap.get(x)!;
        const sortedY = Array.from(yMap.keys()).sort((a, b) => a - b);
        const row = sortedY.map((y) => {
            const region = yMap.get(y)!;
            return {
                sx: region.sx,
                sy: region.sy,
                ex: region.ex,
                ey: region.ey,
                region_id: region.region.name,
            };
        });
        groupedAnswerRegions.push(row);
    }

    // จัดกลุ่ม student ID regions ตามแถวและคอลัมน์
    const groupedStudentIdRegions: {
        sx: number;
        sy: number;
        ex: number;
        ey: number;
        region_id: string;
    }[][] = [];
    const studentIdMap = new Map<
        number,
        Map<number, (typeof studentIdRegions)[0]>
    >();
    studentIdRegions.forEach((region) => {
        const match = region.region.name.match(/std-id-fill_(\d+)_(\d+)/);
        if (match) {
            const x = parseInt(match[1]);
            const y = parseInt(match[2]);

            if (!studentIdMap.has(x)) {
                studentIdMap.set(x, new Map());
            }
            studentIdMap.get(x)!.set(y, region);
        }
    });
    const sortedXStdId = Array.from(studentIdMap.keys()).sort((a, b) => a - b);
    for (const x of sortedXStdId) {
        const yMap = studentIdMap.get(x)!;
        const sortedYStdId = Array.from(yMap.keys()).sort((a, b) => a - b);
        const row = sortedYStdId.map((y) => {
            const region = yMap.get(y)!;
            return {
                sx: region.sx,
                sy: region.sy,
                ex: region.ex,
                ey: region.ey,
                region_id: region.region.name,
            };
        });
        groupedStudentIdRegions.push(row);
    }

    // เตรียม marker centers และ template
    const t_markerCenter: {
        marker_tl_center?: { x: number; y: number };
        marker_tr_center?: { x: number; y: number };
        marker_bl_center?: { x: number; y: number };
        marker_br_center?: { x: number; y: number };
    } = {};
    markerRegions.forEach((region) => {
        const markerName = region.region.name;
        // ดึงข้อมูล marker center
        if (
            region.template_marker_centers &&
            region.template_marker_centers.length > 0
        ) {
            const center = region.template_marker_centers[0];
            if (markerName === "marker_tl") {
                t_markerCenter.marker_tl_center = { x: center.x, y: center.y };
            } else if (markerName === "marker_tr") {
                t_markerCenter.marker_tr_center = { x: center.x, y: center.y };
            } else if (markerName === "marker_bl") {
                t_markerCenter.marker_bl_center = { x: center.x, y: center.y };
            } else if (markerName === "marker_br") {
                t_markerCenter.marker_br_center = { x: center.x, y: center.y };
            }
        }
    });

    // ส่ง API ไปยัง backend เพื่อประมวลผลการตรวจ
    const processedResults: { sheetId: string; taskId: string }[] = [];
    try {
        for (const sheet of sheets) {
            // ตรวจสอบสถานะของกระดาษคำตอบ
            if (sheet.sheet_status.name === "completed") {
                if (sheet.updated_at > answer.updated_at) {
                    continue;
                }
            }

            // ดาวน์โหลดรูปภาพจาก file storage
            const imageResponse = await GetImage({
                foldername: groupId,
                filename: sheet.image_filename,
            });
            if (!imageResponse.ok || !imageResponse.file) {
                throw new Error(
                    `ไม่สามารถดาวน์โหลดไฟล์ ${sheet.original_name} ได้`
                );
            }

            const imageBlob = imageResponse.file;

            // สร้าง FormData สำหรับส่ง API
            const formData = new FormData();
            formData.append("file", imageBlob);
            formData.append(
                "marker_tl",
                JSON.stringify(sheet.marker_tl_center)
            );
            formData.append(
                "marker_tr",
                JSON.stringify(sheet.marker_tr_center)
            );
            formData.append(
                "marker_bl",
                JSON.stringify(sheet.marker_bl_center)
            );
            formData.append(
                "marker_br",
                JSON.stringify(sheet.marker_br_center)
            );
            formData.append(
                "t_marker_tl",
                JSON.stringify(t_markerCenter.marker_tl_center)
            );
            formData.append(
                "t_marker_tr",
                JSON.stringify(t_markerCenter.marker_tr_center)
            );
            formData.append(
                "t_marker_bl",
                JSON.stringify(t_markerCenter.marker_bl_center)
            );
            formData.append(
                "t_marker_br",
                JSON.stringify(t_markerCenter.marker_br_center)
            );
            formData.append(
                "template_answer",
                JSON.stringify(groupedAnswerRegions)
            );
            formData.append(
                "template_fill_std_id",
                JSON.stringify(groupedStudentIdRegions)
            );
            formData.append(
                "num_answer",
                answer._count.answer_details.toString()
            );

            // ส่ง API ไปยัง image-process
            const response = await fetch(
                `${config.IMAGE_PROCESS_API_URL}/predict`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            const predictResponse = await response.json();
            if (!predictResponse.success) {
                throw new Error(
                    `การประมวลผลภาพ ${sheet.original_name} ล้มเหลว: ${predictResponse.message}`
                );
            }

            // บันทึกผลการประมวลผล
            const taskId = predictResponse.task_id;
            processedResults.push({
                sheetId: sheet.id,
                taskId: taskId,
            });
        }
    } catch (error) {
        return {
            ok: false,
            error:
                error instanceof Error
                    ? error.message
                    : "เกิดข้อผิดพลาดในการประมวลผลการตรวจ",
        };
    }

    // บันทึกผลการประมวลผลในฐานข้อมูล
    try {
        const sheetStatus = await prisma.sheet_statuses.findFirst({
            where: { name: "queued" },
            select: { id: true },
        });
        if (!sheetStatus) {
            throw new Error("ไม่พบสถานะ 'queued' ในฐานข้อมูล");
        }

        for (const result of processedResults) {
            await prisma.sheets.update({
                where: { id: result.sheetId },
                data: {
                    sheet_status_id: sheetStatus.id,
                    process_id: result.taskId,
                },
            });
        }
    } catch (error) {
        return {
            ok: false,
            error:
                error instanceof Error
                    ? error.message
                    : "เกิดข้อผิดพลาดในการบันทึกผลการประมวลผล",
        };
    }

    return {
        ok: true,
        data: {
            message: "เริ่มการประมวลผลกระดาษคำตอบเรียบร้อยแล้ว",
            processedSheets: processedResults.length,
            results: processedResults,
        },
    };
};

// ------------------------------------------------------------------------------------

export type TransformImageReq = {
    sheetId: string;
};
export type TransformImageRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        message: string;
        transformedImage: File | Blob;
    };
}>;
export const TransformImage = async (
    req: TransformImageReq
): TransformImageRes => {
    try {
        const session = await auth();
        if (!session?.user) {
            return {
                ok: false,
                error: "กรุณาเข้าสู่ระบบก่อน",
            };
        }
        const { sheetId } = req;

        // ค้นหากระดาษคำตอบในฐานข้อมูล
        let sheet;
        try {
            sheet = await prisma.sheets.findUnique({
                where: { id: sheetId },
                include: {
                    group: {
                        select: {
                            id: true,
                            template: {
                                select: {
                                    template_regions: {
                                        select: {
                                            sx: true,
                                            sy: true,
                                            ex: true,
                                            ey: true,
                                            template_marker_centers: {
                                                select: {
                                                    x: true,
                                                    y: true,
                                                },
                                            },
                                            region: {
                                                select: {
                                                    id: true,
                                                    name: true,
                                                    region_type: {
                                                        select: {
                                                            id: true,
                                                            name: true,
                                                        },
                                                    },
                                                },
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });
            if (!sheet) {
                return {
                    ok: false,
                    error: "ไม่พบกระดาษคำตอบที่ระบุ",
                };
            }
        } catch (error) {
            return {
                ok: false,
                error:
                    error instanceof Error
                        ? error.message
                        : "เกิดข้อผิดพลาดในการดึงข้อมูลกระดาษคำตอบ",
            };
        }

        const templateRegions = sheet.group.template.template_regions;
        const markerRegions = templateRegions.filter(
            (region) => region.region.region_type.name == "marker"
        );

        // เตรียม marker centers และ template
        const t_markerCenter: {
            marker_tl_center?: { x: number; y: number };
            marker_tr_center?: { x: number; y: number };
            marker_bl_center?: { x: number; y: number };
            marker_br_center?: { x: number; y: number };
        } = {};
        markerRegions.forEach((region) => {
            const markerName = region.region.name;
            // ดึงข้อมูล marker center
            if (
                region.template_marker_centers &&
                region.template_marker_centers.length > 0
            ) {
                const center = region.template_marker_centers[0];
                if (markerName === "marker_tl") {
                    t_markerCenter.marker_tl_center = {
                        x: center.x,
                        y: center.y,
                    };
                } else if (markerName === "marker_tr") {
                    t_markerCenter.marker_tr_center = {
                        x: center.x,
                        y: center.y,
                    };
                } else if (markerName === "marker_bl") {
                    t_markerCenter.marker_bl_center = {
                        x: center.x,
                        y: center.y,
                    };
                } else if (markerName === "marker_br") {
                    t_markerCenter.marker_br_center = {
                        x: center.x,
                        y: center.y,
                    };
                }
            }
        });

        // ดาวน์โหลดรูปภาพจาก file storage
        const imageResponse = await GetImage({
            foldername: sheet.group.id,
            filename: sheet.image_filename,
        });
        if (!imageResponse.ok || !imageResponse.file) {
            return {
                ok: false,
                error: imageResponse.error || "ไม่สามารถดาวน์โหลดไฟล์รูปภาพได้",
            };
        }

        const SheetImage = imageResponse.file;
        if (!(SheetImage instanceof Blob)) {
            return {
                ok: false,
                error: "ไม่พบข้อมูลรูปภาพที่ดาวน์โหลด",
            };
        }

        // ส่ง API ไปยัง image-transform
        try {
            const formData = new FormData();
            formData.append("image", imageResponse.file);
            formData.append(
                "marker_tl",
                JSON.stringify(sheet.marker_tl_center)
            );
            formData.append(
                "marker_tr",
                JSON.stringify(sheet.marker_tr_center)
            );
            formData.append(
                "marker_bl",
                JSON.stringify(sheet.marker_bl_center)
            );
            formData.append(
                "marker_br",
                JSON.stringify(sheet.marker_br_center)
            );
            formData.append(
                "t_marker_tl",
                JSON.stringify(t_markerCenter.marker_tl_center)
            );
            formData.append(
                "t_marker_tr",
                JSON.stringify(t_markerCenter.marker_tr_center)
            );
            formData.append(
                "t_marker_bl",
                JSON.stringify(t_markerCenter.marker_bl_center)
            );
            formData.append(
                "t_marker_br",
                JSON.stringify(t_markerCenter.marker_br_center)
            );

            const response = await fetch(
                `${config.IMAGE_PROCESS_API_URL}/transform`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            if (!response.ok) {
                const errorText = await response.text();
                return {
                    ok: false,
                    error: `การแปลงภาพล้มเหลว: ${errorText}`,
                };
            }

            const imageBlob = await response.blob();
            if (!imageBlob) {
                return {
                    ok: false,
                    error: "ไม่พบข้อมูลรูปภาพที่แปลงแล้ว",
                };
            }
            return {
                ok: true,
                data: {
                    message: "การแปลงภาพสำเร็จ",
                    transformedImage: imageBlob,
                },
            };
        } catch (error) {
            return {
                ok: false,
                error:
                    error instanceof Error
                        ? error.message
                        : "เกิดข้อผิดพลาดในการแปลงภาพ",
            };
        }
    } catch (error) {
        return {
            ok: false,
            error:
                error instanceof Error
                    ? error.message
                    : "เกิดข้อผิดพลาดในการประมวลผลคำขอ",
        };
    }
};
