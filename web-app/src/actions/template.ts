"use server";

import prisma from "@/libs/db";
import { auth } from "@/libs/auth";
import config from "@/config";
import templateUtils from "@/utils/template";

export type GetAllTemplateReq = {
    page: number;
    limit: number;
};
export type GetAllTemplateRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
        name: string;
        image_filename: string;
        total_no: number;
    }[];
    total?: number;
}>;
export const GetAllTemplate = async (
    req: GetAllTemplateReq
): GetAllTemplateRes => {
    const { page, limit } = req;
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    try {
        const [templates, totalCount] = await Promise.all([
            prisma.templates.findMany({
                skip: (page - 1) * limit,
                take: limit,
                select: {
                    id: true,
                    name: true,
                    image_filename: true,
                    total_no: true,
                },
            }),
            prisma.templates.count(),
        ]);

        return {
            ok: true,
            data: templates,
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
            error: "เกิดข้อผิดพลาดไม่ทราบสาเหตุ",
        };
    }
};

// ------------------------------------------------------------------------------------

export type GetTemplateReq = {
    id: string;
};
export type GetTemplateRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
        name: string;
        image_filename: string;
        pdf_filename: string;
        total_no: number;
        created_at: Date;
        updated_at: Date;
        template_regions: {
            id: number;
            template_id: string;
            sx: number;
            sy: number;
            ex: number;
            ey: number;
            region_id: number;
            region: {
                id: number;
                name: string;
                detail: string;
                region_type_id: number;
                region_type: {
                    id: number;
                    name: string;
                    detail: string;
                };
            };
            template_marker_centers?: {
                x: number;
                y: number;
                template_region_id: number;
            }[];
        }[];
    };
}>;
export const GetTemplate = async (
    req: GetTemplateReq
): Promise<GetTemplateRes> => {
    const session = await auth();
    const { id } = req;
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    try {
        const template = await prisma.templates.findUnique({
            where: { id },
            include: {
                template_regions: {
                    include: {
                        template_marker_centers: true,
                        region: {
                            include: {
                                region_type: true,
                            },
                        },
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

        return {
            ok: true,
            data: template,
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

// ------------------------------------------------------------------------------------

export type CreateTemplateReq = FormData;
export type CreateTemplateRes = Promise<{
    ok: boolean;
    error?: string;
    template_id?: string;
}>;
export const CreateTemplate = async (
    formData: CreateTemplateReq
): CreateTemplateRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }

    const name = formData.get("name");
    const total_no = formData.get("total_no");
    const pdf_file = formData.get("pdf_file");
    const image_file = formData.get("image_file");
    const square_answer = formData.get("square_answer");
    const square_marker = formData.get("square_marker");
    const square_fill_std_id = formData.get("square_fill_std_id");
    const square_line = formData.get("square_line");

    if (name === null || typeof name !== "string" || name.trim() === "") {
        return {
            ok: false,
            error: "กรุณาระบุชื่อเทมเพลต",
        };
    }
    if (
        total_no === null ||
        typeof total_no !== "string" ||
        total_no.trim() === "" ||
        isNaN(Number(total_no))
    ) {
        return {
            ok: false,
            error: "กรุณาระบุจำนวนข้อสอบที่ถูกต้อง",
        };
    }
    if (pdf_file === null || !(pdf_file instanceof File)) {
        return {
            ok: false,
            error: "กรุณาอัพโหลดไฟล์ PDF",
        };
    }
    if (image_file === null || !(image_file instanceof File)) {
        return {
            ok: false,
            error: "กรุณาอัพโหลดไฟล์รูปภาพ",
        };
    }
    if (
        square_answer === null ||
        typeof square_answer !== "string" ||
        square_answer.trim() === ""
    ) {
        return {
            ok: false,
            error: "กรุณาระบุช่องคำตอบ",
        };
    }
    if (
        square_marker === null ||
        typeof square_marker !== "string" ||
        square_marker.trim() === ""
    ) {
        return {
            ok: false,
            error: "กรุณาระบุเครื่องหมายมมุมกระดาษ",
        };
    }
    if (
        square_fill_std_id === null ||
        typeof square_fill_std_id !== "string" ||
        square_fill_std_id.trim() === ""
    ) {
        return {
            ok: false,
            error: "กรุณาระบุช่องฝนรหัสนักศึกษา",
        };
    }
    if (
        square_line === null ||
        typeof square_line !== "string" ||
        square_line.trim() === ""
    ) {
        return {
            ok: false,
            error: "กรุณาระบุเส้น",
        };
    }

    let square_answer_parsed: object;
    let square_marker_parsed: object;
    let square_fill_std_id_parsed: object;
    let square_line_parsed: object;

    // แปลง JSON string เป็น object
    // หากไม่สามารถแปลงได้จะเกิดข้อผิดพลาดและส่งกลับข้อความแสดงข้อผิดพลาด
    try {
        square_answer_parsed = JSON.parse(square_answer);
        square_marker_parsed = JSON.parse(square_marker);
        square_fill_std_id_parsed = JSON.parse(square_fill_std_id);
        square_line_parsed = JSON.parse(square_line);
    } catch (error) {
        return {
            ok: false,
            error:
                "ข้อมูลไม่ถูกต้อง กรุณาตรวจสอบรูปแบบข้อมูลให้เป็น JSON: " +
                error,
        };
    }

    // ตรวจสอบว่า square_answer_parsed, square_marker_parsed, square_fill_std_id_parsed และ square_line_parsed เป็น Array หรือไม่
    if (
        !Array.isArray(square_answer_parsed) ||
        !Array.isArray(square_marker_parsed) ||
        !Array.isArray(square_fill_std_id_parsed) ||
        !Array.isArray(square_line_parsed)
    ) {
        return {
            ok: false,
            error: "ข้อมูลช่องคำตอบ, เครื่องหมายมุมกระดาษ, ช่องฝนรหัสนักศึกษา และเส้น ต้องเป็น Array",
        };
    }

    // ตรวจสอบโครงสร้างข้อมูล เครื่องหมายมุมกระดาษ
    try {
        if (square_marker_parsed.length !== 4) {
            return {
                ok: false,
                error: "ข้อมูลเครื่องหมายมุมกระดาษไม่ถูกต้อง ต้องมี 4 จุด (top-left, top-right, bottom-left, bottom-right)",
            };
        }
        // ตรวจสอบว่าแต่ละจุดมีคุณสมบัติที่จำเป็นหรือไม่
        const square_marker_parsed_typed = square_marker_parsed as Square[];
        if (
            !square_marker_parsed_typed.every(
                (marker) =>
                    marker.hasOwnProperty("sx") &&
                    marker.hasOwnProperty("sy") &&
                    marker.hasOwnProperty("ex") &&
                    marker.hasOwnProperty("ey")
            )
        ) {
            return {
                ok: false,
                error: "ข้อมูลเครื่องหมายมุมกระดาษไม่ถูกต้อง: แต่ละจุดต้องมีคุณสมบัติ sx, sy, ex, ey",
            };
        }
    } catch (error) {
        return {
            ok: false,
            error:
                "ข้อมูลเครื่องหมายมุมกระดาษไม่ถูกต้อง: " +
                (error instanceof Error
                    ? error.message
                    : "เกิดข้อผิดพลาดไม่ทราบสาเหตุ"),
        };
    }

    // ตรวจสอบโครงสร้างข้อมูล ช่องคำตอบ
    try {
        if (square_answer_parsed.length === 0) {
            return {
                ok: false,
                error: "ข้อมูลช่องคำตอบไม่ถูกต้อง ต้องมีอย่างน้อย 1 ช่อง",
            };
        }
        // ตรวจสอบว่าแต่ละช่องมีคุณสมบัติที่จำเป็นหรือไม่
        const squareAnswersParsedTyped = square_answer_parsed as Square[][];
        if (
            !squareAnswersParsedTyped.every((answers: Square[]) =>
                answers.every(
                    (answer: Square) =>
                        answer.hasOwnProperty("sx") &&
                        answer.hasOwnProperty("sy") &&
                        answer.hasOwnProperty("ex") &&
                        answer.hasOwnProperty("ey")
                )
            )
        ) {
            return {
                ok: false,
                error: "ข้อมูลช่องคำตอบไม่ถูกต้อง: แต่ละช่องต้องมีคุณสมบัติ sx, sy, ex, ey",
            };
        }
    } catch (error) {
        return {
            ok: false,
            error:
                "ข้อมูลช่องคำตอบไม่ถูกต้อง: " +
                (error instanceof Error
                    ? error.message
                    : "เกิดข้อผิดพลาดไม่ทราบสาเหตุ"),
        };
    }

    // ตรวจสอบโครงสร้างข้อมูล ช่องฝนรหัสนักศึกษา
    try {
        if (square_fill_std_id_parsed.length !== 13) {
            return {
                ok: false,
                error: "ข้อมูลช่องฝนรหัสนักศึกษาไม่ถูกต้อง ต้องมี 13 หลัก",
            };
        }

        // ตรวจสอบว่าแต่ละช่องมีคุณสมบัติที่จำเป็นหรือไม่
        const squareAnswersParsedTyped =
            square_fill_std_id_parsed as Square[][];
        if (
            !squareAnswersParsedTyped.every((fills) =>
                fills.every(
                    (fill) =>
                        fill.hasOwnProperty("sx") &&
                        fill.hasOwnProperty("sy") &&
                        fill.hasOwnProperty("ex") &&
                        fill.hasOwnProperty("ey")
                )
            )
        ) {
            return {
                ok: false,
                error: "ข้อมูลช่องฝนรหัสนักศึกษาไม่ถูกต้อง: แต่ละช่องต้องมีคุณสมบัติ sx, sy, ex, ey",
            };
        }
    } catch (error) {
        return {
            ok: false,
            error:
                "ข้อมูลช่องฝนรหัสนักศึกษาไม่ถูกต้อง: " +
                (error instanceof Error
                    ? error.message
                    : "เกิดข้อผิดพลาดไม่ทราบสาเหตุ"),
        };
    }

    // ตรวจสอบโครงสร้างข้อมูล เส้น
    try {
        if (square_line_parsed.length > 2 && square_line_parsed.length < 1) {
            return {
                ok: false,
                error: "ข้อมูลเส้นไม่ถูกต้อง ต้องมีอย่างน้อย 1 เส้น และไม่เกิน 2 เส้น",
            };
        }

        // ตรวจสอบว่าแต่ละเส้นมีคุณสมบัติที่จำเป็นหรือไม่
        const squareLinesParsedTyped = square_line_parsed as Square[];
        if (
            !squareLinesParsedTyped.every(
                (line) =>
                    line.hasOwnProperty("sx") &&
                    line.hasOwnProperty("sy") &&
                    line.hasOwnProperty("ex") &&
                    line.hasOwnProperty("ey")
            )
        ) {
            return {
                ok: false,
                error: "ข้อมูลเส้นไม่ถูกต้อง: แต่ละเส้นต้องมีคุณสมบัติ sx, sy, ex, ey",
            };
        }
    } catch (error) {
        return {
            ok: false,
            error:
                "ข้อมูลเส้นไม่ถูกต้อง: " +
                (error instanceof Error
                    ? error.message
                    : "เกิดข้อผิดพลาดไม่ทราบสาเหตุ"),
        };
    }

    // เพิ่ม square_id ให้กับพื้นที่สี่เหลี่ยมทั้งหมด
    const square_marker_parsed_with_id = templateUtils.markerAssignRegionsID(
        square_marker_parsed as Square[]
    );
    const square_answer_parsed_with_id = templateUtils.answerAssignRegionsID(
        square_answer_parsed as Square[][]
    );
    const square_line_parsed_with_id = templateUtils.lineAssignRegionsID(
        square_line_parsed as Square[]
    );
    const square_fill_std_id_parsed_with_id =
        templateUtils.stdIdFillAssignRegionsID(
            square_fill_std_id_parsed as Square[][]
        );

    let marker_center: {
        marker_tl: Point | null;
        marker_tr: Point | null;
        marker_bl: Point | null;
        marker_br: Point | null;
    } = {
        marker_tl: null,
        marker_tr: null,
        marker_bl: null,
        marker_br: null,
    };

    // ตรวจสอบรูปว่ามีเครื่องหมายมุมกระดาษครบถ้วนหรือไม่ (ระบบตรวจจับได้ครบถ้วน)
    try {
        const checkMarkerFormData = new FormData();
        checkMarkerFormData.append("file", image_file);
        checkMarkerFormData.append(
            "marker_tl",
            JSON.stringify(
                square_marker_parsed_with_id.find(
                    (marker) => marker.region_id === "marker_tl"
                )
            )
        );
        checkMarkerFormData.append(
            "marker_tr",
            JSON.stringify(
                square_marker_parsed_with_id.find(
                    (marker) => marker.region_id === "marker_tr"
                )
            )
        );
        checkMarkerFormData.append(
            "marker_bl",
            JSON.stringify(
                square_marker_parsed_with_id.find(
                    (marker) => marker.region_id === "marker_bl"
                )
            )
        );
        checkMarkerFormData.append(
            "marker_br",
            JSON.stringify(
                square_marker_parsed_with_id.find(
                    (marker) => marker.region_id === "marker_br"
                )
            )
        );

        const fetchRes = await fetch(
            `${config.IMAGE_PROCESS_API_URL}/checkMarkerLineForCreateTemplate`,
            {
                method: "POST",
                body: checkMarkerFormData,
            }
        );

        const resData = await fetchRes.json();
        if (!resData.success) {
            return {
                ok: false,
                error: "เกิดข้อผิดพลาดในการตรวจสอบเครื่องหมายมุมกระดาษ: " + resData.message,
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
        };
    } catch (error) {
        return {
            ok: false,
            error:
                "เกิดข้อผิดพลาดในการตรวจสอบเครื่องหมายมุมกระดาษ: " +
                (error instanceof Error
                    ? error.message
                    : "เกิดข้อผิดพลาดไม่ทราบสาเหตุ"),
        };
    }

    // ตรวจสอบว่าเครื่องหมายมุมกระดาษครบถ้วนหรือไม่
    if (
        !marker_center.marker_tl ||
        !marker_center.marker_tr ||
        !marker_center.marker_bl ||
        !marker_center.marker_br
    ) {
        // หากเครื่องหมายมุมกระดาษไม่ครบถ้วน บอกด้วยว่ามุมไหนที่ไม่ครบ
        const missingMarkers = [];
        if (!marker_center.marker_tl) {
            missingMarkers.push("marker_tl");
        }
        if (!marker_center.marker_tr) {
            missingMarkers.push("marker_tr");
        }
        if (!marker_center.marker_bl) {
            missingMarkers.push("marker_bl");
        }
        if (!marker_center.marker_br) {
            missingMarkers.push("marker_br");
        }
        return {
            ok: false,
            error: `เครื่องหมายมุมกระดาษไม่ครบถ้วน: ${missingMarkers.join(
                ", "
            )}. กรุณาตรวจสอบรูปภาพและตำแหน่งเครื่องหมายมุมกระดาษ`,
        };
    }

    // อัพโหลดไฟล์ PDF และรูปภาพ
    let pdf_filename: string;
    let image_filename: string;
    try {
        const pdfUploadFormData = new FormData();
        pdfUploadFormData.append("file", pdf_file);
        const pdfUploadRes = await fetch(
            `${config.FILE_STORAGE_API_URL}/template`,
            {
                method: "POST",
                body: pdfUploadFormData,
            }
        );
        const pdfUploadData = await pdfUploadRes.json();
        if (!pdfUploadData.success) {
            return {
                ok: false,
                error:
                    "เกิดข้อผิดพลาดในการอัพโหลดไฟล์ PDF: " +
                    pdfUploadData.message,
            };
        }
        pdf_filename = pdfUploadData.filename;

        const imageUploadFormData = new FormData();
        imageUploadFormData.append("file", image_file);
        const imageUploadRes = await fetch(
            `${config.FILE_STORAGE_API_URL}/template`,
            {
                method: "POST",
                body: imageUploadFormData,
            }
        );
        const imageUploadData = await imageUploadRes.json();
        if (!imageUploadData.success) {
            // หากเกิดข้อผิดพลาดในการอัพโหลดไฟล์รูปภาพ ต้องลบไฟล์ PDF ที่อัพโหลดไปแล้ว
            await fetch(
                `${config.FILE_STORAGE_API_URL}/template/${pdf_filename}`,
                {
                    method: "DELETE",
                }
            );

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

    // ดึงค่า region_type ทั้งหมดจากฐานข้อมูล
    const regionAll: {
        id: number;
        name: string;
    }[] = [];
    try {
        const region = await prisma.regions.findMany({
            select: {
                id: true,
                name: true,
            },
        });
        regionAll.push(...region);
    } catch (error) {
        return {
            ok: false,
            error:
                "เกิดข้อผิดพลาดในการดึงข้อมูลประเภทพื้นที่: " +
                (error instanceof Error
                    ? error.message
                    : "เกิดข้อผิดพลาดไม่ทราบสาเหตุ"),
        };
    }

    // เตรียมข้อมูลสำหรับการสร้างเทมเพลตใหม่
    const templateRegionsData: {
        region_id: number;
        sx: number;
        sy: number;
        ex: number;
        ey: number;
    }[] = [];
    try {
        // สร้างข้อมูลสำหรับพื้นที่สี่เหลี่ยมเครื่องหมายมุมกระดาษ
        square_marker_parsed_with_id.forEach((marker) => {
            const regionID = regionAll.find(
                (type) => type.name === marker.region_id
            );
            if (!regionID) {
                throw new Error(
                    `ไม่พบประเภทพื้นที่สำหรับเครื่องหมายมุมกระดาษ: ${marker.region_id}`
                );
            }
            templateRegionsData.push({
                region_id: regionID.id,
                sx: marker.sx,
                sy: marker.sy,
                ex: marker.ex,
                ey: marker.ey,
            });
        });

        // สร้างข้อมูลสำหรับพื้นที่สี่เหลี่ยมคำตอบ
        square_answer_parsed_with_id.forEach((answers) => {
            answers.forEach((choice) => {
                const regionID = regionAll.find(
                    (type) => type.name === choice.region_id
                );
                if (!regionID) {
                    throw new Error(
                        `ไม่พบประเภทพื้นที่สำหรับคำตอบ: ${choice.region_id}`
                    );
                }
                templateRegionsData.push({
                    region_id: regionID.id,
                    sx: choice.sx,
                    sy: choice.sy,
                    ex: choice.ex,
                    ey: choice.ey,
                });
            });
        });

        // สร้างข้อมูลสำหรับพื้นที่สี่เหลี่ยมเส้น
        square_line_parsed_with_id.forEach((line) => {
            const regionID = regionAll.find(
                (type) => type.name === line.region_id
            );
            if (!regionID) {
                throw new Error(
                    `ไม่พบประเภทพื้นที่สำหรับเส้น: ${line.region_id}`
                );
            }
            templateRegionsData.push({
                region_id: regionID.id,
                sx: line.sx,
                sy: line.sy,
                ex: line.ex,
                ey: line.ey,
            });
        });

        // สร้างข้อมูลสำหรับพื้นที่สี่เหลี่ยมช่องฝนรหัสนักศึกษา
        square_fill_std_id_parsed_with_id.forEach((fills) => {
            fills.forEach((fill) => {
                const regionID = regionAll.find(
                    (type) => type.name === fill.region_id
                );
                if (!regionID) {
                    throw new Error(
                        `ไม่พบประเภทพื้นที่สำหรับช่องฝนรหัสนักศึกษา: ${fill.region_id}`
                    );
                }
                templateRegionsData.push({
                    region_id: regionID.id,
                    sx: fill.sx,
                    sy: fill.sy,
                    ex: fill.ex,
                    ey: fill.ey,
                });
            });
        });
    } catch (error) {
        return {
            ok: false,
            error:
                "เกิดข้อผิดพลาดในการเตรียมข้อมูลสำหรับการสร้างเทมเพลต: " +
                (error instanceof Error
                    ? error.message
                    : "เกิดข้อผิดพลาดไม่ทราบสาเหตุ"),
        };
    }

    // สร้างเทมเพลตใหม่ในฐานข้อมูล
    try {
        // 1) สร้าง template + regions
        const newTemplate = await prisma.templates.create({
            data: {
                name: name.trim(),
                pdf_filename: pdf_filename,
                image_filename: image_filename,
                total_no: Number(total_no),
                template_regions: {
                    createMany: {
                        data: [...templateRegionsData],
                    },
                },
            },
        });

        // แปลง key เป็น region_id จริง
        const markerKeyToRegionId: Record<string, number> = {
            marker_tl: regionAll.find((type) => type.name === "marker_tl")
                ?.id as number,
            marker_tr: regionAll.find((type) => type.name === "marker_tr")
                ?.id as number,
            marker_bl: regionAll.find((type) => type.name === "marker_bl")
                ?.id as number,
            marker_br: regionAll.find((type) => type.name === "marker_br")
                ?.id as number,
        };

        // 2) ดึง id ของ regions ที่เราสนใจ (marker_tl, marker_tr, marker_bl, marker_br)
        const markerRegionIds = Object.entries(marker_center).map(([key]) => {
            return markerKeyToRegionId[key as keyof typeof marker_center];
        });

        const createdRegions = await prisma.template_regions.findMany({
            where: {
                template_id: newTemplate.id,
                region_id: { in: markerRegionIds },
            },
        });

        // 3) สร้าง marker centers
        const centersToCreate = createdRegions.map((r) => {
            // หาจุดที่ตรงกับ region_id นี้
            const key = Object.entries(markerKeyToRegionId).find(
                ([, rid]) => rid === r.region_id
            )![0] as keyof typeof marker_center;

            const pt = marker_center[key]!;
            return {
                template_region_id: r.id,
                x: pt.x,
                y: pt.y,
            };
        });
        await prisma.template_marker_centers.createMany({
            data: centersToCreate,
        });

        return {
            ok: true,
            template_id: newTemplate.id,
        };
    } catch (error) {
        // หากเกิดข้อผิดพลาดในการสร้างเทมเพลต ต้องลบไฟล์ PDF และรูปภาพที่อัพโหลดไปแล้ว
        await fetch(`${config.FILE_STORAGE_API_URL}/template/${pdf_filename}`, {
            method: "DELETE",
        });
        await fetch(
            `${config.FILE_STORAGE_API_URL}/template/${image_filename}`,
            {
                method: "DELETE",
            }
        );

        return {
            ok: false,
            error:
                "เกิดข้อผิดพลาดในการสร้างเทมเพลต: " +
                (error instanceof Error
                    ? error.message
                    : "เกิดข้อผิดพลาดไม่ทราบสาเหตุ"),
        };
    }
};

// ------------------------------------------------------------------------------------

export type DeleteTemplateReq = {
    id: string;
};
export type DeleteTemplateRes = Promise<{
    ok: boolean;
    error?: string;
    data?: {
        id: string;
        name: string;
        image_filename: string;
        pdf_filename: string;
        total_no: number;
        created_at: Date;
        updated_at: Date;
    };
}>;
export const DeleteTemplate = async (
    req: DeleteTemplateReq
): DeleteTemplateRes => {
    const session = await auth();
    if (!session?.user) {
        return {
            ok: false,
            error: "กรุณาเข้าสู่ระบบก่อน",
        };
    }
    const { id } = req;
    try {
        const deletedTemplate = await prisma.templates.delete({
            where: { id },
        });

        // ลบไฟล์ PDF และรูปภาพที่เกี่ยวข้อง
        await fetch(
            `${config.FILE_STORAGE_API_URL}/template/${deletedTemplate.pdf_filename}`,
            {
                method: "DELETE",
            }
        );
        await fetch(
            `${config.FILE_STORAGE_API_URL}/template/${deletedTemplate.image_filename}`,
            {
                method: "DELETE",
            }
        );

        return {
            ok: true,
            data: deletedTemplate,
        };
    } catch (error) {
        return {
            ok: false,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
};
