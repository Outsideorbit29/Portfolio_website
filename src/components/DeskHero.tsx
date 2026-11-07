"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef, useState, type CSSProperties, type ReactNode, type RefObject } from "react";
import { playSound } from "@/lib/sound";
import { projectSlug, projects } from "@/data/content";
import { PencilTrail } from "./PencilTrail";

type Pos = { x: string; y: string };
type Scatter = { x: string; y: string; r: string };

// Phone position first, desktop position from the md breakpoint up.
const posStyle = (m: Pos, d: Pos) => ({ "--mx": m.x, "--my": m.y, "--dx": d.x, "--dy": d.y }) as CSSProperties;
const POS_CLASS = "left-[var(--mx)] top-[var(--my)] md:left-[var(--dx)] md:top-[var(--dy)]";

// One thing lying on the desk. It can be dragged around, and drifts away as the page scrolls.
function DeskItem({
    children,
    m,
    d,
    s,
    rotate = 0,
    delay = 0,
    className = "",
    board,
}: {
    children: ReactNode;
    m: Pos;
    d: Pos;
    s: Scatter;
    rotate?: number;
    delay?: number;
    className?: string;
    board: RefObject<HTMLDivElement | null>;
}) {
    return (
        <div
            className={`absolute scatter ${POS_CLASS} ${className}`}
            style={{ ...posStyle(m, d), "--sx": s.x, "--sy": s.y, "--sr": s.r } as CSSProperties}
        >
            <motion.div
                data-desk-item
                drag
                dragConstraints={board}
                dragElastic={0.15}
                dragMomentum={false}
                whileDrag={{ scale: 1.08, zIndex: 30, cursor: "grabbing" }}
                onDragStart={(e) => {
                    ((e.target as Element | null)?.closest("[data-desk-item]"))?.setAttribute("data-dragged", "1");
                    playSound("paper");
                }}
                onDragEnd={() => playSound("drop")}
                className="cursor-grab touch-none"
            >
                <div className="drop-in" style={{ "--r": `${rotate}deg`, animationDelay: `${delay}s` } as CSSProperties}>
                    {children}
                </div>
            </motion.div>
        </div>
    );
}

// A polaroid of a project. Click (or press Enter) to flip it over and see what the project is.
function Polaroid({ index }: { index: number }) {
    const project = projects[index];
    const [flipped, setFlipped] = useState(false);

    const toggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        // A drag ends with a click; don't flip in that case.
        const item = e.currentTarget.closest("[data-desk-item]");
        if (item?.getAttribute("data-dragged") === "1") {
            item.removeAttribute("data-dragged");
            return;
        }
        setFlipped((f) => !f);
        playSound("flip");
    };

    return (
        <div className="flip-card w-[118px] md:w-[150px]" data-flipped={flipped} data-sound="own">
            <div className="flip-inner">
                {/* Front */}
                <div className="flip-face bg-white p-2 pb-1 shadow-[0_8px_20px_rgba(60,40,10,0.16)]" inert={flipped}>
                    <button type="button" onClick={toggle} aria-label={`Flip the ${project.title} photo`} className="block w-full text-left">
                        <span className="relative block aspect-[4/3] overflow-hidden bg-paper">
                            <Image src={project.image} alt="" fill sizes="160px" className="object-cover object-top" draggable={false} />
                        </span>
                        <span className="block font-script text-base md:text-lg text-center py-1 text-ink">{project.title}</span>
                    </button>
                </div>
                {/* Back */}
                <div className="flip-face flip-back bg-[#fffdf7] p-2.5 md:p-3 shadow-[0_8px_20px_rgba(60,40,10,0.16)] flex flex-col" inert={!flipped}>
                    <button type="button" onClick={toggle} aria-label={`Flip the ${project.title} photo back`} className="flex-1 text-left">
                        <span className="block font-script text-lg md:text-xl leading-none">{project.title}</span>
                        <span className="block mt-1.5 text-[10px] md:text-[11px] leading-snug text-ink-soft line-clamp-4 md:line-clamp-5">
                            {project.details.context}
                        </span>
                    </button>
                    <Link href={`/projects#${projectSlug(project)}`} className="mt-1 text-[11px] md:text-xs font-semibold underline underline-offset-2">
                        See project →
                    </Link>
                </div>
            </div>
        </div>
    );
}

function Sticky({ color, children }: { color: string; children: ReactNode }) {
    return (
        <div
            className="w-[92px] h-[92px] md:w-[108px] md:h-[108px] p-3 font-script text-lg md:text-xl leading-tight text-ink shadow-[0_6px_14px_rgba(60,40,10,0.14)] flex items-center justify-center text-center"
            style={{ background: color }}
        >
            {children}
        </div>
    );
}

