import { PrismaClient } from "@/libs/prisma/client";
import PassManage from "../src/utils/password";

const prisma = new PrismaClient();

const createRoles = async () => {
    console.log("Creating roles...");
    await prisma.roles.createMany({
        data: [
            { id: 1, name: "super-admin", detail: "ผู้ดูแลระบบสูงสุด" },
            { id: 2, name: "admin", detail: "ผู้ดูแลระบบ" },
            { id: 3, name: "teacher", detail: "ครูผู้สอน" },
            { id: 4, name: "student", detail: "นักเรียน" },
        ],
    });
};

const createRegionTypes = async () => {
    console.log("Creating region_types...");
    await prisma.region_types.createMany({
        data: [
            { id: 1, name: "marker", detail: "เครื่องหมายมุมกระดาษ" },
            { id: 2, name: "answer", detail: "คำตอบ" },
            { id: 3, name: "line", detail: "เส้น" },
            { id: 5, name: "std-id-fill", detail: "ระบายรหัสนักศึกษา" },
        ],
    });
};

const createRegions = async () => {
    console.log("Creating regions...");
    // Marker regions (4 corners)
    const regions = [
        {
            id: 1,
            name: "marker_tl",
            detail: "เครื่องหมายมุมกระดาษ มุมซ้ายบน",
            region_type_id: 1,
        },
        {
            id: 2,
            name: "marker_tr",
            detail: "เครื่องหมายมุมกระดาษ มุมขวาบน",
            region_type_id: 1,
        },
        {
            id: 3,
            name: "marker_bl",
            detail: "เครื่องหมายมุมกระดาษ มุมซ้ายล่าง",
            region_type_id: 1,
        },
        {
            id: 4,
            name: "marker_br",
            detail: "เครื่องหมายมุมกระดาษ มุมขวาล่าง",
            region_type_id: 1,
        },
    ];

    let id = 5;

    // Answer regions (100 questions, 4 choices each)
    for (let i = 1; i <= 100; i++) {
        for (let j = 1; j <= 4; j++) {
            regions.push({
                id: id,
                name: `answer_${i}_${j}`,
                detail: `คำตอบข้อ ${i} ตัวเลือกที่ ${j}`,
                region_type_id: 2,
            });
            id++;
        }
    }

    // Line regions (2 lines)
    for (let i = 1; i <= 2; i++) {
        regions.push({
            id: id,
            name: `line_${i}`,
            detail: `เส้นที่ ${i}`,
            region_type_id: 3,
        });
        id++;
    }

    // Student ID fill regions (13 digits)
    for (let i = 1; i <= 13; i++) {
        for (let j = 0; j <= 9; j++) {
            regions.push({
                id: id,
                name: `std-id-fill_${i}_${j}`,
                detail: `ระบายรหัสนักศึกษา หลักที่ ${i} เลขที่ ${j}`,
                region_type_id: 5,
            });
            id++;
        }
    }

    await prisma.regions.createMany({
        data: regions,
    });
};

const createSheetStatuses = async () => {
    console.log("Creating sheet statuses...");
    await prisma.sheet_statuses.createMany({
        data: [
            { id: 1, name: "pending", detail: "รอการประมวลผล" },
            { id: 2, name: "queued", detail: "อยู่ในคิวรอประมวลผล" },
            { id: 3, name: "processing", detail: "กำลังประมวลผล" },
            { id: 4, name: "completed", detail: "ประมวลผลเสร็จสมบูรณ์" },
            { id: 5, name: "error", detail: "เกิดข้อผิดพลาดในการประมวลผล" },
        ],
    });
};

const createCrossTypes = async () => {
    console.log("Creating cross types...");

    await prisma.cross_types.createMany({
        data: [
            { id: 1, name: "cross", detail: "เครื่องหมายกากบาท" },
            { id: 2, name: "blank", detail: "ช่องว่าง" },
            { id: 3, name: "cancel", detail: "ยกเลิก" },
            { id: 4, name: "invalid", detail: "ไม่ถูกต้อง" },
        ],
    });
};

const createUsers = async () => {
    console.log("Creating users...");
    await prisma.users.createMany({
        data: [
            {
                username: "superadmin",
                password: await PassManage.hashPassword("123456789"),
                first_name: "Super",
                last_name: "Admin",
                role_id: 1,
                email: "super-admin@example.com",
            },
            {
                username: "admin",
                password: await PassManage.hashPassword("123456789"),
                first_name: "Admin",
                last_name: "User",
                role_id: 2,
                email: "admin@example.com",
            },
            {
                username: "teacher",
                password: await PassManage.hashPassword("123456789"),
                first_name: "Teacher",
                last_name: "User",
                role_id: 3,
                email: "teacher@example.com",
            },

            {
                username: "1164104001469",
                password: await PassManage.hashPassword("123456789"),
                first_name: "Student",
                last_name: "User",
                role_id: 4,
                email: "1164104001469@mail.rmutt.ac.th",
            },

            {
                username: "test",
                password: await PassManage.hashPassword("123456789"),
                first_name: "Test",
                last_name: "User",
                role_id: 3,
                email: "test@example.com",
            },

            {
                username: "test1",
                password: await PassManage.hashPassword("123456789"),
                first_name: "Test",
                last_name: "User",
                role_id: 3,
                email: "test1@example.com",
            },

            {
                username: "test2",
                password: await PassManage.hashPassword("123456789"),
                first_name: "Test",
                last_name: "User",
                role_id: 3,
                email: "test2@example.com",
            },

            {
                username: "test3",
                password: await PassManage.hashPassword("123456789"),
                first_name: "Test",
                last_name: "User",
                role_id: 3,
                email: "test3@example.com",
            },
        ],
    });
};

const main = async () => {
    console.log("Seeding database...");

    await createRoles();
    await createRegionTypes();
    await createRegions();
    await createSheetStatuses();
    await createCrossTypes();
    await createUsers();

    console.log("Database seeding completed successfully.");
};

main()
    .then(() => {
        console.log("All seeds completed successfully");
    })
    .catch((e) => {
        console.error("Seeding failed:", e);
    })
    .finally(() => {
        prisma.$disconnect();
    });
