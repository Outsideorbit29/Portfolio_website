import type { ReactNode } from "react";
import { OrbSpot, type OrbLook } from "./ParticleOrb";
import { Scramble } from "./Scramble";

// The content column, a whole number of grid cells wide.
export function Frame({ children, className = "", as: Tag = "div", ...rest }: { children: ReactNode; className?: string; as?: "div" | "section"; id?: string; "aria-labelledby"?: string }) {
    return (
        <Tag className={`frame ${className}`} {...rest}>
            {children}
        </Tag>
    );
}

// Section heading row: big thin title with a short line under it, and an optional button box on the right.
export function SectionHeader({
    id,
    title,
    sub,
    action,
    as: Tag = "h2",
}: {
    id?: string;
    title: ReactNode;
    sub?: ReactNode;
    action?: ReactNode;
    as?: "h1" | "h2";
}) {
    return (
        <div className="cells">
            <div className="col-span-6 md:col-span-8 xl:col-span-12 flex flex-col justify-end pb-2">
                <Tag id={id} className="draw display text-[1.9rem] md:text-[2.5rem]">
                    {typeof title === "string" ? <Scramble text={title} /> : title}
                </Tag>
                {sub && <p className="mt-1 text-sm text-fg-soft">{sub}</p>}
            </div>
            {action && <div className="col-span-6 md:col-span-4 flex md:justify-end">{action}</div>}
        </div>
    );
}

// Top of an inner page: the page name large, a short line under it, and a spot for the sphere on wide screens.
export function PageHeader({ title, sub, note, look = "blob", color }: { title: string; sub?: string; note: string; look?: OrbLook; color?: string }) {
    return (
        <div className="frame pt-[calc(var(--cell)*2)]">
            <div className="cells">
                <div className="col-span-6 md:col-span-9 xl:col-span-12 md:row-span-3 flex flex-col justify-end pb-4 xl:pb-0">
                    <p className="reveal mono-note">{note}</p>
                    <h1 style={{ animationDelay: "0.05s" }} className="reveal display mt-2 text-[2.6rem] md:text-[4rem] xl:text-[5rem]">
                        <Scramble text={title} delay={150} />
                    </h1>
                    {sub && (
                        <p style={{ animationDelay: "0.1s" }} className="reveal mt-3 text-fg-soft md:text-lg max-w-2xl">
                            {sub}
                        </p>
                    )}
                </div>
                <OrbSpot look={look} color={color} className="hidden md:block md:col-span-3 xl:col-span-4 md:row-span-3 box" />
            </div>
        </div>
    );
}

// Width of a button box, in grid cells.
export const W2 = "w-[calc(var(--cell)*2)]";
export const W3 = "w-[calc(var(--cell)*3)]";

// "01. SOMETHING" label.
export function NumberLabel({ n, children }: { n: string; children: ReactNode }) {
    return (
        <p className="label">
            <span className="text-fg-mute font-normal">{n}.</span> {children}
        </p>
    );
}
