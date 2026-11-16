"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Frame, PageHeader } from "@/components/ui";

const RESUME_PATH = "/resume.pdf";
const RESUME_FILENAME = "Anish_Kumar_Gupta_Resume.pdf";

export default function ResumeContent() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full">
      <PageHeader note="open resume.pdf" title="My resume" sub="Everything on one page." look="calm" />

      <Frame className="pt-[var(--cell)]">
        <div className="cells">
          <button type="button" onClick={() => router.back()} className="box cell-btn col-span-2 md:col-span-2 xl:col-span-3">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back
          </button>
          <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="box cell-btn col-span-2 md:col-span-3 xl:col-span-3">
            <ExternalLink className="w-4 h-4" aria-hidden="true" /> Open<span className="hidden md:inline"> PDF</span>
          </a>
          <a href={RESUME_PATH} download={RESUME_FILENAME} className="box cell-btn col-span-2 md:col-span-3 xl:col-span-3 bg-fg text-bg">
            <Download className="w-4 h-4" aria-hidden="true" /> Download
          </a>
          <div aria-hidden="true" className="box hatch hidden md:block md:col-span-4 xl:col-span-7" />

          <div className="box col-span-6 md:col-span-12 xl:col-span-16 h-[80vh] md:h-[calc(var(--cell)*13)] max-h-[85vh]">
            {isLoading && (
              <p className="absolute inset-0 z-20 flex items-center justify-center bg-bg mono-note">
                loading resume...
              </p>
            )}

            {/* Shown when the browser can't preview PDFs in a frame. */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center p-8">
              <h2 className="text-lg font-medium">Can&apos;t see the resume?</h2>
              <p className="text-sm text-fg-soft max-w-sm">
                Your browser may not support PDF previews here. You can still open or download the file.
              </p>
            </div>

            <iframe
              src={RESUME_PATH}
              title="Anish Kumar Gupta resume"
              className="relative z-10 w-full h-full border-0 bg-white"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </Frame>
    </div>
  );
}
