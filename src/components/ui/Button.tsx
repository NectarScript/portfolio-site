"use strict";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const baseStyles =
            "relative inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-electric-blue/50 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group";

        const variants = {
            primary:
                "bg-gradient-to-r from-electric-blue to-teal-500 text-white shadow-lg shadow-electric-blue/20 hover:shadow-electric-blue/40 hover:scale-[1.02]",
            secondary:
                "bg-navy-800 text-white border border-navy-700 hover:bg-navy-700 hover:border-electric-blue/50",
            outline:
                "bg-transparent border border-electric-blue/30 text-electric-blue hover:bg-electric-blue/10",
            ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                <span className="relative z-10 flex items-center gap-2">{children}</span>
                {variant === "primary" && (
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 blur-md" />
                )}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
