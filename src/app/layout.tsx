import type { Metadata } from "next";
import { Inter, Orbitron, Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { ThemeProvider } from "@/components/ThemeProvider";
import { ParallaxBackground } from "@/components/ParallaxBackground";
import { ThreeBackground } from "@/components/ThreeBackground";
import { SmoothScroll } from "@/components/SmoothScroll";
import { FallingStars } from "@/components/FallingStars";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anishkumar.online"),
  title: {
    default: "Anish Kumar Gupta | Full Stack Engineer & AI Architect",
    template: "%s | Anish Kumar Gupta",
  },
  description:
    "Official portfolio of Anish Kumar Gupta. Full Stack Engineer specialized in building high-performance web applications, AI/ML architectures, and scalable digital ecosystems.",
  keywords: [
    "Anish Kumar Gupta",
    "Anish Kumar",
    "Anish Kumar Gupta VIT",
    "Anish Kumar Gupta Portfolio",
    "Full Stack Engineer India",
    "AI/ML Architect Anish Kumar Gupta",
    "Next.js Developer Anish Kumar Gupta",
    "Software Engineer Anish Kumar Gupta",
    "Building Futuristic Web Apps",
    "Portfolio anishkumar.online",
  ],
  authors: [{ name: "Anish Kumar Gupta", url: "https://anishkumar.online" }],
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
    url: "https://anishkumar.online",
    title: "Anish Kumar Gupta | Full Stack Engineer & AI Architect",
    description: "Architecting the future of scalable web systems and cognitive computing. Explore the latest work of Anish Kumar Gupta.",
    siteName: "Anish Kumar Gupta Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Anish Kumar Gupta - Full Stack Engineer & AI Architect",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Kumar Gupta | Full Stack Engineer & AI Architect",
    description: "Building futuristic web experiences and scalable AI-powered solutions - Anish Kumar Gupta.",
    images: ["/logo.png"],
    creator: "@Anish_029",
    site: "@Anish_029",
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
  icons: {
    icon: [
      { url: "/logo.png" },
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/logo.png", sizes: "180x180", type: "image/png" },
    ],
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
        className={`${inter.variable} ${orbitron.variable} ${rajdhani.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground relative min-h-screen flex flex-col transition-colors duration-300 font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anish Kumar Gupta",
              alternateName: "Anish Kumar",
              url: "https://anishkumar.online",
              image: "https://anishkumar.online/logo.png",
              sameAs: [
                "https://github.com/Outsideorbit29",
                "https://www.linkedin.com/in/anish-kumar-gupta-6a9b50251",
                "https://x.com/Anish_029",
                "https://instagram.com/anish2753"
              ],
              jobTitle: "Full Stack Engineer & AI Architect",
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
              description: "Anish Kumar Gupta is a Full Stack Engineer and AI Architect specializing in high-performance web systems and cognitive computing. Based in India, Anish Kumar builds scalable digital ecosystems for the future.",
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
            <FallingStars />
            <ThreeBackground />
            <ParallaxBackground />

            <Navbar />
            <main className="flex-1 w-full relative z-10 flex flex-col overflow-x-hidden">
              {children}
              <Analytics />
            </main>
            <Footer />
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
