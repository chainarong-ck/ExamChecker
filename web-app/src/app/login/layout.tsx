import React from "react";
import AppBar from "@/components/AppBar";

type Props = {
    children: React.ReactNode;
};

export default async function Login_Layout({ children }: Props) {
    return (
        <div className="h-screen flex flex-col">
            <header className="z-10">
                <AppBar />
            </header>
            {children}
        </div>
    );
}
