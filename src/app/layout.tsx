import type { Metadata } from "next";
import { Inter, Instrument_Serif, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { MotionProvider } from "@/components/MotionProvider";
import { SoundProvider } from "@/components/SoundProvider";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DEFAULT_TITLE, OG_IMAGE, SITE_URL, X_HANDLE } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Anish Kumar Gupta",
  },
  description:
    "Official portfolio of Anish Kumar Gupta. Full Stack Software Engineer specialized in building high-performance web applications, AI/ML architectures, and scalable digital ecosystems.",
  keywords: [
    "Anish Kumar Gupta",
    "Anish Kumar",
    "Anish Kumar Gupta VIT",
    "Anish Kumar Gupta Portfolio",
    "Full Stack Engineer India",
    "Full Stack Software Engineer Anish Kumar Gupta",
    "Next.js Developer Anish Kumar Gupta",
    "Software Engineer Anish Kumar Gupta",
    "Building Futuristic Web Apps",
    "Portfolio anishkumar.online",
  ],
  authors: [{ name: "Anish Kumar Gupta", url: SITE_URL }],
  creator: "Anish Kumar Gupta",
  publisher: "Anish Kumar Gupta",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: DEFAULT_TITLE,
    description: "Architecting the future of scalable web systems and cognitive computing. Explore the latest work of Anish Kumar Gupta.",
    siteName: "Anish Kumar Gupta Portfolio",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: "Building futuristic web experiences and scalable AI-powered solutions - Anish Kumar Gupta.",
    images: [OG_IMAGE.url],
    creator: X_HANDLE,
    site: X_HANDLE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${dancingScript.variable} antialiased bg-paper text-ink relative min-h-screen flex flex-col font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anish Kumar Gupta",
              alternateName: "Anish Kumar",
              url: SITE_URL,
              image: `${SITE_URL}/logo.png`,
              sameAs: [
                "https://github.com/Outsideorbit29",
                "https://www.linkedin.com/in/anish-kumar-gupta-6a9b50251",
                "https://x.com/Anish_029",
                "https://instagram.com/k_anish_29"
              ],
              jobTitle: "Full Stack Software Engineer",
              worksFor: {
                "@type": "Organization",
                "name": "Self-Employed"
              },
              knowsAbout: [
                "Software Engineering",
                "Artificial Intelligence",
                "Full Stack Web Development",
                "Machine Learning",
                "React & Next.js",
                "Cloud Architecture"
              ],
              description: "Anish Kumar Gupta is a Full Stack Software Engineer specializing in high-performance web systems and cognitive computing. Based in India, Anish Kumar builds scalable digital ecosystems for the future.",
            }),
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <MotionProvider>
          <SoundProvider />
          <Navbar />
          <main id="main" className="flex-1 w-full relative flex flex-col overflow-x-clip">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
