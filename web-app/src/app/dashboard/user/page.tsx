"use client";
import Link from "next/link";
import React, { useState, useEffect, useCallback } from "react";
import Swal from "sweetalert2";
import {
    faPlus,
    faSort,
    faSortUp,
    faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetAllUser, DeleteUser } from "@/actions/user";

type User = {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    role: {
        id: number;
        name: string;
        detail: string;
    };
};

export default function UserPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [sortField, setSortField] = useState<string>("username");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

    const fetchUsers = useCallback(async () => {
        try {
            setIsLoading(true);
            const response = await GetAllUser({
                page,
                limit,
                orderBy: [
                    {
                        field: sortField,
                        direction: sortDirection,
                    },
                ],
            });
            if (response.ok && response.data) {
                setUsers(response.data);
                if (response.total !== undefined) {
                    const calculatedPages = Math.ceil(response.total / limit);
                    setTotalPages(calculatedPages > 0 ? calculatedPages : 1);
                }
            } else {
                console.error("Error fetching users:", response.error);
                Swal.fire(
                    "ข้อผิดพลาด!",
                    response.error || "เกิดปัญหาในการดึงข้อมูลผู้ใช้",
                    "error"
                );
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            Swal.fire({
                icon: "error",
                title: "ข้อผิดพลาด",
                text: "เกิดข้อผิดพลาดไม่ทราบสาเหตุ",
            });
        } finally {
            setIsLoading(false);
        }
    }, [limit, page, sortDirection, sortField]);

    const handleDelete = (id: string) => {
        // แสดง SweetAlert2 เพื่อยืนยันการลบ
        Swal.fire({
            title: "คุณแน่ใจเหรอ?",
            text: "คุณจะไม่สามารถย้อนกลับสิ่งนี้ได้!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "ใช่",
            cancelButtonText: "ยกเลิก",
        }).then(async (result) => {
            if (result.isConfirmed) {
                // ถ้ายืนยัน ให้ทำการลบผู้ใช้

                try {
                    const response = await DeleteUser({ id });

                    if (response.ok) {
                        Swal.fire({
                            icon: "success",
                            title: "สำเร็จ",
                            text: "ผู้ใช้ถูกลบแล้ว!",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        fetchUsers();
                    } else {
                        console.error("Error deleting user:", response.error);
                        Swal.fire(
                            "ข้อผิดพลาด!",
                            response.error || "เกิดปัญหาในการลบผู้ใช้",
                            "error"
                        );
                        return;
                    }
                } catch (error) {
                    console.error("Error deleting user:", error);
                    Swal.fire({
                        icon: "error",
                        title: "ข้อผิดพลาด",
                        text: "เกิดข้อผิดพลาดไม่ทราบสาเหตุ",
                    });
                }
            }
        });
    };

    const handleSort = (field: string) => {
        if (field === sortField) {
            // If clicking the same field, toggle direction
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            // If clicking a new field, set it as the sort field with ascending direction
            setSortField(field);
            setSortDirection("asc");
        }
    };

    const renderSortIcon = (field: string) => {
        if (field !== sortField) {
            return (
                <FontAwesomeIcon icon={faSort} className="ml-1 text-gray-400" />
            );
        }
        return sortDirection === "asc" ? (
            <FontAwesomeIcon icon={faSortUp} className="ml-1 text-blue-600" />
        ) : (
            <FontAwesomeIcon icon={faSortDown} className="ml-1 text-blue-600" />
        );
    };

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <h2 className="text-xl"> ผู้ใช้ทั้งหมด </h2>
                <Link
                    href={"/dashboard/user/create"}
                    className="flex gap-2 px-3 py-2 justify-center items-center rounded-lg bg-green-700 text-white"
                >
                    <FontAwesomeIcon icon={faPlus} />
                    <p>เพิ่มผู้ใช้</p>
                </Link>
            </div>
            <hr className="my-2 border-t border-gray-400" />
            {isLoading ? (
                <p className="text-center py-4">กำลังโหลดข้อมูล...</p>
            ) : (
                <>
                    <div className="flex justify-between items-center my-3">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>เรียงตาม: </span>
                            <span className="font-medium">
                                {sortField === "username" && "ชื่อผู้ใช้"}
                                {sortField === "first_name" && "ชื่อจริง"}
                                {sortField === "last_name" && "นามสกุล"}
                                {sortField === "role" && "บทบาท"}
                            </span>
                            <span>
                                {sortDirection === "asc" ? "(A-Z)" : "(Z-A)"}
                            </span>
                        </div>
                    </div>
                    <table className="min-w-full">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b text-left">
                                    <div
                                        className="flex items-center cursor-pointer"
                                        onClick={() => handleSort("username")}
                                    >
                                        ชื่อผู้ใช้
                                        {renderSortIcon("username")}
                                    </div>
                                </th>
                                <th className="py-2 px-4 border-b text-left">
                                    <div
                                        className="flex items-center cursor-pointer"
                                        onClick={() => handleSort("first_name")}
                                    >
                                        ชื่อจริง
                                        {renderSortIcon("first_name")}
                                    </div>
                                </th>
                                <th className="py-2 px-4 border-b text-left">
                                    <div
                                        className="flex items-center cursor-pointer"
                                        onClick={() => handleSort("last_name")}
                                    >
                                        นามสกุล
                                        {renderSortIcon("last_name")}
                                    </div>
                                </th>
                                <th className="py-2 px-4 border-b text-left">
                                    <div
                                        className="flex items-center cursor-pointer"
                                        onClick={() => handleSort("role_id")}
                                    >
                                        บทบาท
                                        {renderSortIcon("role")}
                                    </div>
                                </th>
                                <th className="py-2 px-4 border-b text-left">
                                    ดำเนินการ
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.length > 0 ? (
                                users.map((user) => (
                                    <tr key={user.id}>
                                        <td className="py-2 px-4 border-b">
                                            {user.username}
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            {user.first_name}
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            {user.last_name}
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            {user.role.name}
                                        </td>
                                        <td className="py-2 px-4 border-b">
                                            <button
                                                className="bg-red-500 text-white px-4 py-1 rounded-md mr-2 hover:bg-red-600"
                                                onClick={() =>
                                                    handleDelete(user.id)
                                                }
                                            >
                                                ลบ
                                            </button>
                                            <Link
                                                className="bg-yellow-500 text-white px-4 py-1 rounded-md hover:bg-yellow-600"
                                                href={`/dashboard/user/${user.id}`}
                                            >
                                                แก้ไข
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="py-4 text-center"
                                    >
                                        ไม่พบข้อมูลผู้ใช้
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
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
                </>
            )}
        </div>
    );
}
