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
    default: "Anish Kumar | Full Stack Engineer & AI Architect",
    template: "%s | Anish Kumar",
  },
  description:
    "Portfolio of Anish Kumar, a Full Stack Engineer specialized in AI/ML Architecture, scalable web systems, and creative technology.",
  keywords: [
    "Anish Kumar",
    "Anish Kumar Gupta",
    "Full Stack Engineer",
    "AI Architect",
    "Software Developer Portfolio",
    "India Developer",
    "Machine Learning Engineer",
    "Next.js Developer",
  ],
  authors: [{ name: "Anish Kumar" }],
  creator: "Anish Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anishkumar.online",
    title: "Anish Kumar | Full Stack Engineer",
    description: "Building the future of scalable architecture and cognitive computing.",
    siteName: "Anish Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Kumar | Full Stack Engineer",
    description: "Building the future of scalable architecture and cognitive computing.",
    creator: "@anishkumar", // Placeholder
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
              name: "Anish Kumar",
              alternateName: "Anish Kumar Gupta",
              url: "https://anishkumar.online",
              jobTitle: "Full Stack Engineer",
              knowsAbout: ["Software Engineering", "Artificial Intelligence", "Web Development", "Machine Learning"],
              description: "Full Stack Engineer obsessed with the intersection of scalable architecture and cognitive computing.",
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
