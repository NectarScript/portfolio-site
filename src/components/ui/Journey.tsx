"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase, Cloud, Brain, GraduationCap } from "lucide-react";

const journeyItems = [
    {
        year: "2025",
        title: "AI Intern",
        company: "IT-Networkz Infosystems Pvt. Ltd.",
        description: "Worked with Python libraries and AI tools in a supervised project environment.",
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
    return (
        <Section id="journey" className="bg-navy-900/50">
            <div className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
                        My Journey
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-electric-blue to-teal-500 mx-auto rounded-full mb-8" />

                    <p className="text-electric-blue font-mono text-sm tracking-widest uppercase mb-4">
                        B.Tech in Information Technology — Engineering Student
                    </p>

                    <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto">
                        I’m an Information Technology engineering student passionate about creating real-world software solutions. My work spans full-stack development, cloud platforms, and AI-powered applications. I focus on building practical systems that combine clean engineering with modern user experiences.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mx-auto mt-4">
                        Through internships and hands-on projects, I’ve developed experience in CRM platforms, intelligent applications, and scalable software design. I’m continuously learning and refining my skills to grow into a versatile software engineer.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {journeyItems.map((item, index) => (
                        <div key={index} className="relative pl-8 md:pl-0 md:grid md:grid-cols-5 gap-8 mb-12 group">
                            {/* Timeline Line */}
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-navy-700 md:left-1/5 group-last:bottom-auto group-last:h-full">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-navy-800 border-2 border-electric-blue group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                            </div>

                            {/* Year/Date (Desktop: Left, Mobile: Hidden/Inline) */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="hidden md:block col-span-1 text-right pt-1 pr-8"
                            >
                                <span className="text-electric-blue font-mono text-sm font-bold tracking-wider">
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
                                <div className="bg-navy-800/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-electric-blue/30 transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/5 hover:-translate-y-1">
                                    <div className="flex items-center gap-3 mb-2 md:mb-4">
                                        <span className="md:hidden text-xs text-electric-blue font-mono font-bold border border-electric-blue/20 px-2 py-1 rounded">
                                            {item.year}
                                        </span>
                                        <item.icon className="w-5 h-5 text-teal-500 hidden md:block" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-electric-blue transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mb-3">{item.company}</p>
                                    <p className="text-gray-300 leading-relaxed text-sm">
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
