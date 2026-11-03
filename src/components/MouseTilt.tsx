"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface MouseTiltProps {
    children: ReactNode;
    className?: string;
    tiltIntensity?: number;
}

export function MouseTilt({ children, className = "", tiltIntensity = 10 }: MouseTiltProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const xSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const ySpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(ySpring, [0, 1], [tiltIntensity, -tiltIntensity]);
    const rotateY = useTransform(xSpring, [0, 1], [-tiltIntensity, tiltIntensity]);

    const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
    };

    const handlePointerLeave = () => {
        x.set(0.5);
        y.set(0.5);
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {children}
        </motion.div>
    );
}
