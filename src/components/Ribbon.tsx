"use client";

import { useEffect, useId, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const REPEATS = 6;

// A wavy paper ribbon with words sliding along it. Decorative, so screen readers skip it.
export function Ribbon({ words, flip = false }: { words: string[]; flip?: boolean }) {
    const pathId = useId().replace(/:/g, "");
    const textRef = useRef<SVGTextElement>(null);
    const textPathRef = useRef<SVGTextPathElement>(null);
    const wrapRef = useRef<HTMLDivElement>(null);
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        const text = textRef.current;
        const textPath = textPathRef.current;
        const wrap = wrapRef.current;
        if (!text || !textPath || !wrap || reducedMotion) return;

        const oneRepeat = text.getComputedTextLength() / REPEATS;
        let offset = 0;
        let frame = 0;
        let last = performance.now();
        let visible = false;

        const tick = (now: number) => {
            offset = (offset + (now - last) * 0.04) % oneRepeat;
            last = now;
            textPath.setAttribute("startOffset", String(-offset));
            frame = requestAnimationFrame(tick);
        };

        // Only animate while the ribbon is on screen.
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !visible) {
                visible = true;
                last = performance.now();
                frame = requestAnimationFrame(tick);
            } else if (!entry.isIntersecting && visible) {
                visible = false;
                cancelAnimationFrame(frame);
            }
        });
        observer.observe(wrap);

        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [reducedMotion]);

    const line = Array.from({ length: REPEATS }, () => words.map((w) => `${w}  •  `).join("")).join("");
    const d = flip
        ? "M -100 70 C 300 170, 700 30, 1100 120 S 1500 150, 1700 80"
        : "M -100 130 C 300 30, 700 170, 1100 80 S 1500 50, 1700 120";

    return (
        <div ref={wrapRef} aria-hidden="true" className="w-full overflow-hidden select-none pointer-events-none py-4">
            <svg viewBox="0 0 1600 200" className="w-[180%] md:w-full -ml-[40%] md:ml-0 h-auto drop-shadow-[0_10px_14px_rgba(90,60,10,0.12)]">
                <defs>
                    <path id={pathId} d={d} />
                </defs>
                <use href={`#${pathId}`} fill="none" stroke="var(--ribbon)" strokeWidth="64" />
                <text
                    ref={textRef}
                    dominantBaseline="central"
                    className="font-sans"
                    fontSize="30"
                    fontWeight="500"
                    fill="var(--ribbon-ink)"
                >
                    <textPath ref={textPathRef} href={`#${pathId}`} startOffset="0">
                        {line}
                    </textPath>
                </text>
            </svg>
        </div>
    );
}
