"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle, Github, Instagram, Linkedin, Send, Twitter } from "lucide-react";
import { person, socials } from "@/data/content";
import { OrbSpot } from "./ParticleOrb";

const SOCIAL_ICONS: Record<string, typeof Github> = { GitHub: Github, LinkedIn: Linkedin, "X (Twitter)": Twitter, Instagram };

const navLinks = [
    { name: "Work", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Resume", href: "/resume" },
];

// Rows for the four page links on wider screens (Tailwind needs the full class names written out).
const LINK_ROWS = ["md:row-start-3", "md:row-start-4", "md:row-start-5", "md:row-start-6"];

// Contact details, a few page links, a spot for the sphere, and the contact form, all in one frame of boxes.
// The contact page turns the headings off, since it has its own.
export function ContactBlock({ showHeadings = true }: { showHeadings?: boolean }) {
    const [formState, setFormState] = useState("idle"); // idle, submitting, success, error
    const formRef = useRef<HTMLFormElement>(null);

    // When the form appeared. The server ignores forms filled in faster than a person could type.
    const startedAt = useRef(0);
    useEffect(() => {
        if (formState === "idle") startedAt.current = Date.now();
    }, [formState]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const form = formRef.current;
        if (!form) return;
        setFormState("submitting");

        const data = new FormData(form);
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: data.get("user_name"),
                    email: data.get("user_email"),
                    message: data.get("message"),
                    website: data.get("website"),
                    startedAt: startedAt.current,
                }),
            });
            if (!res.ok) throw new Error(`Status ${res.status}`);
            form.reset();
            setFormState("success");
        } catch (error) {
            console.error("Email failed to send:", error);
            setFormState("error");
        }
    };

    const details = [
        { label: "email", value: person.email, href: `mailto:${person.email}` },
        { label: "phone", value: person.phone, href: person.phoneHref },
        { label: "location", value: person.location },
    ];

    return (
        <div className="cells">
            {showHeadings && (
                <>
                    <div className="col-span-6 md:col-span-6 xl:col-span-10 md:row-start-1 flex flex-col justify-end pb-2">
                        <h2 className="draw display text-[1.9rem] md:text-[2.2rem]">Information</h2>
                        <p className="mt-1 text-sm text-fg-soft">Email, call, or find me online.</p>
                    </div>
                    <div className="hidden md:flex md:col-span-6 md:row-start-1 flex-col justify-end pb-2">
                        <h2 className="draw display text-[1.9rem] md:text-[2.2rem]">Contact</h2>
                        <p className="mt-1 text-sm text-fg-soft">A short note is fine.</p>
                    </div>
                </>
            )}

            {/* Details */}
            <ul className="box col-span-6 md:col-span-4 md:col-start-1 md:row-start-2 md:row-span-5 p-5 flex flex-col gap-5">
                {details.map((d) => (
                    <li key={d.label}>
                        <p className="mono-note">{d.label}</p>
                        {d.href ? (
                            <a href={d.href} className="break-all hover:text-accent transition-colors">
                                {d.value}
                            </a>
                        ) : (
                            <p>{d.value}</p>
                        )}
                    </li>
                ))}
            </ul>

            {/* Monogram and page links */}
            <div aria-hidden="true" className="box hidden md:flex md:col-span-2 md:col-start-5 md:row-start-2 items-center justify-center">
                <span className="w-12 h-12 border-2 border-fg-soft flex items-center justify-center text-sm font-semibold tracking-[0.1em]">AK</span>
            </div>
            <nav aria-label="More pages" className="contents">
                {navLinks.map((l, i) => (
                    <Link key={l.href} href={l.href} className={`box cell-btn col-span-3 md:col-span-2 md:col-start-5 ${LINK_ROWS[i]} text-sm`}>
                        {l.name}
                    </Link>
                ))}
            </nav>

            <OrbSpot look="cloud" className="box col-span-6 row-span-4 md:hidden xl:block xl:col-start-7 xl:col-span-4 xl:row-start-2 xl:row-span-5" />

            {/* Form: its own 6-column grid, so it lines up with the page grid. */}
            <div className="col-span-6 md:col-start-7 xl:col-start-11 md:row-start-2 md:row-span-6 grid grid-cols-6 auto-rows-[minmax(var(--cell),auto)]">
                {showHeadings && (
                    <div className="md:hidden col-span-6 flex flex-col justify-end pb-2 pt-[var(--cell)]">
                        <h2 className="display text-[1.9rem]">Contact</h2>
                        <p className="mt-1 text-sm text-fg-soft">A short note is fine.</p>
                    </div>
                )}
                {formState === "success" ? (
                    <div role="status" className="box col-span-6 row-span-6 flex flex-col items-center justify-center text-center gap-4 p-6">
                        <CheckCircle className="w-10 h-10 text-accent" aria-hidden="true" />
                        <p className="text-2xl font-light">Message sent</p>
                        <p className="text-fg-soft">Thanks! I&apos;ll get back to you soon.</p>
                        <button type="button" onClick={() => setFormState("idle")} className="box cell-btn px-5 py-3 mt-2">
                            Send another message
                        </button>
                    </div>
                ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="contents">
                        {/* Spam trap: hidden from people, but bots fill it in. */}
                        <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                            <label htmlFor="contact-website">Leave this empty</label>
                            <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                        </div>
                        <div className="box col-span-6 flex flex-col">
                            <label htmlFor="contact-name" className="mono-note px-4 pt-2">your name</label>
                            <input id="contact-name" name="user_name" type="text" autoComplete="name" required maxLength={100} className="field !pt-1" placeholder="Jane Doe" />
                        </div>
                        <div className="box col-span-6 flex flex-col">
                            <label htmlFor="contact-email" className="mono-note px-4 pt-2">your email</label>
                            <input id="contact-email" name="user_email" type="email" autoComplete="email" required maxLength={254} className="field !pt-1" placeholder="you@example.com" />
                        </div>
                        <div className="box col-span-6 row-span-3 flex flex-col">
                            <label htmlFor="contact-message" className="mono-note px-4 pt-2">your message</label>
                            <textarea id="contact-message" name="message" required maxLength={5000} rows={5} className="field flex-1 !pt-1" placeholder="A job, a project, or a collaboration: tell me what you have in mind." />
                        </div>
                        {formState === "error" && (
                            <p role="alert" className="box col-span-6 md:col-span-3 p-3 text-sm text-[#ffb4a2]">
                                Your message couldn&apos;t be sent. Please try again, or email me at{" "}
                                <a href={`mailto:${person.email}`} className="font-semibold underline underline-offset-2 break-all">
                                    {person.email}
                                </a>
                                .
                            </p>
                        )}
                        <button
                            type="submit"
                            disabled={formState === "submitting"}
                            className={`box cell-btn col-span-6 ${formState === "error" ? "md:col-span-3" : ""} disabled:opacity-60 disabled:cursor-not-allowed`}
                        >
                            {formState === "submitting" ? "Sending..." : (
                                <>
                                    Send message <Send className="w-4 h-4" aria-hidden="true" />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>

            {/* Social links */}
            <ul aria-label="Elsewhere" className="col-span-6 md:col-span-4 md:col-start-1 md:row-start-7 flex">
                {socials.map((s) => {
                    const Icon = SOCIAL_ICONS[s.name] ?? Github;
                    return (
                        <li key={s.href}>
                            <a
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${s.name} (opens in a new tab)`}
                                title={s.name}
                                className="box cell-btn w-[var(--cell)] h-[var(--cell)]"
                            >
                                <Icon className="w-5 h-5" aria-hidden="true" />
                            </a>
                        </li>
                    );
                })}
            </ul>
            <div aria-hidden="true" className="box hatch hidden md:block md:col-span-2 xl:col-span-6 md:row-start-7" />
        </div>
    );
}
