import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function POST(request: NextRequest) {
    try {
        const { task_id, status } = await request.json();

        if (!task_id || !status) {
            return NextResponse.json(
                { error: "task_id and status are required" },
                { status: 400 }
            );
        }

        const sheet_statuses = await prisma.sheet_statuses.findFirst({
            where: { name: status },
            select: {
                id: true,
                name: true,
            },
        });
        if (!sheet_statuses) {
            return NextResponse.json(
                { error: `Sheet status '${status}' not found` },
                { status: 500 }
            );
        }

        await prisma.sheets.updateMany({
            where: { process_id: task_id },
            data: {
                sheet_status_id: sheet_statuses.id,
            },
        });

        return NextResponse.json({
            success: true,
            message: "Status updated successfully",
            task_id,
            status,
        });
    } catch (error) {
        console.error("Error updating status:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
