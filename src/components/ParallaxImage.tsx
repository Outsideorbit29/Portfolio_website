"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ParallaxImageProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
}

export function ParallaxImage({ src, alt, className = "", containerClassName = "" }: ParallaxImageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Moves the image slightly opposite to the scroll direction
    const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    return (
        <div ref={ref} className={`relative overflow-hidden w-full h-full ${containerClassName}`}>
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className={`object-cover ${className}`}
                    quality={80}
                />
            </motion.div>
        </div>
    );
}
