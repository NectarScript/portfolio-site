"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
    { name: "Java", icon: "/icons/java.svg", color: "#EA2D2E" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", color: "#3776AB" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#F7DF1E" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/38BDF8", color: "#38BDF8" },
    { name: "Salesforce", icon: "/icons/salesforce.svg", color: "#00A1E0" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "#F05032" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933" },
];

function SkillItem({ skill }: { skill: any }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group flex flex-col items-center gap-3"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-[var(--color-surface)] border backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-[var(--color-surface)]"
                style={{
                    borderColor: isHovered ? skill.color : 'var(--color-border)',
                    boxShadow: isHovered ? `0 0 20px 2px ${skill.color}33` : `0 0 0 0 ${skill.color}00`,
                }}
            >
                <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 md:w-10 md:h-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    loading="lazy"
                />
            </div>
            <span
                className="transition-colors duration-300"
                style={{
                    color: isHovered ? skill.color : 'var(--color-muted)',
                    fontFamily: '"DM Mono", monospace',
                    fontSize: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                }}
            >
                {skill.name}
            </span>
        </div>
    );
}

export function TechMarquee() {
    return (
        <section className="relative w-full overflow-hidden bg-[var(--color-bg)] py-10 border-b border-[var(--color-border)]">
            {/* Gradient Masks for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 25,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="flex gap-16 pr-16 whitespace-nowrap"
                    style={{ width: "fit-content" }}
                >
                    {/* Double the list for seamless loop */}
                    {[...skills, ...skills].map((skill, index) => (
                        <SkillItem key={index} skill={skill} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
