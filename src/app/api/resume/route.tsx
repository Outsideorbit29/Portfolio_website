import { NextResponse } from "next/server";

export async function GET() {
    // Direct Google Drive download link for the user's resume
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1sQum4GVLRUq-wTjFAmY3eKEkajrCWIbc";

    return NextResponse.redirect(resumeUrl);
}
