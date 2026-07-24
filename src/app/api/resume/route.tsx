import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';
export async function GET() {
    // Direct Google Drive download link for the user's resume
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1ErZDiBsC6mixD5PZf58YA3QBzZxfADf3";

    return NextResponse.redirect(resumeUrl);
}
