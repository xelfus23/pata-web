"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", path: "#home" },
        { name: "About", path: "#about" },
        { name: "Projects", path: "#projects" },
        { name: "Contact", path: "#contact" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-secondary/20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link
                            href="/"
                            className="flex-shrink-0 flex items-center"
                        >
                            <motion.span
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-xl font-bold text-primary"
                            >
                                XELFUS
                            </motion.span>
                        </Link>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <Link
                                    href={item.path}
                                    className="px-3 py-2 text-text hover:text-primary transition-colors duration-300"
                                >
                                    {item.name}
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-text hover:text-primary focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <motion.div
                className={`${isOpen ? "block" : "hidden"} md:hidden`}
                initial={false}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
            >
                <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-secondary">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.path}
                            className="block px-3 py-2 text-text hover:text-primary transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
