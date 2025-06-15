"use client";
import React, { useCallback, useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import * as XLSX from "xlsx";
import { GetTemplate } from "@/actions/template";
import { GetGroup } from "@/actions/group";
import { GetAnswer } from "@/actions/answer";
import { GetSheetByGroup } from "@/actions/sheet";
import { Predict, TransformImage } from "@/actions/predict";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { calculateScore, parseChoiceCorrect } from "@/libs/scoreCalculator";
import { formatDateTimeForDisplay } from "@/utils/dateFormatter";
import { log } from "console";

type Choice = {
    a: number;
    b: number;
    c: number;
    d: number;
};

type GroupData = {
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

type TemplateData = {
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

type AnswerData = {
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

type SheetData = {
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
};

type Props = {
    params: Promise<{
        id: string;
    }>;
};

const MySwal = withReactContent(Swal);

export default function PredictDetail_Page({ params }: Props) {
    const { id } = use(params);
    const router = useRouter();

    const [groupData, setGroupData] = useState<GroupData | null>(null);
    const [templateData, setTemplateData] = useState<TemplateData | null>(null);
    const [answerData, setAnswerData] = useState<AnswerData | null>(null);
    const [sheetData, setSheetData] = useState<SheetData[]>([]);

    const fetchGroupData = useCallback(async () => {
        try {
            const group = await GetGroup({ id });
            if (!group.ok) {
                Swal.fire({
                    icon: "error",
                    title: "เกิดข้อผิดพลาด",
                    text: group.error || "ไม่สามารถดึงข้อมูลกลุ่มได้",
                });
                return;
            }
            if (!group.data) {
                Swal.fire({
                    icon: "warning",
                    title: "ไม่พบข้อมูลกลุ่ม",
                    text: "กรุณาตรวจสอบ ID กลุ่มอีกครั้ง",
                });
                return;
            }
            setGroupData(group.data);
        } catch (error) {
            console.error("Error fetching group data:", error);
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาด",
                text: "ไม่สามารถดึงข้อมูลกลุ่มได้",
            });
        }
    }, [id]);

    const fetchTemplateData = useCallback(async () => {
        if (!groupData?.template_id) return;

        try {
            const template = await GetTemplate({ id: groupData.template_id });
            if (!template.ok) {
                Swal.fire({
                    icon: "error",
                    title: "เกิดข้อผิดพลาด",
                    text: template.error || "ไม่สามารถดึงข้อมูลเทมเพลตได้",
                });
                return;
            }
            if (!template.data) {
                Swal.fire({
                    icon: "warning",
                    title: "ไม่พบข้อมูลเทมเพลต",
                    text: "กรุณาตรวจสอบ ID เทมเพลตอีกครั้ง",
                });
                return;
            }
            setTemplateData(template.data);
        } catch (error) {
            console.error("Error fetching template data:", error);
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาด",
                text: "ไม่สามารถดึงข้อมูลเทมเพลตได้",
            });
        }
    }, [groupData]);

    const fetchAnswerData = useCallback(async () => {
        if (!groupData?.answer_id) return;

        try {
            const answer = await GetAnswer({ id: groupData.answer_id });
            if (!answer.ok) {
                Swal.fire({
                    icon: "error",
                    title: "เกิดข้อผิดพลาด",
                    text: answer.error || "ไม่สามารถดึงข้อมูลคำตอบได้",
                });
                return;
            }
            if (!answer.data) {
                Swal.fire({
                    icon: "warning",
                    title: "ไม่พบข้อมูลคำตอบ",
                    text: "กรุณาตรวจสอบ ID คำตอบอีกครั้ง",
                });
                return;
            }
            setAnswerData(answer.data);
        } catch (error) {
            console.error("Error fetching answer data:", error);
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาด",
                text: "ไม่สามารถดึงข้อมูลคำตอบได้",
            });
        }
    }, [groupData]);

    const fetchSheetData = useCallback(async () => {
        if (!groupData?.id) return;

        try {
            const sheets = await GetSheetByGroup({ groupId: groupData.id });
            if (!sheets.ok) {
                Swal.fire({
                    icon: "error",
                    title: "เกิดข้อผิดพลาด",
                    text: sheets.error || "ไม่สามารถดึงข้อมูลแผ่นคำตอบได้",
                });
                return;
            }
            if (!sheets.data || sheets.data.length === 0) {
                Swal.fire({
                    icon: "warning",
                    title: "ไม่พบแผ่นคำตอบ",
                    text: "กรุณาอัปโหลดแผ่นคำตอบก่อน",
                });
                return;
            }
            setSheetData(sheets.data);
        } catch (error) {
            console.error("Error fetching sheet data:", error);
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาด",
                text: "ไม่สามารถดึงข้อมูลแผ่นคำตอบได้",
            });
        }
    }, [groupData]);

    useEffect(() => {
        fetchGroupData();
    }, [fetchGroupData]);

    useEffect(() => {
        fetchTemplateData();
        fetchAnswerData();
        fetchSheetData();
    }, [fetchTemplateData, fetchAnswerData, fetchSheetData]);

    // ---------------------------------

    const handleBack = () => {
        router.push(`/dashboard/group/${id}`);
    };

    const handerPredict = async () => {
        if (!groupData?.id) {
            Swal.fire({
                icon: "warning",
                title: "ไม่พบข้อมูลกลุ่ม",
                text: "กรุณาตรวจสอบ ID กลุ่มอีกครั้ง",
            });
            return;
        }

        try {
            const response = await Predict({
                groupId: groupData.id,
            });

            if (!response.ok) {
                Swal.fire({
                    icon: "error",
                    title: "เกิดข้อผิดพลาด",
                    text: response.error || "ไม่สามารถเริ่มการตรวจสอบได้",
                });
                return;
            }

            Swal.fire({
                icon: "success",
                title: `เริ่มการตรวจแล้ว ${response.data?.processedSheets} แผ่น`,
                text: "เริ่มการตรวจสอบแผ่นคำตอบแล้ว สามารถตรวจสอบผลได้ในภายหลังหลังจากการตรวจสอบเสร็จสิ้น",
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาด",
                text: error instanceof Error ? error.message : "ไม่สามารถเริ่มการตรวจสอบได้",
            });
        }
    };

    const handleViewDetail = async (sheetId: string) => {
        try {
            const sheet = sheetData.find((s) => s.id === sheetId);
            if (!sheet) {
                Swal.fire({
                    icon: "error",
                    title: "ไม่พบแผ่นคำตอบ",
                    text: "กรุณาตรวจสอบ ID แผ่นคำตอบอีกครั้ง",
                });
                return;
            }

            if (!templateData) {
                Swal.fire({
                    icon: "warning",
                    title: "ไม่พบข้อมูลเทมเพลต",
                    text: "กรุณาตรวจสอบการตั้งค่าเทมเพลตของกลุ่ม",
                });
                return;
            }
            if (!answerData) {
                Swal.fire({
                    icon: "warning",
                    title: "ไม่พบข้อมูลคำตอบ",
                    text: "กรุณาตรวจสอบการตั้งค่าคำตอบของกลุ่ม",
                });
                return;
            }
            if (!groupData) {
                Swal.fire({
                    icon: "warning",
                    title: "ไม่พบข้อมูลกลุ่ม",
                    text: "กรุณาตรวจสอบการตั้งค่ากลุ่ม",
                });
                return;
            }

            MySwal.fire({
                title: "รายละเอียดการตรวจ",
                width: "90%",
                html: (
                    <div className="m-5 w-full">
                        <button
                            className="px-3 py-2 m-2 rounded-md bg-green-700 text-white hover:brightness-110"
                            onClick={() => {
                                handleExport(sheet, "excel");
                            }}
                        >
                            ส่งออกเป็น Excel
                        </button>
                        <button
                            className="px-3 py-2 m-2 rounded-md bg-blue-700 text-white hover:brightness-110"
                            onClick={() => {
                                handleExport(sheet, "csv");
                            }}
                        >
                            ส่งออกเป็น CSV
                        </button>
                        <div className="flex flex-col lg:flex-row gap-4 items-start">
                            <canvas
                                ref={(canvas) => {
                                    if (canvas) {
                                        const aa = async () => {
                                            const ctx = canvas.getContext("2d");
                                            if (ctx) {
                                                const imageBlob = await TransformImage({
                                                    sheetId: sheet.id,
                                                });

                                                const img = new Image();
                                                if (imageBlob.data?.transformedImage) {
                                                    img.src = URL.createObjectURL(imageBlob.data.transformedImage);
                                                } else {
                                                    return; // Exit early if no transformed image
                                                }
                                                img.onload = () => {
                                                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                                                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                                                    ctx.strokeStyle = "red";
                                                    ctx.lineWidth = 1;

                                                    templateData?.template_regions.forEach((s) => {
                                                        ctx.strokeRect(s.sx, s.sy, s.ex - s.sx, s.ey - s.sy);
                                                        if (s.template_marker_centers) {
                                                            s.template_marker_centers.forEach((marker) => {
                                                                ctx.beginPath();
                                                                ctx.arc(marker.x, marker.y, 3, 0, 2 * Math.PI);
                                                                ctx.fillStyle = "red";
                                                                ctx.fill();
                                                                ctx.stroke();
                                                            });
                                                        }
                                                    });
                                                };
                                            }
                                        };

                                        aa();
                                    }
                                }}
                                width={848}
                                height={1200}
                            />
                            <div className="flex-grow w-full">
                                <table className="my-4">
                                    <tbody>
                                        <tr>
                                            <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">รหัสนักศึกษา</th>
                                            <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">
                                                {sheet.predict_std_fill_result
                                                    ? (() => {
                                                          const stdFillResult = JSON.parse(sheet.predict_std_fill_result) as Array<number>;
                                                          return `${stdFillResult.slice(0, 12).join("")}-${stdFillResult[12]}`;
                                                      })()
                                                    : "-"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">วิชา</th>
                                            <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">{groupData.subject}</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">ปีการศึกษา</th>
                                            <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">
                                                {`${groupData.term}/${groupData.year}`}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">ชื่อไฟล์ Input</th>
                                            <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">{sheet.original_name}</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">วันที่ตรวจ</th>
                                            <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">
                                                {formatDateTimeForDisplay(sheet.updated_at)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">คะแนนที่ได้</th>
                                            <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">{sheet.total_scores}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="my-4 w-full">
                                    <thead>
                                        <tr>
                                            <th className="border border-neutral-700 dark:border-neutral-400">ข้อที่</th>
                                            <th className="border border-neutral-700 dark:border-neutral-400">เฉลย</th>
                                            <th className="border border-neutral-700 dark:border-neutral-400">ตอบ</th>
                                            <th className="border border-neutral-700 dark:border-neutral-400">คะแนน</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {sheet.predict_ans_result ? (
                                            (JSON.parse(sheet.predict_ans_result) as Array<Choice>).map((shData, index) => (
                                                <tr key={index}>
                                                    <td className="border border-neutral-700 dark:border-neutral-400">
                                                        {/* ข้อที่ */}
                                                        {index + 1}
                                                    </td>
                                                    <td className="border border-neutral-700 dark:border-neutral-400">
                                                        {/* เฉลย */}
                                                        {(() => {
                                                            const answerDetail = answerData.answer_details.find((ad) => ad.no === index + 1);
                                                            if (!answerDetail || !answerDetail.choice_correct) {
                                                                return "-";
                                                            }

                                                            let correctChoices;
                                                            try {
                                                                correctChoices = JSON.parse(answerDetail.choice_correct);

                                                                // ถ้ายังเป็น string อยู่ ให้ parse อีกครั้ง
                                                                if (typeof correctChoices === "string") {
                                                                    correctChoices = JSON.parse(correctChoices);
                                                                }
                                                            } catch (error) {
                                                                console.error("Error parsing JSON:", error);
                                                                return "-";
                                                            }

                                                            return (
                                                                Object.entries(correctChoices)
                                                                    .filter(([, value]) => value === true)
                                                                    .map(([key]) => key)
                                                                    .join(", ") || "-"
                                                            );
                                                        })()}
                                                    </td>
                                                    <td className="border border-neutral-700 dark:border-neutral-400">
                                                        {/* คำตอบ */}
                                                        {Object.entries(shData)
                                                            .filter(([, value]) => value === 1)
                                                            .map(([choice]) => choice)
                                                            .join(", ") || "-"}
                                                    </td>
                                                    <td className="border border-neutral-700 dark:border-neutral-400">
                                                        {/* คะแนนที่นักศึกษาได้รับ - ใช้ฟังก์ชันเดียวกันกับ API */}
                                                        {(() => {
                                                            const answerDetail = answerData.answer_details.find((ad) => ad.no === index + 1);
                                                            if (!answerDetail || !answerDetail.choice_correct) {
                                                                return "-";
                                                            }

                                                            const correctChoices = parseChoiceCorrect(answerDetail.choice_correct);
                                                            const score = calculateScore({
                                                                studentChoices: shData,
                                                                correctChoices,
                                                                correctAll: answerDetail.correct_all,
                                                                point: answerDetail.point,
                                                            });

                                                            return score;
                                                        })()}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={4} className="text-center border border-neutral-700 dark:border-neutral-400">
                                                    ไม่มีข้อมูลการตรวจ
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ),
                showConfirmButton: false,
                showCloseButton: true,
                customClass: {
                    popup: "w-full h-full text-black dark:text-white bg-neutral-100 dark:bg-neutral-800",
                },
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleViewDetail_answer = async (sheetId: string) => {
        try {
            const sheet = sheetData.find((s) => s.id === sheetId);
            if (!sheet) {
                Swal.fire({
                    icon: "error",
                    title: "ไม่พบแผ่นคำตอบ",
                    text: "กรุณาตรวจสอบ ID แผ่นคำตอบอีกครั้ง",
                });
                return;
            }

            if (!templateData) {
                Swal.fire({
                    icon: "warning",
                    title: "ไม่พบข้อมูลเทมเพลต",
                    text: "กรุณาตรวจสอบการตั้งค่าเทมเพลตของกลุ่ม",
                });
                return;
            }
            if (!answerData) {
                Swal.fire({
                    icon: "warning",
                    title: "ไม่พบข้อมูลคำตอบ",
                    text: "กรุณาตรวจสอบการตั้งค่าคำตอบของกลุ่ม",
                });
                return;
            }
            if (!groupData) {
                Swal.fire({
                    icon: "warning",
                    title: "ไม่พบข้อมูลกลุ่ม",
                    text: "กรุณาตรวจสอบการตั้งค่ากลุ่ม",
                });
                return;
            }

            MySwal.fire({
                title: "รายละเอียดการตรวจ",
                width: "90%",
                html: (
                    <div className="m-5 w-full">
                        <button
                            className="px-3 py-2 m-2 rounded-md bg-green-700 text-white hover:brightness-110"
                            onClick={() => {
                                handleExport(sheet, "excel");
                            }}
                        >
                            ส่งออกเป็น Excel
                        </button>
                        <button
                            className="px-3 py-2 m-2 rounded-md bg-blue-700 text-white hover:brightness-110"
                            onClick={() => {
                                handleExport(sheet, "csv");
                            }}
                        >
                            ส่งออกเป็น CSV
                        </button>
                        <div className="flex flex-col lg:flex-row gap-4 items-start">
                            <canvas
                                ref={(canvas) => {
                                    if (canvas) {
                                        const aa = async () => {
                                            const ctx = canvas.getContext("2d");
                                            if (ctx) {
                                                const imageBlob = await TransformImage({
                                                    sheetId: sheet.id,
                                                });

                                                const img = new Image();
                                                if (imageBlob.data?.transformedImage) {
                                                    img.src = URL.createObjectURL(imageBlob.data.transformedImage);
                                                } else {
                                                    return; // Exit early if no transformed image
                                                }
                                                img.onload = () => {
                                                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                                                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                                                    ctx.strokeStyle = "red";
                                                    ctx.lineWidth = 1;

                                                    const templateDataSorted = templateData?.template_regions
                                                        .filter((s) => s.region.region_type.name === "answer")
                                                        .sort((a, b) => a.region_id - b.region_id);

                                                    const answerDataSorted = answerData.answer_details.sort((a, b) => a.no - b.no);

                                                    const aiAnswer = sheet.predict_ans_result ? JSON.parse(sheet.predict_ans_result) : null;

                                                    let row_number = -1;
                                                    let current_choice_correct: {
                                                        a: boolean;
                                                        b: boolean;
                                                        c: boolean;
                                                        d: boolean;
                                                    } = {
                                                        a: false,
                                                        b: false,
                                                        c: false,
                                                        d: false,
                                                    };
                                                    let current_aiAnswer: {
                                                        a: number;
                                                        b: number;
                                                        c: number;
                                                        d: number;
                                                    } = {
                                                        a: 2,
                                                        b: 2,
                                                        c: 2,
                                                        d: 2,
                                                    };

                                                    for (let i = 0; i < templateDataSorted.length; i++) {
                                                        if (row_number > answerDataSorted.length) break;
                                                        if (row_number != Math.floor(i / 4)) {
                                                            row_number = Math.floor(i / 4);
                                                            const temp = answerDataSorted[row_number].choice_correct
                                                                ? JSON.parse(answerDataSorted[row_number].choice_correct as string)
                                                                : null;
                                                            current_choice_correct = JSON.parse(temp as string);
                                                            current_aiAnswer = aiAnswer[row_number];
                                                        }
                                                        // console.log("current_choice_correct", typeof current_choice_correct);
                                                        // console.log(current_choice_correct)

                                                        // console.log("current_aiAnswer", typeof current_aiAnswer);
                                                        // console.log(current_aiAnswer)
                                                        const choice = i % 4;
                                                        // const choiceLetter = ["a", "b", "c", "d"][choice];

                                                        ctx.fillStyle = "rgba(255, 165, 0, 0)";
                                                        if (choice == 0) {
                                                            if (current_choice_correct.a == true && current_aiAnswer.a == 1) {
                                                                ctx.strokeStyle = "green";
                                                            } else if (current_choice_correct.a == true && current_aiAnswer.a == 2) {
                                                                ctx.strokeStyle = "red";
                                                            } else if (current_choice_correct.a == true && current_aiAnswer.a == 0) {
                                                                ctx.strokeStyle = "red";
                                                                ctx.fillStyle = "rgba(255, 165, 0, 0.3)";
                                                            } else if (current_choice_correct.a == false && current_aiAnswer.a == 1) {
                                                                ctx.strokeStyle = "orange";
                                                            } else if (current_choice_correct.a == false && current_aiAnswer.a == 2) {
                                                                continue; // ไม่ต้องวาดเส้นถ้าไม่ถูกต้อง
                                                            } else if (current_choice_correct.a == false && current_aiAnswer.a == 0) {
                                                                ctx.fillStyle = "rgba(255, 165, 0, 0.3)";
                                                            }
                                                        } else if (choice == 1) {
                                                            if (current_choice_correct.b == true && current_aiAnswer.b == 1) {
                                                                ctx.strokeStyle = "green";
                                                            } else if (current_choice_correct.b == true && current_aiAnswer.b == 2) {
                                                                ctx.strokeStyle = "red";
                                                            } else if (current_choice_correct.b == true && current_aiAnswer.b == 0) {
                                                                ctx.strokeStyle = "red";
                                                                ctx.fillStyle = "rgba(255, 165, 0, 0.3)";
                                                            } else if (current_choice_correct.b == false && current_aiAnswer.b == 1) {
                                                                ctx.strokeStyle = "orange";
                                                            } else if (current_choice_correct.b == false && current_aiAnswer.b == 2) {
                                                                continue; // ไม่ต้องวาดเส้นถ้าไม่ถูกต้อง
                                                            } else if (current_choice_correct.b == false && current_aiAnswer.b == 0) {
                                                                ctx.fillStyle = "rgba(255, 165, 0, 0.3)";
                                                            }
                                                        } else if (choice == 2) {
                                                            if (current_choice_correct.c == true && current_aiAnswer.c == 1) {
                                                                ctx.strokeStyle = "green";
                                                            } else if (current_choice_correct.c == true && current_aiAnswer.c == 2) {
                                                                ctx.strokeStyle = "red";
                                                            } else if (current_choice_correct.c == true && current_aiAnswer.c == 0) {
                                                                ctx.strokeStyle = "red";
                                                                ctx.fillStyle = "rgba(255, 165, 0, 0.3)";
                                                            } else if (current_choice_correct.c == false && current_aiAnswer.c == 1) {
                                                                ctx.strokeStyle = "orange";
                                                            } else if (current_choice_correct.c == false && current_aiAnswer.c == 2) {
                                                                continue; // ไม่ต้องวาดเส้นถ้าไม่ถูกต้อง
                                                            } else if (current_choice_correct.c == false && current_aiAnswer.c == 0) {
                                                                ctx.fillStyle = "rgba(255, 165, 0, 0.3)";
                                                            }
                                                        } else if (choice == 3) {
                                                            if (current_choice_correct.d == true && current_aiAnswer.d == 1) {
                                                                ctx.strokeStyle = "green";
                                                            } else if (current_choice_correct.d == true && current_aiAnswer.d == 2) {
                                                                ctx.strokeStyle = "red";
                                                            } else if (current_choice_correct.d == true && current_aiAnswer.d == 0) {
                                                                ctx.strokeStyle = "red";
                                                                ctx.fillStyle = "rgba(255, 165, 0, 0.3)";
                                                            } else if (current_choice_correct.d == false && current_aiAnswer.d == 1) {
                                                                ctx.strokeStyle = "orange";
                                                            } else if (current_choice_correct.d == false && current_aiAnswer.d == 2) {
                                                                continue; // ไม่ต้องวาดเส้นถ้าไม่ถูกต้อง
                                                            } else if (current_choice_correct.d == false && current_aiAnswer.d == 0) {
                                                                ctx.fillStyle = "rgba(255, 165, 0, 0.3)";
                                                            }
                                                        }

                                                        ctx.lineWidth = 1;
                                                        ctx.strokeRect(
                                                            templateDataSorted[i].sx,
                                                            templateDataSorted[i].sy,
                                                            templateDataSorted[i].ex - templateDataSorted[i].sx,
                                                            templateDataSorted[i].ey - templateDataSorted[i].sy
                                                        );
                                                        ctx.fillRect(
                                                            templateDataSorted[i].sx,
                                                            templateDataSorted[i].sy,
                                                            templateDataSorted[i].ex - templateDataSorted[i].sx,
                                                            templateDataSorted[i].ey - templateDataSorted[i].sy
                                                        );
                                                    }
                                                };
                                            }
                                        };

                                        aa();
                                    }
                                }}
                                width={848}
                                height={1200}
                            />
                            <div className="flex-grow w-full">
                                <table className="my-4">
                                    <tbody>
                                        <tr>
                                            <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">รหัสนักศึกษา</th>
                                            <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">
                                                {sheet.predict_std_fill_result
                                                    ? (() => {
                                                          const stdFillResult = JSON.parse(sheet.predict_std_fill_result) as Array<number>;
                                                          return `${stdFillResult.slice(0, 12).join("")}-${stdFillResult[12]}`;
                                                      })()
                                                    : "-"}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">วิชา</th>
                                            <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">{groupData.subject}</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">ปีการศึกษา</th>
                                            <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">
                                                {`${groupData.term}/${groupData.year}`}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">ชื่อไฟล์ Input</th>
                                            <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">{sheet.original_name}</td>
                                        </tr>
                                        <tr>
                                            <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">วันที่ตรวจ</th>
                                            <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">
                                                {formatDateTimeForDisplay(sheet.updated_at)}
                                            </td>
                                        </tr>
                                        <tr>
                                            <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">คะแนนที่ได้</th>
                                            <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">{sheet.total_scores}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <table className="my-4 w-full">
                                    <thead>
                                        <tr>
                                            <th className="border border-neutral-700 dark:border-neutral-400">ข้อที่</th>
                                            <th className="border border-neutral-700 dark:border-neutral-400">เฉลย</th>
                                            <th className="border border-neutral-700 dark:border-neutral-400">ตอบ</th>
                                            <th className="border border-neutral-700 dark:border-neutral-400">คะแนน</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {sheet.predict_ans_result ? (
                                            (JSON.parse(sheet.predict_ans_result) as Array<Choice>).map((shData, index) => (
                                                <tr key={index}>
                                                    <td className="border border-neutral-700 dark:border-neutral-400">
                                                        {/* ข้อที่ */}
                                                        {index + 1}
                                                    </td>
                                                    <td className="border border-neutral-700 dark:border-neutral-400">
                                                        {/* เฉลย */}
                                                        {(() => {
                                                            const answerDetail = answerData.answer_details.find((ad) => ad.no === index + 1);
                                                            if (!answerDetail || !answerDetail.choice_correct) {
                                                                return "-";
                                                            }

                                                            let correctChoices;
                                                            try {
                                                                correctChoices = JSON.parse(answerDetail.choice_correct);

                                                                // ถ้ายังเป็น string อยู่ ให้ parse อีกครั้ง
                                                                if (typeof correctChoices === "string") {
                                                                    correctChoices = JSON.parse(correctChoices);
                                                                }
                                                            } catch (error) {
                                                                console.error("Error parsing JSON:", error);
                                                                return "-";
                                                            }

                                                            return (
                                                                Object.entries(correctChoices)
                                                                    .filter(([, value]) => value === true)
                                                                    .map(([key]) => key)
                                                                    .join(", ") || "-"
                                                            );
                                                        })()}
                                                    </td>
                                                    <td className="border border-neutral-700 dark:border-neutral-400">
                                                        {/* คำตอบ */}
                                                        {Object.entries(shData)
                                                            .filter(([, value]) => value === 1)
                                                            .map(([choice]) => choice)
                                                            .join(", ") || "-"}
                                                    </td>
                                                    <td className="border border-neutral-700 dark:border-neutral-400">
                                                        {/* คะแนนที่นักศึกษาได้รับ - ใช้ฟังก์ชันเดียวกันกับ API */}
                                                        {(() => {
                                                            const answerDetail = answerData.answer_details.find((ad) => ad.no === index + 1);
                                                            if (!answerDetail || !answerDetail.choice_correct) {
                                                                return "-";
                                                            }

                                                            const correctChoices = parseChoiceCorrect(answerDetail.choice_correct);
                                                            const score = calculateScore({
                                                                studentChoices: shData,
                                                                correctChoices,
                                                                correctAll: answerDetail.correct_all,
                                                                point: answerDetail.point,
                                                            });

                                                            return score;
                                                        })()}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={4} className="text-center border border-neutral-700 dark:border-neutral-400">
                                                    ไม่มีข้อมูลการตรวจ
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ),
                showConfirmButton: false,
                showCloseButton: true,
                customClass: {
                    popup: "w-full h-full text-black dark:text-white bg-neutral-100 dark:bg-neutral-800",
                },
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleViewDetailAll = async () => {
        if (!templateData) {
            Swal.fire({
                icon: "warning",
                title: "ไม่พบข้อมูลเทมเพลต",
                text: "กรุณาตรวจสอบการตั้งค่าเทมเพลตของกลุ่ม",
            });
            return;
        }
        if (!answerData) {
            Swal.fire({
                icon: "warning",
                title: "ไม่พบข้อมูลคำตอบ",
                text: "กรุณาตรวจสอบการตั้งค่าคำตอบของกลุ่ม",
            });
            return;
        }
        if (!groupData) {
            Swal.fire({
                icon: "warning",
                title: "ไม่พบข้อมูลกลุ่ม",
                text: "กรุณาตรวจสอบการตั้งค่ากลุ่ม",
            });
            return;
        }

        try {
            MySwal.fire({
                title: "รายละเอียดการตรวจ",
                width: "90%",
                html: (
                    <div className="m-5">
                        <button
                            className="px-3 py-2 m-2 rounded-md bg-green-700 text-white hover:brightness-110"
                            onClick={() => {
                                handleExportAll(sheetData, "excel");
                            }}
                        >
                            ส่งออกเป็น Excel
                        </button>
                        <button
                            className="px-3 py-2 m-2 rounded-md bg-blue-700 text-white hover:brightness-110"
                            onClick={() => {
                                handleExportAll(sheetData, "csv");
                            }}
                        >
                            ส่งออกเป็น CSV
                        </button>
                        <div className="flex-grow">
                            <table className="my-4">
                                <tbody>
                                    <tr>
                                        <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">วิชา</th>
                                        <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">{groupData.subject}</td>
                                    </tr>
                                    <tr>
                                        <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">ปีการศึกษา</th>
                                        <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">
                                            {`${groupData.term}/${groupData.year}`}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">กลุ่มการตรวจ</th>
                                        <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">{groupData.name}</td>
                                    </tr>
                                    <tr>
                                        <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">ชุดเฉลย</th>
                                        <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">{answerData.name}</td>
                                    </tr>
                                    <tr>
                                        <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">กระดาษแม่แบบ</th>
                                        <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">{templateData.name}</td>
                                    </tr>
                                    <tr>
                                        <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">จำนวนข้อ</th>
                                        <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">{answerData.total_no}</td>
                                    </tr>
                                    <tr>
                                        <th className="border border-neutral-700 dark:border-neutral-400 text-right px-3 py-1">คะแนนรวม</th>
                                        <td className="border border-neutral-700 dark:border-neutral-400 text-left px-3 py-1">
                                            {answerData.answer_details.reduce((sum, answer) => sum + answer.point, 0)}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="my-4 w-full">
                                <thead>
                                    <tr>
                                        <th className="border border-neutral-700 dark:border-neutral-400">ลำดับที่</th>
                                        <th className="border border-neutral-700 dark:border-neutral-400">รหัสนักศึกษา</th>
                                        <th className="border border-neutral-700 dark:border-neutral-400">คะแนนที่ได้</th>
                                        <th className="border border-neutral-700 dark:border-neutral-400">คิดเป็นร้อยละ</th>
                                        <th className="border border-neutral-700 dark:border-neutral-400">ชื่อไฟล์ Input</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sheetData.map((shData, index) => (
                                        <tr key={index}>
                                            <td className="border border-neutral-700 dark:border-neutral-400">{index + 1}</td>
                                            <td className="border border-neutral-700 dark:border-neutral-400">
                                                {shData.predict_std_fill_result
                                                    ? (() => {
                                                          const stdFillResult = JSON.parse(shData.predict_std_fill_result) as Array<number>;
                                                          return `${stdFillResult.slice(0, 12).join("")}-${stdFillResult[12]}`;
                                                      })()
                                                    : "-"}
                                            </td>
                                            <td className="border border-neutral-700 dark:border-neutral-400">{shData.total_scores}</td>
                                            <td className="border border-neutral-700 dark:border-neutral-400">
                                                {shData.total_scores != null
                                                    ? (shData.total_scores * 100) / answerData.answer_details.reduce((sum, answer) => sum + answer.point, 0)
                                                    : "-"}
                                            </td>
                                            <td className="border border-neutral-700 dark:border-neutral-400">{shData.original_name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ),
                showConfirmButton: false,
                showCloseButton: true,
                customClass: {
                    popup: "w-full h-full text-black dark:text-white bg-neutral-100 dark:bg-neutral-800",
                },
            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleExport = (sheetData: SheetData, type: "excel" | "csv") => {
        if (!templateData || !answerData || !groupData) {
            Swal.fire({
                icon: "warning",
                title: "ไม่พบข้อมูลที่จำเป็น",
                text: "กรุณาตรวจสอบการตั้งค่าเทมเพลต คำตอบ และกลุ่ม",
            });
            return;
        }

        // สร้างข้อมูลสำหรับตารางแรก (ข้อมูลทั่วไป)
        const studentId = sheetData.predict_std_fill_result
            ? (() => {
                  const stdFillResult = JSON.parse(sheetData.predict_std_fill_result) as Array<number>;
                  return `${stdFillResult.slice(0, 12).join("")}-${stdFillResult[12]}`;
              })()
            : "ไม่ระบุ";

        const generalData = [
            ["รหัสนักศึกษา", studentId],
            ["วิชา", groupData.subject],
            ["ปีการศึกษา", `${groupData.term}/${groupData.year}`],
            ["กลุ่มการตรวจ", groupData.name],
            ["ชุดเฉลย", answerData.name],
            ["กระดาษแม่แบบ", templateData.name],
            ["ชื่อไฟล์ Input", sheetData.original_name],
            ["วันที่ตรวจ", formatDateTimeForDisplay(sheetData.updated_at)],
            ["คะแนนที่ได้", sheetData.total_scores],
            [], // แถวว่างสำหรับแบ่งตาราง
        ];

        // สร้างข้อมูลสำหรับตารางที่สอง (ผลลัพธ์การตรวจ)
        const resultData = [
            ["ข้อที่", "เฉลย", "ตอบ", "คะแนน"], // หัวตาราง
        ];

        if (sheetData.predict_ans_result) {
            const predictResults = JSON.parse(sheetData.predict_ans_result) as Array<Choice>;

            predictResults.forEach((shData, index) => {
                if (index < answerData.answer_details.length) {
                    const answerDetail = answerData.answer_details[index];

                    // สร้างสตริงเฉลย - ใช้วิธีเดียวกันกับการแสดงในตาราง
                    let correctAnswer = "";
                    if (answerDetail.choice_correct) {
                        try {
                            let correctChoices = JSON.parse(answerDetail.choice_correct);

                            // ถ้ายังเป็น string อยู่ ให้ parse อีกครั้ง
                            if (typeof correctChoices === "string") {
                                correctChoices = JSON.parse(correctChoices);
                            }

                            // แปลงเป็นสตริงแสดงเฉลย
                            correctAnswer =
                                Object.entries(correctChoices)
                                    .filter(([, value]) => value === true)
                                    .map(([key]) => key)
                                    .join(", ") || "-";
                        } catch (error) {
                            console.error("Error parsing choice_correct:", error);
                            correctAnswer = "-";
                        }
                    }

                    // สร้างสตริงคำตอบของนักศึกษา - ใช้วิธีเดียวกันกับการแสดงในตาราง
                    const studentAnswer =
                        Object.entries(shData)
                            .filter(([, value]) => value === 1)
                            .map(([choice]) => choice)
                            .join(", ") || "-";

                    // คำนวณคะแนนโดยใช้ฟังก์ชันเดียวกันกับ API
                    let score = 0;
                    if (answerDetail.choice_correct) {
                        const correctChoices = parseChoiceCorrect(answerDetail.choice_correct);
                        score = calculateScore({
                            studentChoices: shData,
                            correctChoices,
                            correctAll: answerDetail.correct_all,
                            point: answerDetail.point,
                        });
                    }

                    resultData.push([(index + 1).toString(), correctAnswer, studentAnswer, score.toString()]);
                }
            });
        }

        // รวมตารางข้อมูลทั่วไปและผลลัพธ์การตรวจเข้าด้วยกันใน worksheet เดียว
        const combinedData = [...generalData, ...resultData];

        // สร้าง workbook และ worksheet
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(combinedData);

        // เพิ่ม worksheet เข้าไปใน workbook
        XLSX.utils.book_append_sheet(wb, ws, "รวมข้อมูล");

        if (type === "excel") {
            XLSX.writeFile(wb, `Report_${studentId}.xlsx`);
        }

        if (type === "csv") {
            XLSX.writeFile(wb, `Report_${studentId}.csv`, { bookType: "csv" });
        }
    };

    const handleExportAll = (sheetData: SheetData[], type: "excel" | "csv") => {
        if (!templateData || !answerData || !groupData) {
            Swal.fire({
                icon: "warning",
                title: "ไม่พบข้อมูลที่จำเป็น",
                text: "กรุณาตรวจสอบการตั้งค่าเทมเพลต คำตอบ และกลุ่ม",
            });
            return;
        }

        // สร้างข้อมูลสำหรับตารางแรก (ข้อมูลทั่วไป)
        const totalScore = answerData.answer_details.reduce((sum, detail) => sum + detail.point, 0);

        const generalData = [
            ["วิชา", groupData.subject],
            ["ปีการศึกษา", `${groupData.term}/${groupData.year}`],
            ["กลุ่มการตรวจ", groupData.name],
            ["ชุดเฉลย", answerData.name],
            ["กระดาษแม่แบบ", templateData.name],
            ["จำนวนข้อ", answerData.total_no],
            ["คะแนนรวม", totalScore],
            [], // แถวว่างสำหรับแยกข้อมูล
        ];

        // สร้างข้อมูลสำหรับตารางที่สอง (ผลลัพธ์การตรวจ)
        const resultData = [
            ["ลำดับที่", "รหัสนักศึกษา", "คะแนนที่ได้", "คิดเป็นร้อยละ", "ชื่อไฟล์ Input"], // หัวตาราง
        ];

        sheetData.forEach((shData, index) => {
            const studentId = shData.predict_std_fill_result
                ? (() => {
                      const stdFillResult = JSON.parse(shData.predict_std_fill_result) as Array<number>;
                      return `${stdFillResult.slice(0, 12).join("")}-${stdFillResult[12]}`;
                  })()
                : "ไม่ระบุ";

            const score = shData.total_scores || 0;
            const percentage = totalScore > 0 ? (score * 100) / totalScore : 0;

            resultData.push([(index + 1).toString(), studentId, score.toString(), percentage.toFixed(2) + "%", shData.original_name]);
        });

        // รวมข้อมูลทั่วไปและผลลัพธ์การตรวจเข้าด้วยกันใน worksheet เดียว
        const combinedData = [...generalData, ...resultData];

        // สร้าง workbook และ worksheet
        const wb = XLSX.utils.book_new();
        const ws = XLSX.utils.aoa_to_sheet(combinedData);

        // เพิ่ม worksheet เข้าไปใน workbook
        XLSX.utils.book_append_sheet(wb, ws, "ข้อมูลและผลลัพธ์การตรวจ");

        if (type === "excel") {
            XLSX.writeFile(wb, `Report_All_${groupData.name}.xlsx`);
        }

        if (type === "csv") {
            XLSX.writeFile(wb, `Report_All_${groupData.name}.csv`, {
                bookType: "csv",
            });
        }
    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center space-x-2">
                <button
                    className="px-3 py-2 rounded-md text-white bg-gray-700 hover:brightness-125"
                    onClick={() => {
                        handleBack();
                    }}
                >
                    <FontAwesomeIcon icon={faArrowLeft} /> กลับ
                </button>
                <h2 className="text-xl"> รายละเอียดการตรวจกระดาษคำตอบ</h2>
            </div>
            <hr className="my-2 border-t border-gray-400" />
            <div className="flex flex-col gap-2 container mx-auto">
                <button
                    onClick={() => {
                        handerPredict();
                    }}
                    className="py-2 px-3 m-1 rounded-lg text-white bg-purple-600 hover:brightness-90"
                >
                    ตรวจกระดาษคำตอบทุกแผ่น
                </button>
                <table className="border-2">
                    <thead>
                        <tr className="border">
                            <td colSpan={5}>
                                <div className=" flex justify-between items-center px-4 py-1">
                                    <span>ตารางการตรวจกระดาษคำตอบ</span>
                                    <button
                                        className="px-3 py-2 rounded-md text-white bg-green-700 hover:brightness-125"
                                        onClick={() => {
                                            handleViewDetailAll();
                                        }}
                                    >
                                        ผลการตรวจแบบภาพรวม
                                    </button>
                                </div>
                            </td>
                        </tr>
                        <tr className="border">
                            <td className="text-center p-2">ชื่อไฟล์ Input</td>
                            <td className="text-center p-2">สถานะ</td>
                            <td className="text-center p-2">รหัสนักศึกษา</td>
                            <td className="text-center p-2">คะแนนรวม</td>
                            <td className="text-center p-2">รายละเอียด</td>
                        </tr>
                    </thead>
                    <tbody>
                        {sheetData.map((sheet) => (
                            <tr key={sheet.id} className="border">
                                <td className="text-center p-2">{sheet.original_name}</td>
                                <td className="text-center p-2">
                                    {sheet.sheet_status.detail}
                                    <br />
                                    {answerData?.updated_at && answerData.updated_at > sheet.updated_at ? "เฉลยมีการเปลี่ยนแปลง" : null}
                                </td>
                                <td className="text-center p-2">
                                    {sheet.predict_std_fill_result
                                        ? (() => {
                                              const stdFillResult = JSON.parse(sheet.predict_std_fill_result) as Array<number>;
                                              return `${stdFillResult.slice(0, 12).join("")}-${stdFillResult[12]}`;
                                          })()
                                        : "-"}
                                </td>
                                <td className="text-center p-2">{sheet.total_scores != null ? sheet.total_scores : "-"}</td>
                                <td className="text-center p-2 space-x-2">
                                    <button
                                        className="text-sm px-5 py-1 rounded-md text-white bg-blue-600 hover:brightness-125"
                                        onClick={() => {
                                            handleViewDetail(sheet.id);
                                        }}
                                    >
                                        ดูกรอบ
                                    </button>
                                    <button
                                        className="text-sm px-5 py-1 rounded-md text-white bg-blue-600 hover:brightness-125"
                                        onClick={() => {
                                            handleViewDetail_answer(sheet.id);
                                        }}
                                    >
                                        ดูคำตอบ
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
