"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useBrowserIdle, useIsDesktop } from "@/hooks/useSceneLoading";

const ThreeImageCanvas = dynamic(() => import("./ThreeImageCanvas"), { ssr: false });

interface ThreeImageProps {
    src: string;
    alt: string;
    className?: string;
}

// A normal image, with the hover effect layered on top for desktop visitors.
export function ThreeImage({ src, alt, className = "" }: ThreeImageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isDesktop = useIsDesktop();
    const idle = useBrowserIdle();
    const inView = useInView(ref, { margin: "200px" });
    const hasBeenInView = useInView(ref, { margin: "200px", once: true });

    return (
        <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
            <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 600px" />
            {/* Only start 3D once this section is near the screen, and pause it when it leaves. */}
            {isDesktop && idle && hasBeenInView && <ThreeImageCanvas src={src} active={inView} />}
        </div>
    );
}
