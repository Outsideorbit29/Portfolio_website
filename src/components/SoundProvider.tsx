"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { playSound } from "@/lib/sound";

// Plays a soft tap whenever a link or button is clicked anywhere on the site.
// Parts with their own sound (like the desk polaroids) mark themselves with data-sound="own".
export function SoundProvider() {
    const pathname = usePathname();
    const firstPage = useRef(true);

    // A page-turn sound when moving to another page (not on the first load).
    useEffect(() => {
        if (firstPage.current) {
            firstPage.current = false;
            return;
        }
        playSound("page");
    }, [pathname]);

    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const target = (e.target as Element | null)?.closest("a, button");
            if (!target || target.closest("[data-sound='own']")) return;
            playSound("tap");
        };
        document.addEventListener("click", onClick, true);
        return () => document.removeEventListener("click", onClick, true);
    }, []);

    return null;
}
