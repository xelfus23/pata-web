import { motion } from "framer-motion";
import Link from "next/link";

interface AnimatedButtonProps {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
    external?: boolean;
}

const AnimatedButton = ({
    href,
    children,
    variant = "primary",
    className = "",
    external = false,
}: AnimatedButtonProps) => {
    // Define styles based on variant
    const getVariantStyles = () => {
        switch (variant) {
            case "primary":
                return "bg-primary text-background hover:bg-primary/90";
            case "secondary":
                return "bg-secondary text-text hover:bg-secondary/90";
            case "outline":
                return "border border-primary text-primary hover:bg-primary/10";
            default:
                return "bg-primary text-background hover:bg-primary/90";
        }
    };

    const buttonStyles = `px-6 py-3 rounded-md font-medium transition-colors duration-300 ${getVariantStyles()} ${className}`;

    // Create motion props
    const motionProps = {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.97 },
        transition: { duration: 0.2 },
    };

    if (external) {
        return (
            <motion.a
                href={href}
                className={buttonStyles}
                target="_blank"
                rel="noopener noreferrer"
                {...motionProps}
            >
                {children}
            </motion.a>
        );
    }

    return (
        <Link href={href} passHref>
            <motion.span className={buttonStyles} {...motionProps}>
                {children}
            </motion.span>
        </Link>
    );
};

export default AnimatedButton;
