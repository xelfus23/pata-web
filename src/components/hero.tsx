"use client";
import { writingAnimation } from "@/animations/writingText";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero: React.FC = () => {
    return (
        <section
            id="#"
            className="relative flex items-center justify-center min-h-screen py-16 mt-16"
        >
            <div className="container mx-auto px-4 z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            <span className="text-text">Hi, I&apos;m </span>
                            <span className="text-primary">
                                {writingAnimation("Patrick John", 2, 0.02)}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-xl md:text-2xl font-medium mb-8 text-text/80">
                            {writingAnimation(
                                `I build modern web experiences with React, Next.js,
                            and more`,
                                2,
                                0.01
                            )}
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            href="#projects"
                            className="px-6 py-3 bg-primary text-background font-medium rounded-md hover:bg-primary/90 transition-colors duration-300"
                        >
                            View My Work
                        </Link>
                        <Link
                            href="#contact"
                            className="px-6 py-3 border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors duration-300"
                        >
                            Contact Me
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{
                    y: [0, 10, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary"
                >
                    <path
                        d="M12 5V19M12 19L5 12M12 19L19 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </motion.div>
        </section>
    );
};

export default Hero;
