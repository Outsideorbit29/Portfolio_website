import { NextResponse } from "next/server";

export async function GET() {
    // Direct Google Drive download link for the user's resume
    const resumeUrl = "https://drive.google.com/uc?export=download&id=1WFvry6SmsLK05WcYinBT5_iNbaK1lI5C";
    
    return NextResponse.redirect(resumeUrl);
}
