"use client";

import { motion } from "framer-motion";
import { Section } from "./Section";
import Image from "next/image";

const certifications = [
    {
        name: "Azure Fundamentals",
        issuer: "Microsoft | 2025",
        image: "/Certifications/azure-fundamental.jpg.jpg",
    },
    {
        name: "AWS Foundations of Prompt Engineering",
        issuer: "Amazon Web Services | 2026",
        image: "/Certifications/aws-prompt-engineering.jpg.jpg",
    },
    {
        name: "Software Engineering Job Simulation",
        issuer: "Forage | 2026",
        image: "/Certifications/software-engineering-simulation.jpg.jpeg",
    },
    {
        name: "Claude Code in Action",
        issuer: "Anthropic | 2026",
        image: "/Certifications/claude-code-in-action.jpg.jpg",
    },
    {
        name: "Power BI Data Analytics",
        issuer: "Udemy / Microsoft | 2026",
        image: "/Certifications/power-bi-udemy.jpg.jpg",
    },
    {
        name: "Design Fundamentals with AI",
        issuer: "Adobe | 2025",
        image: "/Certifications/design-ai-adobe.jpg.jpg",
    },
];

function CertCard({ cert }: { cert: (typeof certifications)[0] }) {
    return (
        <div className="cert-card">
            <div className="cert-card__image-wrapper">
                <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    sizes="280px"
                    className="cert-card__image"
                />
            </div>
            <div className="cert-card__body">
                <h3 className="cert-card__name">{cert.name}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
            </div>
        </div>
    );
}

export function Certifications() {
    const doubled = [...certifications, ...certifications];

    return (
        <Section id="certifications" className="cert-section">
            <div className="max-w-[1100px] mx-auto px-[24px] md:px-[48px]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 md:mb-16 text-center md:text-left"
                >
                    <span className="section-label">Credentials</span>
                    <h2
                        className="text-[var(--color-text)] mb-8 tracking-tight font-black"
                        style={{ fontSize: "32px" }}
                    >
                        Certifications &amp; Badges
                    </h2>
                </motion.div>
            </div>

            {/* Marquee container */}
            <div className="cert-marquee-container">
                {/* Gradient fade masks */}
                <div className="cert-fade cert-fade--left" />
                <div className="cert-fade cert-fade--right" />

                {/* Single row — right to left */}
                <div className="cert-marquee-row group">
                    <div className="cert-marquee-track cert-marquee-track--rtl">
                        {doubled.map((cert, i) => (
                            <CertCard key={`r1-${i}`} cert={cert} />
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
