"use client";

import { useEffect, useState } from "react";
import type { DemoStatus } from "@/app/api/status/route";
import { projectSlug, type Project } from "@/data/content";

// One request per page load, shared by every dot on the page.
let request: Promise<DemoStatus[]> | null = null;
function loadStatus() {
    request ??= fetch("/api/status")
        .then((r) => (r.ok ? r.json() : { results: [] }))
        .then((d: { results: DemoStatus[] }) => d.results)
        .catch(() => []);
    return request;
}

const LOOK = {
    checking: { dot: "bg-fg-mute", text: "checking demo…" },
    up: { dot: "bg-[#5fd39a] live-dot", text: "demo online" },
    asleep: { dot: "bg-[#f2c14e]", text: "demo asleep · wakes on first visit" },
    down: { dot: "bg-[#ff6f91]", text: "demo offline" },
} as const;

// A small dot and note saying whether a project's live demo is up right now.
export function LiveStatus({ project, className = "" }: { project: Project; className?: string }) {
    const slug = projectSlug(project);
    const [status, setStatus] = useState<DemoStatus | null>(null);
    const [failed, setFailed] = useState(false);

    useEffect(() => {
        let alive = true;
        loadStatus().then((all) => {
            if (!alive) return;
            const mine = all.find((s) => s.slug === slug) ?? null;
            setStatus(mine);
            setFailed(!mine);
        });
        return () => {
            alive = false;
        };
    }, [slug]);

    // No demo, or the check itself failed: show nothing rather than a wrong answer.
    if (!project.links?.demo || failed) return null;

    const look = LOOK[status?.state ?? "checking"];
    return (
        <p className={`mono-note flex items-center gap-2 ${className}`}>
            <span aria-hidden="true" className={`relative inline-block h-2 w-2 rounded-full ${look.dot}`} />
            <span>
                {look.text}
                {status?.state === "up" && status.ms !== null && <span className="text-fg-mute"> · {status.ms}ms</span>}
            </span>
        </p>
    );
}
