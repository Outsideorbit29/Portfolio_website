"use client";

import { useEffect, useRef } from "react";

/*
  Makes the background grid react to the mouse: cells near the cursor light up, the cell
  under it glows orange and fades out behind it like a trail, and thin crosshair lines with a
  mono x / y readout follow the cursor, like a drafting tool.

  One fixed canvas behind the page. Mouse/trackpad only (not touch), and off for anyone who
  asked for less motion. It only draws while something is changing, so an idle page costs nothing.
*/

const ACCENT = "255, 122, 69";
const FADE_PER_SECOND = 1.1;
const LIGHT_RADIUS_CELLS = 3;

export function GridGlow() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (!fine.matches || reduced.matches) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Measure one grid cell the same way the CSS does, so the canvas lines up with the background.
        const probe = document.createElement("div");
        probe.style.cssText = "position:absolute;visibility:hidden;width:var(--cell);height:0;";
        document.body.appendChild(probe);

        let cell = 75;
        let dpr = 1;
        let width = 0;
        let height = 0;
        const monoFont = getComputedStyle(document.body).getPropertyValue("--font-plex-mono").trim() || "ui-monospace";

        const resize = () => {
            cell = probe.getBoundingClientRect().width || 75;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = document.documentElement.clientWidth;
            height = window.innerHeight;
            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            wake();
        };

        // The body's grid starts half a cell right of the page centre and scrolls with the page.
        const originX = () => (width / 2 + cell / 2) % cell;

        // Cells that have been lit, by their column/row on the whole page, with how bright they still are.
        const lit = new Map<string, { col: number; row: number; v: number }>();
        const mouse = { x: -1, y: -1, inside: false };
        let raf = 0;
        let last = 0;
        let lastKey = "";

        const touchCell = () => {
            if (!mouse.inside) return;
            const col = Math.floor((mouse.x - originX()) / cell);
            const row = Math.floor((mouse.y + window.scrollY) / cell);
            const key = `${col},${row}`;
            if (key !== lastKey) {
                lit.set(key, { col, row, v: 1 });
                lastKey = key;
            } else {
                const c = lit.get(key);
                if (c) c.v = 1;
            }
        };

        const draw = (now: number) => {
            raf = 0;
            const dt = last ? Math.min((now - last) / 1000, 0.05) : 0;
            last = now;

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx.clearRect(0, 0, width, height);
            const ox = originX();
            const oy = -window.scrollY;

            // Fading trail of cells the cursor passed over.
            for (const [key, c] of lit) {
                c.v -= dt * FADE_PER_SECOND;
                if (c.v <= 0) {
                    lit.delete(key);
                    continue;
                }
                const x = ox + c.col * cell;
                const y = oy + c.row * cell;
                if (y > height || y + cell < 0) continue;
                const v = c.v * c.v;
                ctx.fillStyle = `rgba(${ACCENT}, ${0.09 * v})`;
                ctx.fillRect(x, y, cell, cell);
                ctx.strokeStyle = `rgba(${ACCENT}, ${0.55 * v})`;
                ctx.lineWidth = 1;
                ctx.strokeRect(x + 0.5, y + 0.5, cell - 1, cell - 1);
            }

            if (mouse.inside) {
                // Grid lines brighten around the cursor and fade with distance.
                const col = Math.floor((mouse.x - ox) / cell);
                const row = Math.floor((mouse.y - oy) / cell);
                const reach = LIGHT_RADIUS_CELLS * cell;
                ctx.lineWidth = 1;
                for (let r = row - LIGHT_RADIUS_CELLS; r <= row + LIGHT_RADIUS_CELLS; r++) {
                    for (let c = col - LIGHT_RADIUS_CELLS; c <= col + LIGHT_RADIUS_CELLS; c++) {
                        const cx = ox + (c + 0.5) * cell;
                        const cy = oy + (r + 0.5) * cell;
                        const d = Math.hypot(cx - mouse.x, cy - mouse.y);
                        if (d > reach) continue;
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.13 * (1 - d / reach)})`;
                        ctx.strokeRect(ox + c * cell + 0.5, oy + r * cell + 0.5, cell - 1, cell - 1);
                    }
                }

                // Crosshair lines and the readout.
                ctx.strokeStyle = "rgba(255, 255, 255, 0.07)";
                ctx.beginPath();
                ctx.moveTo(Math.round(mouse.x) + 0.5, 0);
                ctx.lineTo(Math.round(mouse.x) + 0.5, height);
                ctx.moveTo(0, Math.round(mouse.y) + 0.5);
                ctx.lineTo(width, Math.round(mouse.y) + 0.5);
                ctx.stroke();

                const label = `x ${Math.round(mouse.x)} · y ${Math.round(mouse.y + window.scrollY)}`;
                ctx.font = `11px ${monoFont}`;
                ctx.fillStyle = "rgba(237, 237, 237, 0.55)";
                const tw = ctx.measureText(label).width;
                const lx = mouse.x + 14 + tw > width ? mouse.x - 14 - tw : mouse.x + 14;
                const ly = mouse.y + 26 > height ? mouse.y - 12 : mouse.y + 22;
                ctx.fillText(label, lx, ly);
            }

            // Keep animating only while the trail is still fading.
            if (lit.size > 0) raf = requestAnimationFrame(draw);
            else last = 0;
        };

        function wake() {
            if (!raf) raf = requestAnimationFrame(draw);
        }

        const onMove = (e: PointerEvent) => {
            if (e.pointerType !== "mouse") return;
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.inside = true;
            touchCell();
            wake();
        };
        // The page moves under a still cursor, so the cell under it changes too.
        const onScroll = () => {
            touchCell();
            wake();
        };
        const onLeave = () => {
            mouse.inside = false;
            lastKey = "";
            wake();
        };

        resize();
        window.addEventListener("pointermove", onMove, { passive: true });
        document.documentElement.addEventListener("pointerleave", onLeave);
        window.addEventListener("blur", onLeave);
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", resize);

        return () => {
            cancelAnimationFrame(raf);
            probe.remove();
            window.removeEventListener("pointermove", onMove);
            document.documentElement.removeEventListener("pointerleave", onLeave);
            window.removeEventListener("blur", onLeave);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-0" />;
}
