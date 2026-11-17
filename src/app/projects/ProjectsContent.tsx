import Link from "next/link";
import { ArrowRight, CirclePlay } from "lucide-react";
import { OrbSpot } from "@/components/ParticleOrb";
import { ProjectLinkCells, ProjectShot, projectColor } from "@/components/ProjectPanel";
import { Frame, PageHeader } from "@/components/ui";
import { Scramble } from "@/components/Scramble";
import { LiveStatus } from "@/components/LiveStatus";
import { projectSlug, projects, type Project } from "@/data/content";

export default function ProjectsContent() {
    return (
        <div className="w-full">
            <PageHeader note="projects.length = 7" title="Things I've built" sub="Seven projects, from wind forecasting to classroom AI." look="wave" color="#ff7a45" />

            {projects.map((project, i) => (
                <ProjectBlock key={project.id} project={project} index={i} />
            ))}

            <Frame className="pt-[calc(var(--cell)*2)]">
                <div className="cells">
                    <div className="box col-span-6 md:col-span-8 xl:col-span-10 row-span-2 p-6 flex flex-col justify-center">
                        <h2 className="display text-[1.9rem] md:text-[2.2rem]">Want to build something together?</h2>
                        <p className="mt-2 text-fg-soft">I&apos;m always happy to talk about a new idea.</p>
                    </div>
                    <OrbSpot look="calm" color={projectColor(0)} className="box hidden xl:block xl:col-span-3 row-span-2" />
                    <Link href="/contact" className="box cell-btn col-span-6 md:col-span-4 xl:col-span-3 row-span-2">
                        Get in touch <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </div>
            </Frame>
        </div>
    );
}

function ProjectBlock({ project, index }: { project: Project; index: number }) {
    const slug = projectSlug(project);

    return (
        <Frame as="section" id={slug} aria-labelledby={`${slug}-title`} className="pt-[calc(var(--cell)*2)] scroll-mt-[var(--cell)]">
            <div className="cells">
                <div className="col-span-6 md:col-span-12 xl:col-span-16 flex flex-col justify-end pb-2">
                    <p className="mono-note">
                        {project.id} · {project.year} · {project.details.role}
                    </p>
                    <LiveStatus project={project} className="mt-1" />
                    <h2 id={`${slug}-title`} className="draw display text-[1.9rem] md:text-[2.5rem]">
                        <Scramble text={project.title} />
                    </h2>
                </div>

                <div className="rise box col-span-6 row-span-4 md:col-span-12 md:row-span-6 xl:col-span-9 xl:row-span-6">
                    <ProjectShot project={project} priority={index === 0} sizes="(max-width: 1280px) 100vw, 675px" />
                </div>

                <dl className="rise box col-span-6 md:col-span-12 xl:col-span-7 xl:row-span-6 p-5 md:p-6 flex flex-col gap-4">
                    <div>
                        <dt className="mono-note">what it is</dt>
                        <dd className="mt-1 leading-relaxed">{project.description}</dd>
                    </div>
                    <div className="border-t border-cell pt-3">
                        <dt className="mono-note">why it exists</dt>
                        <dd className="mt-1 text-sm leading-relaxed text-fg-soft">{project.details.context}</dd>
                    </div>
                    <div className="border-t border-cell pt-3">
                        <dt className="mono-note">where it is now</dt>
                        <dd className="mt-1 text-sm leading-relaxed">{project.details.outcome}</dd>
                    </div>
                    {project.guide && (
                        <div className="border-t border-cell pt-3">
                            <dt className="mono-note">how to use it</dt>
                            <dd className="mt-1">
                                <ol className="list-decimal pl-5 flex flex-col gap-1.5 text-sm text-fg-soft">
                                    {project.guide.map((step) => (
                                        <li key={step}>{step}</li>
                                    ))}
                                </ol>
                            </dd>
                        </div>
                    )}
                </dl>

                <div className="box col-span-6 md:col-span-6 xl:col-span-9 p-3 flex items-center">
                    <ul className="flex flex-wrap gap-1.5" aria-label="Built with">
                        {project.tech.map((t) => (
                            <li key={t} className="tag">{t}</li>
                        ))}
                    </ul>
                </div>
                <ProjectLinkCells project={project} className="col-span-3" />
                {project.links?.video && (
                    <a href={project.links.video} target="_blank" rel="noopener noreferrer" className="box cell-btn col-span-3 text-sm">
                        <CirclePlay className="w-4 h-4" aria-hidden="true" /> Watch demo
                    </a>
                )}            </div>
        </Frame>
    );
}
