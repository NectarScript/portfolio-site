"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";

const projects = [
    {
        title: "ATS Resume Analyzer",
        description: "AI-powered web application that analyzes resumes against job descriptions using LLM scoring to provide actionable feedback.",
        tags: ["Python", "Ollama(LLM)", "Streamlit", "Pandas"],
        features: [
            "Real-time resume parsing and analysis",
            "LLM scoring against job descriptions",
            "Actionable feedback generation",
            "Interactive Streamlit interface"
        ],
        image: "/ats-resume.png", // Placeholder
        links: { demo: "#", repo: "https://github.com/NectarScript/ats-resume-analyzer" },
    },
    {
        title: "AI Chatbot",
        description: "Real-time conversational AI system capable of context-aware interactions and sentiment analysis for customer support.",
        tags: ["Python", "Streamlit", "NLP", "Ollama(Phi Model)"],
        features: [
            "Real-time conversational AI system",
            "Context-aware interactions",
            "Sentiment analysis for customer support",
            "Powered by local Phi model"
        ],
        image: "/chatbot.png", // Placeholder
        links: { demo: "#", repo: "https://github.com/NectarScript/chatbot-streamlit-ai" },
    },
    {
        title: "Java Analytics Dashboard",
        description: "Desktop application for visualizing complex CSV datasets. Features interactive charts, filtering, and export capabilities.",
        tags: ["Java 17", "Swing GUI", "JFreeChart", "Maven"],
        features: [
            "Desktop application for parsing complex CSV datasets",
            "Interactive visualization with JFreeChart",
            "Advanced data filtering and export capabilities",
            "Built entirely with Java 17 and Swing GUI"
        ],
        image: "/java-dashboard.png",
        links: { demo: "#", repo: "https://github.com/NectarScript/java-analytics-dashboard" },
    },
];

export function Projects() {
    return (
        <Section id="work" className="bg-[var(--color-bg)] py-[100px]">
            <div className="max-w-[1200px] mx-auto px-6 md:px-[48px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-left"
                >
                    <span
                        className="uppercase tracking-widest text-[12px] font-bold text-[var(--color-muted)] pb-2 block w-fit border-b-2 border-purple-500 mb-4"
                        style={{ letterSpacing: '0.15em' }}
                    >
                        FEATURED WORK
                    </span>
                    <h2
                        className="text-[var(--color-text)] tracking-tight font-black"
                        style={{ fontSize: '42px' }}
                    >
                        Recent <span className="text-[var(--color-accent)]">Projects</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col gap-16">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="group flex flex-col md:flex-row items-stretch bg-[var(--color-card)] rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-lg transition-all duration-300 hover:border-[#3a3a3a]"
                        >
                            {/* Image Container */}
                            <div className={`w-full md:w-[55%] relative flex items-center justify-center p-8 lg:p-12 bg-[#050505] border-b md:border-b-0 border-[var(--color-border)] order-1 ${index % 2 === 1 ? 'md:order-2 md:border-l' : 'md:border-r'}`}>
                                <div className="w-full aspect-video rounded-xl overflow-hidden relative shadow-2xl border border-[var(--color-border)] bg-[#0a0a0a] group-hover:scale-[1.02] transition-transform duration-500">
                                    <div className="absolute inset-0 z-10 bg-gradient-to-tr from-purple-500/10 to-blue-500/10 pointer-events-none" />
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className={`w-full md:w-[45%] flex flex-col p-8 lg:p-12 justify-center order-2 ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                                    {project.title}
                                </h3>
                                <p className="text-[var(--color-muted)] text-[15px] leading-relaxed mb-6 font-medium">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-muted)] rounded-full px-4 py-1.5 text-[12px] font-semibold"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-white font-semibold text-[16px] mb-4">Key Features:</h4>
                                    <ul className="space-y-3">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start text-[var(--color-muted)] text-[14px] font-medium leading-relaxed">
                                                <span className="mr-3 text-white text-[12px] mt-1">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
                                    <Link
                                        href={project.links.demo}
                                        className="bg-white text-black hover:bg-gray-200 transition-colors rounded-lg px-6 py-2.5 flex items-center justify-center gap-2 font-semibold text-[14px]"
                                    >
                                        <ExternalLink className="w-4 h-4" /> Live
                                    </Link>
                                    <Link
                                        href={project.links.repo}
                                        className="bg-transparent text-white border border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors rounded-lg px-6 py-2.5 flex items-center justify-center gap-2 font-semibold text-[14px]"
                                    >
                                        <Github className="w-4 h-4" /> Code
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
