"use client";
import React, {
    useState,
    useRef,
    useEffect,
    use,
    useCallback,
    useMemo,
} from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEllipsisVertical,
    faEye,
    faEyeSlash,
    faTrash,
    faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { DeleteTemplate, GetTemplate } from "@/actions/template";
import { GetImage } from "@/actions/file_storage";
import { formatDateTimeForDisplay } from "@/utils/dateFormatter";

type TemplateRegions = {
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
};

type TemplateDetail = {
    id: string;
    name: string;
    image_filename: string;
    pdf_filename: string;
    total_no: number;
    created_at: Date;
    updated_at: Date;
    template_regions: TemplateRegions[];
} | null;

type Props = {
    params: Promise<{
        id: string;
    }>;
};

function parse_stdIdFill(nn: string): [number, number] {
    const m = nn.match(/std-id-fill_(\d+)_(\d+)$/);
    if (!m) throw new Error(`ชื่อไม่ตรงฟอร์แมต: ${nn}`);
    return [parseInt(m[1], 10), parseInt(m[2], 10)];
}

function parse_Answer(nn: string): [number, number] {
    const m = nn.match(/answer_(\d+)_(\d+)$/);
    if (!m) throw new Error(`ชื่อไม่ตรงฟอร์แมต: ${nn}`);
    return [parseInt(m[1], 10), parseInt(m[2], 10)];
}

