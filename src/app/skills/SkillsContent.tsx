import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Ribbon } from "@/components/Ribbon";
import { Column, PageHeader, TornEdge } from "@/components/ui";
import { skillGroups } from "@/data/content";

export default function SkillsContent() {
    return (
        <div className="w-full">
            <PageHeader script="skills" title="What I work with" italic="The tools I reach for, from interface to API" />

            <div className="bg-sheet">
                <TornEdge flip />
                <Column className="py-16 md:py-24">
                    <div className="grid-paper-fine rounded-2xl border border-rule p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {skillGroups.map((group, i) => (
                            <section key={group.category} aria-labelledby={`skills-${group.category}`} className="sheet p-6 md:p-8 scroll-3d" style={{ "--end": `${240 + (i % 2) * 60}px` } as React.CSSProperties}>
                                <h2 id={`skills-${group.category}`} className="text-2xl font-semibold tracking-[-0.01em]">
                                    {group.category}
                                </h2>
                                <ul className="mt-5 flex flex-col divide-y divide-rule">
                                    {group.items.map((skill) => (
                                        <li key={skill.name} className="py-3 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                            <h3 className="font-medium">{skill.name}</h3>
                                            <p className="font-serif italic text-ink-soft">{skill.spec}</p>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        ))}
                    </div>
                </Column>

                <Ribbon words={["React", "Next.js", "TypeScript", "Node.js", "FastAPI", "Python", "LangChain", "PostgreSQL"]} />

                <Column className="py-20 md:py-28 flex justify-center">
                    <Link href="/projects" className="inline-flex items-center gap-2 font-medium underline underline-offset-4">
                        See them in my projects <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </Column>
            </div>
        </div>
    );
}
