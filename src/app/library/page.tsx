"use client";
import { useWritingAnimation } from "@/hooks/useWritingAnimation";
import { componentsData } from "@/lib/library_data";
import Link from "next/link";
import { motion } from "framer-motion";
import { move } from "@/animations/animations";

export default function LibraryPage({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="lg:grid grid-cols-5 mt-16 min-h-screen">
            <div className="py-4">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold p-4 text-primary">
                        {useWritingAnimation("My UI Kit Library", 1, 0.05)}
                    </h1>
                </header>

                <div className="flex flex-col p-4 w-full space-y-4">
                    <h1 className="text-xl text-primary">Component</h1>

                    <div className="space-y-2">
                        {componentsData.map((category, index) => (
                            <motion.div
                                variants={move}
                                initial="initial"
                                animate="animate"
                                custom={{ from: "left", delay: index }}
                                key={category.slug}
                            >
                                <Link
                                    href={`/library/${category.slug}`}
                                    className="flex text-md text-text/80 hover:text-text"
                                >
                                    {category.label}
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            {children}
        </div>
    );
}
