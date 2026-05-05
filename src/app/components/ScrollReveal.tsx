"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
    duration?: number;
    distance?: string;
    once?: boolean;
}

export default function ScrollReveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 700,
    distance = "30px",
    once = true,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.style.transitionDelay = `${delay}ms`;
                    element.classList.add("scroll-revealed");
                    if (once) observer.unobserve(element);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [delay, once]);

    const directionMap: Record<string, string> = {
        up: `translateY(${distance})`,
        down: `translateY(-${distance})`,
        left: `translateX(${distance})`,
        right: `translateX(-${distance})`,
    };

    return (
        <div
            ref={ref}
            className={`scroll-reveal ${className}`}
            style={{
                transform: directionMap[direction],
                transitionDuration: `${duration}ms`,
            }}
        >
            {children}
        </div>
    );
}
