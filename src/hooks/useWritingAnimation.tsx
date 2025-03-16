"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const useWritingAnimation = (
    text: string,
    duration: number,
    delay: number
) => {
    const spltText = text.split("");
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    console.log(hoveredItem);

    return spltText.map((char, index) => {
        return (
            <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: duration,
                    delay: index * delay,
                    ease: "easeInOut",
                    staggerChildren: 0.05,
                }}
                style={{
                    scale: hoveredItem === index ? 2 : 1,
                }}
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
            >
                {char}
            </motion.span>
        );
    });
};
