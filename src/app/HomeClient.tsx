import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { DeskHero } from "@/components/DeskHero";
import { ProjectCard } from "@/components/ProjectCard";
import { Ribbon } from "@/components/Ribbon";
import { Column, PaperBand, SectionHeader, TornEdge } from "@/components/ui";
import { experience, person, projects, skillGroups } from "@/data/content";

export default function HomeContent() {
  return (
    <div className="w-full">
      {/* Desk and name, on paper */}
      <section className="bg-paper pt-20 md:pt-24">
        <DeskHero />

        <div className="max-w-[1100px] mx-auto px-4 pt-16 md:pt-20 pb-20 md:pb-28 flex flex-col items-center text-center">
          <h1 className="reveal font-script text-5xl md:text-6xl text-ink">{person.name}</h1>
          <p style={{ animationDelay: "0.05s" }} className="reveal mt-3 text-base md:text-lg">
            {person.title} <span className="text-ink-soft">|</span> B.Tech CSE, VIT Bhopal
          </p>
          <p style={{ animationDelay: "0.1s" }} className="reveal mt-8 font-medium text-lg max-w-sm">
            I like taking an idea all the way to a working product people can use.
          </p>
          <div style={{ animationDelay: "0.15s" }} className="reveal mt-8 flex flex-wrap justify-center gap-3">
            <a href="/resume.pdf" download="Anish_Kumar_Gupta_Resume.pdf" className="btn btn-dark">
              <Download className="w-4 h-4" aria-hidden="true" /> Resume
            </a>
            <Link href="/contact" className="btn">
              <Mail className="w-4 h-4" aria-hidden="true" /> Say hello
            </Link>
          </div>
        </div>
      </section>

      {/* Projects, on a white sheet */}
      <section aria-labelledby="work-heading" className="bg-sheet">
        <TornEdge flip />
        <Column className="py-20 md:py-28">
          <SectionHeader
            id="work-heading"
            kicker="Selected projects"
            title={
              <>
                From idea,
                <br />
                to interface,
                <br />
                <span className="text-[#868686]">to API.</span>
              </>
            }
          />
          <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-14">
            {projects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </Column>
      </section>

      {/* About, on a paper band */}
      <PaperBand>
        <Column className="py-20 md:py-28">
          <h2 className="sr-only">About me</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
            {/* Photo, taped down */}
            <figure className="scroll-left relative -rotate-3 bg-white p-3 pb-2 shadow-[0_12px_28px_rgba(60,40,10,0.16)] w-[220px] md:w-[260px] shrink-0">
              <span aria-hidden="true" className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#f8e6c2]/80 rotate-2" />
              <div className="relative aspect-[4/5] overflow-hidden bg-paper">
                <Image src="/anish-anime.png" alt="Illustrated portrait of Anish Kumar Gupta" fill sizes="260px" className="object-cover" />
              </div>
              <figcaption className="font-script text-xl text-center pt-2">that&apos;s me</figcaption>
            </figure>

            {/* Lined notepad page */}
            <div className="scroll-right relative rotate-1 bg-white w-full max-w-[460px] shadow-[0_12px_28px_rgba(60,40,10,0.12)] px-7 py-8 bg-[linear-gradient(transparent_31px,#e9eef7_32px)] bg-[length:100%_32px]">
              <span aria-hidden="true" className="absolute top-0 bottom-0 left-12 w-px bg-[#f3c0c0]" />
              <div className="pl-8 flex flex-col gap-[0.6rem] leading-[32px]">
                <p className="font-script text-3xl leading-[32px]">About me</p>
                <p>Full stack engineer from {person.location}.</p>
                <p>{person.education}.</p>
                <p>I enjoy trading, learning and good coffee.</p>
                <Link href="/about" className="inline-flex items-center gap-1.5 font-medium underline underline-offset-4 w-fit">
                  Read more <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </Column>
      </PaperBand>

      {/* Skills */}
      <section aria-labelledby="skills-heading" className="bg-sheet">
        <Column className="pt-20 md:pt-28 pb-8">
          <SectionHeader id="skills-heading" kicker="Toolbox" title="What I work with" italic="The tools I reach for, from interface to API" />
          <div className="mt-10 grid-paper-fine rounded-2xl border border-rule p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillGroups.map((group, i) => (
              <div key={group.category} className="sheet p-5 scroll-3d" style={{ "--end": `${240 + i * 60}px` } as React.CSSProperties}>
                <h3 className="font-semibold">{group.category}</h3>
                <ul className="mt-3 flex flex-col gap-1.5 text-sm text-ink-soft">
                  {group.items.map((s) => (
                    <li key={s.name}>{s.name}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/skills" className="inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4">
              All skills <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </Column>

        <Ribbon words={["React", "Next.js", "TypeScript", "Node.js", "FastAPI", "Python", "LangChain", "PostgreSQL"]} />
      </section>

      {/* Experience */}
      <section aria-labelledby="experience-heading" className="bg-sheet">
        <Column className="py-16 md:py-20">
          <SectionHeader id="experience-heading" center title="Where I've built things" italic="Projects, a techathon and a hackathon win along the way" />
          <ul tabIndex={0} aria-label="Experience, scrolls sideways on small screens" className="scroll-3d mt-12 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-4 md:overflow-visible">
            {experience.map((item) => (
              <li key={item.id} className="sheet p-5 snap-start shrink-0 w-[260px] md:w-auto flex flex-col gap-2">
                <span className="text-xs text-ink-soft">{item.date}</span>
                <h3 className="font-semibold leading-snug">{item.role.replace(/ - .*$/, "")}</h3>
                <p className="text-sm text-ink-soft">{item.shortCompany}</p>
                <span className="tag w-fit mt-auto">{item.type}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-center">
            <Link href="/experience" className="inline-flex items-center gap-1.5 text-sm font-medium underline underline-offset-4">
              Full timeline <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </Column>

        <Ribbon flip words={["Full stack", "AI features", "APIs", "Databases", "Responsive UI", "Deployments"]} />

        {/* Say hello */}
        <Column className="py-20 md:py-28 flex flex-col items-center text-center">
          <SectionHeader center kicker="Say hello" title="Have something in mind?" italic="I'd love to hear about it." />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-dark">
              <Mail className="w-4 h-4" aria-hidden="true" /> Send a message
            </Link>
            <a href={`mailto:${person.email}`} className="btn">{person.email}</a>
          </div>
        </Column>
      </section>
    </div>
  );
}
