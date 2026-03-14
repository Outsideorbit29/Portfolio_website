import { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About | Anish Kumar Gupta - The Entity Profile",
  description: "Learn more about Anish Kumar Gupta, his journey into Full Stack Engineering, life goals, and passions for innovation and minimalist design.",
  keywords: ["About Anish Kumar Gupta", "Anish Kumar Gupta Journey", "Anish Kumar Gupta Passions", "Anish Kumar Gupta Goals", "Anish Kumar Gupta VIT"],
};

export default function About() {
  return <AboutContent />;
}
