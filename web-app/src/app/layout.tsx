import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import NextAuthProvider from "@/components/NextAuthProvider";
import ThemeProvider from "@/components/ThemeProvider";
import { auth } from "@/libs/auth";
import "./globals.css";

const kanit = Noto_Sans_Thai({
    subsets: ["thai", "latin"],
    display: "swap",
    preload: true,
});

export const metadata: Metadata = {
    title: "Welcome to ExamChecker",
    description: "A ExamChecker web application",
};

type Props = Readonly<{
    children: React.ReactNode;
}>;

export default async function RootLayout({ children }: Props) {
    const session = await auth();
    return (
        <NextAuthProvider session={session}>
            <html lang="th">
                <ThemeProvider>
                    <body className={`${kanit.className} antialiased`}>
                        {children}
                    </body>
                </ThemeProvider>
            </html>
        </NextAuthProvider>
    );
}
