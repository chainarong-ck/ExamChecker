import React from "react";
import {
    faHouse,
    faFolder,
    faTable,
    faUsers,
    faFileAlt,
    faUserCircle,
    faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppBar from "@/components/AppBar";
import Drawer, { DrawerMenu } from "@/components/Drawer";
import { redirect } from "next/navigation";
import { auth } from "@/libs/auth";

const mainMenu: DrawerMenu[] = [
    {
        icon: <FontAwesomeIcon icon={faHouse} />,
        title: "แดชบอร์ด",
        url: "/dashboard",
    },
];

const teacherMenu: DrawerMenu[] = [
    {
        icon: <FontAwesomeIcon icon={faFileAlt} />,
        title: "ชุดเฉลย",
        url: "/dashboard/answer",
    },
    {
        icon: <FontAwesomeIcon icon={faFolder} />,
        title: "กลุ่มการตรวจ",
        url: "/dashboard/group",
    },
    {
        icon: <FontAwesomeIcon icon={faTable} />,
        title: "แม่แบบกระดาษคำตอบ",
        url: "/dashboard/template",
    },
];

const adminMenu: DrawerMenu[] = [
    {
        icon: <FontAwesomeIcon icon={faUsers} />,
        title: "ผู้ใช้",
        url: "/dashboard/user",
    },
    {
        icon: <FontAwesomeIcon icon={faTable} />,
        title: "แม่แบบกระดาษคำตอบ",
        url: "/dashboard/template",
    },
];

const bottomMenu: DrawerMenu[] = [
    {
        icon: <FontAwesomeIcon icon={faUserCircle} />,
        title: "โปรไฟล์",
        url: "/dashboard/profile",
    },
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: "ออกจากระบบ",
        url: "/logout",
    },
];

type Props = {
    children: React.ReactNode;
};

export default async function DashboardLayout({ children }: Props) {
    const session = await auth();

    let showMenu = [...mainMenu];

    if (!session?.user) {
        redirect("/login");
    }

    // admin role = 2, teacher role = 3
    if (session.user.role === 2) {
        showMenu = [...mainMenu, ...adminMenu];
    }
    if (session.user.role === 3) {
        showMenu = [...mainMenu, ...teacherMenu];
    }

    return (
        <div className="h-screen flex flex-col">
            <AppBar name={session.user.username || ""} />
            <div className="flex flex-1 overflow-hidden">
                <Drawer mainMenu={showMenu} bottomMenu={bottomMenu} />

                {/* เนื้อหา */}
                <div className="flex-1 p-4 bg-gray-50 dark:bg-gray-950">
                    <div className="w-full h-full overflow-auto p-3 border rounded-2xl shadow-2xl border-gray-200 dark:border-gray-950 bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
