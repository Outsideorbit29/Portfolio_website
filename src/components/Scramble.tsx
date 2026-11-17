"use client";

import { useEffect, useRef } from "react";

/*
  Text that "decodes" itself: when it first scrolls into view, each letter cycles through random
  characters and settles into place from left to right. Hovering the heading runs it again.

  Screen readers get the real text from a hidden copy; the animated letters are hidden from them.
  The real text is in the HTML from the start, so nothing is missing before JavaScript loads,
  and nothing moves for anyone who asked for less motion.
*/

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/<>_*+";
const STEP_MS = 45;

export function Scramble({ text, delay = 0 }: { text: string; delay?: number }) {
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let timer = 0;
        let running = false;

        const run = (wait: number) => {
            if (running) return;
            running = true;
            const start = performance.now() + wait;
            const total = 450 + text.length * 22;
            const tick = () => {
                const t = performance.now() - start;
                if (t < 0) {
                    timer = window.setTimeout(tick, STEP_MS);
                    return;
                }
                let out = "";
                for (let i = 0; i < text.length; i++) {
                    const ch = text[i];
                    // Each letter settles at its own moment, left to right.
                    const settleAt = 150 + (i / Math.max(text.length - 1, 1)) * (total - 150);
                    out += ch === " " || t >= settleAt ? ch : CHARS[Math.floor(Math.random() * CHARS.length)];
                }
                el.textContent = out;
                if (t < total) timer = window.setTimeout(tick, STEP_MS);
                else {
                    el.textContent = text;
                    running = false;
                }
            };
            tick();
        };

        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    run(delay);
                    io.disconnect();
                }
            },
            { rootMargin: "0px 0px -15% 0px" },
        );
        io.observe(el);

        // Hovering the whole heading (not just the letters) replays it.
        const host = el.parentElement;
        const onEnter = () => run(0);
        host?.addEventListener("pointerenter", onEnter);

        return () => {
            io.disconnect();
            window.clearTimeout(timer);
            host?.removeEventListener("pointerenter", onEnter);
            el.textContent = text;
        };
    }, [text, delay]);

    return (
        <>
            <span ref={ref} aria-hidden="true">
                {text}
            </span>
            <span className="sr-only">{text}</span>
        </>
    );
}
