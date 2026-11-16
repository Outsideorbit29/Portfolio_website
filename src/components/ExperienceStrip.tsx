"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { experience } from "@/data/content";

// Experience as a sideways strip of boxes, with arrow buttons. Also scrolls by touch, trackpad or keyboard.
export function ExperienceStrip() {
    const listRef = useRef<HTMLUListElement>(null);
    const [offset, setOffset] = useState(0);

    const scroll = (dir: number) => {
        const list = listRef.current;
        if (!list) return;
        const item = list.querySelector("li");
        list.scrollBy({ left: dir * (item?.getBoundingClientRect().width ?? 300), behavior: "smooth" });
    };

    return (
        <div className="cells">
            <button type="button" onClick={() => scroll(-1)} aria-label="Scroll experience back" className="box cell-btn order-2 md:order-none col-span-3 md:col-span-1 md:row-start-1">
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <ul
                ref={listRef}
                tabIndex={0}
                aria-label="Experience, scrolls sideways"
                onScroll={(e) => setOffset(Math.round(e.currentTarget.scrollLeft))}
                className="relative col-span-6 md:col-span-11 xl:col-span-15 md:row-start-1 md:row-span-2 flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none]"
            >
                {experience.map((item) => (
                    <li key={item.id} className="box snap-start shrink-0 w-[calc(var(--cell)*5)] min-h-[calc(var(--cell)*2)] p-4 flex flex-col gap-1.5">
                        <span className="mono-note">{item.date}</span>
                        <h3 className="font-medium leading-snug">{item.role}</h3>
                        <p className="text-sm text-fg-soft">{item.shortCompany}</p>
                        <span className="tag w-fit mt-auto">{item.type}</span>
                    </li>
                ))}
            </ul>
            <button type="button" onClick={() => scroll(1)} aria-label="Scroll experience forward" className="box cell-btn order-3 md:order-none col-span-3 md:col-span-1 md:col-start-1 md:row-start-2">
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
            <p aria-hidden="true" className="hidden md:block md:col-span-12 xl:col-span-16 mono-note text-right pt-1 pr-1 min-h-0">
                scrollLeft: {offset}px
            </p>
        </div>
    );
}
