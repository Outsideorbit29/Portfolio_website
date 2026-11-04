"use client";

import dynamic from "next/dynamic";
import { useBrowserIdle, useIsDesktop } from "@/hooks/useSceneLoading";

const BackgroundScene = dynamic(() => import("./BackgroundScene"), { ssr: false });

// Phones skip this: three.js costs seconds of CPU there, and the background image already shows stars.
export function BackgroundCanvas() {
    const isDesktop = useIsDesktop();
    const idle = useBrowserIdle();

    if (!isDesktop || !idle) return null;

    return <BackgroundScene />;
}
