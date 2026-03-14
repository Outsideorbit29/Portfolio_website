import { Metadata } from "next";
import HomeContent from "./HomeClient";

export const metadata: Metadata = {
  title: "Anish Kumar | Home - Full Stack Engineer & AI Architect",
  description: "Welcome to the official portfolio of Anish Kumar. Explore my work in web development, AI architectures, and creative engine design.",
  keywords: ["Anish Kumar Home", "Anish Kumar Portfolio", "anishkumar.online Home", "Anish Kumar Full Stack"],
};

export default function Home() {
  return <HomeContent />;
}
