"use client";
import React, { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faSearch,
    faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Swal from "sweetalert2";
import { GetAllAnswers } from "@/actions/answer";

type Props = object;

type AnswerShowDetail = {
    id: string;
    name: string;
    subject: string;
    year: number;
    term: number;
    total_no: number;
}[];

export default function Answers_Page({}: Props) {
    const [loading, setLoading] = useState<boolean>(true);
    const [answers, setAnswers] = useState<AnswerShowDetail>([]);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [totalPages, setTotalPages] = useState<number>(1);

    const fetchAnswers = useCallback(async () => {
        try {
            setLoading(true);
            const answers = await GetAllAnswers({
                page: page,
                limit: limit,
            });
            if (!answers.ok) {
                setErrorMsg(answers.error || "ไม่สามารถดึงข้อมูลเฉลยได้");
                Swal.fire({
                    icon: "error",
                    title: "เกิดข้อผิดพลาด",
                    text: answers.error || "ไม่สามารถดึงข้อมูลเฉลยได้",
                });
                return;
            }
            setAnswers(answers.data || []);
            if (answers.total !== undefined) {
                const calculatedPages = Math.ceil(answers.total / limit);
                setTotalPages(calculatedPages > 0 ? calculatedPages : 1);
            }
        } catch (error) {
            console.error("Error fetching answers:", error);
            setErrorMsg("ไม่สามารถดึงข้อมูลเฉลยได้");
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาด",
                text: "ไม่สามารถดึงข้อมูลเฉลยได้",
            });
        } finally {
            setLoading(false);
        }
    }, [limit, page]);

    useEffect(() => {
        fetchAnswers();
    }, [fetchAnswers]);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <h2 className="text-xl"> เฉลยของฉัน </h2>
                <Link
                    href={"/dashboard/answer/create"}
                    className="flex gap-2 px-3 py-2 justify-center items-center rounded-lg bg-green-700 text-white"
                >
                    <FontAwesomeIcon icon={faPlus} />
                    <p>เพิ่มเฉลย</p>
                </Link>
            </div>
            <hr className="my-2 border-t border-gray-400" />
            <div className="relative max-w-md m-2 ms-auto">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-4 pr-10 py-2 text-sm border border-neutral-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600"
                />
                <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-500 dark:text-neutral-300"
                >
                    <FontAwesomeIcon icon={faSearch} className="h-5 w-5" />
                </button>
            </div>
            {errorMsg ? (
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        className="h-24 m-2 text-red-800"
                    />
                    <h2 className="text-5xl">{errorMsg}</h2>
                </div>
            ) : loading ? (
                <p>กำลังโหลด....</p>
            ) : answers.length == 0 ? (
                <p>ไม่มีเฉลยที่สร้างไว้</p>
            ) : (
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                    {answers.map((answer, index) => (
                        <Link
                            key={index}
                            href={`/dashboard/answer/${answer.id}`}
                        >
                            <div className="min-h-24 p-2 border rounded-md shadow-md border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 hover:brightness-90 dark:hover:hover:brightness-110">
                                <p>
                                    <b>{answer.name}</b>
                                </p>
                                <ul className="shadow-sm p-2 m-2 bg-neutral-50 dark:bg-neutral-900">
                                    <li>
                                        <b> วิชา: </b> {answer.subject}
                                    </li>
                                    <li>
                                        <b> ปีการศึกษา: </b> {answer.year}
                                    </li>
                                    <li>
                                        <b> เทอม: </b> {answer.term}
                                    </li>
                                    <li>
                                        <b> จำนวนข้อ: </b> {answer.total_no}
                                    </li>
                                </ul>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
            <hr className="my-2 border-t border-gray-400" />
            <div className="flex justify-between items-center py-4">
                <div className="flex items-center gap-2">
                    <span>แสดง</span>
                    <select
                        value={limit}
                        className="pl-4 pr-10 py-2 border-b rounded-md border-neutral-300 dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-600"
                        onChange={(e) => {
                            setLimit(Number(e.target.value));
                            setPage(1); // Reset to first page when changing limit
                        }}
                    >
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    <span>รายการต่อหน้า</span>
                </div>
                <div>
                    แสดงหน้า {page} จาก {totalPages} หน้า
                </div>
                <div className="flex gap-2">
                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className={`px-4 py-2 rounded-md ${
                            page === 1
                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                : "bg-gray-300 hover:bg-gray-400"
                        }`}
                    >
                        ก่อนหน้า
                    </button>
                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                        className={`px-4 py-2 rounded-md ${
                            page === totalPages
                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                : "bg-gray-300 hover:bg-gray-400"
                        }`}
                    >
                        ถัดไป
                    </button>
                </div>
            </div>
        </div>
    );
}
