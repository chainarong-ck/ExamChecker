"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { Logout } from "@/actions/auth";

type Props = object;
export default function Logout_Page({}: Props) {
    const router = useRouter();

    const [errorMsg, setErrorMsg] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleLogout = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();

        const result = await Logout();
        if (!result.ok) {
            setLoading(false);
            setErrorMsg(result?.error || "");
        } else {
            Swal.fire({
                icon: "success",
                title: "ออกจากระบบสำเร็จ",
                showConfirmButton: false,
                timer: 1500,
            }).then(() => {
                router.replace(result.url || "/login");
            });
        }
    };
    return (
        <div className="flex flex-col items-center h-screen bg-gray-100 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 p-8 mt-48 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4 text-gray-700 dark:text-gray-100">
                    ออกจากระบบ
                </h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300">
                    คุณแน่ใจหรือไม่ว่าต้องการออกจากระบบ?
                    เราหวังว่าจะได้พบคุณอีกครั้งในเร็ว ๆ นี้!
                </p>
                <div className="flex justify-center gap-4">
                    <form onSubmit={handleLogout}>
                        <button
                            type="submit"
                            className={`bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 ${
                                loading
                                    ? "opacity-70 cursor-not-allowed"
                                    : "hover:brightness-90"
                            }`}
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center">
                                    <FontAwesomeIcon
                                        icon={faSpinner}
                                        className="animate-spin h-5 w-5 mr-2 text-white"
                                    />
                                    กำลังเข้าสู่ระบบ
                                </div>
                            ) : (
                                "ใช่ ออกจากระบบ"
                            )}
                        </button>
                    </form>
                    <button
                        onClick={() => router.back()}
                        className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
                    >
                        ย้อนกลับ
                    </button>
                </div>
                {errorMsg && (
                    <div className="text-red-500 mb-4">{errorMsg}</div>
                )}
            </div>
        </div>
    );
}