function Terminal() {
    return (
        <div className="w-[190px] md:w-[230px] rounded-lg bg-[#1f1f22] shadow-[0_10px_24px_rgba(20,20,20,0.22)] overflow-hidden font-mono text-[11px] md:text-xs leading-relaxed">
            <div className="flex gap-1.5 px-3 py-2 bg-[#2b2b2f]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="px-3 py-2.5 text-[#d6d6d6]">
                <p><span className="text-[#8be28b]">~</span> npm run build</p>
                <p className="text-[#9a9a9a]">Compiled successfully</p>
                <p><span className="text-[#8be28b]">~</span> git push</p>
                <p className="text-[#8be28b]">✓ deployed<span aria-hidden="true" className="inline-block w-1.5 h-3 ml-1 align-middle bg-[#d6d6d6] motion-safe:animate-pulse" /></p>
            </div>
        </div>
    );
}

function Mug() {
    return (
        <svg viewBox="0 0 110 100" aria-hidden="true" className="w-[74px] md:w-[92px] drop-shadow-[0_8px_10px_rgba(60,40,10,0.18)]">
            <g className="motion-safe:animate-pulse">
                <path d="M34 8c-4 6 4 10 0 16M50 6c-4 6 4 10 0 16M66 8c-4 6 4 10 0 16" fill="none" stroke="#c9b9a0" strokeWidth="3" strokeLinecap="round" />
            </g>
            <path d="M80 44h8a14 14 0 0 1 0 28h-8" fill="none" stroke="#b8714b" strokeWidth="7" />
            <path d="M18 32h66v42a20 20 0 0 1-20 20H38a20 20 0 0 1-20-20Z" fill="#c8805a" />
            <ellipse cx="51" cy="32" rx="33" ry="7" fill="#5a3a22" />
            <path d="M30 52c6-6 14 6 20 0s14 6 20 0" fill="none" stroke="#f3e3d0" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
}

function Word({ children, m, d, s, delay }: { children: ReactNode; m: Pos; d: Pos; s: Scatter; delay: number }) {
    return (
        <span
            className={`absolute scatter ${POS_CLASS}`}
            style={{ ...posStyle(m, d), "--sx": s.x, "--sy": s.y, "--sr": s.r } as CSSProperties}
        >
            <span
                className="reveal block font-semibold uppercase tracking-wide text-sm md:text-xl leading-tight text-ink whitespace-nowrap"
                style={{ animationDelay: `${delay}s` }}
            >
                {children}
            </span>
        </span>
    );
}

// The opening "desk": a grid-paper board with my things on it, around a short statement.
export function DeskHero() {
    const board = useRef<HTMLDivElement>(null);

    return (
        <div className="relative max-w-[1100px] mx-auto">
            <div ref={board} className="grid-paper relative h-[520px] md:h-[560px] border-y md:border border-[rgba(120,100,60,0.18)] overflow-hidden">
                <PencilTrail />

                {/* The statement, in pieces between the objects. */}
                <p className="absolute inset-0">
                    <Word m={{ x: "44%", y: "6%" }} d={{ x: "36%", y: "10%" }} s={{ x: "-40px", y: "-160px", r: "-8deg" }} delay={0.2}>I build</Word>{" "}
                    <Word m={{ x: "48%", y: "12%" }} d={{ x: "40%", y: "17%" }} s={{ x: "40px", y: "-180px", r: "6deg" }} delay={0.3}>web apps</Word>{" "}
                    <Word m={{ x: "6%", y: "33%" }} d={{ x: "61%", y: "40%" }} s={{ x: "160px", y: "-60px", r: "10deg" }} delay={0.4}>end to end,</Word>{" "}
                    <Word m={{ x: "6%", y: "48%" }} d={{ x: "20%", y: "60%" }} s={{ x: "-180px", y: "-40px", r: "-10deg" }} delay={0.5}>from the interface</Word>{" "}
                    <Word m={{ x: "6%", y: "62%" }} d={{ x: "62%", y: "76%" }} s={{ x: "140px", y: "-20px", r: "8deg" }} delay={0.6}>to the API.</Word>
                </p>

                <DeskItem board={board} rotate={-6} delay={0.1} m={{ x: "4%", y: "4%" }} d={{ x: "6%", y: "8%" }} s={{ x: "-260px", y: "-200px", r: "-30deg" }}>
                    <Polaroid index={0} />
                </DeskItem>
                <DeskItem board={board} rotate={5} delay={0.25} m={{ x: "62%", y: "21%" }} d={{ x: "70%", y: "6%" }} s={{ x: "280px", y: "-220px", r: "35deg" }}>
                    <Polaroid index={2} />
                </DeskItem>
                <DeskItem board={board} rotate={-3} delay={0.4} className="hidden md:block" m={{ x: "0", y: "0" }} d={{ x: "45%", y: "38%" }} s={{ x: "0px", y: "-320px", r: "-20deg" }}>
                    <Polaroid index={1} />
                </DeskItem>
                <DeskItem board={board} rotate={4} delay={0.3} m={{ x: "6%", y: "73%" }} d={{ x: "8%", y: "68%" }} s={{ x: "-300px", y: "40px", r: "-45deg" }}>
                    <Sticky color="#fde68a">ship it ✓</Sticky>
                </DeskItem>
                <DeskItem board={board} rotate={-5} delay={0.45} className="hidden md:block" m={{ x: "0", y: "0" }} d={{ x: "86%", y: "40%" }} s={{ x: "300px", y: "-40px", r: "40deg" }}>
                    <Sticky color="#fbcfe8">fix the bug, then coffee</Sticky>
                </DeskItem>
                <DeskItem board={board} rotate={-2} delay={0.5} m={{ x: "44%", y: "58%" }} d={{ x: "76%", y: "62%" }} s={{ x: "260px", y: "60px", r: "18deg" }}>
                    <Terminal />
                </DeskItem>
                <DeskItem board={board} rotate={0} delay={0.35} m={{ x: "40%", y: "29%" }} d={{ x: "26%", y: "30%" }} s={{ x: "-200px", y: "-260px", r: "-60deg" }}>
                    <Mug />
                </DeskItem>
                <DeskItem board={board} rotate={3} delay={0.55} className="hidden md:block" m={{ x: "0", y: "0" }} d={{ x: "33%", y: "72%" }} s={{ x: "-120px", y: "80px", r: "-25deg" }}>
                    <Sticky color="#bfdbfe">TODO: write tests</Sticky>
                </DeskItem>

                <p className="absolute bottom-3 left-4 font-script text-base text-ink-soft" aria-hidden="true">
                    psst, drag things around, or flip a photo
                </p>
            </div>
        </div>
    );
}
