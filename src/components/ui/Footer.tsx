"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const formatter = new Intl.DateTimeFormat('en-US', {
                timeZone: 'Asia/Kolkata',
                hour: 'numeric',
                minute: '2-digit',
                hour12: true
            });
            setTime(formatter.format(new Date()));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="w-full relative py-12 px-6 md:px-12 border-t border-[var(--color-border)] bg-[var(--color-bg)] overflow-hidden">
            {/* Background Glow Blob */}
            <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-[#8b5cf6] opacity-10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-[1100px] mx-auto flex flex-col gap-16 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    {/* Time & Location */}
                    <div className="flex flex-col gap-1">
                        <span className="text-[14px] font-bold text-white tracking-wide">{time || "..."}</span>
                        <span className="text-[14px] text-[var(--color-muted)]">Nagpur, IN</span>
                    </div>

                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        <Link href="https://github.com/NectarScript" target="_blank" className="btn-icon lg" aria-label="GitHub">
                            <Github size={18} className="text-[var(--color-muted)] transition-colors hover:text-white" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/piyush-chiwande-481875292/" target="_blank" className="btn-icon lg" aria-label="LinkedIn">
                            <Linkedin size={18} className="text-[var(--color-muted)] transition-colors hover:text-white" />
                        </Link>
                        <Link href="mailto:piyushchiwande19@gmail.com" className="btn-icon lg" aria-label="Email">
                            <Mail size={18} className="text-[var(--color-muted)] transition-colors hover:text-white" />
                        </Link>
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[14px] text-[var(--color-muted)]">Available for projects</span>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-[12px] text-[var(--color-muted)] font-mono opacity-80 gap-4">
                    <span>&lt; built with code/&gt;</span>
                    <span className="font-sans">© {new Date().getFullYear()} Piyush Chiwande. All rights reserved.</span>
                    <span>• {new Date().getFullYear()} •</span>
                </div>
            </div>
        </footer>
    );
}
