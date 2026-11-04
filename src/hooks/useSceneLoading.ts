"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";

// Heavier 3D scenes only run from this width up.
const DESKTOP_QUERY = "(min-width: 1024px)";

function subscribe(onChange: () => void) {
    const media = window.matchMedia(DESKTOP_QUERY);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
}

export function useIsDesktop() {
    return useSyncExternalStore(
        subscribe,
        () => window.matchMedia(DESKTOP_QUERY).matches,
        () => false,
    );
}

// True once the browser has a quiet moment, so 3D doesn't delay the first paint or input.
export function useBrowserIdle() {
    const [idle, setIdle] = useState(false);

    useEffect(() => {
        const markIdle = () => setIdle(true);

        if ("requestIdleCallback" in window) {
            const id = window.requestIdleCallback(markIdle, { timeout: 2000 });
            return () => window.cancelIdleCallback(id);
        }

        // Safari has no requestIdleCallback.
        const timer = setTimeout(markIdle, 1000);
        return () => clearTimeout(timer);
    }, []);

    return idle;
}

// Whether 3D should run: desktop only, after load, and not for people who prefer reduced motion.
export function useSceneEnabled() {
    const isDesktop = useIsDesktop();
    const idle = useBrowserIdle();
    const reducedMotion = useReducedMotion();

    return isDesktop && idle && !reducedMotion;
}
