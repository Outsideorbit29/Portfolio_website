import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { OrbSpot } from "@/components/ParticleOrb";
import { Frame, PageHeader, SectionHeader } from "@/components/ui";
import { coreSkills, experience, person } from "@/data/content";

const goals = [
    { title: "Architect Future Ecosystems", desc: "Building digital spaces that aren't just tools, but extensions of human potential." },
    { title: "Sustainable Tech Innovation", desc: "Engineering high-performance systems with minimal digital waste and maximum efficiency." },
    { title: "Universal Knowledge Sync", desc: "Bridging the gap between complex AI logic and intuitive human understanding." },
];

const interests = [
    { label: "Trading", desc: "Analyzing global financial flows." },
    { label: "Learning", desc: "Continuous neural network upgrades." },
    { label: "Gaming", desc: "Executing strategic simulations." },
    { label: "Music", desc: "Harmonizing frequency and wavelength." },
    { label: "Travel", desc: "Exploring physical world coordinates." },
    { label: "Coffee", desc: "Biological fuel for high-level logic." },
];

const focusTags = ["Neural Architectures", "Digital Minimalism", "Quantitative Analysis", "Generative Systems", "Real-time Data", "Optimal Experience"];

export default function AboutContent() {
    return (
        <div className="w-full">
            <PageHeader note="whoami" title="Hi, I'm Anish" sub={`${person.title} from ${person.location}`} look="wave" color="#7aa2ff" />

            {/* Intro */}
            <Frame className="pt-[var(--cell)]">
                <div className="cells">
                    <figure className="box group col-span-6 row-span-5 md:col-span-4 md:row-span-4 xl:row-span-5">
                        <div className="absolute inset-[calc(var(--cell)/5)] overflow-hidden">
                            <Image
                                src="/anish-anime.png"
                                alt="Illustrated portrait of Anish Kumar Gupta"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 300px"
                                className="object-cover object-top grayscale transition-[filter] duration-700 group-hover:grayscale-0"
                            />
                        </div>
                    </figure>
                    <div className="box col-span-6 md:col-span-8 md:row-span-4 xl:col-span-12 xl:row-span-3 p-6 md:p-10 flex items-center">
                        <p className="text-xl md:text-2xl font-light leading-relaxed">
                            As a Full Stack Software Engineer, I focus on the intersection of high-performance systems and cognitive computing. Every line of code I write is a step toward building a more connected, intelligent, and efficient future.
                        </p>
                    </div>
                    <dl className="contents">
                        {[
                            { label: "location", value: person.location },
                            { label: "education", value: person.education },
                            { label: "role", value: person.title },
                        ].map((fact) => (
                            <div key={fact.label} className="box col-span-6 md:col-span-4 xl:row-span-2 p-4 flex flex-col justify-center">
                                <dt className="mono-note">{fact.label}</dt>
                                <dd className="mt-1 font-medium text-sm">{fact.value}</dd>
                            </div>
                        ))}
                    </dl>
                    <Link href="/resume" className="box cell-btn col-span-3">
                        <Download className="w-4 h-4" aria-hidden="true" /> View resume
                    </Link>
                    <Link href="/contact" className="box cell-btn col-span-3">
                        Say hello
                    </Link>
                </div>
            </Frame>

            {/* What I've done */}
            <Frame as="section" aria-labelledby="done-heading" className="pt-[calc(var(--cell)*2)]">
                <SectionHeader id="done-heading" title="What I've been up to" sub="So far." />
                <ul className="cells rise">
                    {experience.map((item) => (
                        <li key={item.id} className="box col-span-6 md:col-span-6 xl:col-span-8 row-span-3 p-6 flex flex-col gap-2">
                            <span className="mono-note">{item.date}</span>
                            <h3 className="text-lg font-medium">{item.role}</h3>
                            <p className="text-fg-soft">{item.shortCompany}</p>
                            <p className="text-sm text-fg-soft leading-relaxed">{item.description}</p>
                        </li>
                    ))}
                </ul>
            </Frame>

            {/* Skills and where I used them */}
            <Frame as="section" aria-labelledby="core-heading" className="pt-[calc(var(--cell)*2)]">
                <SectionHeader id="core-heading" title="What I'm good at" sub="And where I've used each one." />
                <ul className="cells rise">
                    {coreSkills.map((skill) => (
                        <li key={skill.name} className="box col-span-6 md:col-span-4 xl:col-span-4 p-5 flex flex-col justify-center">
                            <h3 className="font-medium">{skill.name}</h3>
                            <p className="mt-1 text-sm text-fg-soft">Used in {skill.usedIn}</p>
                        </li>
                    ))}
                    <li aria-hidden="true" className="box hatch hidden xl:block xl:col-span-8" />
                </ul>
            </Frame>

            {/* Goals */}
            <Frame as="section" aria-labelledby="goals-heading" className="pt-[calc(var(--cell)*2)]">
                <SectionHeader id="goals-heading" title="Where I'm heading" sub="Goals." />
                <div className="cells rise">
                    <ol className="contents">
                        {goals.map((goal, i) => (
                            <li key={goal.title} className="box col-span-6 md:col-span-4 row-span-3 p-6 flex flex-col gap-3">
                                <span className="mono-note">0{i + 1}.</span>
                                <h3 className="text-lg font-medium">{goal.title}</h3>
                                <p className="text-sm text-fg-soft leading-relaxed">{goal.desc}</p>
                            </li>
                        ))}
                    </ol>
                    <OrbSpot look="lumpy" color="#d48cff" className="box hidden xl:block xl:col-span-4 xl:row-span-3" />
                    <ul className="box col-span-6 md:col-span-12 xl:col-span-16 p-3 flex flex-wrap items-center gap-1.5" aria-label="Focus areas">
                        {focusTags.map((t) => (
                            <li key={t} className="tag">{t}</li>
                        ))}
                    </ul>
                </div>
            </Frame>

            {/* Interests */}
            <Frame as="section" aria-labelledby="interests-heading" className="pt-[calc(var(--cell)*2)]">
                <SectionHeader id="interests-heading" title="Away from the keyboard" sub="Interests." />
                <ul className="cells rise">
                    {interests.map((item) => (
                        <li key={item.label} className="box group col-span-3 md:col-span-2 row-span-2 p-4 flex flex-col justify-center text-center gap-1 transition-colors hover:bg-fg hover:text-bg">
                            <span className="text-lg">{item.label}</span>
                            <span className="text-xs leading-snug text-fg-soft group-hover:text-bg">{item.desc}</span>
                        </li>
                    ))}
                    <li aria-hidden="true" className="box hatch hidden xl:block xl:col-span-4 xl:row-span-2" />
                </ul>
            </Frame>

            {/* Philosophy */}
            <Frame className="pt-[calc(var(--cell)*2)]">
                <div className="cells">
                    <figure className="box col-span-6 md:col-span-12 xl:col-span-16 row-span-3 px-6 py-10 md:px-16 flex flex-col justify-center text-center">
                        <blockquote className="text-2xl md:text-3xl font-light leading-snug max-w-3xl mx-auto">
                            &ldquo;I believe in systems that are not just technically sound, but inherently human, where the precision of machines meets the creative depth of the soul.&rdquo;
                        </blockquote>
                        <figcaption className="mt-6 mono-note">Code is poetry. Efficiency is art.</figcaption>
                    </figure>
                    <Link href="/experience" className="box cell-btn col-span-6 md:col-span-4 md:col-start-9 xl:col-start-13">
                        Next: my experience <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </div>
            </Frame>
        </div>
    );
}
