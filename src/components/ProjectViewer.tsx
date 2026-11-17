"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectSlug, projects } from "@/data/content";
import { playSound } from "@/lib/sound";
import { OrbSpot } from "./ParticleOrb";
import { Scramble } from "./Scramble";
import { LiveStatus } from "./LiveStatus";
import { ProjectLinkCells, ProjectShot, projectColor } from "./ProjectPanel";

const pad = (n: number) => String(n).padStart(2, "0");

// One project at a time in a frame of boxes, with previous / next buttons.
export function ProjectViewer() {
    const [index, setIndex] = useState(0);
    const project = projects[index];
    const total = projects.length;

    const go = (step: number) => {
        playSound("flip");
        setIndex((i) => (i + step + total) % total);
    };

    // Shared by the previous / next buttons.
    const arrow = "box cell-btn md:row-start-6 xl:row-start-7 md:order-none";

    return (
        <div className="cells" role="group" aria-roledescription="carousel" aria-label="Selected projects">
            <OrbSpot
                look="wave"
                color={projectColor(index)}
                className="box hidden xl:block xl:col-start-1 xl:col-span-3 xl:row-start-1 xl:row-span-6"
            >
                <p aria-hidden="true" className="mono-note absolute left-2 bottom-2">
                    transform: translateX({index ? `-${index * 100}%` : "0"})
                </p>
            </OrbSpot>

            <div className="box col-span-6 row-span-4 md:col-start-1 md:col-span-7 md:row-start-1 md:row-span-5 xl:col-start-4 xl:col-span-8 xl:row-span-6">
                <div key={project.id} className="wipe absolute inset-0">
                    <ProjectShot project={project} sizes="(max-width: 768px) 100vw, 600px" />
                </div>
            </div>

            <div className="box col-span-6 p-5 md:col-start-8 md:col-span-5 md:row-start-1 md:row-span-3 xl:col-start-12 xl:row-span-4">
                <div key={project.id} className="slide-up flex flex-col gap-3">
                    <p className="mono-note">
                        {project.year} · {project.details.role}
                    </p>
                    <LiveStatus project={project} />
                    <p className="text-[0.95rem] leading-relaxed">{project.details.context}</p>
                    <p className="text-sm leading-relaxed text-fg-soft">{project.details.outcome}</p>
                </div>
            </div>

            <div className="box col-span-6 p-4 md:col-start-8 md:col-span-5 md:row-start-4 md:row-span-2 xl:col-start-12 xl:row-start-5 xl:row-span-2">
                <ul key={project.id} className="slide-up flex flex-wrap gap-1.5" aria-label="Built with">
                    {project.tech.map((t) => (
                        <li key={t} className="tag">{t}</li>
                    ))}
                </ul>
            </div>

            {/* Bottom bar. On phones: arrows either side of the title, links on the row below. */}
            <button type="button" data-sound="own" onClick={() => go(-1)} aria-label="Previous project" className={`${arrow} order-1`}>
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <ProjectLinkCells project={project} iconOnly className="col-span-3 md:col-span-1 order-4 md:order-none md:row-start-6 xl:row-start-7" />
            <h3 className="box order-2 md:order-none col-span-4 md:col-span-6 xl:col-span-10 md:row-start-6 xl:row-start-7 flex items-center justify-center text-center px-2">
                <Link href={`/projects#${projectSlug(project)}`} className="hover:text-accent transition-colors text-lg md:text-2xl font-light lowercase" aria-live="polite">
                    <Scramble text={project.title} />
                </Link>
            </h3>
            <p className="box hidden md:flex md:col-span-2 md:row-start-6 xl:row-start-7 items-center justify-center mono-note tabular-nums">
                {pad(index + 1)} / {pad(total)}
            </p>
            <button type="button" data-sound="own" onClick={() => go(1)} aria-label="Next project" className={`${arrow} order-3`}>
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
        </div>
    );
}
