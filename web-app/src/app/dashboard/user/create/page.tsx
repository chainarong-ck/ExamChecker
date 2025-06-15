"use client";
import { CreateUserReq, CreateUser } from "@/actions/user";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function CreateUserPage() {
    const router = useRouter();

    const [formData, setFormData] = useState<CreateUserReq>({
        username: "",
        password: "",
        confirm_password: "",
        first_name: "",
        last_name: "",
        email: null,
        role_id: 4,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirm_password) {
            Swal.fire({
                icon: "error",
                title: "เกิดข้อผิดพลาด",
                text: "รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน!",
            });
            return;
        }

        if (formData.email?.trim() === "") {
            setFormData({
                ...formData,
                email: null,
            });
        }

        try {
            const result = await CreateUser(formData);
            if (result.ok) {
                Swal.fire({
                    icon: "success",
                    title: "สำเร็จ",
                    text: "สร้างผู้ใช้สำเร็จแล้ว!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                router.push("/dashboard/user");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "เกิดข้อผิดพลาด",
                    text: result.error || "สร้างผู้ใช้ไม่สำเร็จ!",
                });
            }
        } catch (error) {
            console.error("Error creating user:", error);
            Swal.fire({
                icon: "error",
                title: "ข้อผิดพลาด",
                text: "เกิดข้อผิดพลาดไม่ทราบสาเหตุ",
            });
        }
    };

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <h2 className="text-xl"> สร้างผู้ใช้ใหม่ </h2>
            </div>
            <hr className="my-2 border-t border-gray-400" />
            <div className="container mx-auto p-4 max-w-md">
                <h1 className="text-2xl font-bold mb-4">เพิ่มผู้ใช้</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-black dark:text-white">
                            ชื่อผู้ใช้ <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black dark:text-white">
                            รหัสผ่าน <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black dark:text-white">
                            ยืนยันรหัสผ่าน{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            name="confirm_password"
                            value={formData.confirm_password}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black dark:text-white">
                            ชื่อจริง <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black dark:text-white">
                            นามสกุล <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black dark:text-white">
                            อีเมล{" "}
                            <span className="text-gray-500">(ไม่บังคับ)</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email || ""}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-black dark:text-white">
                            บทบาท <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="role_id"
                            value={formData.role_id}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border rounded-md text-black"
                        >
                            <option value={1}>ผู้ดูแลระบบสูงสุด</option>
                            <option value={2}>ผู้ดูแลระบบ</option>
                            <option value={3}>อาจารย์</option>
                            <option value={4}>นักเรียน</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white px-4 py-2 rounded-md hover:brightness-90"
                    >
                        เพิ่มผู้ใช้
                    </button>
                </form>
            </div>
        </div>
    );
}
