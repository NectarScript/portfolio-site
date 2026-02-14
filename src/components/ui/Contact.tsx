"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import { Button } from "./Button";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
    return (
        <Section id="contact" className="bg-navy-900 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text & Socials */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
                        Let's Build Something <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-teal-500">
                            Together
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-md">
                        I’m open to internships, collaborations, and engineering opportunities.
                    </p>

                    <div className="flex gap-6">
                        {[
                            { icon: Github, href: "https://github.com/NectarScript", label: "GitHub" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/piyush-chiwande-481875292/", label: "LinkedIn" },
                            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                            { icon: Mail, href: "mailto:piyushchiwande19@gmail.com", label: "Email" },
                        ].map((social) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
                                aria-label={social.label}
                            >
                                <social.icon className="w-6 h-6" />
                            </Link>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-navy-800 p-8 rounded-2xl border border-white/5 shadow-2xl"
                >
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-400">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-400">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all resize-none"
                                placeholder="Tell me about your project..."
                            />
                        </div>

                        <Button className="w-full" size="lg">
                            Send Message
                        </Button>
                    </form>
                </motion.div>
            </div>
        </Section>
    );
}
