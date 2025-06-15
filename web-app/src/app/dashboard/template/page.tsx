"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
    faSearch,
    faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { GetAllTemplate } from "@/actions/template";
import { GetImage } from "@/actions/file_storage";
import { useSession } from "next-auth/react";
import { GetRole } from "@/actions/role";

type TemplatesShowDetail = {
    id: string;
    name: string;
    image_filename: string;
    total_no: number;
}[];

type Props = object;

export default function ShowTemplate({}: Props) {
    const { data: session } = useSession();

    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [templates, setTemplates] = useState<TemplatesShowDetail>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [imageUrls, setImageUrls] = useState<{ [id: string]: string }>({});
    const [canCreateTemplate, setCanCreateTemplate] = useState<boolean>(false);

    const fetchTemplates = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await GetAllTemplate({
                page,
                limit,
            });
            if (response.ok && response.data) {
                setTemplates(response.data);
                if (response.total !== undefined) {
                    const calculatedPages = Math.ceil(response.total / limit);
                    setTotalPages(calculatedPages > 0 ? calculatedPages : 1);
                }
            } else {
                setErrorMsg(response.error || "เกิดปัญหาในการดึงข้อมูลแม่แบบ");
                Swal.fire(
                    "ข้อผิดพลาด!",
                    response.error || "เกิดปัญหาในการดึงข้อมูลผู้ใช้",
                    "error"
                );
            }
        } catch (error) {
            setErrorMsg("เกิดข้อผิดพลาดไม่ทราบสาเหตุ: " + error);
            Swal.fire({
                icon: "error",
                title: "ข้อผิดพลาด",
                text: "เกิดข้อผิดพลาดไม่ทราบสาเหตุ",
            });
        } finally {
            setIsLoading(false);
        }
    }, [limit, page]);

    const fetchRole = useCallback(async () => {
        if (!session) return;
        try {
            const response = await GetRole({ id: session.user.role });
            if (response.ok && response.data) {
                if (response.data.name === "admin") {
                    setCanCreateTemplate(true);
                }
            } else {
                setErrorMsg(response.error || "เกิดปัญหาในการดึงข้อมูลบทบาท");
                Swal.fire(
                    "ข้อผิดพลาด!",
                    response.error || "เกิดปัญหาในการดึงข้อมูลบทบาท",
                    "error"
                );
            }
        } catch (error) {
            setErrorMsg("เกิดข้อผิดพลาดไม่ทราบสาเหตุ: " + error);
            Swal.fire({
                icon: "error",
                title: "ข้อผิดพลาด",
                text: "เกิดข้อผิดพลาดไม่ทราบสาเหตุ",
            });
        }
    }, [session]);

    useEffect(() => {
        fetchRole();
    }, [fetchRole]);

    useEffect(() => {
        fetchTemplates();
    }, [fetchTemplates]);

    useEffect(() => {
        // เมื่อ templates เปลี่ยน ให้ดึงรูปภาพใหม่
        const fetchImages = async () => {
            // ลบ object URLs เก่า
            Object.values(imageUrls).forEach((url) => URL.revokeObjectURL(url));
            const newImageUrls: { [id: string]: string } = {};
            await Promise.all(
                templates.map(async (template) => {
                    if (template.image_filename) {
                        const res = await GetImage({
                            foldername: "template",
                            filename: template.image_filename,
                        });
                        if (res.ok && res.file) {
                            newImageUrls[template.id] = URL.createObjectURL(
                                res.file
                            );
                        }
                    }
                })
            );
            setImageUrls(newImageUrls);
        };
        if (templates.length > 0) {
            fetchImages();
        } else {
            Object.values(imageUrls).forEach((url) => URL.revokeObjectURL(url));
            setImageUrls({});
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [templates]);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <h2 className="text-xl"> แม่แบบกระดาษคำตอบทั้งหมด </h2>
                {canCreateTemplate ? (
                    <Link
                        href={"/dashboard/template/create"}
                        className="flex gap-2 px-3 py-2 justify-center items-center rounded-lg bg-green-700 text-white"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                        <p>เพิ่มแม่แบบกระดาษคำตอบ</p>
                    </Link>
                ) : null}
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

            {isLoading ? (
                <p>กำลังโหลด...</p>
            ) : errorMsg !== null ? (
                <div className="flex flex-col items-center">
                    <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        className="h-24 m-2 text-red-800"
                    />
                    <h2 className="text-5xl">{errorMsg}</h2>
                </div>
            ) : templates.length == 0 ? (
                <p>ไม่มีแม่แบบกระดาษคำตอบที่สร้างไว้</p>
            ) : (
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-4 2xl:grid-cols-5">
                    {templates.map((template, index) => (
                        <Link
                            key={index}
                            href={`/dashboard/template/${template.id}`}
                        >
                            <div className="min-h-24 p-2 border rounded-md shadow-md border-neutral-300 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 hover:brightness-90">
                                <p>
                                    <b>{template.name}</b>
                                </p>
                                {imageUrls[template.id] ? (
                                    <Image
                                        src={imageUrls[template.id]}
                                        alt={`${template.image_filename}`}
                                        width={170}
                                        height={240}
                                        className="mx-auto w-auto h-auto"
                                    />
                                ) : (
                                    <p className="text-center text-neutral-500 min-h-24 ">
                                        ไม่มีรูปภาพ
                                    </p>
                                )}
                                <ul className="shadow-sm p-2 m-2 bg-neutral-50 dark:bg-neutral-900">
                                    <li>
                                        <b>จำนวนข้อทั้งหมด :</b>{" "}
                                        {template.total_no}
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
