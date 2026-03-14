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
  title: "Anish Kumar Gupta | Portfolio & Developer",
  description: "Modern, aesthetic personal portfolio building beautiful web experiences.",
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
