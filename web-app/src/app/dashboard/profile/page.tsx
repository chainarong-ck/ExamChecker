"use client";
import { ChangePassword, GetProfile, UpdateProfile } from "@/actions/profile";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Profile_Page() {
    const [profileData, setProfileData] = useState<{
        id: string;
        username: string;
        first_name: string;
        last_name: string;
        email?: string | null;
        role: {
            id: number;
            name: string;
            detail: string;
        };
    }>({
        id: "",
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        role: {
            id: 0,
            name: "",
            detail: "",
        },
    });

    const [passwordData, setPasswordData] = useState<{
        current_password: string;
        new_password: string;
        confirm_new_password: string;
    }>({
        current_password: "",
        new_password: "",
        confirm_new_password: "",
    });

    const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPasswordData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleProfileUpdate = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const updateUserData = await UpdateProfile({
                first_name: profileData.first_name,
                last_name: profileData.last_name,
                email: profileData.email || null,
            });

            if (!updateUserData.ok) {
                Swal.fire({
                    icon: "error",
                    title: "ข้อผิดพลาด",
                    text: updateUserData.error || "ไม่สามารถอัปเดตโปรไฟล์ได้",
                });
                return;
            }
            if (!updateUserData.data) {
                Swal.fire({
                    icon: "error",
                    title: "ข้อผิดพลาด",
                    text: "ไม่พบข้อมูลโปรไฟล์",
                });
                return;
            }
            setProfileData({
                id: updateUserData.data.id,
                username: updateUserData.data.username,
                first_name: updateUserData.data.first_name,
                last_name: updateUserData.data.last_name,
                email: updateUserData.data.email || "",
                role: updateUserData.data.role,
            });
            Swal.fire({
                icon: "success",
                title: "สำเร็จ",
                text: "อัปเดตโปรไฟล์เรียบร้อยแล้ว",
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            console.error("Error updating profile:", error);
            Swal.fire({
                icon: "error",
                title: "ข้อผิดพลาด",
                text: "เกิดข้อผิดพลาดไม่ทราบสาเหตุ",
            });
        }
    };

    const handlePasswordUpdate = async (e: React.FormEvent) => {
        try {
            e.preventDefault();

            // ตรวจสอบว่า newPassword และ confirmPassword ตรงกันหรือไม่
            if (
                passwordData.new_password !== passwordData.confirm_new_password
            ) {
                Swal.fire(
                    "เกิดข้อผิดพลาด",
                    "รหัสผ่านใหม่และยืนยันรหัสผ่านไม่ตรงกัน",
                    "error"
                );
                return;
            }

            const res = await ChangePassword({
                current_password: passwordData.current_password,
                new_password: passwordData.new_password,
                confirm_new_password: passwordData.confirm_new_password,
            });

            if (!res.ok) {
                Swal.fire(
                    "เกิดข้อผิดพลาด",
                    res.error || "ไม่สามารถเปลี่ยนรหัสผ่านได้",
                    "error"
                );
                return;
            }

            Swal.fire({
                icon: "success",
                title: "สำเร็จ",
                text: "เปลี่ยนรหัสผ่านเรียบร้อยแล้ว",
                showConfirmButton: false,
                timer: 1500,
            });
            setPasswordData({
                current_password: "",
                new_password: "",
                confirm_new_password: "",
            });
        } catch (error) {
            console.error("Error changing password:", error);
            Swal.fire({
                icon: "error",
                title: "ข้อผิดพลาด",
                text: "เกิดข้อผิดพลาดไม่ทราบสาเหตุ",
            });
        }
    };

    const fetchUser = async () => {
        try {
            const fetchUserData = await GetProfile();
            if (!fetchUserData.ok) {
                Swal.fire({
                    icon: "error",
                    title: "ข้อผิดพลาด",
                    text: fetchUserData.error || "ไม่สามารถดึงข้อมูลโปรไฟล์ได้",
                });
                return;
            }

            if (!fetchUserData.data) {
                Swal.fire({
                    icon: "error",
                    title: "ข้อผิดพลาด",
                    text: "ไม่พบข้อมูลโปรไฟล์",
                });
                return;
            }
            setProfileData({
                id: fetchUserData.data.id,
                username: fetchUserData.data.username,
                first_name: fetchUserData.data.first_name,
                last_name: fetchUserData.data.last_name,
                email: fetchUserData.data.email || "",
                role: fetchUserData.data.role,
            });
        } catch (error) {
            console.error("Error fetching user data:", error);
            Swal.fire({
                icon: "error",
                title: "ข้อผิดพลาด",
                text: "เกิดข้อผิดพลาดไม่ทราบสาเหตุ",
            });
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Section for Profile Picture */}
                <div className="w-full md:w-1/4">
                    <div className="bg-gray-200 w-full aspect-square rounded-lg flex items-center justify-center p-5">
                        {/* Profile Picture */}
                        <Image
                            src={"/img/profile.jpg"}
                            alt="Profile image"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>

                {/* Section for Profile Details */}
                <div className="flex-grow w-full md:w-2/3">
                    <form onSubmit={handleProfileUpdate} className="space-y-4">
                        <h2 className="text-xl font-bold">รายละเอียด</h2>

                        <div>
                            <label className="block text-gray-700">
                                ชื่อผู้ใช้
                            </label>
                            <input
                                type="text"
                                name="username"
                                value={profileData.username}
                                onChange={handleProfileChange}
                                className="w-full px-3 py-2 border rounded-md brightness-80"
                                disabled
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                ชื่อจริง
                            </label>
                            <input
                                type="text"
                                name="first_name"
                                value={profileData.first_name}
                                onChange={handleProfileChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                นามสกุล
                            </label>
                            <input
                                type="text"
                                name="last_name"
                                value={profileData.last_name}
                                onChange={handleProfileChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">อีเมล</label>
                            <input
                                type="email"
                                name="email"
                                value={profileData.email || ""}
                                onChange={handleProfileChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">บทบาท</label>
                            <input
                                type="text"
                                name="role"
                                value={profileData.role.name}
                                onChange={handleProfileChange}
                                className="w-full px-3 py-2 border rounded-md brightness-80"
                                disabled
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                        >
                            อัพเดทโปรไฟล์
                        </button>
                    </form>

                    {/* Form for Password Change */}
                    <form
                        onSubmit={handlePasswordUpdate}
                        className="space-y-4 mt-6"
                    >
                        <h2 className="text-xl font-bold">เปลี่ยนรหัสผ่าน</h2>

                        <div>
                            <label className="block text-gray-700">
                                รหัสผ่านเก่า
                            </label>
                            <input
                                type="password"
                                name="current_password"
                                value={passwordData.current_password}
                                onChange={handlePasswordChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                รหัสผ่านใหม่
                            </label>
                            <input
                                type="password"
                                name="new_password"
                                value={passwordData.new_password}
                                onChange={handlePasswordChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">
                                ยืนยันรหัสผ่านใหม่
                            </label>
                            <input
                                type="password"
                                name="confirm_new_password"
                                value={passwordData.confirm_new_password}
                                onChange={handlePasswordChange}
                                className="w-full px-3 py-2 border rounded-md"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                        >
                            เปลี่ยนรหัสผ่าน
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
