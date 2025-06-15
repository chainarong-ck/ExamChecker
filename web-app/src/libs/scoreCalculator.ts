/**
 * ฟังก์ชันคำนวณคะแนนที่ใช้ร่วมกันในทั้งระบบ
 * เพื่อให้แน่ใจว่าหลักการคิดคะแนนเหมือนกันทุกที่
 */

export interface ScoreCalculationParams {
    studentChoices: Record<string, number>; // { a: 1, b: 0, c: 1, d: 0 }
    correctChoices: Record<string, boolean>; // { a: true, b: false, c: true, d: false }
    correctAll: boolean; // ต้องตอบถูกทุกข้อหรือไม่
    point: number; // คะแนนของข้อนี้
}

/**
 * คำนวณคะแนนสำหรับข้อหนึ่งๆ ตามหลักการเดียวกัน
 */
export function calculateScore(params: ScoreCalculationParams): number {
    const { studentChoices, correctChoices, correctAll, point } = params;

    // ดึงตัวเลือกที่นักศึกษาเลือก (ค่า 1 = เลือกตอบ)
    const studentSelectedChoices: string[] = [];
    Object.entries(studentChoices).forEach(([choice, value]) => {
        if (value === 1) {
            studentSelectedChoices.push(choice);
        }
    });

    // ดึงเฉลยที่ถูกต้อง
    const correctSelectedChoices = Object.entries(correctChoices)
        .filter(([, isCorrect]) => isCorrect)
        .map(([choice]) => choice);

    // คำนวณคะแนนตามหลักการ
    let isCorrect = false;

    if (correctAll) {
        // ต้องตอบถูกทุกข้อย่อย (ต้องเลือกตัวเลือกที่ถูกทั้งหมด และไม่เลือกตัวเลือกที่ผิด)
        const studentChoicesSet = new Set(studentSelectedChoices);
        const correctChoicesSet = new Set(correctSelectedChoices);

        isCorrect =
            studentChoicesSet.size === correctChoicesSet.size &&
            [...studentChoicesSet].every((choice) =>
                correctChoicesSet.has(choice)
            );
    } else {
        // ตอบถูกบางข้อก็ได้คะแนน (เลือกตัวเลือกที่ถูกอย่างน้อย 1 ข้อ และไม่เลือกตัวเลือกที่ผิด)
        const hasCorrectChoice = studentSelectedChoices.some(
            (choice) => correctChoices[choice] === true
        );
        const hasWrongChoice = studentSelectedChoices.some(
            (choice) => correctChoices[choice] === false
        );

        isCorrect = hasCorrectChoice && !hasWrongChoice;
    }

    // ส่งคืนคะแนนถ้าตอบถูก
    return isCorrect ? point : 0;
}

/**
 * แปลงข้อมูลคำตอบจาก API format เป็น ScoreCalculationParams
 */
export function parseChoiceCorrect(choiceCorrectJson: string): Record<string, boolean> {
    try {
        let correctChoices = JSON.parse(choiceCorrectJson);
        
        // ถ้ายังเป็น string อยู่ ให้ parse อีกครั้ง
        if (typeof correctChoices === "string") {
            correctChoices = JSON.parse(correctChoices);
        }
        
        return correctChoices;
    } catch (error) {
        console.error("Error parsing choice_correct:", error);
        return {};
    }
}
