import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { Ribbon } from "@/components/Ribbon";
import { Column, PageHeader, PaperBand, SectionHeader, TornEdge } from "@/components/ui";
import { coreSkills, experience, person } from "@/data/content";

const goals = [
    { title: "Architect Future Ecosystems", desc: "Building digital spaces that aren't just tools, but extensions of human potential." },
    { title: "Sustainable Tech Innovation", desc: "Engineering high-performance systems with minimal digital waste and maximum efficiency." },
    { title: "Universal Knowledge Sync", desc: "Bridging the gap between complex AI logic and intuitive human understanding." },
];

// Interests, shown as sticky notes.
const interests = [
    { label: "Trading", desc: "Analyzing global financial flows.", color: "#fde68a", rotate: -3 },
    { label: "Learning", desc: "Continuous neural network upgrades.", color: "#bfdbfe", rotate: 2 },
    { label: "Gaming", desc: "Executing strategic simulations.", color: "#fbcfe8", rotate: -1 },
    { label: "Music", desc: "Harmonizing frequency and wavelength.", color: "#bbf7d0", rotate: 3 },
    { label: "Travel", desc: "Exploring physical world coordinates.", color: "#fed7aa", rotate: -2 },
    { label: "Coffee", desc: "Biological fuel for high-level logic.", color: "#e9d5ff", rotate: 2 },
];

const focusTags = ["Neural Architectures", "Digital Minimalism", "Quantitative Analysis", "Generative Systems", "Real-time Data", "Optimal Experience"];

export default function AboutContent() {
    return (
        <div className="w-full">
            <PageHeader script="about" title="Hi, I'm Anish." italic={`${person.title} from ${person.location}`} />

            <div className="bg-sheet">
                <TornEdge flip />

                {/* Intro */}
                <Column className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <figure className="scroll-left lg:col-span-4 relative -rotate-2 bg-white p-3 pb-2 shadow-[0_12px_28px_rgba(60,40,10,0.16)] w-[240px] md:w-[280px] mx-auto">
                        <span aria-hidden="true" className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#f8e6c2]/80 rotate-2" />
                        <div className="relative aspect-[4/5] overflow-hidden bg-paper">
                            <Image src="/anish-anime.png" alt="Illustrated portrait of Anish Kumar Gupta" fill priority sizes="280px" className="object-cover" />
                        </div>
                        <figcaption className="font-script text-xl text-center pt-2">that&apos;s me</figcaption>
                    </figure>

                    <div className="lg:col-span-8 flex flex-col gap-8">
                        <p className="text-xl md:text-2xl leading-relaxed">
                            As a Full Stack Software Engineer, I focus on the intersection of high-performance systems and{" "}
                            <span className="font-serif italic">cognitive computing</span>. Every line of code I write is a step toward building a more connected, intelligent, and efficient future.
                        </p>
                        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            {[
                                { label: "Location", value: person.location },
                                { label: "Education", value: person.education },
                                { label: "Role", value: person.title },
                            ].map((fact, i) => (
                                <div key={fact.label} className="sheet p-4 scroll-3d" style={{ "--end": `${240 + i * 60}px` } as React.CSSProperties}>
                                    <dt className="font-serif italic text-ink-soft">{fact.label}</dt>
                                    <dd className="mt-1 font-medium text-sm">{fact.value}</dd>
                                </div>
                            ))}
                        </dl>
                        <div className="flex flex-wrap gap-3">
                            <Link href="/resume" className="btn btn-dark">
                                <Download className="w-4 h-4" aria-hidden="true" /> View resume
                            </Link>
                            <Link href="/contact" className="btn">Say hello</Link>
                        </div>
                    </div>
                </Column>

                {/* What I've done */}
                <Column className="pb-16 md:pb-24">
                    <SectionHeader kicker="So far" title="What I've been up to" />
                    <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {experience.map((item, i) => (
                            <li key={item.id} className={`sheet p-6 flex flex-col gap-2 ${i % 2 === 0 ? "scroll-left" : "scroll-right"}`}>
                                <span className="text-xs text-ink-soft">{item.date}</span>
                                <h3 className="text-lg font-semibold">{item.role}</h3>
                                <p className="font-serif italic text-ink-soft">{item.shortCompany}</p>
                                <p className="text-sm text-ink-soft leading-relaxed">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </Column>

                {/* Skills and where I used them */}
                <PaperBand>
                    <Column className="py-16 md:py-24">
                        <SectionHeader kicker="Core skills" title="What I'm good at" italic="And where I've used each one" />
                        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {coreSkills.map((skill, i) => (
                                <li key={skill.name} className="sheet p-5 scroll-3d" style={{ "--end": `${240 + (i % 3) * 60}px` } as React.CSSProperties}>
                                    <h3 className="font-semibold">{skill.name}</h3>
                                    <p className="mt-1 text-sm text-ink-soft">Used in {skill.usedIn}</p>
                                </li>
                            ))}
                        </ul>
                    </Column>
                </PaperBand>

                {/* Goals */}
                <Column className="py-16 md:py-24">
                    <SectionHeader kicker="Goals" title="Where I'm heading" />
                    <ol className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {goals.map((goal, i) => (
                            <li key={goal.title} className="sheet p-6 flex flex-col gap-3 scroll-3d" style={{ "--end": `${240 + i * 60}px` } as React.CSSProperties}>
                                <span className="font-serif italic text-2xl text-ink-soft">0{i + 1}</span>
                                <h3 className="text-lg font-semibold">{goal.title}</h3>
                                <p className="text-sm text-ink-soft leading-relaxed">{goal.desc}</p>
                            </li>
                        ))}
                    </ol>
                </Column>

                <Ribbon words={focusTags} />

                {/* Interests as sticky notes */}
                <Column className="py-16 md:py-24">
                    <SectionHeader center kicker="Interests" title="Away from the keyboard" />
                    <ul className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-6">
                        {interests.map((item) => (
                            <li
                                key={item.label}
                                className="scroll-stick aspect-square p-4 flex flex-col justify-center text-center shadow-[0_6px_14px_rgba(60,40,10,0.12)] transition-[rotate,translate] hover:rotate-0 hover:-translate-y-1"
                                style={{ background: item.color, rotate: `${item.rotate}deg`, "--from-r": `${item.rotate * -5}deg` } as React.CSSProperties}
                            >
                                <span className="font-script text-2xl">{item.label}</span>
                                <span className="mt-1 text-xs leading-snug">{item.desc}</span>
                            </li>
                        ))}
                    </ul>
                </Column>

                {/* Philosophy */}
                <Column className="pb-20 md:pb-28">
                    <figure className="scroll-3d grid-paper-fine rounded-2xl border border-rule px-6 py-12 md:px-16 md:py-16 text-center">
                        <blockquote className="font-serif italic text-2xl md:text-4xl leading-snug max-w-3xl mx-auto">
                            &ldquo;I believe in systems that are not just technically sound, but inherently human, where the precision of machines meets the creative depth of the soul.&rdquo;
                        </blockquote>
                        <figcaption className="mt-6 text-sm text-ink-soft">Code is poetry. Efficiency is art.</figcaption>
                    </figure>

                    <div className="mt-14 flex justify-center">
                        <Link href="/experience" className="inline-flex items-center gap-2 font-medium underline underline-offset-4">
                            Next: my experience <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </Link>
                    </div>
                </Column>
            </div>
        </div>
    );
}
