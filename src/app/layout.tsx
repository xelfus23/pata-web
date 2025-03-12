import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navBar";
import Footer from "@/components/footer";
import ReactLenis from "lenis/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Patrick - Portfolio",
    description: "Frontend developer specializing in React and Next.js",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-background text-text`}>
                <ReactLenis
                    options={{
                        duration: 2,
                    }}
                    root
                >
                    <Navbar />
                    {children}
                    <Footer />
                </ReactLenis>
            </body>
        </html>
    );
}
