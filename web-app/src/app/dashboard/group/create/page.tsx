"use client";
import { GetAllAnswers } from "@/actions/answer";
import { GetAllTemplate } from "@/actions/template";
import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { CreateGroup } from "@/actions/group";

type Select_Answer_Template = {
    id: string;
    name: string;
    total_no: number;
}[];

type Props = object;

export default function CreateGroupPage({}: Props) {
    const router = useRouter();

    const [name, setName] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [year, setYear] = useState<number>(new Date().getUTCFullYear() + 543);
    const [term, setTerm] = useState<number>(1);
    const [templates, setTemplates] = useState<Select_Answer_Template>([]);
    const [answers, setAnswers] = useState<Select_Answer_Template>([]);
    const [selectTemplate, setSelectTemplate] = useState<string>("");
    const [selectAnswer, setSelectAnswer] = useState<string>("");

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

    const handleSelect_Answer_Template = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        if (value === "") {
            if (name === "template") {
                setSelectTemplate("");
            } else if (name === "answer") {
                setSelectAnswer("");
            }
            return;
        }
        if (name === "template") {
            const selected = templates.find((t) => t.id === value);
            if (!selected) {
                setSelectTemplate("");
                Swal.fire({
                    icon: "warning",
                    title: "ไม่พบแม่แบบที่เลือก",
                });
                return;
            }
            setSelectTemplate(selected.id);
        } else if (name === "answer") {
            const selected = answers.find((a) => a.id === value);
            if (!selected) {
                setSelectAnswer("");
                Swal.fire({
                    icon: "warning",
                    title: "ไม่พบชุดเฉลยที่เลือก",
                });
                return;
            }
            setSelectAnswer(selected.id);
        }
    };

    const handleCreate = async () => {
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
        if (selectTemplate === "") {
            Swal.fire({
                icon: "warning",
                title: "กรุณาเลือก แม่แบบกระดาษคำตอบ",
            });
            return;
        }
        if (selectAnswer === "") {
            Swal.fire({
                icon: "warning",
                title: "กรุณาเลือก ชุดเฉลย",
            });
            return;
        }
        // ตรวจว่าจำนวนข้อของ answer ต้องไม่มากกว่า template
        const selectedAnswer = answers.find((a) => a.id === selectAnswer);
        const selectedTemplate = templates.find((t) => t.id === selectTemplate);
        if (
            selectedAnswer &&
            selectedTemplate &&
            selectedAnswer.total_no > selectedTemplate.total_no
        ) {
            Swal.fire({
                icon: "warning",
                title: "จำนวนข้อของชุดเฉลยมากกว่าจำนวนข้อของแม่แบบ",
                text: `ชุดเฉลย ${selectedAnswer.name} มี ${selectedAnswer.total_no} ข้อ แต่แม่แบบ ${selectedTemplate.name} มีเพียง ${selectedTemplate.total_no} ข้อ`,
            });
            return;
        }

        const groupData = {
            name: name,
            subject: subject,
            year: year,
            term: term,
            template_id: selectTemplate,
            answer_id: selectAnswer,
        };

        try {
            const createdGroup = await CreateGroup(groupData);
            if (!createdGroup.ok) {
                Swal.fire({
                    icon: "error",
                    title: "ไม่สามารถสร้างกลุ่มการตรวจได้",
                    text: createdGroup.error || "เกิดข้อผิดพลาด",
                });
                return;
            }
            if (!createdGroup.data) {
                Swal.fire({
                    icon: "error",
                    title: "ไม่สามารถสร้างกลุ่มการตรวจได้",
                    text: "ไม่พบข้อมูลกลุ่มที่สร้าง",
                });
                return;
            }

            Swal.fire({
                icon: "success",
                title: "สร้างกลุ่มการตรวจสำเร็จ",
                text: `กลุ่มการตรวจ ${name} ถูกสร้างเรียบร้อยแล้ว`,
                showConfirmButton: false,
                timer: 1500,
            });
            router.push(`/dashboard/group/${createdGroup.data.id}`);
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "สร้างกลุ่มการตรวจไม่สำเร็จ",
                text:
                    error instanceof Error
                        ? error.message
                        : "เกิดข้อผิดพลาดในการสร้างกลุ่มการตรวจ",
            });
        }
    };

    useEffect(() => {
        fetchAnswerAndTemplate();
    }, [fetchAnswerAndTemplate]);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <h2 className="text-xl"> สร้างกลุ่มการตรวจใหม่ </h2>
            </div>
            <hr className="my-2 border-t border-gray-400" />
            <div className="p-2 my-2">
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
                                const yearNow = new Date().getFullYear() + 553;
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
                                const value = parseInt(event.target.value, 10);
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
                            className="w-full pl-4 pr-10 py-2 border-b border-b-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600"
                            onChange={handleSelect_Answer_Template}
                        >
                            <option value="">เลือกแม่แบบ</option>
                            {templates.map((template) => (
                                <option key={template.id} value={template.id}>
                                    {template.name} ({template.total_no} ข้อ)
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p>ชุดเฉลย</p>
                        <select
                            name="answer"
                            value={selectAnswer}
                            className="w-full pl-4 pr-10 py-2 border-b border-b-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600"
                            onChange={handleSelect_Answer_Template}
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

                <hr className="my-5" />

                <button
                    className="py-2 px-5 rounded-lg bg-green-600 hover:brightness-90"
                    onClick={() => {
                        handleCreate();
                    }}
                >
                    สร้าง
                </button>
            </div>
        </div>
    );
}
