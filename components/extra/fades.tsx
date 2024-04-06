"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export function FadeInObject({
    children,
    className,
}: Readonly<{
    children: ReactNode;
    className?: string;
}>): JSX.Element {
    const [isTextVisible, setIsTextVisible] = useState(false);
    const domRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setIsTextVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <div
            className={`${className} fade-in-section ${
                isTextVisible ? "is-visible" : ""
            }`}
            ref={domRef}>
            {children}
        </div>
    );
}
