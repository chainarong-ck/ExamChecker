import NextAuth, { CredentialsSignin } from "next-auth";
import Credentials from "next-auth/providers/credentials";

class Custom_CredentialsSignin extends CredentialsSignin {
    code = "custom_credentials_signin";
    message: string;
    constructor(message: string) {
        super(message);
        this.message = message;
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            id: "credentials",
            name: "Credentials",
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                if (!credentials) {
                    throw new Custom_CredentialsSignin(
                        "จำเป็นต้องระบุข้อมูลในการเข้าสู่ระบบ"
                    );
                }
                if (!credentials.username || !credentials.password) {
                    throw new Custom_CredentialsSignin(
                        "จำเป็นต้องระบุชื่อผู้ใช้และรหัสผ่าน"
                    );
                }
                if (
                    typeof credentials.username !== "string" ||
                    typeof credentials.password !== "string"
                ) {
                    throw new Custom_CredentialsSignin(
                        "ชื่อผู้ใช้และรหัสผ่านต้องเป็นข้อความ"
                    );
                }
                if (
                    credentials.username.trim() === "" ||
                    credentials.password.trim() === ""
                ) {
                    throw new Custom_CredentialsSignin(
                        "ชื่อผู้ใช้และรหัสผ่านไม่สามารถว่างเปล่าได้"
                    );
                }

                let data;
                try {
                    // Dynamically import prisma and password utils only when needed (server-side)
                    const { default: prisma } = await import("@/libs/db");
                    const { default: passManage } = await import("@/utils/password");
                    
                    const user = await prisma.users.findUnique({
                        where: {
                            username: credentials.username,
                            disable: false,
                        },
                        select: {
                            id: true,
                            role: true,
                            username: true,
                            password: true,
                        },
                    });
                    data = user || null;
                    
                    if (data) {
                        if (
                            await passManage.comparePassword(
                                credentials.password,
                                data.password
                            )
                        ) {
                            return {
                                id: data.id,
                                role: data.role.id,
                                username: data.username,
                            };
                        }
                    }
                } catch (err) {
                    console.error(err);
                    throw new Custom_CredentialsSignin(
                        "เกิดข้อผิดพลาดในการ เชื่อมต่อฐานข้อมูล"
                    );
                }

                throw new Custom_CredentialsSignin(
                    "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"
                );
            },
        }),
    ],
    pages: {
        signIn: "/login",
        error: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.username = user.username;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    id: token.id,
                    role: token.role,
                    username: token.username,
                    email: "",
                    emailVerified: null,
                };
            }
            return session;
        },
    },
});
