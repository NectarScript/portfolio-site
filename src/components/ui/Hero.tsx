"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import { ArrowDown, Linkedin, Github, Mail } from "lucide-react";

export function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center">
            {/* Background Animation */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-animation.webp"
                    alt="Cinematic Background"
                    fill
                    priority
                    className="object-cover opacity-80 md:opacity-100"
                    style={{ objectPosition: "75% center" }}
                    quality={100}
                />
                {/* Cinematic Gradients */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/60 to-transparent z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/30 z-0" />
            </div>

            {/* Content Overlay */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 md:pl-20 md:pr-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-24 md:pt-0"
            >
                <div className="col-span-1 md:col-span-7 lg:col-span-5 flex flex-col items-start text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    >
                        <h2 className="text-electric-blue font-medium tracking-widest text-sm uppercase mb-6 pl-1">
                            Software Engineering Student
                        </h2>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 font-heading leading-tight"
                    >
                        <span className="block mb-2">Learning.</span>
                        <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-teal-500">
                            Building.
                        </span>
                        <span className="block">Improving.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                        className="text-gray-400 text-lg md:text-xl mb-6 leading-relaxed font-light max-w-lg"
                    >
                        I'm Piyush, an IT engineering student focused on learning and building practical software projects. I work with Java, Python, and modern web technologies to develop clean, functional applications.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                        className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed font-light max-w-lg"
                    >
                        Currently exploring cloud platforms and full-stack development through hands-on projects.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        <Link href="#work" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full">
                                View Work
                            </Button>
                        </Link>
                        <Link href="#contact" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full">
                                Contact Me
                            </Button>
                        </Link>
                    </motion.div>
                </div>
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
                className="absolute bottom-10 left-6 md:left-12 text-gray-400 z-10"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs uppercase tracking-widest opacity-70">Scroll</span>
                    <ArrowDown className="w-5 h-5 text-electric-blue" />
                </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-10 right-6 md:right-12 z-20 flex flex-col md:flex-row gap-4"
            >
                <div className="flex items-center gap-4 bg-navy-900/30 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 hover:border-electric-blue/30 transition-colors duration-300">
                    <a
                        href="https://www.linkedin.com/in/piyush-chiwande-481875292/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-electric-blue transition-all duration-300 hover:scale-110"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="https://github.com/NectarScript"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
                        aria-label="GitHub Profile"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                    <a
                        href="mailto:piyushchiwande19@gmail.com"
                        className="text-gray-400 hover:text-teal-400 transition-all duration-300 hover:scale-110"
                        aria-label="Email Me"
                    >
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
