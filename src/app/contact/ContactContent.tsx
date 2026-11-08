"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react";
import { Column, PageHeader, TornEdge } from "@/components/ui";
import { person, socials } from "@/data/content";

const inputClass =
    "w-full rounded-lg border border-rule bg-sheet px-4 py-3 text-base placeholder:text-[#8a8a8a] focus:outline-none focus:border-ink transition-colors";

export default function ContactContent() {
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
        { label: "Email", value: person.email, href: `mailto:${person.email}`, icon: Mail },
        { label: "Phone", value: person.phone, href: person.phoneHref, icon: Phone },
        { label: "Location", value: person.location, icon: MapPin },
    ];

    return (
        <div className="w-full">
            <PageHeader
                script="contact"
                title="Have something in mind?"
                italic="This form is the quickest way to reach me about a job, a project, or a collaboration."
            />

            <div className="bg-sheet">
                <TornEdge flip />
                <Column className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
                    {/* Details */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <h2 className="text-2xl font-semibold tracking-[-0.01em]">Other ways to reach me</h2>
                        <ul className="flex flex-col gap-3">
                            {details.map(({ label, value, href, icon: Icon }) => {
                                const inner = (
                                    <>
                                        <Icon className="w-5 h-5 text-ink-soft shrink-0" aria-hidden="true" />
                                        <span className="flex flex-col">
                                            <span className="font-serif italic text-ink-soft">{label}</span>
                                            <span className="font-medium break-all">{value}</span>
                                        </span>
                                    </>
                                );
                                return (
                                    <li key={label} className="scroll-left">
                                        {href ? (
                                            <a href={href} className="sheet p-4 flex items-center gap-4 hover:border-ink transition-colors">
                                                {inner}
                                            </a>
                                        ) : (
                                            <div className="sheet p-4 flex items-center gap-4">{inner}</div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>

                        <div>
                            <h3 className="kicker">Elsewhere</h3>
                            <ul className="mt-3 flex flex-wrap gap-2">
                                {socials.map((s) => (
                                    <li key={s.href}>
                                        <a href={s.href} target="_blank" rel="noopener noreferrer" className="btn">
                                            {s.name} <span aria-hidden="true">↗</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="font-script text-2xl text-clay -rotate-1">I usually reply within 24 hours.</p>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-7">
                        <div className="scroll-right grid-paper-fine rounded-2xl border border-rule p-3 md:p-5">
                            <div className="sheet p-6 md:p-10">
                                {formState === "success" ? (
                                    <div role="status" className="flex flex-col items-center text-center gap-5 py-12">
                                        <CheckCircle className="w-12 h-12 text-[#2f8f5b]" aria-hidden="true" />
                                        <h2 className="text-2xl font-semibold">Message sent</h2>
                                        <p className="text-ink-soft">Thanks! I&apos;ll get back to you soon.</p>
                                        <button type="button" onClick={() => setFormState("idle")} className="btn">
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
                                        <h2 className="font-script text-3xl">Write to me</h2>
                                        {/* Spam trap: hidden from people, but bots fill it in. */}
                                        <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                                            <label htmlFor="contact-website">Leave this empty</label>
                                            <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="contact-name" className="text-sm font-medium">Your name</label>
                                            <input id="contact-name" name="user_name" type="text" autoComplete="name" required maxLength={100} className={inputClass} placeholder="Your name" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="contact-email" className="text-sm font-medium">Your email</label>
                                            <input id="contact-email" name="user_email" type="email" autoComplete="email" required maxLength={254} className={inputClass} placeholder="you@example.com" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label htmlFor="contact-message" className="text-sm font-medium">Your message</label>
                                            <textarea id="contact-message" name="message" required maxLength={5000} rows={5} className={`${inputClass} resize-none`} placeholder="How can I help?" />
                                        </div>

                                        {formState === "error" && (
                                            <p role="alert" className="rounded-lg border border-[#e7b4b0] bg-[#fdf0ef] px-4 py-3 text-sm text-[#8a2b22]">
                                                Your message couldn&apos;t be sent. Please try again, or email me at{" "}
                                                <a href={`mailto:${person.email}`} className="font-semibold underline underline-offset-2">
                                                    {person.email}
                                                </a>
                                                .
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={formState === "submitting"}
                                            className="btn btn-dark justify-center !py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
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
                        </div>
                    </div>
                </Column>
            </div>
        </div>
    );
}
