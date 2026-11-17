"use client";

import { useEffect, useRef } from "react";

/*
  A sphere of dots drawn with plain WebGL (no library). It is one fixed canvas behind the page.
  Empty boxes mark themselves with <OrbSpot>; the sphere flies to whichever spot is nearest the
  middle of the screen and takes on that spot's shape and colour. With no spot on screen it fades out.
  It also reacts to you: dots scatter away from the cursor (or a finger) and drift back, and a click
  or tap near it makes it pulse. Both are off for anyone who asked for less motion.
*/

export type OrbLook = "blob" | "lumpy" | "cloud" | "calm" | "wave";

const LOOKS: Record<OrbLook, { noise: number; freq: number; fuzz: number; spin: number }> = {
    blob: { noise: 0.13, freq: 2.2, fuzz: 0, spin: 0.18 },
    lumpy: { noise: 0.22, freq: 4.6, fuzz: 0.015, spin: 0.25 },
    cloud: { noise: 0.05, freq: 3, fuzz: 0.22, spin: 0.1 },
    calm: { noise: 0.015, freq: 1.5, fuzz: 0, spin: 0.12 },
    wave: { noise: 0.3, freq: 2.8, fuzz: 0.03, spin: 0.2 },
};

// An empty area where the sphere should sit. Decorative only.
export function OrbSpot({ look = "blob", color = "#ededed", className = "", children }: { look?: OrbLook; color?: string; className?: string; children?: React.ReactNode }) {
    return (
        <div data-orb={look} data-orb-color={color} className={className}>
            {children}
        </div>
    );
}

const VERT = `
attribute vec3 aPos;
attribute vec3 aJit;
uniform float uTime, uRot, uNoise, uFreq, uFuzz, uRadius, uSize, uPush, uPushR, uPulse;
uniform vec2 uCenter, uRes, uMouse;
varying float vDepth;
void main() {
  vec3 p = aPos;
  float t = uTime;
  float n = sin(p.x * uFreq + t * 0.8) * sin(p.y * uFreq * 1.17 + t * 0.63) * sin(p.z * uFreq * 0.91 + t * 0.71);
  n += 0.5 * sin(p.x * uFreq * 2.1 - t * 0.5) * sin(p.z * uFreq * 2.3 + t * 0.4);
  p *= 1.0 + uNoise * n;
  p *= 1.0 + uPulse * (0.16 + 0.35 * n);
  p += aJit * uFuzz;
  float c = cos(uRot), s = sin(uRot);
  p = vec3(c * p.x + s * p.z, p.y, -s * p.x + c * p.z);
  float ct = 0.94, st = 0.34;
  p = vec3(p.x, ct * p.y - st * p.z, st * p.y + ct * p.z);
  float persp = 1.0 / (1.0 - p.z * 0.25);
  vec2 screen = uCenter + p.xy * uRadius * persp;
  vec2 away = screen - uMouse;
  float dist = length(away) + 0.001;
  screen += away / dist * uPush * exp(-(dist * dist) / (uPushR * uPushR));
  vec2 clip = screen / uRes * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
  gl_PointSize = uSize * persp;
  vDepth = p.z;
}`;

const FRAG = `
precision mediump float;
uniform vec3 uColor;
uniform float uAlpha;
varying float vDepth;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  if (dot(c, c) > 0.25) discard;
  float a = mix(0.12, 0.75, clamp(vDepth * 0.5 + 0.5, 0.0, 1.0));
  gl_FragColor = vec4(uColor, a * uAlpha);
}`;

