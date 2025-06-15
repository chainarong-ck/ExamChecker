import { auth } from "@/libs/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
    // ตรวจสอบหากเป็น server action
    const isServerAction =
        req.method === "POST" && req.headers.has("next-action");

    if (req.nextUrl.pathname === "/") {
        // หากเป็นหน้าแรก แล้วเข้าสู่ระบบแล้วให้ข้ามไปยังหน้าแดชบอร์ด
        if (req.auth) {
            return NextResponse.redirect(
                new URL("/dashboard", req.nextUrl.origin)
            );
        }
        return NextResponse.next();
    }

    if (req.nextUrl.pathname.startsWith("/login")) {
        // หากเป็นหน้าเข้าสู่ระบบ และเข้าสู่ระบบแล้วให้เปลี่ยนเส้นทางไปยังหน้าแดชบอร์ด
        if (req.auth) {
            return NextResponse.redirect(
                new URL("/dashboard", req.nextUrl.origin)
            );
        }
        return NextResponse.next();
    }

    if (req.nextUrl.pathname.startsWith("/logout")) {
        // หากเป็นหน้าออกจากระบบ แล้วยังไม่เข้าสู่ระบบให้ข้ามไปยังหน้าเข้าสู่ระบบ
        if (!req.auth) {
            return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
        }
        return NextResponse.next();
    }

    if (req.nextUrl.pathname.startsWith("/dashboard")) {
        // หากเป็นหน้าแดชบอร์ด และยังไม่เข้าสู่ระบบให้ข้ามไปยังหน้าเข้าสู่ระบบ
        if (!req.auth) {
            // หากเป็น server action ให้คืนค่า Json response
            if (isServerAction) {
                return NextResponse.json(
                    { ok: false, error: "กรุณาเข้าสู่ระบบก่อน" },
                    { status: 401 }
                );
            }

            // หากไม่ใช่ server action ให้เปลี่ยนเส้นทางไปยังหน้าเข้าสู่ระบบ
            return NextResponse.redirect(new URL("/login", req.nextUrl.origin));
        }

        return NextResponse.next();
    }

    // หากเป็นไฟล์ assets ที่ควรเข้าถึงได้ในโฟลเดอร์ public
    if (req.nextUrl.pathname.startsWith("/assets")) {
        return NextResponse.next();
    }

    // หากไม่เข้าเงื่อนไขใด ๆ ให้ส่งกลับไปยังหน้าแรก
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
});

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};