export default function TemplateDetailPage({ params }: Props) {
    const { id } = use(params);
    const router = useRouter();

    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [template, setTemplate] = useState<TemplateDetail>(null);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [showDraw, setShowDraw] = useState<boolean>(true);
    const [pdfFile, setPdfFile] = useState<File | null>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageObjectUrl, setImageObjectUrl] = useState<string | null>(null);

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const stdIdFillRegions = template?.template_regions.filter(
        (r) => r.region.region_type.name === "std-id-fill"
    );
    const answerRegions = template?.template_regions.filter(
        (r) => r.region.region_type.name === "answer"
    );
    const groupedStdIdFill = useMemo(() => {
        if (!stdIdFillRegions) return [];
        const m = new Map<number, TemplateRegions[]>();
        for (const r of stdIdFillRegions) {
            const [x] = parse_stdIdFill(r.region.name);
            if (!m.has(x)) m.set(x, []);
            m.get(x)!.push(r);
        }
        // แปลง Map เป็น array sorted ตาม key (1…13)
        return Array.from(m.entries())
            .sort(([x1], [x2]) => x1 - x2)
            .map(([x, items]) => ({
                x,
                items: items.sort((a, b) => {
                    const [, ay] = parse_stdIdFill(a.region.name);
                    const [, by] = parse_stdIdFill(b.region.name);
                    return ay - by;
                }),
            }));
    }, [stdIdFillRegions]);
    const groupedAnswerRegions = useMemo(() => {
        if (!answerRegions) return [];
        const m = new Map<number, TemplateRegions[]>();
        for (const r of answerRegions) {
            const [x] = parse_Answer(r.region.name);
            if (!m.has(x)) m.set(x, []);
            m.get(x)!.push(r);
        }
        // แปลง Map เป็น array sorted ตาม key (1…13)
        return Array.from(m.entries())
            .sort(([x1], [x2]) => x1 - x2)
            .map(([x, items]) => ({
                x,
                items: items.sort((a, b) => {
                    const [, ay] = parse_Answer(a.region.name);
                    const [, by] = parse_Answer(b.region.name);
                    return ay - by;
                }),
            }));
    }, [answerRegions]);

    const handlerDelete = async () => {
        Swal.fire({
            title: "ต้องการลบแม่แบบกระดาษคำตอบนี้หรือไม่",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "ลบ",
            denyButtonText: "ยกเลิก",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const deleted = await DeleteTemplate({ id });
                if (deleted.ok) {
                    Swal.fire({
                        icon: "success",
                        title: "ลบแม่แบบกระดาษคำตอบสำเร็จ",
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(() => {
                        router.push("/dashboard/template");
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "ไม่สามารถลบแม่แบบกระดาษคำตอบได้",
                        text: deleted.error || "เกิดข้อผิดพลาดไม่ทราบสาเหตุ",
                    });
                }
            }
        });
    };

    const fetchTemplateData = useCallback(async () => {
        try {
            setLoading(true);
            const templateData = await GetTemplate({ id });

            if (!templateData.ok) {
                setErrorMsg(
                    templateData.error ||
                        "ไม่สามารถดึงข้อมูลแม่แบบกระดาษคำตอบได้"
                );
                Swal.fire({
                    icon: "error",
                    title: "ข้อผิดพลาด",
                    text:
                        templateData.error ||
                        "ไม่สามารถดึงข้อมูลแม่แบบกระดาษคำตอบได้",
                });
                return;
            }

            if (!templateData.data) {
                setErrorMsg("ไม่พบแม่แบบกระดาษคำตอบที่ต้องการ");
                Swal.fire({
                    icon: "error",
                    title: "ข้อผิดพลาด",
                    text: "ไม่พบแม่แบบกระดาษคำตอบที่ต้องการ",
                });
                return;
            }
            setTemplate(templateData.data);

            // โหลดไฟล์ PDF และรูปภาพ
            const pdfResponse = await GetImage({
                filename: templateData.data.pdf_filename,
                foldername: "template",
            });
            if (!pdfResponse.ok) {
                throw new Error("ไม่พบไฟล์ PDF ที่ต้องการ");
            }
            setPdfFile(pdfResponse.file ? (pdfResponse.file as File) : null);

            const imageResponse = await GetImage({
                filename: templateData.data.image_filename,
                foldername: "template",
            });
            if (!imageResponse.ok) {
                throw new Error("ไม่พบไฟล์รูปภาพที่ต้องการ");
            }
            setImageFile(
                imageResponse.file ? (imageResponse.file as File) : null
            );
        } catch (error) {
            console.error("Error fetching template data:", error);
            setErrorMsg("เกิดข้อผิดพลาดไม่ทราบสาเหตุ");
            Swal.fire({
                icon: "error",
                title: "ข้อผิดพลาด",
                text: "เกิดข้อผิดพลาดไม่ทราบสาเหตุ",
            });
        } finally {
            setLoading(false);
        }
    }, [id]);

    const handlerDrawImage = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        if (!imageObjectUrl) return;

        const ctx = canvas.getContext("2d");
        if (ctx && template?.image_filename) {
            try {
                const img = new Image();
                img.src = imageObjectUrl;

                img.onload = () => {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    if (showDraw) {
                        ctx.strokeStyle = "red";
                        ctx.lineWidth = 1;

                        template.template_regions.forEach((r) => {
                            ctx.strokeRect(
                                r.sx,
                                r.sy,
                                r.ex - r.sx,
                                r.ey - r.sy
                            );
                            if (r.template_marker_centers) {
                                r.template_marker_centers.forEach((dot) => {
                                    ctx.beginPath();
                                    ctx.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
                                    ctx.fillStyle = "red";
                                    ctx.fill();
                                    ctx.closePath();
                                });
                            }
                        });
                    }
                };
            } catch (error) {
                console.error("Error loading image:", error);
                setErrorMsg("ไม่สามารถโหลดรูปภาพได้: " + error);
                Swal.fire({
                    icon: "error",
                    title: "ข้อผิดพลาด",
                    text: "ไม่สามารถโหลดรูปภาพได้",
                });
                return;
            }
        }
    }, [template, showDraw, imageObjectUrl]);

    // Cache and manage object URL for imageFile
    useEffect(() => {
        if (!imageFile) {
            setImageObjectUrl(null);
            return;
        }
        const url = URL.createObjectURL(imageFile);
        setImageObjectUrl(url);
        return () => {
            URL.revokeObjectURL(url);
        };
    }, [imageFile]);

    useEffect(() => {
        fetchTemplateData();
    }, [fetchTemplateData]);

    useEffect(() => {
        handlerDrawImage();
    }, [handlerDrawImage]);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <h2 className="text-xl">รายละเอียดแม่แบบกระดาษคำตอบ</h2>
            </div>
            <hr className="my-2 border-t border-gray-400" />
            {loading ? (
                <p className="text-center py-4">กำลังโหลดข้อมูล...</p>
            ) : errorMsg !== null ? (
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        className="h-24 m-2 text-red-800"
                    />
                    <h2 className="text-5xl">{errorMsg}</h2>
                </div>
            ) : (
                <div className="p-2 my-2">
                    <div className="flex justify-between">
                        <div>
                            <p>
                                สร้างเมื่อ :{" "}
                                {template ? formatDateTimeForDisplay(template.created_at) : '-'}
                            </p>
                            <p>
                                อัพเดทเมื่อ :{" "}
                                {template ? formatDateTimeForDisplay(template.updated_at) : '-'}
                            </p>
                        </div>
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="p-2 text-xl text-neutral-50 focus:outline-none"
                            >
                                <FontAwesomeIcon
                                    icon={faEllipsisVertical}
                                    className="text-neutral-950 dark:text-neutral-50"
                                />
                            </button>
                            {dropdownOpen && (
                                <ul className="absolute right-0 w-40 shadow-lg z-20 text-neutral-900 dark:text-neutral-100 bg-neutral-50 dark:bg-neutral-900">
                                    <li
                                        onClick={() => handlerDelete()}
                                        className="cursor-pointer flex gap-4 px-4 py-2 bg-inherit dark:bg-inherit hover:brightness-90"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                        <span>ลบ</span>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>

                    <hr className="my-5" />
                    <div className="m-4">
                        <p>ชื่อแม่แบบกระดาษคำตอบ</p>
                        <input
                            type="text"
                            placeholder="Name"
                            value={template?.name || ""}
                            className="w-full pl-4 pr-10 py-2 border-b border-b-neutral-300 dark:border-neutral-600 bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-100"
                            onChange={() => {}}
                            disabled
                        />
                    </div>
                    <div className="m-4">
                        <p>จำนวนข้อทั้งหมด</p>
                        <input
                            type="number"
                            value={template?.total_no || ""}
                            className="pl-4 pr-10 py-2 border-b border-b-neutral-300 dark:border-neutral-600 bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-100"
                            onChange={() => {}}
                            disabled
                        />
                    </div>
                    <hr />

                    <div className="flex gap-4 m-2">
                        <button
                            className="px-4 py-2 rounded-lg text-white bg-blue-700 hover:brightness-90"
                            onClick={() => {
                                if (!imageFile) return;
                                const url = URL.createObjectURL(imageFile);
                                const link = document.createElement("a");
                                link.href = url;
                                link.download = `${template?.name || "image"}_${
                                    template?.image_filename
                                }`;
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                                setTimeout(
                                    () => URL.revokeObjectURL(url),
                                    1000
                                );
                            }}
                        >
                            ดาวน์โหลดรูป
                        </button>
                        <button
                            className="px-4 py-2 rounded-lg text-white bg-red-700 hover:brightness-90"
                            onClick={() => {
                                if (!pdfFile) return;
                                const url = URL.createObjectURL(pdfFile);
                                const link = document.createElement("a");
                                link.href = url;
                                link.download = `${template?.name || "file"}_${
                                    template?.pdf_filename
                                }`;
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                                setTimeout(
                                    () => URL.revokeObjectURL(url),
                                    1000
                                );
                            }}
                        >
                            ดาวน์โหลด PDF
                        </button>
                    </div>
                    <div className="flex flex-col items-center m-4">
                        {template?.image_filename && (
                            <div className="flex gap-4">
                                <div>
                                    <canvas
                                        ref={canvasRef}
                                        width={848}
                                        height={1200}
                                        className=""
                                    />
                                </div>
                                <div className="flex flex-col w-[400px] max-h-[1200px]">
                                    <div className="p-3 border rounded-md rounded-t-none overflow-auto">
                                        <button
                                            onClick={() => {
                                                setShowDraw(!showDraw);
                                            }}
                                            className="px-3 py-2 m-2 bg-yellow-500 rounded-md"
                                        >
                                            {showDraw ? (
                                                <>
                                                    <FontAwesomeIcon
                                                        icon={faEye}
                                                    />{" "}
                                                    ซ่อนเส้น
                                                </>
                                            ) : (
                                                <>
                                                    <FontAwesomeIcon
                                                        icon={faEyeSlash}
                                                    />{" "}
                                                    แสดงเส้น
                                                </>
                                            )}
                                        </button>
                                        <p>เครื่องหมายมุมกระดาษ</p>
                                        <div className="p-2">
                                            {template.template_regions
                                                .filter(
                                                    (r) =>
                                                        r.region.region_type
                                                            .name === "marker"
                                                )
                                                .map((r, i) => (
                                                    <p key={i} className="">
                                                        {r.region.name ===
                                                        "marker_tl"
                                                            ? "มุมบนซ้าย : "
                                                            : r.region.name ===
                                                              "marker_tr"
                                                            ? "มุมบนขวา : "
                                                            : r.region.name ===
                                                              "marker_bl"
                                                            ? "มุมล่างซ้าย : "
                                                            : r.region.name ===
                                                              "marker_br"
                                                            ? "มุมล่างขวา : "
                                                            : ""}{" "}
                                                        {JSON.stringify({
                                                            sx: r.sx,
                                                            sy: r.sy,
                                                            ex: r.ex,
                                                            ey: r.ey,
                                                        })}
                                                    </p>
                                                ))}
                                        </div>
                                        <hr className="m-4" />

                                        <p>เส้นคั้น</p>
                                        <div className="p-2 min-h-18">
                                            {template.template_regions
                                                .filter(
                                                    (r) =>
                                                        r.region.region_type
                                                            .name === "line"
                                                )
                                                .map((r, i) => (
                                                    <p key={i} className="">
                                                        เส้นที่ {i + 1} :{" "}
                                                        {JSON.stringify({
                                                            sx: r.sx,
                                                            sy: r.sy,
                                                            ex: r.ex,
                                                            ey: r.ey,
                                                        })}
                                                    </p>
                                                ))}
                                        </div>
                                        <hr className="m-4" />
                                        <p>ฝนรหัสนักศึกษา</p>
                                        <div className="p-2 min-h-32">
                                            {groupedStdIdFill.map(
                                                ({ x, items }) => (
                                                    <div
                                                        key={x}
                                                        className="mb-4"
                                                    >
                                                        <p className="font-medium">
                                                            หลักที่ {x}:
                                                        </p>
                                                        {items.map((r, i) => (
                                                            <p
                                                                key={i}
                                                                className="ml-4"
                                                            >
                                                                {JSON.stringify(
                                                                    {
                                                                        sx: r.sx,
                                                                        sy: r.sy,
                                                                        ex: r.ex,
                                                                        ey: r.ey,
                                                                    }
                                                                )}
                                                            </p>
                                                        ))}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        <hr className="m-4" />

                                        <p>ช่องคำตอบ</p>
                                        <div className="p-2 min-h-32">
                                            {groupedAnswerRegions.map(
                                                ({ x, items }) => (
                                                    <div
                                                        key={x}
                                                        className="mb-4"
                                                    >
                                                        <p className="font-medium">
                                                            ข้อที่ {x}:
                                                        </p>
                                                        {items.map((r, i) => (
                                                            <p
                                                                key={i}
                                                                className="ml-4"
                                                            >
                                                                {JSON.stringify(
                                                                    {
                                                                        sx: r.sx,
                                                                        sy: r.sy,
                                                                        ex: r.ex,
                                                                        ey: r.ey,
                                                                    }
                                                                )}
                                                            </p>
                                                        ))}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
