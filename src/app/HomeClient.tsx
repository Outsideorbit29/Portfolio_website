import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { ContactBlock } from "@/components/ContactBlock";
import { ExperienceStrip } from "@/components/ExperienceStrip";
import { OrbSpot } from "@/components/ParticleOrb";
import { ProjectViewer } from "@/components/ProjectViewer";
import { Scramble } from "@/components/Scramble";
import { Toolbox, type Stat } from "@/components/Toolbox";
import { Frame, NumberLabel, SectionHeader, W3 } from "@/components/ui";
import { person, projects } from "@/data/content";

// Real numbers only, all from the resume and project notes.
const stats: Stat[] = [
  { value: projects.length, label: "Projects built" },
  { value: 1, text: "1st", label: "of 50+ teams, Stock Overflow hackathon" },
  { value: 200, suffix: "+", label: "Students used Dhruv Tara" },
  { value: 620, label: "Automated tests behind Alex" },
];

const marqueeWords = ["React", "Next.js", "TypeScript", "Node.js", "FastAPI", "Python", "LangChain", "PostgreSQL", "MongoDB", "Docker", "Tailwind", "TensorFlow"];

// A square in one corner of the hero frame.
const corner = "absolute w-[var(--cell)] h-[var(--cell)] border border-cell";

