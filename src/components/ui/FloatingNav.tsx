"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, User, Mail, Code, Terminal } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "#", icon: Home },
    { name: "Journey", href: "#journey", icon: Briefcase },
    { name: "Skills", href: "#skills", icon: Terminal },
    { name: "Work", href: "#work", icon: Code },
    { name: "Contact", href: "#contact", icon: Mail },
];

export function FloatingNav() {
    const [activeSection, setActiveSection] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show nav after a small delay on load
        const timer = setTimeout(() => setIsVisible(true), 1000);

        const handleScroll = () => {
            const sections = navItems.map((item) => item.href.substring(1)).filter(Boolean);

            let current = "";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        current = section;
                    }
                }
            }

            // Special case for top of page
            if (window.scrollY < 100) current = "";

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[90vw]"
        >
            <div className="flex items-center gap-2 p-2 rounded-full bg-navy-900/60 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20 ring-1 ring-white/5">
                {navItems.map((item) => {
                    const isActive =
                        (item.href === "#" && activeSection === "") ||
                        item.href === `#${activeSection}`;

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 group",
                                isActive ? "bg-white/10 text-electric-blue shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5 transition-transform duration-300 group-hover:scale-110", isActive && "scale-110")} />

                            {/* Tooltip */}
                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-navy-800 text-white text-[10px] tracking-widest uppercase rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-white/10">
                                {item.name}
                            </span>

                            {/* Active Indicator Dot */}
                            {isActive && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute -bottom-1 w-1 h-1 bg-electric-blue rounded-full"
                                    transition={{ duration: 0.3 }}
                                />
                            )}
                        </Link>
                    )
                })}
            </div>
        </motion.div>
    );
}
