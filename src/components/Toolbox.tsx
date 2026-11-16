"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { skillGroups } from "@/data/content";
import { OrbSpot } from "./ParticleOrb";

// Each skill group shown as a small word and a highlighted word, e.g. "front/" + "end".
const WORDS: Record<string, [string, string]> = {
    Languages: ["typed/", "languages"],
    Frontend: ["front/", "end"],
    Backend: ["back/", "end"],
    "AI / ML": ["ai/", "ml"],
};

export interface Stat {
    value: number;
    suffix?: string;
    // Shown instead of the number, e.g. "1st".
    text?: string;
    label: string;
}

// Counts up from 0 the first time it scrolls into view. The real number is in the HTML from the start.
function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const [shown, setShown] = useState(value);

    useEffect(() => {
        const el = ref.current;
        if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let raf = 0;
        const io = new IntersectionObserver(([entry]) => {
            if (!entry.isIntersecting) return;
            io.disconnect();
            const t0 = performance.now();
            const tick = (now: number) => {
                const p = Math.min((now - t0) / 1200, 1);
                setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
                if (p < 1) raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
        }, { threshold: 0.6 });
        io.observe(el);
        return () => {
            io.disconnect();
            cancelAnimationFrame(raf);
        };
    }, [value]);

    return (
        <span ref={ref} className="tabular-nums">
            {shown}
            {suffix}
        </span>
    );
}

// Skill groups that take turns (or can be picked), a spot for the sphere, and a few real numbers.
export function Toolbox({ stats }: { stats: Stat[] }) {
    const [active, setActive] = useState(0);
    const [paused, setPaused] = useState(false);
    const group = skillGroups[active];
    const [small, big] = WORDS[group.category] ?? [`${group.category}/`, ""];

    // Move to the next group every few seconds, unless the visitor is reading, has picked one, or prefers less motion.
    useEffect(() => {
        if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const id = window.setInterval(() => setActive((a) => (a + 1) % skillGroups.length), 4000);
        return () => window.clearInterval(id);
    }, [paused]);

    return (
        <div className="cells">
            <div
                className="box col-span-6 md:col-span-6 xl:col-span-6 row-span-5 p-5 md:p-6 flex flex-col"
                onPointerEnter={() => setPaused(true)}
                onPointerLeave={() => setPaused(false)}
                onFocus={() => setPaused(true)}
            >
                <div role="tablist" aria-label="Skill groups" className="flex gap-2">
                    {skillGroups.map((g, i) => (
                        <button
                            key={g.category}
                            type="button"
                            role="tab"
                            id={`toolbox-tab-${i}`}
                            aria-selected={i === active}
                            aria-controls="toolbox-panel"
                            aria-label={g.category}
                            onClick={() => {
                                setActive(i);
                                setPaused(true);
                            }}
                            className={`w-6 h-6 border border-cell transition-colors ${i === active ? "bg-fg" : "bg-fg-mute/40 hover:bg-fg-soft"}`}
                        />
                    ))}
                </div>

                <div id="toolbox-panel" role="tabpanel" aria-labelledby={`toolbox-tab-${active}`} className="mt-6 flex-1 flex flex-col">
                    <h3 key={group.category} className="slide-up text-5xl md:text-6xl font-light lowercase leading-[1.1]">
                        <span className="sr-only">{group.category}: </span>
                        <span aria-hidden="true">
                            {small}
                            <br />
                            <span className="inline-block bg-fg text-bg px-2 mt-1">{big}</span>
                        </span>
                    </h3>
                    <ul key={`${group.category}-list`} className="slide-up mt-6 flex flex-col gap-2" style={{ animationDelay: "0.08s" }}>
                        {group.items.map((s) => (
                            <li key={s.name} className="flex flex-col sm:flex-row sm:justify-between gap-x-4 border-b border-cell pb-2">
                                <span>{s.name}</span>
                                <span className="mono-note sm:text-right">{s.spec}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <OrbSpot look="lumpy" color="#f2c14e" className="box hidden xl:block xl:col-span-4 row-span-5" />

            {stats.map((s) => (
                <div key={s.label} className="box col-span-3 row-span-2 p-4 flex flex-col items-center justify-center text-center gap-1">
                    <p className="text-4xl md:text-5xl font-light">
                        {s.text ?? <CountUp value={s.value} suffix={s.suffix} />}
                    </p>
                    <p className="text-sm text-fg-soft">{s.label}</p>
                </div>
            ))}
            <Link href="/skills" className="box cell-btn col-span-6 md:col-span-6 xl:col-span-6">
                All skills <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
        </div>
    );
}
