"use client";
import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
    id?: string;
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
}

const Section = ({
    id,
    title,
    subtitle,
    children,
    className = "",
}: SectionProps) => {
    return (
        <section
            id={id}
            className={`py-16 md:py-24 px-4 overflow-hidden ${className} z-50`}
        >
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block">
                        <span className="text-text">{title}</span>
                        <div className="h-1 w-full bg-primary mt-1 transform transition-all duration-300"></div>
                    </h2>
                    {subtitle && (
                        <p className="text-lg text-text/70 max-w-2xl mx-auto font-mono">
                            {subtitle}
                        </p>
                    )}
                </motion.div>

                <div>{children}</div>
            </div>
        </section>
    );
};

export default Section;
