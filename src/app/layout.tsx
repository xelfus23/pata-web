import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
import { CursorProvider } from "@/utils/cursorProvider";
import Footer from "@/components/footer";
import Navbar from "@/components/navBar";
import React from "react";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "@/components/scrolltoTop";

// import Debug from "@/components/ui/debug";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Patrick - Portfolio",
    description: "Frontend developer specializing in React and Next.js",
    icons: "/icons/icon.png",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <Analytics />
            <body
                className={`${inter.className} bg-background text-text scrollbar-hidden`}
            >
                <Navbar />
                <ScrollToTop>
                    <CursorProvider>{children}</CursorProvider>
                </ScrollToTop>
                <ReactLenis
                    options={{
                        duration: 3,
                    }}
                    root
                />
                {/* <Debug /> */}
                <Footer zIndex={1} />
            </body>
        </html>
    );
}