function hexToRgb(hex: string): [number, number, number] {
    const n = parseInt(hex.replace("#", ""), 16);
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

export function ParticleOrb() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let stop = () => {};

        // Start once the page has loaded and the browser is idle, so the sphere never delays the content.
        const start = () => {
            const gl = canvas.getContext("webgl", { antialias: false, alpha: true, premultipliedAlpha: true });
            if (!gl) return;

            const compile = (type: number, src: string) => {
                const sh = gl.createShader(type)!;
                gl.shaderSource(sh, src);
                gl.compileShader(sh);
                return sh;
            };
            const prog = gl.createProgram()!;
            gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
            gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
            gl.linkProgram(prog);
            if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
            gl.useProgram(prog);

            // Points spread evenly over a sphere, plus a random direction each for the "cloud" look.
            const count = window.innerWidth < 768 ? 6000 : 14000;
            const pos = new Float32Array(count * 3);
            const jit = new Float32Array(count * 3);
            const golden = Math.PI * (3 - Math.sqrt(5));
            for (let i = 0; i < count; i++) {
                const y = 1 - (i / (count - 1)) * 2;
                const r = Math.sqrt(1 - y * y);
                const th = golden * i;
                pos.set([Math.cos(th) * r, y, Math.sin(th) * r], i * 3);
                const u = Math.random() * 2 - 1;
                const a = Math.random() * Math.PI * 2;
                const k = Math.sqrt(1 - u * u) * Math.random();
                jit.set([Math.cos(a) * k, u * Math.random(), Math.sin(a) * k], i * 3);
            }
            const attr = (name: string, data: Float32Array) => {
                const buf = gl.createBuffer();
                gl.bindBuffer(gl.ARRAY_BUFFER, buf);
                gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
                const loc = gl.getAttribLocation(prog, name);
                gl.enableVertexAttribArray(loc);
                gl.vertexAttribPointer(loc, 3, gl.FLOAT, false, 0, 0);
            };
            attr("aPos", pos);
            attr("aJit", jit);

            const u = (name: string) => gl.getUniformLocation(prog, name);
            const U = {
                time: u("uTime"), rot: u("uRot"), noise: u("uNoise"), freq: u("uFreq"), fuzz: u("uFuzz"),
                radius: u("uRadius"), size: u("uSize"), center: u("uCenter"), res: u("uRes"), color: u("uColor"), alpha: u("uAlpha"),
                mouse: u("uMouse"), push: u("uPush"), pushR: u("uPushR"), pulse: u("uPulse"),
            };

            gl.enable(gl.BLEND);
            gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE);
            gl.clearColor(0, 0, 0, 0);

            let dpr = 1;
            const resize = () => {
                dpr = Math.min(window.devicePixelRatio || 1, 1.5);
                canvas.width = Math.round(window.innerWidth * dpr);
                canvas.height = Math.round(window.innerHeight * dpr);
                gl.viewport(0, 0, canvas.width, canvas.height);
            };
            resize();

            // Current values ease toward the target spot's values.
            const cur = { x: window.innerWidth / 2, y: window.innerHeight / 2, r: 0, alpha: 0, noise: 0.1, freq: 2, fuzz: 0, spin: 0.15, color: [0.93, 0.93, 0.93] };
            let spots: HTMLElement[] = [];
            let lastQuery = 0;
            let rot = 0;
            let time = 0;
            let last = performance.now();
            let raf = 0;
            let first = true;

            // Pointer position, how strongly the dots move out of its way, and the click pulse.
            const pointer = { x: -9999, y: -9999, speed: 0, at: 0 };
            let push = 0;
            let pulse = 0;
            const onPointer = (e: PointerEvent) => {
                const t = performance.now();
                const gap = Math.max(t - pointer.at, 8);
                const moved = Math.hypot(e.clientX - pointer.x, e.clientY - pointer.y);
                pointer.speed = pointer.at && moved < 500 ? Math.min(moved / gap, 3) : 0;
                pointer.x = e.clientX;
                pointer.y = e.clientY;
                pointer.at = t;
            };
            const onLeave = () => {
                pointer.x = -9999;
                pointer.y = -9999;
            };
            // A finger leaves the screen, so let the dots settle back.
            const onUp = (e: PointerEvent) => {
                if (e.pointerType !== "mouse") onLeave();
            };
            const onDown = (e: PointerEvent) => {
                onPointer(e);
                if (Math.hypot(e.clientX - cur.x, e.clientY - cur.y) < cur.r * 1.4 && cur.alpha > 0.3) pulse = 1;
            };

            const frame = (now: number) => {
                const dt = Math.min((now - last) / 1000, 0.05);
                last = now;
                if (now - lastQuery > 500) {
                    spots = Array.from(document.querySelectorAll<HTMLElement>("[data-orb]"));
                    lastQuery = now;
                }

                // Pick the spot nearest the middle of the screen.
                const vh = window.innerHeight;
                let best: HTMLElement | null = null;
                let bestRect: DOMRect | null = null;
                let bestD = Infinity;
                for (const el of spots) {
                    const r = el.getBoundingClientRect();
                    if (r.width === 0 || r.bottom < 0 || r.top > vh) continue;
                    const d = Math.abs((r.top + r.bottom) / 2 - vh / 2);
                    if (d < bestD) {
                        bestD = d;
                        best = el;
                        bestRect = r;
                    }
                }

                const snap = reduced || first;
                const k = snap ? 1 : 1 - Math.exp(-dt * 5);
                const kLook = snap ? 1 : 1 - Math.exp(-dt * 2.5);
                if (best && bestRect) {
                    const look = LOOKS[(best.dataset.orb as OrbLook) || "blob"] ?? LOOKS.blob;
                    const color = hexToRgb(best.dataset.orbColor || "#ededed");
                    cur.x += ((bestRect.left + bestRect.right) / 2 - cur.x) * k;
                    cur.y += ((bestRect.top + bestRect.bottom) / 2 - cur.y) * k;
                    cur.r += (Math.min(bestRect.width, bestRect.height) * 0.32 - cur.r) * k;
                    cur.alpha += (1 - cur.alpha) * (reduced ? 1 : 1 - Math.exp(-dt * 3));
                    cur.noise += (look.noise - cur.noise) * kLook;
                    cur.freq += (look.freq - cur.freq) * kLook;
                    cur.fuzz += (look.fuzz - cur.fuzz) * kLook;
                    cur.spin += (look.spin - cur.spin) * kLook;
                    for (let i = 0; i < 3; i++) cur.color[i] += (color[i] - cur.color[i]) * kLook;
                    first = false;
                } else {
                    cur.alpha += (0 - cur.alpha) * (reduced ? 1 : 1 - Math.exp(-dt * 4));
                }

                if (!reduced) {
                    time += dt;
                    rot += dt * cur.spin;
                    // Stronger push while the pointer is near and moving, easing back to calm when it stops.
                    const near = Math.hypot(pointer.x - cur.x, pointer.y - cur.y) < cur.r * 1.8;
                    const target = near ? 0.5 + pointer.speed * 0.5 : 0;
                    push += (target - push) * (1 - Math.exp(-dt * (target > push ? 10 : 2.5)));
                    pointer.speed *= Math.exp(-dt * 4);
                    pulse *= Math.exp(-dt * 3.2);
                }

                gl.clear(gl.COLOR_BUFFER_BIT);
                if (cur.alpha > 0.01) {
                    gl.uniform1f(U.time, time);
                    gl.uniform1f(U.rot, rot + 0.6);
                    gl.uniform1f(U.noise, cur.noise);
                    gl.uniform1f(U.freq, cur.freq);
                    gl.uniform1f(U.fuzz, cur.fuzz);
                    gl.uniform1f(U.radius, cur.r * dpr);
                    gl.uniform1f(U.size, (window.innerWidth < 768 ? 1.6 : 1.4) * dpr);
                    gl.uniform2f(U.center, cur.x * dpr, cur.y * dpr);
                    gl.uniform2f(U.res, canvas.width, canvas.height);
                    gl.uniform3f(U.color, cur.color[0], cur.color[1], cur.color[2]);
                    gl.uniform1f(U.alpha, cur.alpha);
                    gl.uniform2f(U.mouse, pointer.x * dpr, pointer.y * dpr);
                    gl.uniform1f(U.push, push * cur.r * 0.45 * dpr);
                    gl.uniform1f(U.pushR, Math.max(cur.r * 0.5, 40) * dpr);
                    gl.uniform1f(U.pulse, pulse);
                    gl.drawArrays(gl.POINTS, 0, count);
                }

                if (!reduced) raf = requestAnimationFrame(frame);
            };

            // With reduced motion the sphere holds still and only redraws when the page scrolls.
            const redraw = () => {
                cancelAnimationFrame(raf);
                raf = requestAnimationFrame(frame);
            };
            const onResize = () => {
                resize();
                if (reduced) redraw();
            };
            window.addEventListener("resize", onResize);
            if (reduced) window.addEventListener("scroll", redraw, { passive: true });
            else {
                window.addEventListener("pointermove", onPointer, { passive: true });
                window.addEventListener("pointerdown", onDown, { passive: true });
                window.addEventListener("pointerup", onUp, { passive: true });
                window.addEventListener("pointercancel", onUp, { passive: true });
                document.documentElement.addEventListener("pointerleave", onLeave);
                window.addEventListener("blur", onLeave);
            }
            raf = requestAnimationFrame(frame);
            canvas.style.opacity = "1";

            stop = () => {
                cancelAnimationFrame(raf);
                window.removeEventListener("resize", onResize);
                window.removeEventListener("scroll", redraw);
                window.removeEventListener("pointermove", onPointer);
                window.removeEventListener("pointerdown", onDown);
                window.removeEventListener("pointerup", onUp);
                window.removeEventListener("pointercancel", onUp);
                document.documentElement.removeEventListener("pointerleave", onLeave);
                window.removeEventListener("blur", onLeave);
            };
        };

        let idle = 0;
        const schedule = () => {
            const ric = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 200));
            idle = ric(start, { timeout: 1500 } as IdleRequestOptions) as number;
        };
        if (document.readyState === "complete") schedule();
        else window.addEventListener("load", schedule, { once: true });

        return () => {
            window.removeEventListener("load", schedule);
            if (window.cancelIdleCallback) window.cancelIdleCallback(idle);
            stop();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-0 transition-opacity duration-700"
        />
    );
}
