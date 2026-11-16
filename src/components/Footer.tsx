import { person, socials } from "@/data/content";

// Bottom row: a few links and the copyright. Leaves room for the scroll ruler on wide screens.
export default function Footer() {
    const links = [
        ...socials.filter((s) => s.name === "LinkedIn" || s.name === "GitHub"),
        { name: "Email", href: `mailto:${person.email}` },
        { name: "Resume", href: "/resume.pdf" },
    ];

    return (
        <footer className="relative z-[1] frame pt-[var(--cell)] pb-[calc(var(--cell)*1.5)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm">
                <ul className="flex flex-wrap gap-x-8 gap-y-2">
                    {links.map((l) => {
                        const external = l.href.startsWith("http");
                        return (
                            <li key={l.name}>
                                <a
                                    href={l.href}
                                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className="text-fg-soft hover:text-fg transition-colors"
                                >
                                    {l.name} <span aria-hidden="true">↗</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <p className="text-fg-mute text-xs uppercase tracking-[0.08em]">
                    &copy; {new Date().getFullYear()} {person.name}. Designed and built with Next.js.
                </p>
            </div>
        </footer>
    );
}
