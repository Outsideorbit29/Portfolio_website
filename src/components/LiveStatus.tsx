"use client";

import { projectSlug, type Project } from "@/data/content";
import { useDemoStatus } from "@/lib/demoStatus";

const LOOK = {
    checking: { dot: "bg-[#c9c2b3]", text: "checking demo…" },
    up: { dot: "bg-[#2f9e5b] live-dot", text: "demo online" },
    asleep: { dot: "bg-[#d39b1f]", text: "demo asleep, wakes on first visit" },
    down: { dot: "bg-[#c2410c]", text: "demo offline" },
} as const;

// A small dot and note saying whether a project's live demo is up right now.
export function LiveStatus({ project, className = "" }: { project: Project; className?: string }) {
    const all = useDemoStatus();
    if (!project.links?.demo || all === null) return null;

    const mine = all?.find((s) => s.slug === projectSlug(project));
    // Loaded, but this project wasn't checked: show nothing rather than a wrong answer.
    if (all && !mine) return null;

    const look = LOOK[mine?.state ?? "checking"];
    return (
        <p className={`flex items-center gap-2 text-xs text-ink-soft ${className}`}>
            <span aria-hidden="true" className={`relative inline-block h-2 w-2 shrink-0 rounded-full ${look.dot}`} />
            <span>
                {look.text}
                {mine?.state === "up" && mine.ms !== null && <span className="font-mono"> · {mine.ms}ms</span>}
            </span>
        </p>
    );
}
