import React from "react";
import Link from "next/link";

type Props = object;

export default function NotFound({}: Props) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="text-center space-y-6 max-w-md">
                <h1 className="text-9xl font-extrabold text-blue-600">404</h1>
                <h2 className="text-3xl font-bold text-gray-900">Page Not Found</h2>
                <p className="text-gray-600 text-lg">
                    Sorry, we could not find the page you&apos;re looking for.
                </p>
                <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    >
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    Return to Home
                </Link>
            </div>
        </div>
    );
}
