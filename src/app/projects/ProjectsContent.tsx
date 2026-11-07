import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Column, PageHeader, SectionHeader, TornEdge } from "@/components/ui";
import { TINTS } from "@/components/ProjectCard";
import { projectSlug, projects, type Project } from "@/data/content";

export default function ProjectsContent() {
    return (
        <div className="w-full">
            <PageHeader script="work" title="Things I've built" italic="Five projects, from trading tools to classroom AI" />

            <div className="bg-sheet">
                <TornEdge flip />
                <Column className="py-16 md:py-24 flex flex-col gap-20 md:gap-28">
                    {projects.map((project, i) => (
                        <ProjectRow key={project.id} project={project} index={i} />
                    ))}
                </Column>

                <Column className="pb-24 md:pb-32 flex flex-col items-center text-center">
                    <SectionHeader center kicker="Next" title="Want to build something together?" italic="I'm always happy to talk about a new idea." />
                    <Link href="/contact" className="btn btn-dark mt-8">
                        Get in touch <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </Column>
            </div>
        </div>
    );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
    const isScreenshot = project.image.startsWith("/");
    const reverse = index % 2 === 1;

    return (
        <section id={projectSlug(project)} aria-labelledby={`${projectSlug(project)}-title`} className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className={`lg:col-span-7 ${reverse ? "lg:order-2 scroll-right" : "scroll-left"}`}>
                <div className="relative aspect-[16/11] rounded-2xl overflow-hidden" style={{ background: TINTS[index % TINTS.length] }}>
                    {isScreenshot ? (
                        <div className="absolute left-[8%] right-[8%] top-[10%] bottom-[-6%] rounded-lg overflow-hidden shadow-[0_14px_30px_rgba(40,30,10,0.16)]">
                            <Image src={project.image} alt={`Screenshot of ${project.title}`} fill sizes="(max-width: 1024px) 90vw, 600px" className="object-cover object-top" />
                        </div>
                    ) : (
                        <Image src={project.image} alt="" fill sizes="(max-width: 1024px) 100vw, 640px" className="object-cover" />
                    )}
                </div>
            </div>

            <div className={`lg:col-span-5 flex flex-col gap-4 scroll-3d ${reverse ? "lg:order-1" : ""}`}>
                <p className="kicker">
                    {project.id} · {project.year} · {project.details.role}
                </p>
                <h2 id={`${projectSlug(project)}-title`} className="text-3xl md:text-4xl font-semibold tracking-[-0.02em]">
                    {project.title}
                </h2>
                <p className="text-ink-soft leading-relaxed">{project.description}</p>

                <dl className="sheet p-5 flex flex-col gap-3 text-sm">
                    <div>
                        <dt className="font-serif italic text-base text-ink-soft">Why it exists</dt>
                        <dd className="mt-0.5">{project.details.context}</dd>
                    </div>
                    <div className="border-t border-rule pt-3">
                        <dt className="font-serif italic text-base text-ink-soft">Where it is now</dt>
                        <dd className="mt-0.5 font-medium">{project.details.outcome}</dd>
                    </div>
                </dl>

                <ul className="flex flex-wrap gap-2" aria-label="Built with">
                    {project.tech.map((t) => (
                        <li key={t} className="tag">{t}</li>
                    ))}
                </ul>

                {(project.links?.demo || project.links?.github) && (
                    <div className="flex flex-wrap gap-3 pt-2">
                        {project.links.demo && (
                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-dark">
                                <ExternalLink className="w-4 h-4" aria-hidden="true" /> Live demo
                            </a>
                        )}
                        {project.links.github && (
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn">
                                <Github className="w-4 h-4" aria-hidden="true" /> View code
                            </a>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
