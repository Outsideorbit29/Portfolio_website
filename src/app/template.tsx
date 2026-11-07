// Re-mounts on every page change, so each page swings in like a turned notebook page (CSS in globals.css).
export default function Template({ children }: { children: React.ReactNode }) {
    return <div className="w-full page-turn">{children}</div>;
}
