import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Frame, PageHeader } from "@/components/ui";
import { certifications, experience } from "@/data/content";

export default function ExperienceContent() {
    return (
        <div className="w-full">
            <PageHeader note="git log --oneline" title="Where I've built things" sub="Projects, a techathon and a hackathon win along the way." look="cloud" color="#5fd39a" />

            <Frame className="pt-[calc(var(--cell)*2)]">
                <div className="cells items-start">
                    {/* Timeline */}
                    <div className="col-span-6 md:col-span-12 xl:col-span-11">
                        <h2 className="sr-only">Timeline</h2>
                        <ol>
                            {experience.map((item) => (
                                <li key={item.id} className="rise box flex flex-col md:flex-row">
                                    <div className="md:w-[calc(var(--cell)*3)] shrink-0 p-5 md:border-r border-b md:border-b-0 border-cell flex md:flex-col justify-between md:justify-start gap-3">
                                        <span className="mono-note">{item.date}</span>
                                        <span className="tag w-fit">{item.type}</span>
                                    </div>
                                    <article className="p-5 md:p-6 flex flex-col gap-3">
                                        <h3 className="text-xl font-medium">{item.role}</h3>
                                        <p className="text-fg-soft">{item.company}</p>
                                        <p className="text-fg-soft leading-relaxed text-sm md:text-base">{item.description}</p>
                                        <ul className="flex flex-wrap gap-1.5 pt-1" aria-label="Tools used">
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
                    <aside aria-labelledby="certs-heading" className="col-span-6 md:col-span-12 xl:col-span-5 xl:sticky xl:top-[calc(var(--cell)*2)] mt-[var(--cell)] xl:mt-0">
                        <h2 id="certs-heading" className="display text-[1.9rem] pb-2">Certifications</h2>
                        <ul>
                            {certifications.map((cert) => (
                                <li key={cert.title} className="box p-5">
                                    <p className="mono-note">{cert.year}</p>
                                    <h3 className="mt-1 font-medium">{cert.title}</h3>
                                    <p className="text-fg-soft text-sm">{cert.issuer}</p>
                                </li>
                            ))}
                        </ul>
                        <Link href="/resume" className="box cell-btn h-[var(--cell)]">
                            <Download className="w-4 h-4" aria-hidden="true" /> View resume
                        </Link>
                    </aside>
                </div>
            </Frame>

            <Frame className="pt-[calc(var(--cell)*2)]">
                <div className="cells">
                    <Link href="/skills" className="box cell-btn col-span-6 md:col-span-4 md:col-start-9 xl:col-start-13">
                        Next: my skills <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </div>
            </Frame>
        </div>
    );
}
