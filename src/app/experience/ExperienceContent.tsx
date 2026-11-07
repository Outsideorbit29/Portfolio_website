import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Column, PageHeader, SectionHeader, TornEdge } from "@/components/ui";
import { certifications, experience } from "@/data/content";

export default function ExperienceContent() {
    return (
        <div className="w-full">
            <PageHeader script="experience" title="Where I've built things" italic="Projects, a techathon and a hackathon win along the way" />

            <div className="bg-sheet">
                <TornEdge flip />
                <Column className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Timeline */}
                    <div className="lg:col-span-8">
                        <h2 className="sr-only">Timeline</h2>
                        <ol className="relative border-l border-rule ml-2 flex flex-col gap-8">
                            {experience.map((item) => (
                                <li key={item.id} className="relative pl-8">
                                    <span aria-hidden="true" className="absolute -left-[7px] top-6 w-3.5 h-3.5 rounded-full bg-ribbon border-2 border-sheet ring-1 ring-rule" />
                                    <article className="scroll-right sheet p-6 flex flex-col gap-3">
                                        <div className="flex flex-wrap items-center justify-between gap-2">
                                            <span className="text-sm text-ink-soft">{item.date}</span>
                                            <span className="tag">{item.type}</span>
                                        </div>
                                        <h3 className="text-xl font-semibold tracking-[-0.01em]">{item.role}</h3>
                                        <p className="font-serif italic text-lg text-ink-soft">{item.company}</p>
                                        <p className="text-ink-soft leading-relaxed">{item.description}</p>
                                        <ul className="flex flex-wrap gap-2 pt-1" aria-label="Tools used">
                                            {item.tech.map((t) => (
                                                <li key={t} className="tag">{t}</li>
                                            ))}
                                        </ul>
                                    </article>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Certifications */}
                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-24 grid-paper-fine rounded-2xl border border-rule p-5 flex flex-col gap-4">
                            <SectionHeader title="Certifications" />
                            <ul className="flex flex-col gap-3">
                                {certifications.map((cert) => (
                                    <li key={cert.title} className="sheet p-4 scroll-3d">
                                        <p className="text-xs text-ink-soft">{cert.year}</p>
                                        <h3 className="mt-1 font-semibold">{cert.title}</h3>
                                        <p className="font-serif italic text-ink-soft">{cert.issuer}</p>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/resume" className="btn btn-dark justify-center">
                                <Download className="w-4 h-4" aria-hidden="true" /> View resume
                            </Link>
                        </div>
                    </aside>
                </Column>

                <Column className="pb-20 md:pb-28 flex justify-center">
                    <Link href="/skills" className="inline-flex items-center gap-2 font-medium underline underline-offset-4">
                        Next: my skills <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </Column>
            </div>
        </div>
    );
}
