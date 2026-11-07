"use client";

import { useSyncExternalStore } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { isSoundOn, playSound, setSoundOn, subscribeSound } from "@/lib/sound";

// Round mute button next to the menu. Remembers the choice.
export function SoundToggle() {
    // Sound is always "on" on the server; the browser then reads the saved choice.
    const on = useSyncExternalStore(subscribeSound, isSoundOn, () => true);

    return (
        <button
            type="button"
            data-sound="own"
            aria-pressed={on}
            aria-label={on ? "Sound on. Turn sound off" : "Sound off. Turn sound on"}
            onClick={() => {
                setSoundOn(!on);
                if (!on) playSound("pop");
            }}
            className="w-10 h-10 shrink-0 rounded-full bg-sheet border border-rule shadow-[0_2px_10px_rgba(60,40,10,0.08)] flex items-center justify-center hover:bg-paper transition-colors"
        >
            {on ? <Volume2 className="w-4 h-4" aria-hidden="true" /> : <VolumeX className="w-4 h-4" aria-hidden="true" />}
        </button>
    );
}
