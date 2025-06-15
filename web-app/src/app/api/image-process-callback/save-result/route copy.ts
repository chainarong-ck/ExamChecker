import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db";
import { calculateScore, parseChoiceCorrect } from "@/libs/scoreCalculator";

export async function POST(request: NextRequest) {
    try {
        const { task_id, result } = await request.json();

        if (!task_id || !result) {
            return NextResponse.json(
                { error: "task_id and result are required" },
                { status: 400 }
            );
        }

        const result_json = JSON.parse(result);
        if (
            !result_json ||
            !result_json["predict_detail"] ||
            !result_json["predict_result"] ||
            !result_json["predict_std_fill_detail"] ||
            !result_json["predict_std_fill_result"]
        ) {
            return NextResponse.json(
                { error: "Invalid result format" },
                { status: 400 }
            );
        }

        // ค้นหา sheet ด้วย process_id
        const sheet = await prisma.sheets.findFirst({
            where: { process_id: task_id },
            select: {
                id: true,
                group: {
                    select: {
                        id: true,
                        name: true,
                        answer: {
                            select: {
                                id: true,
                            },
                        },
                    },
                },
            },
        });

        if (!sheet) {
            return NextResponse.json(
                { error: "Sheet not found for the given task_id" },
                { status: 400 }
            );
        }

        // อัปเดตผลลัพธ์ในฐานข้อมูล
        const sheet_statuses = await prisma.sheet_statuses.findFirst({
            where: { name: "completed" },
            select: {
                id: true,
                name: true,
            },
        });
        if (!sheet_statuses) {
            return NextResponse.json(
                { error: "Sheet status 'completed' not found" },
                { status: 500 }
            );
        }
        await prisma.sheets.update({
            where: { id: sheet.id },
            data: {
                predict_ans_detail: result_json["predict_detail"],
                predict_ans_result: result_json["predict_result"],
                predict_std_fill_detail: result_json["predict_std_fill_detail"],
                predict_std_fill_result: result_json["predict_std_fill_result"],
                sheet_status_id: sheet_statuses.id, // completed status
                process_id: null, // Clear process_id after completion
                updated_at: new Date(),
            },
        });

        try {
            // คิดคะแนนรวม
            const answerData = await prisma.answers.findUnique({
                where: { id: sheet.group.answer.id },
                include: {
                    answer_details: true,
                },
            });

            if (!answerData) {
                return NextResponse.json(
                    { error: "Answer data not found" },
                    { status: 400 }
                );
            }                // คำนวณคะแนนรวมโดยใช้ฟังก์ชันเดียวกันกับ Frontend
                let totalScore = 0;
                const studentAnswers = result_json["predict_result"];

                // วนลูปผ่านแต่ละข้อ
                for (
                    let questionIndex = 0;
                    questionIndex < studentAnswers.length;
                    questionIndex++
                ) {
                    const questionNo = questionIndex + 1; // ข้อที่ (เริ่มจาก 1)
                    const studentChoices = studentAnswers[questionIndex];

                    // หาคำตอบที่ถูกต้องสำหรับข้อนี้
                    const correctAnswer = answerData.answer_details.find(
                        (detail) => detail.no === questionNo
                    );

                    if (!correctAnswer || !correctAnswer.choice_correct) {
                        console.log(`ไม่พบเฉลยสำหรับข้อที่ ${questionNo}`);
                        continue;
                    }

                    // ใช้ฟังก์ชันคำนวณคะแนนที่ใช้ร่วมกัน
                    const correctChoices = parseChoiceCorrect(correctAnswer.choice_correct as string);
                    const score = calculateScore({
                        studentChoices,
                        correctChoices,
                        correctAll: correctAnswer.correct_all,
                        point: correctAnswer.point
                    });

                    totalScore += score;
                }

            // อัปเดตคะแนนรวมในฐานข้อมูล
            await prisma.sheets.update({
                where: { id: sheet.id },
                data: {
                    total_scores: totalScore,
                    updated_at: new Date(),
                },
            });
        } catch (error) {
            console.error("Error parsing result JSON:", error);
            return NextResponse.json(
                { error: "Invalid result format" },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { message: "Result saved successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error saving result:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
