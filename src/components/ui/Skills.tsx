"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Cloud, Code, Brain, Terminal, Database } from "lucide-react";
import { useRef, useState } from "react";

const skillCategories = [
    {
        title: "Salesforce & Cloud",
        icon: Cloud,
        skills: ["Salesforce Administration", "Apex", "Lightning Web Components", "Flow Automation"],
        className: "md:col-span-2 md:row-span-2",
    },
    {
        title: "Programming Languages",
        icon: Code,
        skills: ["Java", "Python", "JavaScript"],
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "AI & LLM",
        icon: Brain,
        skills: ["LLM Integration", "Prompt Engineering", "Resume Parsing", "ChatBot Developement"],
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Tools",
        icon: Terminal,
        skills: ["Git", "GitHub", "VS Code", "IntelliJ", "Power BI"],
        className: "md:col-span-1 md:row-span-2",
    },
    {
        title: "Databases",
        icon: Database,
        skills: ["MySQL", "MongoDB", "Supabase"],
        className: "md:col-span-2 md:row-span-1",
    },
];

function BentoItem({
    category,
    index
}: {
    category: typeof skillCategories[0],
    index: number
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            className={`
                group relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/80 backdrop-blur p-6 transition-all duration-300 hover:border-white/20
                ${category.className || "col-span-1 row-span-1"}
            `}
            style={{
                '--mouse-x': `${mousePosition.x}px`,
                '--mouse-y': `${mousePosition.y}px`,
            } as React.CSSProperties}
        >
            {/* Cybernetic Spotlight effect */}
            <div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.1), transparent 40%)',
                }}
            />
            {/* Cybernetic border glow effect */}
            <div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.4), transparent 40%)',
                    zIndex: 0,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '1px'
                }}
            />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                        <category.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-white font-semibold tracking-wide text-lg">
                        {category.title}
                    </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {category.skills.map((skill) => (
                        <span
                            key={skill}
                            className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 shadow-sm transition-colors group-hover:border-neutral-600 group-hover:text-white"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export function Skills() {
    return (
        <Section id="skills" className="bg-[var(--color-bg)] py-[80px]">
            <div className="max-w-[1100px] mx-auto px-[24px] md:px-[48px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 md:mb-16 text-center md:text-left"
                >
                    <span className="section-label">
                        Technical Expertise
                    </span>
                    <h2
                        className="text-[var(--color-text)] mb-8 tracking-tight font-black"
                        style={{ fontSize: '32px' }}
                    >
                        Skills & Technologies
                    </h2>
                </motion.div>

                {/* Cybernetic Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[minmax(180px,auto)] gap-6">
                    {skillCategories.map((category, index) => (
                        <BentoItem key={index} category={category} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
