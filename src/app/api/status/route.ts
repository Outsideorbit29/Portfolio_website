import { projectSlug, projects } from "@/data/content";

/*
  Checks whether each project's live demo is up, for the "online" dots on the site.
  Only the fixed demo links from src/data/content.ts are checked; nothing from the visitor is used.
  Vercel's CDN keeps the answer for 5 minutes, so the demos get at most a few checks an hour.
*/

export const dynamic = "force-dynamic";

const TIMEOUT_MS = 6000;

export type DemoState = "up" | "asleep" | "down";
export interface DemoStatus {
    slug: string;
    state: DemoState;
    ms: number | null;
}

async function check(url: string): Promise<Pick<DemoStatus, "state" | "ms">> {
    const started = Date.now();
    try {
        const res = await fetch(url, {
            redirect: "follow",
            cache: "no-store",
            signal: AbortSignal.timeout(TIMEOUT_MS),
            headers: { "user-agent": "anishkumar.online status check" },
        });
        await res.body?.cancel();
        return { state: res.ok ? "up" : "down", ms: Date.now() - started };
    } catch (err) {
        // Free hosting (like Render) puts apps to sleep and takes a while to wake them.
        const timedOut = err instanceof DOMException && err.name === "TimeoutError";
        return { state: timedOut ? "asleep" : "down", ms: null };
    }
}

export async function GET() {
    const results: DemoStatus[] = await Promise.all(
        projects
            .filter((p) => p.links?.demo)
            .map(async (p) => ({ slug: projectSlug(p), ...(await check(p.links!.demo!)) })),
    );
    return Response.json(
        { checkedAt: new Date().toISOString(), results },
        { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600" } },
    );
}
