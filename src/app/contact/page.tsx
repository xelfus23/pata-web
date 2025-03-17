"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react"; // Import useState
import GridBackground from "@/components/ui/gridBackground";
import { useWritingAnimation } from "@/hooks/useWritingAnimation";
import { move } from "@/animations/animations";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //  Add your form submission logic here
        console.log("Form submitted:", { name, email, message });
        // Reset the form fields after submission
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="py-16 px-6 md:px-24 lg:px-32 grid lg:grid-cols-2 gap-20">
            <div className="flex justify-center flex-col mt-20">
                <h1 className="text-4xl font-bold text-text mb-6">
                    {useWritingAnimation("Let's Connect!", 1, 0.05)}
                </h1>
                <p className="text-lg text-text/80 mb-8">
                    {useWritingAnimation(
                        `I'm currently seeking On-the-Job Training
                    opportunities. Feel free to reach out if you have any
                    questions, projects you'd like to collaborate on, or
                    just want to connect!`,
                        1,
                        0.01
                    )}
                </p>

                {/* Contact Form */}

                {/* Direct Contact Info */}
                <div className="mt-12 border-t border-gray-700 pt-8">
                    <h2 className="text-2xl font-semibold text-text mb-4">
                        {useWritingAnimation("Get in Touch Directly", 1, 0.05)}
                    </h2>
                    <ul>
                        <li className="text-text/80 mb-2 flex space-x-2 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect
                                    width="20"
                                    height="16"
                                    x="2"
                                    y="4"
                                    rx="2"
                                />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            <a
                                href={`mailto:${"patrick.medenilla23@gmail.com"}`}
                                className="text-primary hover:underline"
                            >
                                patrick.medenilla23@gmail.com
                            </a>
                        </li>
                        <li className="text-text/80 mb-2 flex space-x-2 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            <a
                                href={`tel:${"+63 9163318032"}`}
                                className="text-primary hover:underline"
                            >
                                +63 9163318032
                            </a>
                        </li>
                        <li className="text-text/80 mb-2 flex space-x-2 items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>{" "}
                            <p>Valenzuela City, Philippines</p>
                        </li>
                    </ul>
                </div>

                {/* Social Links */}
                <div className="mt-8 border-t border-gray-700 pt-8">
                    <h2 className="text-2xl font-semibold text-text mb-4">
                        {useWritingAnimation("Connect With Me", 1, 0.05)}
                    </h2>
                    <div className="flex space-x-4">
                        <a
                            href="github.com/xelfus23"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            GitHub
                        </a>
                        {/* Add LinkedIn, Twitter, or other relevant profiles here */}
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <form onSubmit={handleSubmit} className="space-y-4 2xl:px-20">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-text/70"
                        >
                            Name
                        </label>
                        <motion.input
                            variants={move}
                            initial={"initial"}
                            animate="animate"
                            custom={{ from: "right", delay: 0 }} // Pass the object
                            type="text"
                            id="name"
                            className="mt-1 p-2 w-full rounded-md border border-gray-700 bg-background/50 text-text focus:ring-primary focus:border-primary"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-text/70"
                        >
                            Email
                        </label>
                        <motion.input
                            variants={move}
                            initial={"initial"}
                            animate="animate"
                            custom={{ from: "right", delay: 0.5 }} // Pass the object
                            type="email"
                            id="email"
                            className="mt-1 p-2 w-full rounded-md border border-gray-700 bg-background/50 text-text focus:ring-primary focus:border-primary"
                            placeholder="your.email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-text/70"
                        >
                            Message
                        </label>
                        <motion.textarea
                            variants={move}
                            initial={"initial"}
                            animate="animate"
                            custom={{ from: "right", delay: 1 }} // Pass the object
                            id="message"
                            rows={4}
                            className="mt-1 p-2 w-full rounded-md border border-gray-700 bg-background/50 text-text focus:ring-primary focus:border-primary"
                            placeholder="Tell me about your project or opportunity!"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></motion.textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full hover:cursor-pointer py-3 px-6 rounded-md bg-primary text-background font-semibold hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary/50"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            <div className="absolute h-fit w-full top-0 -z-10">
                <GridBackground />
            </div>
        </div>
    );
};

export default Contact;
