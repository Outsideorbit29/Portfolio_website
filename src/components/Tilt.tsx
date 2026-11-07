"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

// Tilts its content in 3D toward the mouse, with a soft light sheen. Mouse only.
export function Tilt({ children, className = "", max = 8 }: { children: ReactNode; className?: string; max?: number }) {
    const reducedMotion = useReducedMotion();
    const px = useMotionValue(0.5);
    const py = useMotionValue(0.5);
    const sx = useSpring(px, { stiffness: 180, damping: 18 });
    const sy = useSpring(py, { stiffness: 180, damping: 18 });
    const rotateY = useTransform(sx, [0, 1], [-max, max]);
    const rotateX = useTransform(sy, [0, 1], [max, -max]);
    const sheen = useTransform([sx, sy], ([x, y]) => `radial-gradient(circle at ${(x as number) * 100}% ${(y as number) * 100}%, rgba(255,255,255,0.35), transparent 55%)`);

    return (
        <motion.div
            className={`relative ${className}`}
            style={{ rotateX, rotateY, transformPerspective: 900 }}
            onPointerMove={(e) => {
                if (e.pointerType !== "mouse" || reducedMotion) return;
                const r = e.currentTarget.getBoundingClientRect();
                px.set((e.clientX - r.left) / r.width);
                py.set((e.clientY - r.top) / r.height);
            }}
            onPointerLeave={() => {
                px.set(0.5);
                py.set(0.5);
            }}
        >
            {children}
            <motion.span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundImage: sheen }} />
        </motion.div>
    );
}
