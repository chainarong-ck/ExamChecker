"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { CreateTemplate } from "@/actions/template";

type DrawActions = "line" | "ans" | "mar" | "fill_std";
type Props = object;

export default function CreateTemplatePage({}: Props) {
    const router = useRouter();

    const [name, setName] = useState<string>("");
    const [totalNo, setTotalNo] = useState<number>(0);
    const [squareFillStdID, setSquareFillStdID] = useState<Square[][]>([]);
    const [squareMarker, setSquareMarker] = useState<Square[]>([]);
    const [squareLine, setSquareLine] = useState<Square[]>([]);
    const [squareAnswers, setSquareAnswers] = useState<Square[][]>([]);
    const [pdfBlob, setPdfBlob] = useState<File | null>(null);
    const [imageBlob, setImageBlob] = useState<File | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [isDrawing, setIsDrawing] = useState<boolean>(false);
    const [startPos, setStartPos] = useState<Point | null>(null);
    const [drawActions, setDrawActions] = useState<DrawActions | null>(null);
    const [drawRow, setDrawRow] = useState<number>(1);
    const [drawCol, setDrawCol] = useState<number>(1);
    const [drawRowGap, setDrawRowGap] = useState<number>(0);
    const [drawColGap, setDrawColGap] = useState<number>(0);
    const [squareTemp, setSquareTemp] = useState<Square[]>([]);
    const [squareTemp2, setSquareTemp2] = useState<Square[][]>([]);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleImageUpload = async (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = event.target.files?.[0];
        if (file) {
            if (file.type !== "application/pdf") {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "โปรดอัปโหลดไฟล์ PDF",
                });

                setImageBlob(null);
                setPdfBlob(null);
                setImageSrc(null);
                event.target.value = "";
                return;
            }

            try {
                const pdfjsLib = await import("pdfjs-dist");
                pdfjsLib.GlobalWorkerOptions.workerSrc =
                    "/assets/js/pdf.worker.min.mjs";

                const arrayBuffer = await file.arrayBuffer();
                const pdf = await pdfjsLib.getDocument({
                        data: arrayBuffer,
                        cMapUrl: "/assets/cmaps/",
                        cMapPacked: true,
                    }).promise;

                // ตรวจสอบว่า PDF มีเพียงหนึ่งหน้า
                if (pdf.numPages !== 1) {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "ไฟล์ PDF ต้องมีเพียงหน้าเดียว",
                    });

                    setImageBlob(null);
                    setPdfBlob(null);
                    setImageSrc(null);
                    event.target.value = "";
                    return;
                }

                // เก็บ Blob ของ PDF
                setPdfBlob(file);

                // แปลงหน้าแรกเป็น canvas
                const page = await pdf.getPage(1);
                const viewport = page.getViewport({ scale: 2 });

                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                if (!context) {
                    throw new Error("Unable to get 2D context from canvas");
                }
                canvas.height = viewport.height;
                canvas.width = viewport.width;

                await page.render({
                    canvasContext: context,
                    viewport: viewport,
                }).promise;

                // แปลง canvas เป็น blob
                canvas.toBlob((blob) => {
                    if (blob) {
                        setImageBlob(
                            new File([blob], "pdf_converted.png", {
                                type: "image/png",
                            })
                        );

                        // สร้าง URL รูปภาพสำหรับการแสดงผล
                        const imageUrl = URL.createObjectURL(blob);
                        setImageSrc(imageUrl);
                    }
                }, "image/png");
            } catch (error) {
                console.error("Error processing PDF:", error);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "เกิดข้อผิดพลาดในการประมวลผลไฟล์ PDF",
                });

                setImageBlob(null);
                setPdfBlob(null);
                setImageSrc(null);
                event.target.value = "";
            }
        }
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (!drawActions) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setStartPos({ x, y });
        setIsDrawing(true);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (!isDrawing || !startPos) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const ctx = canvas.getContext("2d");
        if (ctx && imageSrc) {
            const img = new Image();
            img.src = imageSrc;
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // Draw the rectangle as the user drags
                const width = x - startPos.x;
                const height = y - startPos.y;
                ctx.strokeStyle = "blue";
                ctx.lineWidth = 1;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                if (drawActions === "fill_std") {
                    ctx.strokeStyle = "green";
                    squareFillStdID.forEach((square) => {
                        square.forEach((s) => {
                            ctx.strokeRect(
                                s.sx,
                                s.sy,
                                s.ex - s.sx,
                                s.ey - s.sy
                            );
                        });
                    });
                    ctx.strokeStyle = "blue";
                    ctx.strokeRect(startPos.x, startPos.y, width, height);
                    return;
                }

                if (drawActions === "ans") {
                    ctx.strokeStyle = "green";
                    squareAnswers.forEach((square) => {
                        square.forEach((s) => {
                            ctx.strokeRect(
                                s.sx,
                                s.sy,
                                s.ex - s.sx,
                                s.ey - s.sy
                            );
                        });
                    });
                    ctx.strokeStyle = "blue";
                    ctx.strokeRect(startPos.x, startPos.y, width, height);
                    return;
                }

                if (drawActions === "mar") {
                    ctx.strokeStyle = "green";
                    squareMarker.forEach((square) => {
                        ctx.strokeRect(
                            square.sx,
                            square.sy,
                            square.ex - square.sx,
                            square.ey - square.sy
                        );
                    });
                    ctx.strokeStyle = "blue";
                    ctx.strokeRect(startPos.x, startPos.y, width, height);
                    return;
                }

                if (drawActions === "line") {
                    ctx.strokeStyle = "green";
                    squareLine.forEach((square) => {
                        ctx.strokeRect(
                            square.sx,
                            square.sy,
                            square.ex - square.sx,
                            square.ey - square.sy
                        );
                    });
                    ctx.strokeStyle = "blue";
                    ctx.strokeRect(startPos.x, startPos.y, width, height);
                    return;
                }
            };
        }
    };

    const handleMouseUp = (event: React.MouseEvent<HTMLCanvasElement>) => {
        setIsDrawing(false);

        const canvas = canvasRef.current;
        if (!canvas) return;
        if (!startPos) return;

        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const ctx = canvas.getContext("2d");
        if (!ctx || !imageSrc) return;

        if (drawActions === "fill_std") {
            const img = new Image();
            img.src = imageSrc;
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                ctx.strokeStyle = "green";
                ctx.lineWidth = 1;
                squareFillStdID.forEach((square) => {
                    square.forEach((s) => {
                        ctx.strokeRect(s.sx, s.sy, s.ex - s.sx, s.ey - s.sy);
                    });
                });
                ctx.strokeStyle = "blue";

                const square: Square[][] = [];
                const w =
                    (x - startPos.x - drawColGap * (drawCol - 1)) / drawCol;
                const h =
                    (y - startPos.y - drawRowGap * (drawRow - 1)) / drawRow;

                // Changed: Loop through columns first, then rows
                for (let j = 0; j < drawCol; j++) {
                    const s: Square[] = [];
                    for (let i = 0; i < drawRow; i++) {
                        const sx = startPos.x + w * j + drawColGap * j;
                        const sy = startPos.y + h * i + drawRowGap * i;
                        const ex = sx + w;
                        const ey = sy + h;
                        s.push({
                            sx: Math.round(sx),
                            sy: Math.round(sy),
                            ex: Math.round(ex),
                            ey: Math.round(ey),
                        });
                        ctx.strokeRect(sx, sy, w, h);
                    }
                    square.push(s);
                }
                setSquareTemp2(square);
            };
            return;
        }

        if (drawActions === "line") {
            const img = new Image();
            img.src = imageSrc;
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                ctx.strokeStyle = "green";
                ctx.lineWidth = 1;
                squareLine.forEach((s) => {
                    ctx.strokeRect(s.sx, s.sy, s.ex - s.sx, s.ey - s.sy);
                });
                ctx.strokeStyle = "blue";

                const square: Square[] = [];

                const w =
                    (x - startPos.x - drawColGap * (drawCol - 1)) / drawCol;
                const h =
                    (y - startPos.y - drawRowGap * (drawRow - 1)) / drawRow;

                for (let i = 0; i < drawRow; i++) {
                    for (let j = 0; j < drawCol; j++) {
                        const sx = startPos.x + w * j + drawColGap * j;
                        const sy = startPos.y + h * i + drawRowGap * i;
                        const ex = sx + w;
                        const ey = sy + h;
                        square.push({
                            sx: Math.round(sx),
                            sy: Math.round(sy),
                            ex: Math.round(ex),
                            ey: Math.round(ey),
                        });
                        ctx.strokeRect(sx, sy, w, h);
                    }
                }
                setSquareTemp(square);
            };
            return;
        }

        if (drawActions === "ans") {
            const img = new Image();
            img.src = imageSrc;
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                ctx.strokeStyle = "green";
                ctx.lineWidth = 1;
                squareAnswers.forEach((square) => {
                    square.forEach((s) => {
                        ctx.strokeRect(s.sx, s.sy, s.ex - s.sx, s.ey - s.sy);
                    });
                });
                ctx.strokeStyle = "blue";

                const square: Square[][] = [];
                const w =
                    (x - startPos.x - drawColGap * (drawCol - 1)) / drawCol;
                const h =
                    (y - startPos.y - drawRowGap * (drawRow - 1)) / drawRow;

                for (let i = 0; i < drawRow; i++) {
                    const s: Square[] = [];
                    for (let j = 0; j < drawCol; j++) {
                        const sx = startPos.x + w * j + drawColGap * j;
                        const sy = startPos.y + h * i + drawRowGap * i;
                        const ex = sx + w;
                        const ey = sy + h;
                        s.push({
                            sx: Math.round(sx),
                            sy: Math.round(sy),
                            ex: Math.round(ex),
                            ey: Math.round(ey),
                        });
                        ctx.strokeRect(sx, sy, w, h);
                    }
                    square.push(s);
                }
                setSquareTemp2(square);
            };
            return;
        }

        if (drawActions === "mar") {
            const img = new Image();
            img.src = imageSrc;
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                ctx.strokeStyle = "green";
                ctx.lineWidth = 1;
                squareMarker.forEach((s) => {
                    ctx.strokeRect(s.sx, s.sy, s.ex - s.sx, s.ey - s.sy);
                });
                ctx.strokeStyle = "blue";

                const square: Square[] = [];

                const w =
                    (x - startPos.x - drawColGap * (drawCol - 1)) / drawCol;
                const h =
                    (y - startPos.y - drawRowGap * (drawRow - 1)) / drawRow;

                for (let i = 0; i < drawRow; i++) {
                    for (let j = 0; j < drawCol; j++) {
                        const sx = startPos.x + w * j + drawColGap * j;
                        const sy = startPos.y + h * i + drawRowGap * i;
                        const ex = sx + w;
                        const ey = sy + h;
                        square.push({
                            sx: Math.round(sx),
                            sy: Math.round(sy),
                            ex: Math.round(ex),
                            ey: Math.round(ey),
                        });
                        ctx.strokeRect(sx, sy, w, h);
                    }
                }
                setSquareTemp(square);
            };
            return;
        }
    };

    const handleConfirmSelect = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx || !imageSrc) return;

        const img = new Image();
        img.src = imageSrc;
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            ctx.lineWidth = 1;

            if (drawActions === "fill_std" && squareTemp2.length !== 0) {
                ctx.strokeStyle = "green";
                squareFillStdID.forEach((square) => {
                    square.forEach((s) => {
                        ctx.strokeRect(s.sx, s.sy, s.ex - s.sx, s.ey - s.sy);
                    });
                });
                if (squareFillStdID.length + squareTemp2.length > 13) {
                    ctx.strokeStyle = "red";
                    squareTemp2.forEach((square) => {
                        square.forEach((s) => {
                            ctx.strokeRect(
                                s.sx,
                                s.sy,
                                s.ex - s.sx,
                                s.ey - s.sy
                            );
                        });
                    });
                    alert("ฝนรหัสนักศึกษาไม่ควรยาวเกิน 13 ช่อง");
                } else {
                    ctx.strokeStyle = "green";
                    squareTemp2.forEach((square) => {
                        square.forEach((s) => {
                            ctx.strokeRect(
                                s.sx,
                                s.sy,
                                s.ex - s.sx,
                                s.ey - s.sy
                            );
                        });
                    });
                    setSquareFillStdID([...squareFillStdID, ...squareTemp2]);
                }
            }

            if (drawActions === "line" && squareTemp.length !== 0) {
                ctx.strokeStyle = "green";
                squareLine.forEach((s) => {
                    ctx.strokeRect(s.sx, s.sy, s.ex - s.sx, s.ey - s.sy);
                });
                if (squareLine.length + squareTemp.length > 2) {
                    ctx.strokeStyle = "red";
                    squareTemp.forEach((s) => {
                        ctx.strokeRect(s.sx, s.sy, s.ex - s.sx, s.ey - s.sy);
                    });
                    alert("เส้นไม่ควรมีเกิน 2 เส้น");
                } else {
                    ctx.strokeStyle = "green";
                    squareTemp.forEach((s) => {
                        ctx.strokeRect(s.sx, s.sy, s.ex - s.sx, s.ey - s.sy);
                    });
                    setSquareLine([...squareLine, ...squareTemp]);
                }
            }

            if (drawActions === "ans" && squareTemp2.length !== 0) {
                ctx.strokeStyle = "green";
                squareAnswers.forEach((square) => {
                    square.forEach((s) => {
                        ctx.strokeRect(s.sx, s.sy, s.ex - s.sx, s.ey - s.sy);
                    });
                });
                const total = squareAnswers.length + squareTemp2.length;
                if (total > 100) {
                    ctx.strokeStyle = "red";
                    squareTemp2.forEach((square) => {
                        square.forEach((s) => {
                            ctx.strokeRect(
                                s.sx,
                                s.sy,
                                s.ex - s.sx,
                                s.ey - s.sy
                            );
                        });
                    });
                    alert("คำตอบไม่ควรมีเกิน 100 ข้อ");
                } else {
                    ctx.strokeStyle = "greeb";
                    squareTemp2.forEach((square) => {
                        square.forEach((s) => {
                            ctx.strokeRect(
                                s.sx,
                                s.sy,
                                s.ex - s.sx,
                                s.ey - s.sy
                            );
                        });
                    });
                    setSquareAnswers([...squareAnswers, ...squareTemp2]);
                    setTotalNo(total);
                }
            }

            if (drawActions === "mar" && squareTemp.length !== 0) {
                ctx.strokeStyle = "green";
                squareMarker.forEach((s) => {
                    ctx.strokeRect(s.sx, s.sy, s.ex - s.sx, s.ey - s.sy);
                });
                if (squareMarker.length + squareTemp.length > 4) {
                    ctx.strokeStyle = "red";
                    squareTemp.forEach((s) => {
                        ctx.strokeRect(s.sx, s.sy, s.ex - s.sx, s.ey - s.sy);
                    });
                    alert("เครื่องหมายมุมกระดาษไม่ควรเกิน 4 อัน");
                } else {
                    ctx.strokeStyle = "green";
                    squareTemp.forEach((s) => {
                        ctx.strokeRect(s.sx, s.sy, s.ex - s.sx, s.ey - s.sy);
                    });
                    setSquareMarker([...squareMarker, ...squareTemp]);
                }
            }

            setSquareTemp([]);
            setSquareTemp2([]);
        };
    };

    const handleReset = (type: "line" | "ans" | "mar" | "fill_std") => {
        if (type === "line") {
            setSquareLine([]);
            return;
        }
        if (type === "ans") {
            setSquareAnswers([]);
            return;
        }
        if (type === "mar") {
            setSquareMarker([]);
            return;
        }
        if (type === "fill_std") {
            setSquareFillStdID([]);
            return;
        }
    };

    const handleCreate = async () => {
        if (name.trim() === "") {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "โปรดป้อน ชื่อแม่แบบกระดาษคำตอบ",
            });
            return;
        }
        if (totalNo <= 0) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "จำนวนข้อทั้งหมดต้องมากกว่า 0",
            });
            return;
        }
        if (squareFillStdID.length !== 13) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "รหัสนักศึกษาควรมี 13 ช่อง",
            });
            return;
        }
        if (squareAnswers.length <= 0) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "ช่องคำตอบต้องมากกว่า 0",
            });
            return;
        }
        if (squareMarker.length !== 4) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "เครื่องหมายมุมกระดาษควรมี 4 อัน",
            });
            return;
        }
        if (squareLine.length > 2 || squareLine.length < 1) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "จำนวนเส้นควรมี 1 หรือ 2 เส้น",
            });
            return;
        }
        if (!pdfBlob || !imageBlob) {
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาดกับการจัดการไฟล์",
            });
            return;
        }

        const createTemplateData = new FormData();
        createTemplateData.append("name", name);
        createTemplateData.append("total_no", totalNo.toString());
        createTemplateData.append("pdf_file", pdfBlob);
        createTemplateData.append("image_file", imageBlob);
        createTemplateData.append(
            "square_marker",
            JSON.stringify(squareMarker)
        );
        createTemplateData.append(
            "square_fill_std_id",
            JSON.stringify(squareFillStdID)
        );
        createTemplateData.append(
            "square_answer",
            JSON.stringify(squareAnswers)
        );
        createTemplateData.append("square_line", JSON.stringify(squareLine));

        try {
            const response = await CreateTemplate(createTemplateData);
            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "สำเร็จ",
                    text: "สร้างแม่แบบกระดาษคำตอบสำเร็จแล้ว",
                    showConfirmButton: false,
                    timer: 1500,
                });
                if (response.template_id) {
                    router.push(`/dashboard/template/${response.template_id}`);
                } else {
                    router.push("/dashboard/template");
                }
            } else {
                Swal.fire({
                    icon: "error",
                    title: "เกิดข้อผิดพลาด",
                    text:
                        response.error || "ไม่สามารถสร้างแม่แบบกระดาษคำตอบได้",
                });
            }
        } catch (error) {
            console.error("Error creating template:", error);
            Swal.fire({
                icon: "error",
                title: "ข้อผิดพลาด",
                text: "เกิดข้อผิดพลาดไม่ทราบสาเหตุ",
            });
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (ctx && imageSrc) {
            // Clear canvas and redraw the image
            const img = new Image();
            img.src = imageSrc;
            img.onload = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            };
        }
    }, [imageSrc]);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <h2 className="text-xl"> สร้างแม่แบบกระดาษคำตอบใหม่ </h2>
            </div>
            <hr className="my-2 border-t border-gray-400" />
            <div className="p-2 my-2">
                <div className="m-4">
                    <p>ชื่อแม่แบบกระดาษคำตอบ</p>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        className="w-full pl-4 pr-10 py-2 border-b border-b-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
                        onChange={handleNameChange}
                    />
                </div>
                <div className="m-4">
                    <p>
                        จำนวนข้อทั้งหมด{" "}
                        <span className="text-gray-500">
                            (แสดงจำนวนข้อตามการวาด)
                        </span>
                    </p>
                    <input
                        type="number"
                        value={totalNo}
                        className="pl-4 pr-10 py-2 border-b border-b-neutral-300 dark:border-neutral-600 bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-100 brightness-80"
                        disabled={true}
                    />
                </div>
                <hr />

                <div className="p-2 my-2">
                    <p className=" mb-2">อัปโหลดไฟล์ PDF กระดาษคำตอบ</p>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleImageUpload}
                        className="min-w-3xl mb-4 pl-4 pr-10 py-2 text-sm rounded-lg cursor-pointer focus:outline-none border border-neutral-300 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-100"
                    />
                </div>

                <div className="flex flex-col items-center m-4">
                    {/* Container for Canvas */}
                    <div className="flex gap-4">
                        <div className="outline-2 outline-offset-1 outline-dashed rounded-md">
                            {imageSrc ? (
                                <canvas
                                    ref={canvasRef}
                                    width={848}
                                    height={1200}
                                    onMouseDown={handleMouseDown}
                                    onMouseMove={handleMouseMove}
                                    onMouseUp={handleMouseUp}
                                />
                            ) : (
                                <div className="w-[848px] h-[1200px] flex items-center justify-center">
                                    <p className="text-gray-500">
                                        กรุณาอัปโหลดไฟล์ PDF กระดาษคำตอบ
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col w-[400px] h-[1200px]">
                            <div className="p-3 border rounded-md rounded-b-none">
                                <p>เลือกสิ่งที่ต้องการวาด</p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <input
                                            type="radio"
                                            name="action"
                                            className="m-2"
                                            checked={drawActions === "mar"}
                                            onChange={() => {
                                                setDrawActions("mar");
                                            }}
                                        />
                                        <span>เครื่องหมายมุมกระดาษ</span>
                                    </div>
                                    <button
                                        className="px-3 py-1 rounded-md bg-red-600 hover:brightness-90 m-1"
                                        onClick={() => {
                                            handleReset("mar");
                                        }}
                                    >
                                        รีเซ็ต
                                    </button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <input
                                            type="radio"
                                            name="action"
                                            className="m-2"
                                            checked={drawActions === "line"}
                                            onChange={() => {
                                                setDrawActions("line");
                                            }}
                                        />
                                        <span>เส้นคั้น</span>
                                    </div>
                                    <button
                                        className="px-3 py-1 rounded-md bg-red-600 hover:brightness-90 m-1"
                                        onClick={() => {
                                            handleReset("line");
                                        }}
                                    >
                                        รีเซ็ต
                                    </button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <input
                                            type="radio"
                                            name="action"
                                            className="m-2"
                                            checked={drawActions === "fill_std"}
                                            onChange={() => {
                                                setDrawActions("fill_std");
                                            }}
                                        />
                                        <span>ฝนรหัสนักศึกษา</span>
                                    </div>
                                    <button
                                        className="px-3 py-1 rounded-md bg-red-600 hover:brightness-90 m-1"
                                        onClick={() => {
                                            handleReset("fill_std");
                                        }}
                                    >
                                        รีเซ็ต
                                    </button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <input
                                            type="radio"
                                            name="action"
                                            className="m-2"
                                            checked={drawActions === "ans"}
                                            onChange={() => {
                                                setDrawActions("ans");
                                            }}
                                        />
                                        <span>ช่องคำตอบ</span>
                                    </div>
                                    <button
                                        className="px-3 py-1 rounded-md bg-red-600 hover:brightness-90 m-1"
                                        onClick={() => {
                                            handleReset("ans");
                                        }}
                                    >
                                        รีเซ็ต
                                    </button>
                                </div>
                                <button
                                    className="px-9 py-1 rounded-md bg-green-600 hover:brightness-90 m-2"
                                    onClick={() => {
                                        handleConfirmSelect();
                                    }}
                                >
                                    ตกลง
                                </button>

                                <hr className="m-4" />

                                <p>เครื่องมือช่วยวาด</p>
                                <div className="grid grid-cols-8 items-center m-2">
                                    <span className="col-span-4">จำนวนแถว</span>
                                    <input
                                        type="number"
                                        value={drawRow}
                                        className="m-1 mr-4 border rounded-md col-span-2 p-1"
                                        min={1}
                                        onChange={(event) => {
                                            const value = event.target.value
                                                ? parseInt(
                                                      event.target.value,
                                                      10
                                                  )
                                                : 1;
                                            setDrawRow(value);
                                        }}
                                        onBlur={(event) => {
                                            const value = event.target.value
                                                ? parseInt(
                                                      event.target.value,
                                                      10
                                                  )
                                                : 1;
                                            setDrawRow(value < 1 ? 1 : value);
                                        }}
                                    />
                                    <span className="col-span-2">แถว</span>
                                    <span className="col-span-4">
                                        จำนวนคอลัม
                                    </span>
                                    <input
                                        type="number"
                                        value={drawCol}
                                        className="m-1 mr-4 border rounded-md col-span-2 p-1"
                                        min={1}
                                        onChange={(event) => {
                                            const value = event.target.value
                                                ? parseInt(
                                                      event.target.value,
                                                      10
                                                  )
                                                : 1;
                                            setDrawCol(value);
                                        }}
                                        onBlur={(event) => {
                                            const value = event.target.value
                                                ? parseInt(
                                                      event.target.value,
                                                      10
                                                  )
                                                : 1;
                                            setDrawCol(value < 1 ? 1 : value);
                                        }}
                                    />
                                    <span className="col-span-2">คอลัม</span>
                                    <span className="col-span-4">
                                        ช่องว่างระหว่างแถว
                                    </span>
                                    <input
                                        type="number"
                                        value={drawRowGap}
                                        className="m-1 mr-4 border rounded-md col-span-2 p-1"
                                        min={0}
                                        onChange={(event) => {
                                            const value = event.target.value
                                                ? parseInt(
                                                      event.target.value,
                                                      10
                                                  )
                                                : 0;
                                            setDrawRowGap(value);
                                        }}
                                        onBlur={(event) => {
                                            const value = event.target.value
                                                ? parseInt(
                                                      event.target.value,
                                                      10
                                                  )
                                                : 0;
                                            setDrawRowGap(
                                                value < 0 ? 0 : value
                                            );
                                        }}
                                    />
                                    <span className="col-span-2">พิกเซล</span>
                                    <span className="col-span-4">
                                        ช่องว่างระหว่างคอลัม
                                    </span>
                                    <input
                                        type="number"
                                        value={drawColGap}
                                        className="m-1 mr-4 border rounded-md col-span-2 p-1"
                                        min={0}
                                        onChange={(event) => {
                                            const value = event.target.value
                                                ? parseInt(
                                                      event.target.value,
                                                      10
                                                  )
                                                : 0;
                                            setDrawColGap(value);
                                        }}
                                        onBlur={(event) => {
                                            const value = event.target.value
                                                ? parseInt(
                                                      event.target.value,
                                                      10
                                                  )
                                                : 0;
                                            setDrawColGap(
                                                value < 0 ? 0 : value
                                            );
                                        }}
                                    />
                                    <span className="col-span-2">พิกเซล</span>
                                </div>
                            </div>
                            <div className="p-3 border rounded-md rounded-t-none overflow-auto">
                                <p>ผลลัพธ์การวาด เครื่องหมายมุมกระดาษ</p>
                                <div className="p-2">
                                    <p className="my-2">
                                        เครื่องหมายที่ 1 :{" "}
                                        {JSON.stringify(squareMarker[0])}
                                    </p>
                                    <p className="my-2">
                                        เครื่องหมายที่ 2 :{" "}
                                        {JSON.stringify(squareMarker[1])}
                                    </p>
                                    <p className="my-2">
                                        เครื่องหมายที่ 3 :{" "}
                                        {JSON.stringify(squareMarker[2])}
                                    </p>
                                    <p className="my-2">
                                        เครื่องหมายที่ 4 :{" "}
                                        {JSON.stringify(squareMarker[3])}
                                    </p>
                                </div>
                                <hr className="m-4" />

                                <p>ผลลัพธ์การวาด เส้นคั้น</p>
                                <div className="p-2 min-h-18">
                                    {squareLine.map((std, index) => (
                                        <p key={index} className="">
                                            เส้นที่ {index + 1} :{" "}
                                            {JSON.stringify(std)}
                                        </p>
                                    ))}
                                </div>
                                <hr className="m-4" />

                                <p>ผลลัพธ์การวาด ฝนรหัสนักศึกษา</p>
                                <div className="p-2 min-h-32">
                                    {squareFillStdID.map((std, index) => (
                                        <p key={index} className="">
                                            ช่องที่ {index + 1} :{" "}
                                            {JSON.stringify(std)}
                                        </p>
                                    ))}
                                </div>
                                <hr className="m-4" />

                                <p>ผลลัพธ์การวาด ช่องคำตอบ</p>
                                <div className="p-2 min-h-32">
                                    {squareAnswers.map((std, index) => (
                                        <p key={index} className="">
                                            ข้อที่ {index + 1} :{" "}
                                            {JSON.stringify(std)}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className="py-2 px-6 rounded-lg m-auto block bg-green-600 hover:brightness-90"
                    onClick={handleCreate}
                >
                    สร้าง
                </button>
            </div>
        </div>
    );
}
