import React from 'react';

export const metadata = {
    title: 'Login',
};

interface LoginLayoutProps {
    children: React.ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            {children}
        </div>
    );
}
