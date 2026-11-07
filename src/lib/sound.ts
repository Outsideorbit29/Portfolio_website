// Small interface sounds, made in the browser with the Web Audio API (no audio files to download).
// Browsers only allow sound after the visitor has clicked or tapped, so nothing plays before that.

export type SoundName = "tap" | "pop" | "paper" | "drop" | "flip" | "page";

const STORAGE_KEY = "sound";
let ctx: AudioContext | null = null;
let noise: AudioBuffer | null = null;
let enabled = true;
const listeners = new Set<() => void>();

if (typeof window !== "undefined") {
    try {
        enabled = window.localStorage.getItem(STORAGE_KEY) !== "off";
    } catch {
        // Storage can be blocked; keep the default.
    }
}

export function isSoundOn() {
    return enabled;
}

export function setSoundOn(on: boolean) {
    enabled = on;
    try {
        window.localStorage.setItem(STORAGE_KEY, on ? "on" : "off");
    } catch {
        // Ignore: the setting just won't be remembered.
    }
    listeners.forEach((l) => l());
}

export function subscribeSound(listener: () => void) {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}

function audio() {
    if (!ctx) {
        const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!Ctor) return null;
        ctx = new Ctor();
        // One second of white noise, reused for paper-like sounds.
        noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
        const data = noise.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
    }
    if (ctx.state === "suspended") void ctx.resume();
    return ctx;
}

function tone(ac: AudioContext, from: number, to: number, duration: number, volume: number, type: OscillatorType = "sine") {
    const t = ac.currentTime;
    const osc = ac.createOscillator();
    const gain = ac.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(from, t);
    osc.frequency.exponentialRampToValueAtTime(to, t + duration);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(volume, t + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain).connect(ac.destination);
    osc.start(t);
    osc.stop(t + duration + 0.02);
}

function rustle(ac: AudioContext, duration: number, volume: number, freqFrom: number, freqTo: number, q = 0.9) {
    if (!noise) return;
    const t = ac.currentTime;
    const src = ac.createBufferSource();
    src.buffer = noise;
    const filter = ac.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = q;
    filter.frequency.setValueAtTime(freqFrom, t);
    filter.frequency.exponentialRampToValueAtTime(freqTo, t + duration);
    const gain = ac.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(volume, t + duration * 0.25);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    src.connect(filter).connect(gain).connect(ac.destination);
    src.start(t, Math.random() * 0.5);
    src.stop(t + duration + 0.02);
}

export function playSound(name: SoundName) {
    if (!enabled || typeof window === "undefined") return;
    const ac = audio();
    if (!ac) return;

    switch (name) {
        case "tap":
            tone(ac, 1200, 700, 0.06, 0.035);
            break;
        case "pop":
            tone(ac, 380, 900, 0.09, 0.05);
            break;
        case "paper":
            rustle(ac, 0.18, 0.09, 1800, 3600);
            break;
        case "drop":
            rustle(ac, 0.12, 0.06, 900, 500, 1.4);
            tone(ac, 160, 90, 0.08, 0.04);
            break;
        case "flip":
            rustle(ac, 0.24, 0.1, 1200, 4200, 0.7);
            break;
        case "page":
            rustle(ac, 0.42, 0.07, 600, 2600, 0.6);
            break;
    }
}