export default function HomeContent() {
  return (
    <div className="w-full">
      {/* Hero: name, title and the sphere in a frame */}
      <Frame className="pt-[calc(var(--cell)*2)]">
        <div className="cells">
          <div className="reveal col-span-6 xl:col-start-1 xl:col-span-5 xl:row-start-1 flex items-end pb-3 xl:pl-[var(--cell)]">
            <NumberLabel n="01">{person.title}</NumberLabel>
          </div>
          <div style={{ animationDelay: "0.05s" }} className="reveal col-span-6 xl:col-start-12 xl:col-span-5 xl:row-start-1 flex items-end md:justify-end pb-3 xl:pr-[var(--cell)]">
            <NumberLabel n="02">{person.location}</NumberLabel>
          </div>

          <h1 style={{ animationDelay: "0.1s" }} className="reveal col-span-6 md:col-span-12 xl:col-start-2 xl:col-span-4 xl:row-start-3 xl:row-span-2 flex flex-col justify-center py-4 xl:py-0 display text-[2.3rem] md:text-[3rem] xl:text-[2.6rem]">
            <span><Scramble text="Anish" delay={250} /></span>{" "}
            <span className="text-fg-soft"><Scramble text="Kumar Gupta" delay={350} /></span>
          </h1>

          <OrbSpot look="blob" className="relative col-span-6 row-span-6 md:col-start-4 xl:col-start-6 xl:row-start-1">
            <span aria-hidden="true" className={`${corner} top-0 left-0`} />
            <span aria-hidden="true" className={`${corner} top-0 right-0`} />
            <span aria-hidden="true" className={`${corner} bottom-0 left-0`} />
            <span aria-hidden="true" className={`${corner} bottom-0 right-0`} />
            <p aria-hidden="true" className="mono-note absolute top-2 left-[calc(var(--cell)+8px)]">lat: 23.80°N · lng: 86.43°E</p>
            <p aria-hidden="true" className="mono-note absolute bottom-2 right-[calc(var(--cell)+8px)]">renderer: raw webgl</p>
          </OrbSpot>

          <p style={{ animationDelay: "0.15s" }} className="reveal col-span-6 md:col-span-12 xl:col-start-12 xl:col-span-4 xl:row-start-3 xl:row-span-2 flex flex-col justify-center items-end text-right py-4 xl:py-0 display text-[2.3rem] md:text-[3rem] xl:text-[2.6rem]">
            <span><Scramble text="Full Stack" delay={300} /></span>{" "}
            <span className="text-fg-soft"><Scramble text="Engineer" delay={400} /></span>
          </p>

          <div style={{ animationDelay: "0.2s" }} className="reveal col-span-6 xl:col-start-1 xl:col-span-5 xl:row-start-6 flex items-end pb-3 xl:pl-[var(--cell)]">
            <div className="label flex gap-1.5">
              <span className="text-fg-mute font-normal">03.</span>
              <span className="flex flex-col gap-1 normal-case tracking-normal">
                <a href={`mailto:${person.email}`} className="hover:text-accent transition-colors">M: {person.email}</a>
                <a href={person.phoneHref} className="hover:text-accent transition-colors">T: {person.phone}</a>
              </span>
            </div>
          </div>
          <div style={{ animationDelay: "0.25s" }} className="reveal col-span-6 xl:col-start-12 xl:col-span-5 xl:row-start-6 flex items-end md:justify-end pb-3 xl:pr-[var(--cell)]">
            <NumberLabel n="04">B.Tech CSE · VIT Bhopal</NumberLabel>
          </div>

          <a
            href="/resume.pdf"
            download="Anish_Kumar_Gupta_Resume.pdf"
            className="box cell-btn col-span-3 mt-[var(--cell)] xl:mt-0 md:col-start-4 xl:col-start-6 xl:row-start-8"
          >
            <Download className="w-4 h-4" aria-hidden="true" /> Resume
          </a>
          <Link href="/contact" className="box cell-btn col-span-3 mt-[var(--cell)] xl:mt-0 xl:col-start-9 xl:row-start-8">
            Say hello <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </Frame>

      {/* Selected work */}
      <Frame as="section" aria-labelledby="work-heading" className="pt-[calc(var(--cell)*3)]">
        <SectionHeader
          id="work-heading"
          title="Selected work"
          sub="Seven projects, from idea to interface to API."
          action={
            <Link href="/projects" className={`box cell-btn ${W3} h-[var(--cell)]`}>
              All projects
            </Link>
          }
        />
        <div className="rise">
          <ProjectViewer />
        </div>
      </Frame>

      {/* Toolbox */}
      <Frame as="section" aria-labelledby="skills-heading" className="pt-[calc(var(--cell)*3)]">
        <SectionHeader
          id="skills-heading"
          title="Interface · API · AI"
          sub="The tools I reach for, and a few numbers so far."
          action={
            <Link href="/contact" className={`box cell-btn ${W3} h-[var(--cell)]`}>
              Get in touch
            </Link>
          }
        />
        <div className="rise">
          <Toolbox stats={stats} />
        </div>
      </Frame>

      {/* Experience */}
      <Frame as="section" aria-labelledby="experience-heading" className="pt-[calc(var(--cell)*2)]">
        <SectionHeader
          id="experience-heading"
          title="Experience"
          sub="Projects, a techathon and a hackathon win along the way."
          action={
            <Link href="/experience" className={`box cell-btn ${W3} h-[var(--cell)]`}>
              Full timeline
            </Link>
          }
        />
        <ExperienceStrip />
      </Frame>

      {/* About */}
      <Frame as="section" aria-labelledby="about-heading" className="pt-[calc(var(--cell)*2)]">
        <SectionHeader
          id="about-heading"
          title="About"
          sub={`${person.title} from ${person.location}.`}
          action={
            <Link href="/about" className={`box cell-btn ${W3} h-[var(--cell)]`}>
              Read more
            </Link>
          }
        />
        <div className="cells rise">
          <div className="box col-span-6 md:col-span-7 xl:col-span-6 row-span-4 p-6 md:p-10 flex items-center">
            <p className="text-xl md:text-2xl font-light leading-relaxed">
              I like taking an idea all the way to a working product people can use: the interface, the API behind it, and the AI features on top.
            </p>
          </div>
          <OrbSpot look="wave" className="box hidden xl:block xl:col-span-5 xl:row-span-4" />
          <figure className="box group col-span-6 row-span-5 md:col-span-5 xl:col-span-5 xl:row-span-6 md:row-start-1 md:col-start-8 xl:col-start-12">
            <div className="absolute inset-[calc(var(--cell)/5)] overflow-hidden">
              <Image
                src="/anish-anime.png"
                alt="Illustrated portrait of Anish Kumar Gupta"
                fill
                sizes="(max-width: 768px) 100vw, 375px"
                className="object-cover object-top grayscale transition-[filter] duration-700 group-hover:grayscale-0"
              />
            </div>
          </figure>
          <div aria-hidden="true" className="box col-span-6 md:col-span-7 xl:col-span-11 xl:row-span-2 overflow-hidden flex items-center">
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
        </div>
      </Frame>

      {/* Contact */}
      <Frame as="section" aria-label="Contact" className="pt-[calc(var(--cell)*3)]">
        <ContactBlock />
      </Frame>
    </div>
  );
}
