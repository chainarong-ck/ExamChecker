"use client";
import React, { useEffect, useState, use, useCallback } from "react";
import {
    faEllipsisVertical,
    faTrash,
    faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import Link from "next/link";
import NextImage from "next/image";
import { useRouter } from "next/navigation";
import { DeleteGroup, GetGroup, UpdateGroup } from "@/actions/group";
import { GetAllAnswers } from "@/actions/answer";
import { GetAllTemplate } from "@/actions/template";
import {
    CheckCompatibility,
    DeleteSheet,
    GetSheetByGroup,
    UploadSheet,
} from "@/actions/sheet";
import { GetImage } from "@/actions/file_storage";

type Select_Answer_Template = {
    id: string;
    name: string;
    total_no: number;
}[];

type SheetUpload = {
    file: File;
    preview: string;
    compatibility: boolean | null | "checking";
    uploadStatus: "success" | "error" | "uploading" | null;
    marker_center?: {
        tl?: Point;
        tr?: Point;
        bl?: Point;
        br?: Point;
    };
    invert?: boolean;
};

type SheetUploaded = {
    id: string;
    file: File;
    preview: string;
};

type Props = {
    params: Promise<{
        id: string;
    }>;
};

// ฟังก์ชันช่วย: รัน async ทีละ batch
async function runWithConcurrency<T>(
    tasks: (() => Promise<T>)[],
    concurrency: number
): Promise<PromiseSettledResult<T>[]> {
    const results: PromiseSettledResult<T>[] = [];
    let index = 0;

    async function worker() {
        while (index < tasks.length) {
            const current = index++;
            try {
                const value = await tasks[current]();
                results[current] = { status: "fulfilled", value };
            } catch (reason) {
                results[current] = { status: "rejected", reason };
            }
        }
    }

    // สร้าง worker ตามจำนวน concurrency
    await Promise.all(Array.from({ length: concurrency }, worker));
    return results;
}

export default function GroupDetail_Page({ params }: Props) {
    const { id } = use(params);
    const router = useRouter();

    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

    const [name, setName] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [year, setYear] = useState<number>(new Date().getUTCFullYear() + 543);
    const [term, setTerm] = useState<number>(1);
    const [templates, setTemplates] = useState<Select_Answer_Template>([]);
    const [answers, setAnswers] = useState<Select_Answer_Template>([]);
    const [selectTemplate, setSelectTemplate] = useState<string>("");
    const [selectAnswer, setSelectAnswer] = useState<string>("");
    const [createAt, setCreateAt] = useState<Date | null>(null);
    const [updateAt, setUpdateAt] = useState<Date | null>(null);

    const [uploadFiles, setUploadFiles] = useState<SheetUpload[]>([]);
    const [uploadedFiles, setUploadedFiles] = useState<SheetUploaded[]>([]);

    const handleUpdate = async () => {
        if (name.trim() === "") {
            Swal.fire({
                icon: "warning",
                title: "กรุณากรอก ชื่อกลุ่ม",
            });
            return;
        }
        if (subject.trim() === "") {
            Swal.fire({
                icon: "warning",
                title: "กรุณากรอก วิชา",
            });
            return;
        }
        if (year < 1) {
            Swal.fire({
                icon: "warning",
                title: "กรุณากรอก ปีการศึกษา ที่ถูกต้อง",
            });
            return;
        }
        if (term < 1 || term > 3) {
            Swal.fire({
                icon: "warning",
                title: "กรุณาเลือก เทอม ที่ถูกต้อง (1-3)",
            });
            return;
        }

        const groupData = {
            id: id,
            name: name,
            subject: subject,
            year: year,
            term: term,
        };

        try {
            Swal.fire({
                title: "คุณต้องการอัพเดทกลุ่มการตรวจนี้หรือไม่",
                text: "หากคุณแก้ไขแม่แบบกระดาษคำตอบหรือชุดเฉลย จะมีผลต่อการตรวจข้อสอบทั้งหมดที่ใช้กลุ่มนี้ จะทำให้การตรวจข้อสอบทั้งหมดที่ใช้กลุ่มนี้ต้องทำการตรวจใหม่",
                showConfirmButton: true,
                showDenyButton: true,
                confirmButtonText: "อัพเดท",
                denyButtonText: "ยกเลิก",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const updatedGroup = await UpdateGroup(groupData);
                    if (!updatedGroup.ok) {
                        setErrorMsg(
                            updatedGroup.error ||
                                "ไม่สามารถอัพเดทกลุ่มการตรวจได้"
                        );
                        Swal.fire({
                            icon: "error",
                            title: "เกิดข้อผิดพลาด",
                            text:
                                updatedGroup.error ||
                                "ไม่สามารถอัพเดทกลุ่มการตรวจได้",
                        });
                        return;
                    }
                    Swal.fire({
                        icon: "success",
                        title: "อัพเดทกลุ่มการตรวจสำเร็จ",
                        text: "กลุ่มการตรวจได้รับการอัพเดทเรียบร้อยแล้ว",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    router.refresh();
                }
            });
        } catch (error) {
            console.error("Error updating group:", error);
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาด",
                text:
                    error instanceof Error
                        ? error.message
                        : "ไม่สามารถอัพเดทกลุ่มการตรวจได้",
            });
            return;
        }
    };

    const handlerDelete = async () => {
        Swal.fire({
            title: "คุณต้องการลบกลุ่มใช้หรือไม่",
            text: "การลบกลุ่มการตรวจจะทำให้ไม่สามารถเข้าถึงข้อมูลการตรวจข้อสอบที่ใช้กลุ่มนี้ได้อีกต่อไป",
            showConfirmButton: true,
            showDenyButton: true,
            confirmButtonText: "ลบ",
            denyButtonText: "ยกเลิก",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const deleteGroup = await DeleteGroup({ id });
                if (!deleteGroup.ok) {
                    setErrorMsg(
                        deleteGroup.error || "ไม่สามารถลบกลุ่มการตรวจได้"
                    );
                    Swal.fire({
                        icon: "error",
                        title: "เกิดข้อผิดพลาด",
                        text: deleteGroup.error || "ไม่สามารถลบกลุ่มการตรวจได้",
                    });
                    return;
                }
                Swal.fire({
                    icon: "success",
                    title: "ลบกลุ่มการตรวจสำเร็จ",
                    text: "กลุ่มการตรวจได้รับการลบเรียบร้อยแล้ว",
                    showConfirmButton: false,
                    timer: 1500,
                });
                router.push("/dashboard/group");
            }
        });
    };

    const fetchGroup = useCallback(async () => {
        try {
            setLoading(true);
            const groupData = await GetGroup({ id });
            if (!groupData.ok) {
                setErrorMsg(
                    groupData.error || "ไม่สามารถดึงข้อมูลกลุ่มการตรวจได้"
                );
                Swal.fire({
                    icon: "error",
                    title: "เกิดข้อผิดพลาด",
                    text:
                        groupData.error || "ไม่สามารถดึงข้อมูลกลุ่มการตรวจได้",
                });
                return;
            }
            if (!groupData.data) {
                setErrorMsg("ไม่พบกลุ่มการตรวจที่ระบุ");
                Swal.fire({
                    icon: "error",
                    title: "ไม่พบกลุ่มการตรวจ",
                });
                return;
            }

            setName(groupData.data.name);
            setSubject(groupData.data.subject);
            setYear(groupData.data.year);
            setTerm(groupData.data.term);
            setSelectTemplate(groupData.data.template_id || "");
            setSelectAnswer(groupData.data.answer_id || "");
            setCreateAt(new Date(groupData.data.created_at));
            setUpdateAt(new Date(groupData.data.updated_at));
        } catch (error) {
            setErrorMsg("ไม่สามารถดึงข้อมูลกลุ่มการตรวจได้");
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาด",
                text:
                    error instanceof Error
                        ? error.message
                        : "ไม่สามารถดึงข้อมูลกลุ่มการตรวจได้",
            });
        } finally {
            setLoading(false);
        }
    }, [id]);

    const fetchUploadedFiles = useCallback(async () => {
        try {
            setLoading(true);
            const groupData = await GetSheetByGroup({ groupId: id });
            if (!groupData.ok) {
                setErrorMsg(
                    groupData.error ||
                        "ไม่สามารถดึงข้อมูลรูปภาพจากกลุ่มการตรวจได้"
                );
                Swal.fire({
                    icon: "error",
                    title: "เกิดข้อผิดพลาด",
                    text:
                        groupData.error ||
                        "ไม่สามารถดึงข้อมูลรูปภาพจากกลุ่มการตรวจได้",
                });
                return;
            }
            if (!groupData.data) {
                setErrorMsg("ไม่พบข้อมูลรูปภาพจากกลุ่มการตรวจ");
                Swal.fire({
                    icon: "error",
                    title: "ไม่พบข้อมูลรูปภาพจากกลุ่มการตรวจ",
                });
                return;
            }

            const LoadImg = async (
                image_id: string,
                image_filename: string,
                original_name: string
            ) => {
                const result = await GetImage({
                    foldername: id,
                    filename: image_filename,
                });
                if (result.ok && result.file) {
                    // Handle the successful image retrieval
                    const imageUrl = URL.createObjectURL(result.file);
                    setUploadedFiles((prev) => {
                        const existingFile = prev.find(
                            (file) => file.id === image_id
                        );
                        if (existingFile) {
                            return prev.map((file) =>
                                file.id === image_id
                                    ? {
                                          ...file,
                                          preview: imageUrl,
                                          file: new File(
                                              [result.file!],
                                              original_name,
                                              {
                                                  type: result.file!.type,
                                              }
                                          ),
                                      }
                                    : file
                            );
                        } else {
                            return [
                                ...prev,
                                {
                                    id: image_id,
                                    file: new File(
                                        [result.file!],
                                        original_name,
                                        { type: result.file!.type }
                                    ),
                                    preview: imageUrl,
                                },
                            ];
                        }
                    });
                }
            };

            const concurrency = 5;
            const tasks = groupData.data
                .map(
                    (file) => () =>
                        LoadImg(
                            file.id,
                            file.image_filename,
                            file.original_name
                        )
                )
                .filter(Boolean) as (() => Promise<void>)[];

            await runWithConcurrency(tasks, concurrency);
        } catch (error) {
            setErrorMsg("ไม่สามารถดึงข้อมูลกลุ่มการตรวจได้");
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาด",
                text:
                    error instanceof Error
                        ? error.message
                        : "ไม่สามารถดึงข้อมูลกลุ่มการตรวจได้",
            });
        } finally {
            setLoading(false);
        }
    }, [id]);

    const fetchAnswerAndTemplate = useCallback(async () => {
        const [answers, templates] = await Promise.all([
            GetAllAnswers({
                page: 1,
                limit: 1000,
            }),
            GetAllTemplate({
                page: 1,
                limit: 1000,
            }),
        ]);
        if (!answers.ok || !templates.ok) {
            Swal.fire({
                icon: "error",
                title: "ไม่สามารถดึงข้อมูลเฉลยหรือแม่แบบได้",
                text: answers.error || templates.error || "เกิดข้อผิดพลาด",
            });
            return;
        }
        if (!answers.data || !templates.data) {
            Swal.fire({
                icon: "error",
                title: "ไม่พบข้อมูลเฉลยหรือแม่แบบ",
            });
            return;
        }
        setTemplates(
            templates.data.map((template) => ({
                id: template.id,
                name: template.name,
                total_no: template.total_no,
            }))
        );
        setAnswers(
            answers.data.map((answer) => ({
                id: answer.id,
                name: answer.name,
                total_no: answer.total_no,
            }))
        );
    }, []);

    const handleSelectImage = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        {
            const files = e.target.files;
            if (!files) return;
            const newFiles: SheetUpload[] = [];
            const errorFail: string[] = [];
            for (const file of Array.from(files)) {
                if (file.type === "application/pdf") {
                    const pdfjsLib = await import("pdfjs-dist");
                    pdfjsLib.GlobalWorkerOptions.workerSrc =
                        "/assets/js/pdf.worker.min.mjs";

                    // PDF: render each page to image
                    const arrayBuffer = await file.arrayBuffer();
                    const pdf = await pdfjsLib.getDocument({
                        data: arrayBuffer,
                        cMapUrl: "/assets/cmaps/",
                        cMapPacked: true,
                    }).promise;
                    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
                        const page = await pdf.getPage(pageNum);
                        const viewport = page.getViewport({
                            scale: 1.5,
                        });
                        const canvas = document.createElement("canvas");
                        const context = canvas.getContext("2d");
                        canvas.width = viewport.width;
                        canvas.height = viewport.height;
                        if (context) {
                            await page.render({
                                canvasContext: context,
                                viewport,
                            }).promise;

                            const dataUrl = canvas.toDataURL("image/png");
                            const pageFile = new File(
                                [dataUrl],
                                `${file.name}-page${pageNum}.png`,
                                { type: "image/png" }
                            );

                            newFiles.push({
                                file: pageFile,
                                preview: dataUrl,
                                compatibility: null,
                                uploadStatus: null,
                            });
                        } else {
                            console.error(
                                "Failed to get canvas context for PDF rendering"
                            );
                            errorFail.push(
                                `เกิดข้อผิดพลาดในการแปลงไฟล์หน้า ${pageNum} ของไฟล์ PDF: ${file.name}`
                            );
                        }
                    }
                } else if (file.type.startsWith("image/")) {
                    newFiles.push({
                        file,
                        preview: URL.createObjectURL(file),
                        compatibility: null,
                        uploadStatus: null,
                    });
                }
                if (errorFail.length > 0) {
                    Swal.fire({
                        icon: "error",
                        title: "เกิดข้อผิดพลาด",
                        text: errorFail.join("\n"),
                    });
                }
            }
            setUploadFiles((prev) => [...prev, ...newFiles]);
        }
    };

    const handlePreviewImage = (item: SheetUpload | SheetUploaded) => {
        // Create modal
        const modal = document.createElement("div");
        modal.className =
            "fixed inset-0 z-50 flex items-center justify-center bg-black/80";
        modal.onclick = (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        };

        // Create canvas container
        const canvasContainer = document.createElement("div");
        canvasContainer.className = "relative p-4";

        // Create canvas
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        // Create close button
        const closeBtn = document.createElement("button");
        closeBtn.innerHTML = "ปิด";
        closeBtn.className =
            "absolute top-0 right-0 text-white font-bold bg-red-600 rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-700";
        closeBtn.onclick = () => document.body.removeChild(modal);

        // Load and draw image
        const img = new Image();
        img.onload = () => {
            // Set canvas size to image size (with max limits)
            const maxWidth = window.innerWidth * 0.9;
            const maxHeight = window.innerHeight * 0.9;
            let { width, height } = img;

            if (width > maxWidth) {
                height = (height * maxWidth) / width;
                width = maxWidth;
            }
            if (height > maxHeight) {
                width = (width * maxHeight) / height;
                height = maxHeight;
            }

            canvas.width = width;
            canvas.height = height;

            // Draw image on canvas
            if (ctx) {
                ctx.drawImage(img, 0, 0, width, height);
            }
        };
        img.src = item.preview;

        canvasContainer.appendChild(canvas);
        canvasContainer.appendChild(closeBtn);
        modal.appendChild(canvasContainer);
        document.body.appendChild(modal);
    };

    const handleDeleteImageUpload = (index: number) => {
        if (uploadFiles[index].uploadStatus === "success") {
            Swal.fire({
                icon: "warning",
                title: "ไม่สามาถรถลบไฟล์นี้ได้",
                text: "ไฟล์นี้ได้ถูกอัพโหลดไปยังเซิร์ฟเวอร์แล้ว กรุณารีเฟรช์หน้าและกดลบจากเมนูด้านล่าง",
            });
        } else {
            Swal.fire({
                title: "คุณต้องการลบไฟล์นี้หรือไม่",
                text: "ไฟล์นี้จะถูกลบออกจากรายการ",
                showCancelButton: true,
                confirmButtonText: "ลบ",
                cancelButtonText: "ยกเลิก",
            }).then((result) => {
                if (result.isConfirmed) {
                    setUploadFiles((prev) =>
                        prev.filter((_, i) => i !== index)
                    );
                }
            });
        }
    };

    const handleDeleteImageUploaded = (index: number) => {
        Swal.fire({
            title: "คุณต้องการลบไฟล์นี้หรือไม่",
            text: "ไฟล์นี้จะถูกลบออกจากกลุ่มการตรวจและไม่สามารถกู้คืนได้",
            showCancelButton: true,
            confirmButtonText: "ลบ",
            cancelButtonText: "ยกเลิก",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const file = uploadedFiles[index];
                    const response = await DeleteSheet({
                        sheetId: file.id,
                    });
                    if (!response.ok) {
                        Swal.fire({
                            icon: "error",
                            title: "ไม่สามารถลบไฟล์ได้",
                            text:
                                response.error ||
                                "เกิดข้อผิดพลาดในการลบไฟล์นี้",
                        });
                        return;
                    }
                    setUploadedFiles((prev) =>
                        prev.filter((_, i) => i !== index)
                    );
                } catch (error) {
                    console.error("Error deleting image:", error);
                    Swal.fire({
                        icon: "error",
                        title: "เกิดข้อผิดพลาด",
                        text: "ไม่สามารถลบไฟล์นี้ได้",
                    });
                }
            }
        });
    };

    const rotateImage = async (index: number) => {
        const file = uploadFiles[index].file;
        const img = new Image();
        const reader = new FileReader();

        reader.onload = (e) => {
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    // หมุน 180 องศา
                    ctx.translate(canvas.width, canvas.height);
                    ctx.rotate(Math.PI);
                    ctx.drawImage(img, 0, 0);
                    canvas.toBlob((blob) => {
                        if (blob) {
                            const rotatedFile = new File([blob], file.name, {
                                type: file.type,
                            });
                            const preview = URL.createObjectURL(rotatedFile);
                            setUploadFiles((prev) =>
                                prev.map((f, i) =>
                                    i === index
                                        ? { ...f, file: rotatedFile, preview }
                                        : f
                                )
                            );
                        }
                    }, file.type);
                }
            };
            img.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
    };

    const handleCheckCompatibilityImage = async (index: number) => {
        setUploadFiles((prev) =>
            prev.map((f, i) =>
                i === index ? { ...f, compatibility: "checking" } : f
            )
        );

        try {
            const file = uploadFiles[index].file;
            const formData = new FormData();
            formData.append("file", file);
            formData.append("template_id", selectTemplate);

            const response = await CheckCompatibility(formData);
            if (!response.ok) {
                Swal.fire({
                    icon: "error",
                    title: "ไม่สามารถตรวจสอบความเข้ากันได้",
                    text:
                        (response.error || "เกิดข้อผิดพลาดในการตรวจสอบ") +
                        ` (ที่ไฟล์: ${file.name})`,
                });
                setUploadFiles((prev) =>
                    prev.map((f, i) =>
                        i === index ? { ...f, compatibility: null } : f
                    )
                );
                return;
            }
            if (!response.data) {
                setUploadFiles((prev) =>
                    prev.map((f, i) =>
                        i === index ? { ...f, compatibility: false } : f
                    )
                );
                return;
            }
            const compatibility = response.data.compatible;
            const marker_center = {
                tl: response.data.marker_tl_center || undefined,
                tr: response.data.marker_tr_center || undefined,
                bl: response.data.marker_bl_center || undefined,
                br: response.data.marker_br_center || undefined,
            };
            const invert = response.data.invert || false;

            setUploadFiles((prev) =>
                prev.map((f, i) =>
                    i === index
                        ? {
                              ...f,
                              compatibility,
                              marker_center,
                              invert,
                          }
                        : f
                )
            );
        } catch (error) {
            console.error("Error checking compatibility:", error);
            setUploadFiles((prev) =>
                prev.map((f, i) =>
                    i === index ? { ...f, compatibility: false } : f
                )
            );
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาด",
                text: "ไม่สามารถตรวจสอบความเข้ากันได้ของไฟล์นี้ได้",
            });
        }

        try {
            if (uploadFiles[index].invert === true) {
                rotateImage(index);
            }
        } catch (error) {
            console.error("Error rotating image:", error);
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาด",
                text: "ไม่สามารถหมุนรูปภาพได้",
            });
        }
    };

    const handleCheckCompatibilityAll = async () => {
        const concurrency = 5; // จำนวน concurrent ที่ต้องการ
        const tasks = uploadFiles
            .map((file, index) =>
                file.compatibility === null
                    ? () => handleCheckCompatibilityImage(index)
                    : null
            )
            .filter(Boolean) as (() => Promise<void>)[];

        await runWithConcurrency(tasks, concurrency);
    };

    const handleUploadImage = async (index: number) => {
        if (uploadFiles[index].compatibility !== true) {
            Swal.fire({
                icon: "warning",
                title: "ไม่สามารถอัพโหลดได้",
                text: "กรุณาตรวจสอบความเข้ากันได้ของไฟล์กับแม่แบบกระดาษคำตอบก่อน",
            });
            return;
        }

        setUploadFiles((prev) =>
            prev.map((f, i) =>
                i === index ? { ...f, uploadStatus: "uploading" } : f
            )
        );

        try {
            const file = uploadFiles[index].file;
            const formData = new FormData();
            formData.append("file", file);
            formData.append("group_id", id);
            formData.append("marker_tl_center", JSON.stringify(uploadFiles[index].marker_center?.tl || {}));
            formData.append("marker_tr_center", JSON.stringify(uploadFiles[index].marker_center?.tr || {}));
            formData.append("marker_bl_center", JSON.stringify(uploadFiles[index].marker_center?.bl || {}));
            formData.append("marker_br_center", JSON.stringify(uploadFiles[index].marker_center?.br || {}));

            const response = await UploadSheet(formData);
            if (!response.ok) {
                Swal.fire({
                    icon: "error",
                    title: "ไม่สามารถอัพโหลดไฟล์ได้",
                    text:
                        (response.error || "เกิดข้อผิดพลาดในการอัพโหลด") +
                        ` (ที่ไฟล์: ${file.name})`,
                });
                setUploadFiles((prev) =>
                    prev.map((f, i) =>
                        i === index ? { ...f, uploadStatus: "error" } : f
                    )
                );
                return;
            }

            if (!response.data) {
                setUploadFiles((prev) =>
                    prev.map((f, i) =>
                        i === index ? { ...f, uploadStatus: "error" } : f
                    )
                );
                return;
            }

            setUploadFiles((prev) =>
                prev.map((f, i) =>
                    i === index ? { ...f, uploadStatus: "success" } : f
                )
            );
        } catch (error) {
            console.error("Error uploading image:", error);
            setUploadFiles((prev) =>
                prev.map((f, i) =>
                    i === index ? { ...f, uploadStatus: "error" } : f
                )
            );
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาด",
                text: "ไม่สามารถอัพโหลดไฟล์นี้ได้",
            });
        }
    };

    const handleUploadAll = async () => {
        const concurrency = 5;
        const tasks = uploadFiles
            .map((file, index) =>
                file.compatibility === true && file.uploadStatus !== "success"
                    ? () => handleUploadImage(index)
                    : null
            )
            .filter(Boolean) as (() => Promise<void>)[];

        await runWithConcurrency(tasks, concurrency);
    };

    useEffect(() => {
        fetchGroup();
        fetchAnswerAndTemplate();
        fetchUploadedFiles();
    }, [fetchGroup, fetchAnswerAndTemplate, fetchUploadedFiles]);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <h2 className="text-xl">รายละเอียดกลุ่มการตรวจ</h2>
                <Link
                    href={`/dashboard/group/${id}/predict`}
                    className="text-white bg-purple-600 py-2 px-3 rounded-md"
                >
                    รายละเอียดการตรวจข้อสอบ
                </Link>
            </div>
            <hr className="my-2 border-t border-gray-400" />
            {loading ? (
                <p>กำลังโหลด...</p>
            ) : errorMsg ? (
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
                            <p>สร้างเมื่อ : {createAt?.toLocaleString()}</p>
                            <p>อัพเดทเมื่อ : {updateAt?.toLocaleString()}</p>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p>ชื่อกลุ่ม</p>
                            <input
                                type="text"
                                placeholder="ชื่อกลุ่ม"
                                value={name}
                                className="w-full pl-4 pr-10 py-2 border-b border-b-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600"
                                onChange={(event) => {
                                    setName(event.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <p>วิชา</p>
                            <input
                                type="text"
                                placeholder="วิชา"
                                value={subject}
                                className="w-full pl-4 pr-10 py-2 border-b border-b-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600"
                                onChange={(event) => {
                                    setSubject(event.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <p>ปีการศึกษา</p>
                            <input
                                type="number"
                                placeholder="ปีการศึกษา"
                                value={year}
                                className="w-full pl-4 pr-10 py-2 border-b border-b-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600"
                                onChange={(event) => {
                                    const value = event.target.value
                                        ? parseInt(event.target.value, 10)
                                        : 1;
                                    setYear(value);
                                }}
                                onBlur={(event) => {
                                    const value = event.target.value
                                        ? parseInt(event.target.value, 10)
                                        : 1;
                                    const yearNow =
                                        new Date().getFullYear() + 553;
                                    setYear(
                                        value < 2500
                                            ? 2500
                                            : value > yearNow
                                            ? yearNow
                                            : value
                                    );
                                }}
                            />
                        </div>
                        <div>
                            <p>เทอม</p>
                            <select
                                value={term}
                                className="w-full pl-4 pr-10 py-2 border-b border-b-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600"
                                onChange={(event) => {
                                    const value = parseInt(
                                        event.target.value,
                                        10
                                    );
                                    setTerm(value);
                                }}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                            </select>
                        </div>
                        <div>
                            <p>แม่แบบกระดาษคำตอบ</p>
                            <select
                                name="template"
                                value={selectTemplate}
                                className="w-full pl-4 pr-10 py-2 border-b border-b-neutral-300 bg-white dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600 brightness-75"
                                disabled
                            >
                                <option value="">เลือกแม่แบบ</option>
                                {templates.map((template) => (
                                    <option
                                        key={template.id}
                                        value={template.id}
                                    >
                                        {template.name} ({template.total_no}{" "}
                                        ข้อ)
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <p>ชุดเฉลย</p>
                            <select
                                name="answer"
                                value={selectAnswer}
                                className="w-full pl-4 pr-10 py-2 border-b border-b-neutral-300 bg-white dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600 brightness-75"
                                disabled
                            >
                                <option value="">เลือกชุดเฉลย</option>
                                {answers.map((answer) => (
                                    <option key={answer.id} value={answer.id}>
                                        {answer.name} ({answer.total_no} ข้อ)
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <button
                        className="py-2 px-5 my-3 rounded-lg bg-green-600 hover:brightness-90"
                        onClick={() => {
                            handleUpdate();
                        }}
                    >
                        อัพเดท
                    </button>

                    <hr className="m-2" />
                    {/* แสดงฟอร์มการอัพโหลดและจัดการ รูปกระดาษคำตอบจากนักศึกษา */}
                    <div className="my-4 p-4 border rounded-lg bg-neutral-50 dark:bg-neutral-900">
                        <h3 className="text-lg font-semibold mb-2">
                            อัพโหลดรูป/ไฟล์ PDF กระดาษคำตอบนักศึกษา
                        </h3>
                        <input
                            type="file"
                            accept="image/*,application/pdf"
                            multiple
                            onChange={handleSelectImage}
                            className="hidden"
                            id="file-upload"
                        />
                        <button
                            type="button"
                            onClick={() =>
                                document.getElementById("file-upload")?.click()
                            }
                            className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:brightness-90 focus:outline-none"
                        >
                            เพิ่มรูปภาพหรือไฟล์ PDF
                        </button>
                        {uploadFiles && uploadFiles.length > 0 ? (
                            <div className="space-y-2">
                                <hr className="my-4" />
                                <div className="space-x-4">
                                    <button
                                        type="button"
                                        onClick={handleCheckCompatibilityAll}
                                        className={`mb-4 px-4 py-2 text-white rounded-lg focus:outline-none transition-all duration-200 ${
                                            uploadFiles.some(
                                                (f) =>
                                                    f.compatibility ===
                                                    "checking"
                                            )
                                                ? "bg-yellow-500 animate-pulse cursor-wait"
                                                : uploadFiles.every(
                                                      (f) =>
                                                          f.compatibility !==
                                                          null
                                                  )
                                                ? "bg-blue-300 cursor-not-allowed"
                                                : "bg-blue-500 hover:brightness-90 cursor-pointer"
                                        }`}
                                        disabled={
                                            uploadFiles.every(
                                                (f) => f.compatibility !== null
                                            ) ||
                                            uploadFiles.some(
                                                (f) =>
                                                    f.compatibility ===
                                                    "checking"
                                            )
                                        }
                                    >
                                        {uploadFiles.some(
                                            (f) =>
                                                f.compatibility === "checking"
                                        )
                                            ? "กำลังตรวจสอบ..."
                                            : "ตรวจสอบความเข้ากันได้ทั้งหมด"}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleUploadAll}
                                        className={`mb-4 px-4 py-2 text-white rounded-lg focus:outline-none transition-all duration-200 ${
                                            uploadFiles.some(
                                                (f) =>
                                                    f.uploadStatus ===
                                                    "uploading"
                                            )
                                                ? "bg-yellow-500 animate-pulse cursor-wait"
                                                : uploadFiles.every(
                                                      (f) =>
                                                          f.uploadStatus ===
                                                              "success" ||
                                                          f.compatibility !==
                                                              true
                                                  )
                                                ? "bg-green-300 cursor-not-allowed"
                                                : "bg-green-600 hover:brightness-90 cursor-pointer"
                                        }`}
                                        disabled={
                                            uploadFiles.every(
                                                (f) =>
                                                    f.uploadStatus ===
                                                        "success" ||
                                                    f.compatibility !== true
                                            ) ||
                                            uploadFiles.some(
                                                (f) =>
                                                    f.uploadStatus ===
                                                    "uploading"
                                            )
                                        }
                                    >
                                        {uploadFiles.some(
                                            (f) =>
                                                f.uploadStatus === "uploading"
                                        )
                                            ? "กำลังอัพโหลด..."
                                            : "อัพโหลดทั้งหมด"}
                                    </button>
                                    <p className="text-sm text-gray-500 mb-2">
                                        คลิกที่รูปภาพเพื่อดูตัวอย่างขนาดใหญ่
                                    </p>
                                    <p className="text-sm text-gray-500 mb-2">
                                        คลิกที่ปุ่ม &quot;ตรวจสอบฯ&quot;
                                        เพื่อเริ่มตรวจสอบความเข้ากันได้ของไฟล์กับแม่แบบกระดาษคำตอบ
                                    </p>
                                    <p className="text-sm text-gray-500 mb-2">
                                        คลิกที่ปุ่ม &quot;อัพโหลด&quot;
                                        เพื่ออัพโหลดไฟล์ไปยังเซิร์ฟเวอร์
                                    </p>
                                </div>
                                <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                                    <h4 className="font-semibold mb-2">
                                        สรุปจำนวนไฟล์
                                    </h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-blue-600">
                                                {uploadFiles.length}
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                ทั้งหมด
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-green-600">
                                                {
                                                    uploadFiles.filter(
                                                        (f) =>
                                                            f.compatibility ===
                                                            true
                                                    ).length
                                                }
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                เข้ากันได้
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-red-600">
                                                {
                                                    uploadFiles.filter(
                                                        (f) =>
                                                            f.compatibility ===
                                                            false
                                                    ).length
                                                }
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                เข้ากันไม่ได้
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-gray-600">
                                                {
                                                    uploadFiles.filter(
                                                        (f) =>
                                                            f.compatibility ===
                                                            null
                                                    ).length
                                                }
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                ยังไม่ตรวจสอบ
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-sm mt-4">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-green-600">
                                                {
                                                    uploadFiles.filter(
                                                        (f) =>
                                                            f.uploadStatus ===
                                                            "success"
                                                    ).length
                                                }
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                อัพโหลดสำเร็จ
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-red-600">
                                                {
                                                    uploadFiles.filter(
                                                        (f) =>
                                                            f.uploadStatus ===
                                                            "error"
                                                    ).length
                                                }
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                อัพโหลดล้มเหลว
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-yellow-600">
                                                {
                                                    uploadFiles.filter(
                                                        (f) =>
                                                            f.uploadStatus ===
                                                            "uploading"
                                                    ).length
                                                }
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                กำลังอัพโหลด
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                        <ul className="grid  gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                            {uploadFiles && uploadFiles.length > 0 ? (
                                uploadFiles.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="col-span-1 flex items-center gap-4 p-2 border rounded-md bg-white dark:bg-neutral-800"
                                    >
                                        <div className="max-w-20 flex items-center justify-center border bg-neutral-100 dark:bg-neutral-700 cursor-pointer">
                                            <NextImage
                                                src={item.preview}
                                                alt={item.file.name}
                                                width={80}
                                                height={80}
                                                className="w-auto h-auto object-contain"
                                                onClick={() =>
                                                    handlePreviewImage(item)
                                                }
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-medium">
                                                {item.file.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {(
                                                    item.file.size / 1024
                                                ).toFixed(1)}{" "}
                                                KB
                                            </div>
                                            <div className="flex gap-2 mt-1">
                                                <span
                                                    className={`text-xs px-2 py-1 rounded text-gray-800 ${
                                                        item.compatibility ===
                                                        null
                                                            ? "bg-gray-300"
                                                            : item.compatibility
                                                            ? "bg-green-400"
                                                            : "bg-red-400"
                                                    }`}
                                                >
                                                    {item.compatibility === null
                                                        ? "ยังไม่ตรวจสอบ"
                                                        : item.compatibility
                                                        ? "เข้ากันได้"
                                                        : "ไม่เข้ากัน"}
                                                </span>
                                                <span
                                                    className={`text-xs px-2 py-1 rounded text-gray-800 ${
                                                        item.uploadStatus ===
                                                        null
                                                            ? "bg-gray-300"
                                                            : item.uploadStatus ===
                                                              "success"
                                                            ? "bg-green-400"
                                                            : item.uploadStatus ===
                                                              "error"
                                                            ? "bg-red-400"
                                                            : "bg-yellow-300"
                                                    }`}
                                                >
                                                    {item.uploadStatus === null
                                                        ? "ยังไม่อัพโหลด"
                                                        : item.uploadStatus ===
                                                          "success"
                                                        ? "อัพโหลดสำเร็จ"
                                                        : item.uploadStatus ===
                                                          "error"
                                                        ? "อัพโหลดล้มเหลว"
                                                        : "กำลังอัพโหลด..."}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <button
                                                className={`px-3 py-1 rounded text-white text-sm transition-all duration-200 ${
                                                    item.compatibility ===
                                                    "checking"
                                                        ? "bg-yellow-500 animate-pulse cursor-wait"
                                                        : item.compatibility !==
                                                          null
                                                        ? "bg-blue-300 cursor-not-allowed"
                                                        : "bg-blue-500 hover:brightness-90 cursor-pointer"
                                                }`}
                                                disabled={
                                                    item.compatibility !== null
                                                }
                                                onClick={() =>
                                                    handleCheckCompatibilityImage(
                                                        idx
                                                    )
                                                }
                                            >
                                                {item.compatibility ===
                                                "checking"
                                                    ? "กำลังตรวจสอบ..."
                                                    : "ตรวจสอบฯ"}
                                            </button>
                                            <button
                                                className={`px-3 py-1 rounded text-white text-sm transition-all duration-200 ${
                                                    item.uploadStatus ===
                                                    "uploading"
                                                        ? "bg-yellow-500 animate-pulse cursor-wait"
                                                        : item.uploadStatus ===
                                                              "success" ||
                                                          item.compatibility !==
                                                              true
                                                        ? "bg-green-300 cursor-not-allowed"
                                                        : "bg-green-600 hover:brightness-90 cursor-pointer"
                                                }`}
                                                disabled={
                                                    item.compatibility !==
                                                        true ||
                                                    item.uploadStatus ===
                                                        "success" ||
                                                    item.uploadStatus ===
                                                        "uploading"
                                                }
                                                onClick={() =>
                                                    handleUploadImage(idx)
                                                }
                                            >
                                                อัพโหลด
                                            </button>
                                            <button
                                                className={`px-3 py-1 rounded text-white text-sm transition-all duration-200 ${
                                                    item.uploadStatus ===
                                                    "uploading"
                                                        ? "bg-gray-400 cursor-not-allowed"
                                                        : item.uploadStatus ===
                                                          "success"
                                                        ? "bg-orange-500 hover:brightness-90"
                                                        : "bg-red-600 hover:brightness-90"
                                                }`}
                                                disabled={
                                                    item.uploadStatus ===
                                                    "uploading"
                                                }
                                                onClick={() =>
                                                    handleDeleteImageUpload(idx)
                                                }
                                            >
                                                ลบ
                                            </button>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li className="text-gray-500">
                                    ยังไม่มีไฟล์ที่เลือก
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="my-4 p-4 border rounded-lg bg-neutral-50 dark:bg-neutral-900">
                        <h3 className="text-lg font-semibold mb-2">
                            รูปภาพกระดาษคำตอบที่อัพโหลดไว้แล้ว
                        </h3>
                        <div className="space-y-2">
                            <p className="text-sm text-gray-500 mb-2">
                                คลิกที่รูปภาพเพื่อดูตัวอย่างขนาดใหญ่
                            </p>
                            <ul className="grid  gap-2 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                                {uploadedFiles && uploadedFiles.length > 0 ? (
                                    uploadedFiles.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className="col-span-1 flex items-center gap-4 p-2 border rounded-md bg-white dark:bg-neutral-800"
                                        >
                                            <div className="max-w-20 flex items-center justify-center border bg-neutral-100 dark:bg-neutral-700 cursor-pointer">
                                                <NextImage
                                                    src={item.preview}
                                                    alt={item.file.name}
                                                    width={80}
                                                    height={80}
                                                    className="w-auto h-auto object-contain"
                                                    onClick={() =>
                                                        handlePreviewImage(item)
                                                    }
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <div className="font-medium">
                                                    {item.file.name}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {(
                                                        item.file.size / 1024
                                                    ).toFixed(1)}{" "}
                                                    KB
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <button
                                                    className={`px-3 py-1 rounded text-white text-sm transition-all duration-200 bg-red-600 hover:brightness-90`}
                                                    onClick={() =>
                                                        handleDeleteImageUploaded(
                                                            idx
                                                        )
                                                    }
                                                >
                                                    ลบ
                                                </button>
                                            </div>
                                        </li>
                                    ))
                                ) : (
                                    <li className="text-gray-500">
                                        ยังไม่มีไฟล์ที่อัพโหลดไว้
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
