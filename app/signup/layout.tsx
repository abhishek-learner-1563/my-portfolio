import React from "react";

export const metadata = {
    title: "Sign Up",
};

interface SignupLayoutProps {
    children: React.ReactNode;
}

export default function SignupLayout({ children }: SignupLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            {children}
        </div>
    );
}