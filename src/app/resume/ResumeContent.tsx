"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Column, PageHeader, TornEdge } from "@/components/ui";

const RESUME_PATH = "/resume.pdf";
const RESUME_FILENAME = "Anish_Kumar_Gupta_Resume.pdf";

export default function ResumeContent() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="w-full">
      <PageHeader script="resume" title="My resume" italic="Everything on one page" />

      <div className="bg-sheet">
        <TornEdge flip />
        <Column className="py-12 md:py-16 flex flex-col gap-6">
          <div className="flex flex-wrap justify-center gap-3">
            <button type="button" onClick={() => router.back()} className="btn">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back
            </button>
            <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="btn">
              <ExternalLink className="w-4 h-4" aria-hidden="true" /> Open PDF
            </a>
            <a href={RESUME_PATH} download={RESUME_FILENAME} className="btn btn-dark">
              <Download className="w-4 h-4" aria-hidden="true" /> Download PDF
            </a>
          </div>

          <div className="grid-paper-fine rounded-2xl border border-rule p-3 md:p-5">
            <div className="relative sheet overflow-hidden aspect-[1/1.4] md:aspect-auto md:h-[1000px] max-h-[80vh]">
              {isLoading && (
                <p className="absolute inset-0 z-20 flex items-center justify-center bg-sheet font-script text-2xl text-ink-soft">
                  Loading resume...
                </p>
              )}

              {/* Shown when the browser can't preview PDFs in a frame. */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center p-8">
                <h2 className="text-lg font-semibold">Can&apos;t see the resume?</h2>
                <p className="text-sm text-ink-soft max-w-sm">
                  Your browser may not support PDF previews here. You can still open or download the file.
                </p>
              </div>

              <iframe
                src={RESUME_PATH}
                title="Anish Kumar Gupta resume"
                className="relative z-10 w-full h-full border-0"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
        </Column>
      </div>
    </div>
  );
}
