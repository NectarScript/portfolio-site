"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, Cloud, Brain, GraduationCap } from "lucide-react";
import { useRef } from "react";

const journeyItems = [
    {
        year: "2025",
        title: "AI Intern",
        company: "IT-Networkz Infosystems Pvt. Ltd.",
        description: "Built AI-assisted tools using Python, worked with LLM pipelines and automation scripts in a team environment. Gained hands-on experience integrating AI capabilities into practical workflows.",
        icon: Brain,
    },
    {
        year: "2024",
        title: "Salesforce CRM Intern",
        company: "Kavin India Pvt. Ltd.",
        description: "Managed Salesforce administration tasks, designed custom workflows, and implemented automation using Flow and Apex triggers.",
        icon: Cloud,
    },
    {
        year: "2023 - Present",
        title: "B.Tech Information Technology",
        company: "Priyadarshini College of Engineering and Technology",
        description: "Currently pursuing B.Tech in Information Technology with a focus on software development, cloud fundamentals, and data structures. Actively building academic and personal projects to strengthen practical skills.",
        icon: GraduationCap,
    },
];

export function Journey() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 20%"]
    });

    // Animate line height from top to bottom based on scroll
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <Section id="journey" className="bg-[#0a0a0a] py-[100px] relative overflow-hidden">
            {/* Subtle background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-[1100px] mx-auto px-[24px] md:px-[48px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center md:text-left"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-md">
                        Experience & Education
                    </span>
                    <h2
                        className="text-white mb-6 tracking-tight font-black text-4xl md:text-5xl"
                    >
                        My Journey
                    </h2>
                    <p
                        className="text-neutral-400 mb-4 font-medium md:mx-0 mx-auto"
                        style={{ fontSize: '16px', lineHeight: 1.8, maxWidth: '640px' }}
                    >
                        I’m an Information Technology engineering student passionate about creating real-world software solutions. My work spans full-stack development, cloud platforms, and AI-powered applications. I focus on building practical systems that combine clean engineering with modern user experiences.
                    </p>
                    <p
                        className="text-neutral-400 font-medium md:mx-0 mx-auto"
                        style={{ fontSize: '16px', lineHeight: 1.8, maxWidth: '640px' }}
                    >
                        Through internships and hands-on projects, I’ve developed experience in CRM platforms, intelligent applications, and scalable software design. I’m continuously learning and refining my skills to grow into a versatile software engineer.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative pb-10" ref={containerRef}>
                    {/* Background Line */}
                    <div className="absolute left-[15px] top-4 bottom-0 w-[2px] bg-neutral-800 md:left-[20%] md:-translate-x-[1px]" />

                    {/* Animated Neon Gradient Line */}
                    <motion.div
                        className="absolute left-[15px] top-4 w-[2px] bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400 md:left-[20%] md:-translate-x-[1px] shadow-[0_0_15px_rgba(59,130,246,0.8)] z-0 rounded-full"
                        style={{ height: lineHeight }}
                    />

                    {journeyItems.map((item, index) => (
                        <div key={index} className="relative pl-12 md:pl-0 md:grid md:grid-cols-5 gap-8 mb-16 group">

                            {/* Year/Date */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="hidden md:flex flex-col items-end col-span-1 text-right pt-[12px] pr-8"
                            >
                                <span className="font-mono text-[14px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                                    {item.year}
                                </span>
                            </motion.div>

                            {/* Timeline Node */}
                            <div className="absolute left-[9px] top-[16px] md:left-[20%] transform md:-translate-x-[7px] w-[14px] h-[14px] flex items-center justify-center z-10">
                                {/* Pulse effect */}
                                <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-60"></div>
                                {/* Inner glowing node */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 shadow-[0_0_15px_rgba(59,130,246,0.9)] border-2 border-[#0a0a0a]"></div>
                            </div>

                            {/* Mobile Year Badge (replaces year on small screens) */}
                            <motion.div
                                initial={{ opacity: 0, y: -5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                className="block md:hidden mb-3"
                            >
                                <span className="inline-block font-mono text-[13px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                    {item.year}
                                </span>
                            </motion.div>

                            {/* Content Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                className="col-span-4"
                            >
                                <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/[0.07] shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300 hover:-translate-y-[4px] relative overflow-hidden group/card">

                                    {/* Card hover gradient highlight */}
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <h3 className="text-xl md:text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                                            {item.title}
                                        </h3>
                                        {/* Icon subtle display */}
                                        <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-cyan-400/80">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <p className="text-blue-300/90 mb-4 font-medium text-[15px]">
                                        {item.company}
                                    </p>
                                    <p className="text-neutral-400 font-medium text-[15px] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
