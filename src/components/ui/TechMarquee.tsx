"use client";

import { motion } from "framer-motion";

const skills = [
    { name: "Java", icon: "/icons/java.svg" },
    { name: "Python", icon: "https://cdn.simpleicons.org/python/white" },
    { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/white" },
    { name: "React", icon: "https://cdn.simpleicons.org/react/white" },
    { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/white" },
    { name: "Salesforce", icon: "/icons/salesforce.svg" },
    { name: "Git", icon: "https://cdn.simpleicons.org/git/white" },
    { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/white" },
];

export function TechMarquee() {
    return (
        <section className="relative w-full overflow-hidden bg-navy-900 py-10 border-b border-white/5">
            {/* Gradient Masks for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-navy-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy-900 to-transparent z-10 pointer-events-none" />

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
                        <div key={index} className="group flex flex-col items-center gap-3">
                            <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-navy-800/50 border border-white/5 backdrop-blur-sm group-hover:border-electric-blue/30 group-hover:bg-navy-800/80 transition-all duration-300 group-hover:scale-110 shadow-lg shadow-transparent group-hover:shadow-electric-blue/10">
                                <img
                                    src={skill.icon}
                                    alt={skill.name}
                                    className="w-8 h-8 md:w-10 md:h-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                    loading="lazy"
                                />
                            </div>
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest group-hover:text-electric-blue transition-colors">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
