import { person, socials } from "@/data/content";
import { TornEdge } from "./ui";

export default function Footer() {
    const links = [
        ...socials.filter((s) => s.name === "LinkedIn" || s.name === "GitHub"),
        { name: "Email", href: `mailto:${person.email}` },
        { name: "Resume", href: "/resume.pdf" },
    ];

    return (
        <footer className="bg-sheet">
            <TornEdge />
            <div className="bg-paper">
                <div className="max-w-[1100px] mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {links.map((l) => {
                            const external = l.href.startsWith("http");
                            return (
                                <li key={l.name}>
                                    <a
                                        href={l.href}
                                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                        className="hover:underline underline-offset-4"
                                    >
                                        {l.name} <span aria-hidden="true">↗</span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <p className="text-ink-soft text-xs text-center">
                        &copy; {new Date().getFullYear()} {person.name}. Designed and built by me with Next.js.
                    </p>
                </div>
            </div>
        </footer>
    );
}
