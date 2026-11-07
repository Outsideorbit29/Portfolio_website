import type { ReactNode } from "react";

// A ragged line across 1200 units, made once with a fixed seed so server and browser match.
const TORN_PATH = (() => {
    let seed = 7;
    const rand = () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    };
    let d = "M0 24 V12";
    for (let x = 0; x < 1200; ) {
        x = Math.min(1200, x + 14 + rand() * 22);
        d += ` L${x.toFixed(1)} ${(6 + rand() * 12).toFixed(1)}`;
    }
    return d + " V24 Z";
})();

// Ragged "torn paper" edge between a paper band and a white sheet.
// `color` is the colour of the band the edge belongs to; `flip` puts it on the bottom.
export function TornEdge({ color = "var(--paper)", flip = false }: { color?: string; flip?: boolean }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 1200 24"
            preserveAspectRatio="none"
            className={`block w-full h-4 md:h-6 ${flip ? "rotate-180" : ""}`}
            style={{ color }}
        >
            <path fill="currentColor" d={TORN_PATH} />
        </svg>
    );
}

// A paper band with torn edges top and bottom.
export function PaperBand({ children, className = "" }: { children: ReactNode; className?: string }) {
    return (
        <section className={`relative bg-sheet ${className}`}>
            <TornEdge />
            <div className="bg-paper">{children}</div>
            <TornEdge flip />
        </section>
    );
}

// Section heading: serif uppercase label, bold title, optional italic serif line.
export function SectionHeader({
    kicker,
    title,
    italic,
    id,
    center = false,
    as: Tag = "h2",
}: {
    kicker?: string;
    title: ReactNode;
    italic?: string;
    id?: string;
    center?: boolean;
    as?: "h1" | "h2";
}) {
    return (
        <div className={`flex flex-col gap-2 ${center ? "items-center text-center" : ""}`}>
            {kicker && <p className="kicker">{kicker}</p>}
            <Tag id={id} className="scroll-unfold text-3xl md:text-4xl font-semibold tracking-[-0.02em] leading-tight">
                {title}
            </Tag>
            {italic && <p className="font-serif italic text-xl md:text-2xl text-ink-soft">{italic}</p>}
        </div>
    );
}

// Page top for inner pages: grid paper with the page name in handwriting.
export function PageHeader({ script, title, italic }: { script: string; title: string; italic?: string }) {
    return (
        <div className="grid-paper pt-28 md:pt-36 pb-14 md:pb-20 px-4">
            <div className="max-w-[1100px] mx-auto flex flex-col items-center text-center gap-3">
                <p className="reveal font-script text-3xl md:text-4xl text-clay" aria-hidden="true">{script}</p>
                <h1 style={{ animationDelay: "0.05s" }} className="reveal text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05] max-w-3xl">
                    {title}
                </h1>
                {italic && (
                    <p style={{ animationDelay: "0.1s" }} className="reveal font-serif italic text-xl md:text-2xl text-ink-soft max-w-2xl">
                        {italic}
                    </p>
                )}
            </div>
        </div>
    );
}

// Centred content column.
export function Column({ children, className = "" }: { children: ReactNode; className?: string }) {
    return <div className={`max-w-[1100px] mx-auto px-4 md:px-8 ${className}`}>{children}</div>;
}
