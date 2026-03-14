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
    "Official portfolio of Anish Kumar. Full Stack Engineer specialized in building high-performance web applications, AI/ML architectures, and scalable digital ecosystems.",
  keywords: [
    "Anish Kumar",
    "Anish Kumar Gupta",
    "Anish Kumar VIT",
    "Anish Kumar Portfolio",
    "Full Stack Engineer India",
    "AI/ML Architect",
    "Next.js Developer India",
    "Software Engineer Anish Kumar",
    "Building Futuristic Web Apps",
    "Portfolio anishkumar.online",
  ],
  authors: [{ name: "Anish Kumar", url: "https://anishkumar.online" }],
  creator: "Anish Kumar",
  publisher: "Anish Kumar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://anishkumar.online",
    title: "Anish Kumar | Full Stack Engineer & AI Architect",
    description: "Architecting the future of scalable web systems and cognitive computing. Explore my latest work in Full Stack development and AI.",
    siteName: "Anish Kumar Portfolio",
    images: [
      {
        url: "/logo.png", // Recommended to use a specific OG image if available
        width: 1200,
        height: 630,
        alt: "Anish Kumar - Full Stack Engineer & AI Architect",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anish Kumar | Full Stack Engineer & AI Architect",
    description: "Building futuristic web experiences and scalable AI-powered solutions.",
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
