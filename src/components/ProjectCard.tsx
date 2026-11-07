import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectSlug, type Project } from "@/data/content";
import { Tilt } from "./Tilt";

// Soft background tints for the image panels, one per project in order.
export const TINTS = ["#f4ece0", "#eceefa", "#f6e9f1", "#e8f2ec", "#f1efe6"];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
    const isScreenshot = project.image.startsWith("/");

    return (
        <article className={`group ${index % 2 === 0 ? "scroll-left" : "scroll-right"}`}>
            <Link href={`/projects#${projectSlug(project)}`} className="block" aria-label={`${project.title}: ${project.details.context}`}>
                <Tilt>
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden" style={{ background: TINTS[index % TINTS.length] }}>
                    {isScreenshot ? (
                        // Screenshot shown as a floating window on the tinted panel.
                        <div className="absolute left-[9%] right-[9%] top-[12%] bottom-[-6%] rounded-lg overflow-hidden shadow-[0_14px_30px_rgba(40,30,10,0.16)] transition-transform duration-500 group-hover:-translate-y-1.5">
                            <Image src={project.image} alt="" fill sizes="(max-width: 768px) 90vw, 440px" className="object-cover object-top" />
                        </div>
                    ) : (
                        <Image
                            src={project.image}
                            alt=""
                            fill
                            sizes="(max-width: 768px) 100vw, 540px"
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                    )}
                    {/* Notched corner with the arrow button. */}
                    <span className="absolute bottom-0 right-0 bg-sheet rounded-tl-[22px] pt-2 pl-2">
                        <span className="flex w-10 h-10 items-center justify-center rounded-full border border-rule bg-sheet transition-colors group-hover:bg-ink group-hover:text-white">
                            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                        </span>
                    </span>
                </div>
                </Tilt>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.01em]">{project.title}</h3>
            </Link>
            <p className="mt-2 text-sm text-ink-soft leading-relaxed max-w-md">
                {project.details.context} <strong className="font-semibold text-ink">{project.details.outcome}</strong>
            </p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Built with">
                {project.tech.slice(0, 3).map((t) => (
                    <li key={t} className="tag">{t}</li>
                ))}
            </ul>
        </article>
    );
}
