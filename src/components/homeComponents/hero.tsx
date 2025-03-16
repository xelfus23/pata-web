"use client";
import { useWritingAnimation } from "@/hooks/useWritingAnimation";
// import useScroll from "@/hooks/useScroll";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCursorState } from "../utils/cursorProvider";

const Hero: React.FC = () => {
    // const scroll = useScroll() * 0.4;
    const { setCursorState } = useCursorState();

    return (
        <section
            id="#home"
            className="relative flex flex-col items-center justify-center min-h-screen py-16 mt-16"
        >
            <div className="container mx-auto px-4 z-10 justify-center flex items-center">
                <motion.div
                    // animate={{
                    //     y: scroll,
                    // }}
                    transition={{
                        duration: 0.2,
                    }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{ duration: 0.5 }}
                        onHoverStart={() => setCursorState({ scale: 3 })}
                        onHoverEnd={() => setCursorState({ scale: 0.5 })}
                    >
                        <motion.h1
                            // animate={{ y: scroll }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            <span className="text-text">Hi, I&apos;m </span>
                            <span className="text-primary">
                                {useWritingAnimation("Patrick John", 2, 0.02)}
                            </span>
                        </motion.h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: 0.1,
                            type: "tween",
                        }}
                    >
                        <motion.h2
                            // animate={{ y: scroll }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="text-xl md:text-2xl font-medium mb-8 text-text/80"
                        >
                            {useWritingAnimation(
                                `I build modern web experiences with React, Next.js,
                            and more`,
                                2,
                                0.01
                            )}
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        // animate={{ y: scroll }}
                        transition={{
                            duration: 0.2,
                        }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="px-6 py-3 cursor-pointer bg-primary text-background font-medium rounded-md hover:bg-primary/90 transition-colors duration-300"
                            onHoverStart={() => setCursorState({ scale: 2 })}
                            onHoverEnd={() => setCursorState({ scale: 0.5 })}
                        >
                            <Link className="" href="#projects">
                                View My Work
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className="px-6 py-3 cursor-pointer border border-primary text-primary font-medium rounded-md hover:bg-primary/10 transition-colors duration-300"
                            onHoverStart={() => setCursorState({ scale: 2 })}
                            onHoverEnd={() => setCursorState({ scale: 0.5 })}
                        >
                            <Link className="" href="#contact">
                                Contact Me
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
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

            {/* <div className="container h-screen"></div> */}
        </section>
    );
};

export default Hero;
