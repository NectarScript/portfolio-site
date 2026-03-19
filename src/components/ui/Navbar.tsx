"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";

const navLinks = [
    { name: "Journey", href: "#journey" },
    { name: "Certifications", href: "#certifications" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState("dark");
    const [activeLink, setActiveLink] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-[var(--color-bg)]/80 backdrop-blur-md border-b py-4 border-[var(--color-border)]"
                        : "bg-transparent py-4"
                )}
            >
                <div className="w-full max-w-[1440px] mx-auto px-6 md:px-[48px] lg:px-[64px] xl:px-[96px] flex items-center justify-between">
                    <Link href="/" className="flex flex-col items-start group">
                        <span className="text-[22px] font-bold text-[var(--color-text)] transition-colors tracking-tight">
                            Piyush<span className="text-[var(--color-accent)]">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setActiveLink(link.href)}
                                className="text-[14px] font-medium transition-colors"
                                style={{
                                    color: activeLink === link.href ? 'var(--color-text)' : 'var(--color-muted)'
                                }}
                                onMouseEnter={(e) => {
                                    if (activeLink !== link.href) e.currentTarget.style.color = 'var(--color-text)';
                                }}
                                onMouseLeave={(e) => {
                                    if (activeLink !== link.href) e.currentTarget.style.color = 'var(--color-muted)';
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button
                            onClick={toggleTheme}
                            className="btn-icon"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <Sun size={16} className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]" /> : <Moon size={16} className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]" />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="btn-icon"
                            aria-label="Toggle Theme"
                        >
                            {theme === "dark" ? <Sun size={14} className="text-[var(--color-muted)]" /> : <Moon size={14} className="text-[var(--color-muted)]" />}
                        </button>
                        <button
                            className="text-[var(--color-text)]"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[var(--color-bg)] pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => {
                                        setActiveLink(link.href);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="text-2xl font-bold text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
