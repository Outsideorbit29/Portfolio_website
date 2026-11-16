// Ruler along the bottom of the screen. Its marker follows the scroll position (CSS only, see .ruler-thumb).
export function ScrollRuler() {
    return (
        <div aria-hidden="true" className="pointer-events-none fixed bottom-3 inset-x-0 z-40 hidden md:block">
            <div
                className="frame relative h-4"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(to right, var(--cell-line) 0 1px, transparent 1px var(--cell)), repeating-linear-gradient(to right, rgba(255,255,255,0.09) 0 1px, transparent 1px calc(var(--cell) / 5))",
                    backgroundSize: "100% 100%, 100% 40%",
                    backgroundPosition: "0 0, 0 100%",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <span className="ruler-thumb absolute inset-0">
                    <span className="absolute left-0 -top-1 h-6 w-px bg-accent" />
                </span>
            </div>
        </div>
    );
}
