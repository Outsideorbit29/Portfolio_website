import { Metadata } from "next";
import HomeContent from "./HomeClient";

export const metadata: Metadata = {
  title: "Anish Kumar Gupta | Home - Full Stack Engineer & AI Architect",
  description: "Welcome to the official portfolio of Anish Kumar Gupta. Explore my work in web development, AI architectures, and creative engine design.",
  keywords: ["Anish Kumar Gupta", "Anish Kumar Gupta Home", "Anish Kumar Gupta Portfolio", "anishkumar.online Home", "Anish Kumar Gupta Full Stack"],
};

export default function Home() {
  return <HomeContent />;
}
