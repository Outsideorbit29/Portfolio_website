import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/content";

// One colour per project, in list order. The sphere next to a project takes its colour.
const COLORS = ["#ff7a45", "#7aa2ff", "#5fd39a", "#f2c14e", "#d48cff", "#ff6f91", "#4fd1e0"];
export const projectColor = (index: number) => COLORS[index % COLORS.length];

// Only real screenshots are shown. Projects without one get a hatched box with their name.
export const hasScreenshot = (p: Project) => p.image.startsWith("/");

export function ProjectShot({ project, priority = false, sizes }: { project: Project; priority?: boolean; sizes: string }) {
    if (!hasScreenshot(project)) {
        return (
            <div className="hatch absolute inset-[calc(var(--cell)/5)] flex flex-col items-center justify-center gap-2 border border-cell bg-bg/60 text-center p-4">
                <span className="display text-3xl md:text-4xl">{project.title}</span>
                <span className="mono-note">screenshot: none yet</span>
            </div>
        );
    }
    return (
        <div className="absolute inset-[calc(var(--cell)/5)] overflow-hidden border border-cell bg-bg">
            <Image src={project.image} alt={`Screenshot of ${project.title}`} fill priority={priority} sizes={sizes} className="object-cover object-top" />
        </div>
    );
}

// "Live demo" and "Code" boxes. A missing link becomes an empty hatched box.
export function ProjectLinkCells({ project, className = "", iconOnly = false }: { project: Project; className?: string; iconOnly?: boolean }) {
    const items = [
        { href: project.links?.demo, label: "Live demo", icon: ExternalLink },
        { href: project.links?.github, label: "View code", icon: Github },
    ];
    return (
        <>
            {items.map(({ href, label, icon: Icon }) =>
                href ? (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={iconOnly ? `${label}: ${project.title} (opens in a new tab)` : undefined}
                        title={iconOnly ? label : undefined}
                        className={`box cell-btn text-sm ${className}`}
                    >
                        <Icon className="w-4 h-4" aria-hidden="true" />
                        {!iconOnly && label}
                    </a>
                ) : (
                    <div key={label} aria-hidden="true" className={`box hatch ${className}`} />
                ),
            )}
        </>
    );
}
