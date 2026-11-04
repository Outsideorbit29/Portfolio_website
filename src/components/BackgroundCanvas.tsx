"use client";

import dynamic from "next/dynamic";
import { useSceneEnabled } from "@/hooks/useSceneLoading";

const BackgroundScene = dynamic(() => import("./BackgroundScene"), { ssr: false });

// Phones skip this: three.js costs seconds of CPU there, and the background image already shows stars.
export function BackgroundCanvas() {
    const enabled = useSceneEnabled();

    if (!enabled) return null;

    return <BackgroundScene />;
}
