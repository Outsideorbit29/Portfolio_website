// Re-mounts on every page change, so each page wipes in from the top (CSS in globals.css).
export default function Template({ children }: { children: React.ReactNode }) {
    return <div className="w-full page-in">{children}</div>;
}
