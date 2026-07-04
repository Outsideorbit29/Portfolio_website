import { NextResponse } from "next/server";

export async function GET() {
    // Direct Google Drive download link for the user's resume
    const resumeUrl = "https://drive.google.com/file/d/1zDAR4YAHg3FGSX-f-MyKW-sDdjJjGyh9/view?usp=sharing";

    return NextResponse.redirect(resumeUrl);
}
