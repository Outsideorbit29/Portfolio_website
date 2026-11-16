import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { OrbSpot } from "@/components/ParticleOrb";
import { Frame, PageHeader } from "@/components/ui";
import { skillGroups } from "@/data/content";

// Each group's name as a small word and a highlighted word, e.g. "front/" + "end".
const WORDS: Record<string, [string, string]> = {
    Languages: ["typed/", "languages"],
    Frontend: ["front/", "end"],
    Backend: ["back/", "end"],
    "AI / ML": ["ai/", "ml"],
};

const marqueeWords = ["React", "Next.js", "TypeScript", "Node.js", "FastAPI", "Python", "LangChain", "PostgreSQL"];

export default function SkillsContent() {
    return (
        <div className="w-full">
            <PageHeader note="cat skills.json" title="What I work with" sub="The tools I reach for, from interface to API." look="lumpy" color="#f2c14e" />

            {skillGroups.map((group, gi) => {
                const [small, big] = WORDS[group.category] ?? [`${group.category}/`, ""];
                return (
                    <Frame key={group.category} as="section" aria-labelledby={`skills-${gi}`} className="pt-[calc(var(--cell)*2)]">
                        <div className="cells rise">
                            <div className="box col-span-6 md:col-span-12 xl:col-span-4 xl:row-span-4 p-5 flex flex-col justify-between gap-4">
                                <span className="mono-note">0{gi + 1}.</span>
                                <h2 id={`skills-${gi}`} className="text-4xl md:text-5xl font-light lowercase leading-[1.1]">
                                    <span className="sr-only">{group.category}</span>
                                    <span aria-hidden="true">
                                        {small}
                                        <br />
                                        <span className="inline-block bg-fg text-bg px-2 mt-1">{big}</span>
                                    </span>
                                </h2>
                            </div>
                            <ul className="contents">
                                {group.items.map((skill) => (
                                    <li key={skill.name} className="box col-span-6 md:col-span-12 xl:col-span-12 px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                                        <h3 className="text-lg">{skill.name}</h3>
                                        <p className="mono-note sm:text-right">{skill.spec}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Frame>
                );
            })}

            <Frame className="pt-[calc(var(--cell)*2)]">
                <div className="cells">
                    <div aria-hidden="true" className="box col-span-6 md:col-span-8 xl:col-span-10 row-span-2 overflow-hidden flex items-center">
                        <div className="marquee flex w-max">
                            {[0, 1].map((copy) => (
                                <ul key={copy} className="flex">
                                    {marqueeWords.map((w) => (
                                        <li key={w} className="px-6 font-mono text-sm text-fg-soft whitespace-nowrap">
                                            {w}
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                    <OrbSpot look="calm" color="#f2c14e" className="box hidden xl:block xl:col-span-3 row-span-2" />
                    <Link href="/projects" className="box cell-btn col-span-6 md:col-span-4 xl:col-span-3 row-span-2">
                        See them in my projects <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </div>
            </Frame>
        </div>
    );
}
