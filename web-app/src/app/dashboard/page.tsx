"use client";

import React from "react";
import { useSession } from "next-auth/react";

export default function Dashboard_Page() {
    const { data: session } = useSession();

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <div className="border-4 border-dashed border-gray-200 rounded-lg p-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">
                            แดชบอร์ด
                        </h1>

                        {session ? (
                            <div>
                                <p className="mb-4">
                                    ยินดีต้อนรับ,{" "}
                                    <span className="font-semibold">
                                        {session.user?.username}
                                    </span>
                                </p>
                                <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            ข้อมูลผู้ใช้
                                        </h3>
                                    </div>
                                    <div className="border-t border-gray-200">
                                        <dl>
                                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    ชื่อผู้ใช้
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {session.user?.username}
                                                </dd>
                                            </div>
                                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">
                                                    สิทธิ์
                                                </dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                                    {session.user?.role}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>

                                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            ระบบตรวจสอบข้อสอบ
                                        </h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                            เมนูการใช้งานระบบ
                                        </p>
                                    </div>
                                    <div className="border-t border-gray-200">
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 p-4">
                                            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <div className="flex-shrink-0">
                                                    <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="w-6 h-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <a
                                                        href="#"
                                                        className="focus:outline-none"
                                                    >
                                                        <span
                                                            className="absolute inset-0"
                                                            aria-hidden="true"
                                                        />
                                                        <p className="text-sm font-medium text-gray-900">
                                                            จัดการข้อสอบ
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            เพิ่ม แก้ไข ลบ
                                                            และดูข้อสอบทั้งหมด
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                <div className="flex-shrink-0">
                                                    <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="w-6 h-6"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <a
                                                        href="#"
                                                        className="focus:outline-none"
                                                    >
                                                        <span
                                                            className="absolute inset-0"
                                                            aria-hidden="true"
                                                        />
                                                        <p className="text-sm font-medium text-gray-900">
                                                            จัดการผู้ใช้
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            เพิ่ม แก้ไข ลบ
                                                            และดูผู้ใช้ทั้งหมด
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>กรุณาเข้าสู่ระบบเพื่อดูแดชบอร์ด</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
