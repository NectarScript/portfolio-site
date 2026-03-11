"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
    return (
        <Section
            id="contact"
            className="text-center relative border-t border-[var(--color-border)] bg-[var(--color-bg)]"
            style={{ padding: 'var(--space-2xl) var(--space-lg)' }}
        >
            <div
                className="absolute inset-0 z-0 bg-[var(--color-bg)] pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 60%), var(--color-bg)'
                }}
            />

            <div className="relative z-10 max-w-[600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label mb-4 block text-center">
                        Get In Touch
                    </span>
                    <h2
                        className="text-[var(--color-text)] mb-6 font-black tracking-tight"
                        style={{ fontSize: '32px' }}
                    >
                        Let's Build Something
                    </h2>
                    <p
                        className="mb-8 mx-auto font-medium"
                        style={{ fontSize: '15px', color: 'var(--color-muted)', lineHeight: 1.8 }}
                    >
                        I’m open to internships, collaborations, and engineering opportunities. Drop a message if you want to chat about potential projects.
                    </p>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full"
                >
                    <form className="space-y-6 text-left">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-[13px] font-semibold tracking-wide text-[var(--color-muted)]">NAME</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-sm)] px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all font-medium"
                                    style={{ fontSize: '14px' }}
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-[13px] font-semibold tracking-wide text-[var(--color-muted)]">EMAIL</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-sm)] px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all font-medium"
                                    style={{ fontSize: '14px' }}
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-[13px] font-semibold tracking-wide text-[var(--color-muted)]">MESSAGE</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-sm)] px-4 py-3 text-[var(--color-text)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all resize-none font-medium"
                                style={{ fontSize: '14px' }}
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <button type="button" className="btn-primary w-fit mx-auto block mt-8 font-semibold">
                            Send Message
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex gap-[16px] justify-center mt-[32px]"
                >
                    {[
                        { icon: Github, href: "https://github.com/NectarScript", label: "GitHub" },
                        { icon: Linkedin, href: "https://www.linkedin.com/in/piyush-chiwande-481875292/", label: "LinkedIn" },
                        { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                        { icon: Mail, href: "mailto:piyushchiwande19@gmail.com", label: "Email" },
                    ].map((social) => (
                        <Link
                            key={social.label}
                            href={social.href}
                            className="btn-icon lg border border-transparent hover:border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-all"
                            aria-label={social.label}
                        >
                            <social.icon className="w-[18px] h-[18px] text-[var(--color-muted)] transition-colors hover:text-white" />
                        </Link>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
