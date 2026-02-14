"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Cloud, Code, Brain, Terminal, Database } from "lucide-react";

const skillCategories = [
    {
        title: "Salesforce & Cloud",
        icon: Cloud,
        skills: ["Salesforce Administration", "Apex", "Lightning Web Components", "Flow Automation"],
        gradient: "from-blue-500 to-cyan-500",
        bgImage: "/skills/salesforce.jpg",
    },
    {
        title: "Programming",
        icon: Code,
        skills: ["Java", "Python", "JavaScript"],
        gradient: "from-emerald-500 to-teal-500",
        bgImage: "/skills/programming.jpg",
    },
    {
        title: "AI & LLM",
        icon: Brain,
        skills: ["LLM Integration", "Prompt Engineering", "Resume Parsing", "ChatBot Developement"],
        gradient: "from-purple-500 to-pink-500",
        bgImage: "/skills/ai.jpg",
    },
    {
        title: "Tools",
        icon: Terminal,
        skills: ["Git", "GitHub", "VS Code", "IntelliJ", "Power BI"],
        gradient: "from-orange-500 to-amber-500",
        bgImage: "/skills/tools.jpg",
    },
    {
        title: "Databases",
        icon: Database,
        skills: ["MySQL", "MongoDB", "Supabase"],
        gradient: "from-indigo-500 to-blue-500",
        bgImage: "/skills/tools.jpg",
    },
];

export function Skills() {
    return (
        <Section id="skills" className="bg-[#0B0F14] py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20 text-center"
            >
                <span className="text-[#2DD4BF] font-mono text-sm tracking-widest uppercase mb-3 block opacity-80">
                    Technical Expertise
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] font-heading tracking-tight">
                    Skills & Technologies
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                        className="group relative bg-slate-900/55 backdrop-blur-[18px] p-8 rounded-[28px] overflow-hidden min-h-[320px] flex flex-col justify-end shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-all duration-300 border border-white/[0.08]"
                    >
                        {/* Background Image Layer */}
                        <div className="absolute inset-0 z-0">
                            <img
                                src={category.bgImage}
                                alt=""
                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                            />

                            {/* Dark overlay for readability */}
                            <div className="absolute inset-0 bg-black/65" />
                        </div>


                        {/* 1. Teal Top Right Gradient */}
                        <div
                            className="absolute -top-[20%] -right-[20%] w-[80%] h-[80%] rounded-full pointer-events-none z-0 opacity-100 transition-opacity duration-500"
                            style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.15) 0%, transparent 70%)' }}
                        />

                        {/* 2. Warm Bottom Left Highlight */}
                        <div
                            className="absolute -bottom-[20%] -left-[20%] w-[80%] h-[80%] rounded-full pointer-events-none z-0 opacity-100 transition-opacity duration-500"
                            style={{ background: 'radial-gradient(circle, rgba(255,140,60,0.12) 0%, transparent 70%)' }}
                        />

                        {/* Dark Gradient Overlay for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/90 via-[#0B0F14]/40 to-transparent z-0" />

                        <div className="relative z-10">
                            <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/[0.12] shadow-inner group-hover:scale-105 transition-transform duration-300">
                                <category.icon className="w-8 h-8 text-[#2DD4BF]" />
                            </div>

                            <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4 tracking-wide">{category.title}</h3>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-sm font-medium text-[#CFCFCF] bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 group-hover:bg-white/10 group-hover:border-[#2DD4BF]/20 transition-colors duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
