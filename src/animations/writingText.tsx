import { motion } from "framer-motion";



export const writingAnimation = (
    text: string,
    duration: number,
    delay: number
) => {
    const spltText = text.split("");
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
            >
                {char}
            </motion.span>
        );
    });
};
