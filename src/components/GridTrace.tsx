"use client";

import { useEffect, useRef } from "react";

/*
  Makes a grid-paper area react to the mouse: squares near the cursor darken a little, and the
  square under it is shaded in clay pencil that fades away behind the cursor, like tracing the paper.

  Put it as the first child of a `relative` .grid-paper element; `size` must match that grid.
  Mouse and pen only, off for people who prefer reduced motion, and it only draws while something changes.
*/

const CLAY = "168, 118, 79";
const FADE_PER_SECOND = 1.2;
const REACH = 2.5; // in squares

export function GridTrace({ size = 64 }: { size?: number }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const board = canvas?.parentElement;
        if (!canvas || !board) return;
        if (!window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = 0;
        let h = 0;
        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = board.clientWidth;
            h = board.clientHeight;
            canvas.width = w * dpr;
            canvas.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            wake();
        };

        const shaded = new Map<string, { col: number; row: number; v: number }>();
        const mouse = { x: 0, y: 0, inside: false };
        let raf = 0;
        let last = 0;

        const draw = (now: number) => {
            raf = 0;
            const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
            last = now;
            ctx.clearRect(0, 0, w, h);

            // Squares the cursor passed over, fading out.
            for (const [key, s] of shaded) {
                s.v -= dt * FADE_PER_SECOND;
                if (s.v <= 0) {
                    shaded.delete(key);
                    continue;
                }
                const v = s.v * s.v;
                ctx.fillStyle = `rgba(${CLAY}, ${0.12 * v})`;
                ctx.fillRect(s.col * size + 1, s.row * size + 1, size - 1, size - 1);
            }

            // Grid lines darken around the cursor, fading with distance.
            if (mouse.inside) {
                const col = Math.floor(mouse.x / size);
                const row = Math.floor(mouse.y / size);
                const reach = REACH * size;
                const n = Math.ceil(REACH);
                ctx.lineWidth = 1;
                for (let r = row - n; r <= row + n; r++) {
                    for (let c = col - n; c <= col + n; c++) {
                        const d = Math.hypot((c + 0.5) * size - mouse.x, (r + 0.5) * size - mouse.y);
                        if (d > reach) continue;
                        ctx.strokeStyle = `rgba(${CLAY}, ${0.4 * (1 - d / reach)})`;
                        ctx.strokeRect(c * size + 0.5, r * size + 0.5, size, size);
                    }
                }
            }

            if (shaded.size > 0) raf = requestAnimationFrame(draw);
            else last = 0;
        };

        function wake() {
            if (!raf) raf = requestAnimationFrame(draw);
        }

        const onMove = (e: PointerEvent) => {
            if (e.pointerType === "touch") return;
            const rect = board.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
            mouse.inside = true;
            const col = Math.floor(mouse.x / size);
            const row = Math.floor(mouse.y / size);
            shaded.set(`${col},${row}`, { col, row, v: 1 });
            wake();
        };
        const onLeave = () => {
            mouse.inside = false;
            wake();
        };

        resize();
        const observer = new ResizeObserver(resize);
        observer.observe(board);
        board.addEventListener("pointermove", onMove, { passive: true });
        board.addEventListener("pointerleave", onLeave);

        return () => {
            cancelAnimationFrame(raf);
            observer.disconnect();
            board.removeEventListener("pointermove", onMove);
            board.removeEventListener("pointerleave", onLeave);
        };
    }, [size]);

    return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />;
}
