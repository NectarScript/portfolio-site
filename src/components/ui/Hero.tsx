"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDown, Linkedin, Github, Mail, Download } from "lucide-react";

export function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative min-h-[100vh] w-full overflow-hidden flex flex-col justify-center md:pr-[10vw] lg:pr-[15vw] xl:pr-[20vw]">
            {/* Background Animation Layer */}
            <img
                src="/hero-animation.webp"
                alt=""
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    zIndex: -1,
                    pointerEvents: 'none',
                    willChange: 'transform',
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                }}
            />

            {/* Dark Overlay over Animation for contrast */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
            />

            {/* Background Radial Gradient */}
            <div
                className="absolute left-0 top-0 w-[600px] h-[600px] bg-[#3b82f6] opacity-[0.07] rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4 pointer-events-none z-0"
            />

            {/* Content Overlay */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 w-full max-w-[1100px] mx-auto px-[48px] flex flex-col items-start text-left pt-24 md:pt-0"
            >
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="mb-8"
                >
                    {/* Availability Badge */}
                    <div
                        className="inline-flex items-center gap-2"
                        style={{
                            padding: '6px 16px',
                            borderRadius: 'var(--radius-pill)',
                            background: 'rgba(59, 130, 246, 0.08)',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            fontFamily: '"DM Mono", monospace',
                            fontSize: '11px',
                            color: 'var(--color-text)'
                        }}
                    >
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            @keyframes custom-pulse {
                                0%, 100% { opacity: 1; }
                                50% { opacity: 0.3; }
                            }
                        `}} />
                        <span
                            className="block rounded-full"
                            style={{
                                width: '6px',
                                height: '6px',
                                background: 'var(--color-accent)',
                                animation: 'custom-pulse 2s infinite'
                            }}
                        />
                        Available for Work
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="text-[var(--color-text)] mb-8 font-black tracking-tight"
                    style={{
                        fontSize: 'clamp(40px, 6vw, 64px)',
                        lineHeight: 1.05
                    }}
                >
                    <span className="block mb-2">Learning.</span>
                    <span className="block mb-2 text-[var(--color-accent)]">Building.</span>
                    <span className="block">Improving.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                    className="mb-10 text-[var(--color-muted)] font-medium"
                    style={{
                        fontSize: '16px',
                        maxWidth: '520px',
                        lineHeight: 1.7
                    }}
                >
                    I&apos;m Piyush, an IT engineering student from Nagpur building real projects across full-stack development, AI, and cloud platforms. I&apos;ve interned at two companies, shipped apps using Python, React, and LLMs, and I&apos;m focused on growing into a software engineer who actually builds things — not just talks about them.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                >
                    <Link href="#work" className="btn-ghost w-full sm:w-auto group/arrow">
                        See My Projects <span className="inline-block transition-transform duration-200 group-hover/arrow:translate-x-[3px]">→</span>
                    </Link>
                    <Link href="#contact" className="btn-primary w-full sm:w-auto">
                        Let&apos;s Talk
                    </Link>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="hero-btn-resume w-full sm:w-auto"
                    >
                        <Download className="w-4 h-4" /> Download Resume
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    delay: 1.2,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className="absolute bottom-10 left-6 md:left-12 text-[var(--color-muted)] z-10 hidden md:block"
            >
                <div className="flex flex-col items-center gap-2">
                    <span
                        className="uppercase tracking-widest opacity-70"
                        style={{ fontFamily: '"DM Mono", monospace', fontSize: '10px' }}
                    >
                        Scroll
                    </span>
                    <ArrowDown className="w-4 h-4 text-[var(--color-muted)]" />
                </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-10 right-6 md:right-[48px] z-20 flex flex-col md:flex-row gap-4"
            >
                <div className="flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/piyush-chiwande-481875292/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-icon"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="w-4 h-4 text-[var(--color-muted)] transition-colors hover:text-white" />
                    </a>
                    <a
                        href="https://github.com/NectarScript"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-icon"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-4 h-4 text-[var(--color-muted)] transition-colors hover:text-white" />
                    </a>
                    <a
                        href="mailto:piyushchiwande19@gmail.com"
                        className="btn-icon"
                        aria-label="Email Me"
                    >
                        <Mail className="w-4 h-4 text-[var(--color-muted)] transition-colors hover:text-white" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
