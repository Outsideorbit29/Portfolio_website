import type { Metadata } from "next";
import { Orbitron, Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { SmoothScroll } from "@/components/SmoothScroll";
import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DEFAULT_TITLE, OG_IMAGE, SITE_URL, X_HANDLE } from "@/lib/metadata";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${orbitron.variable} ${rajdhani.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground relative min-h-screen flex flex-col transition-colors duration-300 font-sans`}
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
        <SmoothScroll>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange={false}
          >
            <BackgroundCanvas />
            <ParallaxBackground />

            <Navbar />
            <main className="flex-1 w-full relative z-10 flex flex-col overflow-x-hidden">
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
            <Footer />
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
