import React from "react";

import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

type MainLayoutProps = {
    children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div>
            <Header />
            <div className="flex h-[calc(100vh-45px)]">
                <Sidebar />
                <main className="w-full h-full">{children}</main>
            </div>
        </div>
    );
};
