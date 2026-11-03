import { pageMetadata } from "@/lib/metadata";
import AboutContent from "./AboutContent";

export const metadata = pageMetadata({
  title: "About",
  description: "Learn more about Anish Kumar Gupta, his journey into Full Stack Engineering, life goals, and passions for innovation and minimalist design.",
  keywords: ["About Anish Kumar Gupta", "Anish Kumar Gupta Journey", "Anish Kumar Gupta Passions", "Anish Kumar Gupta Goals", "Anish Kumar Gupta VIT"],
  path: "/about",
});

export default function About() {
  return <AboutContent />;
}
