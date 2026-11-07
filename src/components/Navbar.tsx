"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, FileText, FolderOpen, Mail, Smile, Wrench } from "lucide-react";
import { SoundToggle } from "./SoundToggle";

const links = [
    { name: "Work", href: "/projects", icon: FolderOpen },
    { name: "About", href: "/about", icon: Smile },
    { name: "Skills", href: "/skills", icon: Wrench },
    { name: "Experience", href: "/experience", icon: Briefcase },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Resume", href: "/resume", icon: FileText },
];

// Floating pill menu at the top centre, with a round monogram that links home.
export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="fixed top-3 inset-x-0 z-50 flex justify-center px-2 pointer-events-none">
            <div className="flex items-center gap-1.5 pointer-events-auto">
                <Link
                    href="/"
                    aria-label="Anish Kumar Gupta, home"
                    aria-current={pathname === "/" ? "page" : undefined}
                    className="w-10 h-10 shrink-0 rounded-full bg-sheet border border-rule shadow-[0_2px_10px_rgba(60,40,10,0.08)] flex items-center justify-center text-xs font-semibold hover:bg-paper transition-colors"
                >
                    AK
                </Link>
                <nav
                    aria-label="Main"
                    className="rounded-full bg-sheet/90 backdrop-blur border border-rule shadow-[0_2px_10px_rgba(60,40,10,0.08)] px-1.5 py-1"
                >
                    <ul className="flex items-center">
                        {links.map(({ name, href, icon: Icon }) => {
                            const isActive = pathname === href;
                            return (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        aria-current={isActive ? "page" : undefined}
                                        className={`flex items-center gap-1.5 rounded-full px-2 sm:px-3 py-1.5 text-sm transition-colors ${isActive ? "bg-paper text-ink font-semibold" : "text-ink-soft hover:text-ink"}`}
                                    >
                                        <Icon className="w-4 h-4 shrink-0" aria-hidden="true" />
                                        {/* Small phones show icons only; the name is still read out. */}
                                        <span className="sr-only md:not-sr-only">{name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
                <SoundToggle />
            </div>
        </header>
    );
}
