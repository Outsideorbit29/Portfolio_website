"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ParallaxBackground() {
    const { scrollYProgress } = useScroll();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Parallax effect: image moves slower than the scroll
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
    // Subtle scaling for depth
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
    // Subtle opacity change for atmospheric feel
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 0.7, 0.6]);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden bg-black">
            {/* Primary universe background image */}
            <motion.div 
                style={{ y, scale, opacity }}
                className="absolute inset-0 w-full h-[120%] pointer-events-none"
            >
                <Image
                    src="/images/universe-bg.png"
                    alt="Universe Background"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
            </motion.div>

            {/* Atmospheric overlays for depth and readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none z-10" />
            
            {/* Subtle drifting noise for texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] contrast-150 brightness-150 mix-blend-screen pointer-events-none z-20" />
            
            {/* Top and Bottom vignetting */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-30 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-30 pointer-events-none" />
        </div>
    );
}

