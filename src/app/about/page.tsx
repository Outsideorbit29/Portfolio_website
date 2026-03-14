import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Anish Kumar - The Entity Profile",
  description: "Learn more about Anish Kumar, his journey into Full Stack Engineering, life goals, and passions for innovation and minimalist design.",
  keywords: ["About Anish Kumar", "Anish Kumar Journey", "Anish Kumar Passions", "Anish Kumar Goals", "Anish Kumar VIT"],
};

export default function About() {
  return <AboutContent />;
}
