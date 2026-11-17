"use client";

import { useEffect, useRef } from "react";

/*
  A hand-drawn pencil underline. It draws itself when it scrolls into view, and again when
  you hover the heading above it. Decorative only. With reduced motion it is simply shown.
*/
export function Doodle({ className = "" }: { className?: string }) {
    const ref = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const svg = ref.current;
        if (!svg) return;

        const draw = () => {
            svg.removeAttribute("data-drawn");
            // Read layout so the browser registers the reset before drawing again.
            void svg.getBoundingClientRect();
            svg.setAttribute("data-drawn", "");
        };

        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    draw();
                    io.disconnect();
                }
            },
            { rootMargin: "0px 0px -15% 0px" },
        );
        io.observe(svg);

        const host = svg.parentElement;
        host?.addEventListener("pointerenter", draw);
        return () => {
            io.disconnect();
            host?.removeEventListener("pointerenter", draw);
        };
    }, []);

    return (
        <svg ref={ref} aria-hidden="true" viewBox="0 0 160 14" className={`doodle w-28 md:w-36 h-auto text-clay ${className}`}>
            <path
                d="M3 9 C 28 4, 55 12, 84 7 S 132 3, 157 8"
                pathLength={1}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
            />
        </svg>
    );
}
