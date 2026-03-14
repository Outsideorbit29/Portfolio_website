"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface HoverPhotoRevealProps {
    primarySrc: string;
    secondarySrc: string;
    alt: string;
    revealSize?: number; // No longer used for tracking but kept for API compatibility
}

export function HoverPhotoReveal({
    primarySrc,
    secondarySrc,
    alt,
}: HoverPhotoRevealProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative w-full h-full overflow-hidden rounded-2xl select-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Primary image */}
            <div className="absolute inset-0">
                <Image
                    src={primarySrc}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* Secondary image wrap with fade transition */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="absolute inset-0 z-10"
                    >
                        <Image
                            src={secondarySrc}
                            alt={`${alt} - alternate`}
                            fill
                            className="object-cover scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        {/* Subtle overlay for better visual depth */}
                        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Subtle border overlay always visible */}
            <div className="absolute inset-0 border border-white/5 rounded-2xl z-20 pointer-events-none" />

            {/* Scanline Effect on Hover */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-30 pointer-events-none overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-40 bg-[length:100%_2px,3px_100%] pointer-events-none" />
                        <motion.div 
                            animate={{ y: ["0%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-full h-[1px] bg-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.5)] absolute top-0"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
