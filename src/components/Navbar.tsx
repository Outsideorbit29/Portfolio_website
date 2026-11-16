"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SoundToggle } from "./SoundToggle";

const links = [
    { name: "Work", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
    { name: "Resume", href: "/resume" },
];

// India time, refreshed every 20 seconds. Empty on the server so the first render matches.
const timeFormat = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: "Asia/Kolkata" });
const subscribeClock = (cb: () => void) => {
    const id = window.setInterval(cb, 20000);
    return () => window.clearInterval(id);
};
const readClock = () => timeFormat.format(new Date());

function Clock() {
    const time = useSyncExternalStore(subscribeClock, readClock, () => "");
    return (
        <p className="box flex flex-col items-center justify-center leading-tight">
            <span className="sr-only">Local time in India: </span>
            <span className="tabular-nums text-sm">{time || "--:--"}</span>
            <span className="text-[0.75rem] text-fg-mute" aria-hidden="true">IST</span>
        </p>
    );
}

// Header of boxed cells: name, page links (a menu on smaller screens), sound and local time.
export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const [prevPath, setPrevPath] = useState(pathname);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLUListElement>(null);

    // Close the menu after moving to another page.
    if (prevPath !== pathname) {
        setPrevPath(pathname);
        setOpen(false);
    }

    useEffect(() => {
        if (!open) return;
        panelRef.current?.querySelector("a")?.focus();
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
                buttonRef.current?.focus();
            }
        };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-bg/85 backdrop-blur-sm">
            <div className="frame cells !grid-rows-[var(--cell)]">
                <Link
                    href="/"
                    aria-current={pathname === "/" ? "page" : undefined}
                    className="box cell-btn col-span-3 md:col-span-3 xl:col-span-2 !justify-start px-4 text-xs tracking-[0.1em] uppercase whitespace-nowrap"
                >
                    <span aria-hidden="true" className="w-2 h-2 bg-accent shrink-0" />
                    Anish Kumar
                </Link>

                {/* Full row of links on wide screens. */}
                <nav aria-label="Main" className="hidden xl:block xl:col-span-12">
                    <ul className="grid grid-cols-6 h-full">
                        {links.map(({ name, href }) => (
                            <li key={href} className="contents">
                                <Link href={href} aria-current={pathname === href ? "page" : undefined} className="box cell-btn text-sm">
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Menu button on smaller screens. */}
                <button
                    ref={buttonRef}
                    type="button"
                    aria-expanded={open}
                    aria-controls="site-menu"
                    onClick={() => setOpen((o) => !o)}
                    className="xl:hidden box cell-btn col-span-2 md:col-span-2 text-sm"
                >
                    {open ? "Close" : "Menu"}
                </button>

                <div className="hidden md:block md:col-span-4 xl:hidden" />
                <div className="col-span-1 md:col-span-1 grid">
                    <SoundToggle />
                </div>
                <div className="hidden md:grid md:col-span-2 xl:col-span-1">
                    <Clock />
                </div>
            </div>

            {open && (
                <nav aria-label="Main" className="xl:hidden">
                    <ul id="site-menu" ref={panelRef} className="frame cells">
                        {links.map(({ name, href }) => (
                            <li key={href} className="contents">
                                <Link
                                    href={href}
                                    aria-current={pathname === href ? "page" : undefined}
                                    className="box cell-btn col-span-3 md:col-span-4 bg-bg"
                                >
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
}
