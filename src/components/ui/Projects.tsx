"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, Code2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./Button";

const projects = [
    {
        title: "ATS Resume Analyzer",
        description: "AI-powered web application that analyzes resumes against job descriptions using LLM scoring to provide actionable feedback.",
        tags: ["Python", "Ollama(LLM)", "Streamlit", "Pandas"],
        gradient: "from-purple-600 to-blue-600",
        links: { demo: "#", repo: "https://github.com/NectarScript/ats-resume-analyzer" },
    },
    {
        title: "AI Chatbot",
        description: "Real-time conversational AI system capable of context-aware interactions and sentiment analysis for customer support.",
        tags: ["Python", "Streamlit", "NLP", "Ollama(Phi Model)"],
        gradient: "from-teal-500 to-emerald-500",
        links: { demo: "#", repo: "https://github.com/NectarScript/chatbot-streamlit-ai" },
    },
    {
        title: "Java Analytics Dashboard",
        description: "Desktop application for visualizing complex CSV datasets. Features interactive charts, filtering, and export capabilities.",
        tags: ["Java 17", "Swing GUI", "JFreeChart", "Maven"],
        gradient: "from-orange-500 to-red-500",
        links: { demo: "#", repo: "https://github.com/NectarScript/java-analytics-dashboard" },
    },
];

export function Projects() {
    return (
        <Section id="work" className="bg-navy-900">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
            >
                <span className="text-electric-blue font-mono text-sm tracking-widest uppercase mb-2 block">
                    Selected Works
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white font-heading">
                    Featured Projects
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative bg-navy-800 rounded-2xl overflow-hidden border border-white/5 hover:border-electric-blue/50 transition-colors duration-500"
                    >
                        {/* Image Placeholder / Gradient */}
                        <div className={`h-48 md:h-64 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                            <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-transparent transition-colors duration-500" />
                            <div className="absolute bottom-4 right-4 bg-navy-900/80 backdrop-blur-md p-2 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <Code2 className="w-6 h-6 text-white" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8">
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs font-mono text-teal-400 bg-teal-400/10 px-3 py-1 rounded-full border border-teal-400/20"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">

                                <Link
                                    href={project.links.repo}
                                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                                >
                                    <Github className="w-4 h-4" />
                                    Source Code
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Button variant="ghost" size="lg" className="text-electric-blue">
                    View All Projects
                </Button>
            </div>
        </Section>
    );
}
