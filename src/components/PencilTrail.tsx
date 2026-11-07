"use client";

import { useEffect, useRef } from "react";

const FADE_MS = 1100;

// Draws a soft pencil line behind the mouse on the desk, which fades away.
// Mouse and pen only, and off for people who prefer reduced motion.
export function PencilTrail() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const board = canvas?.parentElement;
        if (!canvas || !board) return;
        if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const points: { x: number; y: number; t: number }[] = [];
        let frame = 0;
        let running = false;

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = board.clientWidth * dpr;
            canvas.height = board.clientHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        resize();
        const observer = new ResizeObserver(resize);
        observer.observe(board);

        const draw = () => {
            const now = performance.now();
            while (points.length && now - points[0].t > FADE_MS) points.shift();
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            for (let i = 1; i < points.length; i++) {
                const a = points[i - 1];
                const b = points[i];
                if (b.t - a.t > 80) continue; // a jump, not a stroke
                const life = 1 - (now - b.t) / FADE_MS;
                ctx.strokeStyle = `rgba(55, 55, 65, ${0.55 * life})`;
                ctx.lineWidth = 1.2 + life * 0.9;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }
            if (points.length) {
                frame = requestAnimationFrame(draw);
            } else {
                running = false;
            }
        };

        const onMove = (e: PointerEvent) => {
            if (e.pointerType === "touch" || e.buttons) return; // not while dragging an item
            const rect = board.getBoundingClientRect();
            // A tiny wobble makes it look hand-drawn.
            points.push({ x: e.clientX - rect.left + (Math.random() - 0.5) * 0.8, y: e.clientY - rect.top + (Math.random() - 0.5) * 0.8, t: performance.now() });
            if (!running) {
                running = true;
                frame = requestAnimationFrame(draw);
            }
        };

        board.addEventListener("pointermove", onMove);
        return () => {
            board.removeEventListener("pointermove", onMove);
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, []);

    return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" />;
}
