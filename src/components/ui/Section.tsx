import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import React from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    style?: React.CSSProperties;
}

export function Section({ children, className, id, style }: SectionProps) {
    return (
        <section
            id={id}
            style={style}
            className={cn(
                "relative w-full overflow-hidden",
                className
            )}
        >
            {children}
        </section>
    );
}
