// Sends contact-form messages to my inbox through Resend.
// The API key lives only on the server (RESEND_API_KEY), so visitors can't see or reuse it.

const TO = "anish.grd2004@gmail.com";
// Resend's shared sender works without any domain setup. Swap for an address on
// anishkumar.online once that domain is verified in Resend.
const FROM = "Portfolio contact form <onboarding@resend.dev>";

const LIMITS = { name: 100, email: 254, message: 5000 };
const MIN_FILL_MS = 3000; // faster than this is a bot, not a person typing
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3; // messages per visitor per 10 minutes

// Remembers recent senders. It lives per server instance, so it's a speed bump,
// not a hard wall; Resend's own daily cap is the backstop.
const recent = new Map<string, number[]>();

function tooMany(ip: string) {
    const now = Date.now();
    const times = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
    if (times.length >= MAX_PER_WINDOW) {
        recent.set(ip, times);
        return true;
    }
    times.push(now);
    recent.set(ip, times);
    if (recent.size > 1000) {
        for (const [key, list] of recent) {
            if (list.every((t) => now - t >= WINDOW_MS)) recent.delete(key);
        }
    }
    return false;
}

const json = (body: object, status = 200) => Response.json(body, { status });
const text = (v: unknown) => (typeof v === "string" ? v.trim() : "");

export async function POST(req: Request) {
    // Only accept requests made from this site's own pages.
    const origin = req.headers.get("origin");
    if (origin) {
        let host = "";
        try {
            host = new URL(origin).host;
        } catch {
            // "null" or junk: treat as foreign.
        }
        if (host !== req.headers.get("host")) return json({ error: "Forbidden" }, 403);
    }

    let body: Record<string, unknown>;
    try {
        body = await req.json();
    } catch {
        return json({ error: "Bad request" }, 400);
    }

    // Spam traps: a hidden field people never see, and a form filled in too fast.
    // Pretend it worked so bots don't learn anything.
    const startedAt = Number(body.startedAt);
    if (text(body.website) || !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) {
        return json({ ok: true });
    }

    const name = text(body.name);
    const email = text(body.email);
    const message = text(body.message);
    if (
        !name || name.length > LIMITS.name ||
        !email || email.length > LIMITS.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        !message || message.length > LIMITS.message
    ) {
        return json({ error: "Please check the form and try again." }, 400);
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
    if (tooMany(ip)) {
        return json({ error: "Too many messages. Please try again later." }, 429);
    }

    const key = process.env.RESEND_API_KEY;
    if (!key) {
        console.error("RESEND_API_KEY is not set");
        return json({ error: "Email is not set up" }, 500);
    }

    const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
            from: FROM,
            to: [TO],
            reply_to: email,
            subject: `Portfolio message from ${name.replace(/[\r\n]+/g, " ")}`,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        }),
    });

    if (!res.ok) {
        console.error("Resend error", res.status, await res.text());
        return json({ error: "Send failed" }, 502);
    }
    return json({ ok: true });
}
