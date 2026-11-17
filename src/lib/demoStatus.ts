"use client";

import { useEffect, useState } from "react";
import type { DemoStatus } from "@/app/api/status/route";

// One request per page load, shared by everything on the page that shows demo status.
let request: Promise<DemoStatus[] | null> | null = null;

function loadStatus() {
    request ??= fetch("/api/status")
        .then((r) => (r.ok ? r.json() : null))
        .then((d: { results: DemoStatus[] } | null) => d?.results ?? null)
        .catch(() => null);
    return request;
}

// All demo results: undefined while loading, null if the check itself failed.
export function useDemoStatus() {
    const [all, setAll] = useState<DemoStatus[] | null | undefined>(undefined);
    useEffect(() => {
        let alive = true;
        loadStatus().then((r) => {
            if (alive) setAll(r);
        });
        return () => {
            alive = false;
        };
    }, []);
    return all;
}
