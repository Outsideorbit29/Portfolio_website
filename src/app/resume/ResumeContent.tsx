"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowLeft, Download, ExternalLink, Loader2, FileText, ShieldAlert } from "lucide-react";

export default function ResumeContent() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-transparent pt-28 md:pt-36 pb-16 px-4 md:px-8 lg:px-12 w-full relative z-10 flex flex-col items-center">
      {/* Background Decorative Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse" />

      <div className="w-full max-w-5xl flex flex-col gap-8 relative z-10">
        
        {/* HUD Navigation Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 p-6 glass-card bg-black/40 border border-white/5 rounded-[2rem] hover:border-white/10 transition-all duration-300"
        >
          <div className="flex flex-col gap-1 items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 font-mono text-[10px] tracking-widest uppercase">System_CV / Console</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-heading font-black text-white uppercase tracking-tight leading-none">
              Anish Kumar Gupta
            </h1>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all text-xs font-mono uppercase tracking-wider cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              Return
            </button>
            <a
              href="https://drive.google.com/file/d/1zDAR4YAHg3FGSX-f-MyKW-sDdjJjGyh9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all text-xs font-mono uppercase tracking-wider cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              External_View
            </a>
            <a
              href="/api/resume"
              download="Anish_Resume.pdf"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black hover:bg-blue-500 hover:text-white transition-all text-xs font-heading font-black uppercase tracking-widest shadow-lg cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download_PDF
            </a>
          </div>
        </motion.div>

        {/* Embedded Document Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full relative glass-card bg-black/50 border border-white/5 rounded-[2rem] p-3 md:p-4 aspect-[1/1.4] md:h-[1000px] max-h-[80vh] overflow-hidden flex items-center justify-center"
        >
          {/* Loading Spinner overlay */}
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm z-30 flex flex-col items-center justify-center gap-4"
              >
                <Loader2 className="w-10 h-10 text-blue-400 animate-spin" />
                <p className="font-mono text-xs text-gray-500 tracking-widest uppercase animate-pulse">Initializing Document Viewer...</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Fallback info when iframe doesn't load or cookies are blocked */}
          <div className="absolute inset-4 -z-10 flex flex-col items-center justify-center gap-4 text-center p-8">
            <ShieldAlert className="w-12 h-12 text-gray-600" />
            <h3 className="font-heading font-black text-white text-lg uppercase tracking-tight">Viewing Issue?</h3>
            <p className="text-gray-500 text-sm max-w-sm">
              If the document fails to preview, third-party cookies or browser extensions might be blocking Google Drive integration.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://drive.google.com/file/d/1zDAR4YAHg3FGSX-f-MyKW-sDdjJjGyh9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white/10 rounded-lg hover:bg-white/5 transition-colors font-mono text-xs text-white"
              >
                Open in Drive
              </a>
              <a
                href="/api/resume"
                download="Anish_Resume.pdf"
                className="px-4 py-2 bg-white text-black rounded-lg hover:bg-blue-500 hover:text-white transition-all font-heading font-bold text-xs"
              >
                Download PDF
              </a>
            </div>
          </div>

          <iframe
            src="https://drive.google.com/file/d/1zDAR4YAHg3FGSX-f-MyKW-sDdjJjGyh9/preview"
            className="w-full h-full border-0 rounded-2xl bg-white/[0.01] relative z-20"
            allow="autoplay"
            onLoad={() => setIsLoading(false)}
          />
        </motion.div>
      </div>
    </div>
  );
}
