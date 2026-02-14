import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className, id }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "relative w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-32",
                className
            )}
        >
            {children}
        </section>
    );
}
