import { NextResponse } from "next/server";

export async function GET() {
    // Direct Google Drive download link for the user's resume
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1zDAR4YAHg3FGSX-f-MyKW-sDdjJjGyh9";

    return NextResponse.redirect(resumeUrl);
}
