import { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | Anish Kumar Gupta - Selected Archive",
  description: "Explore the technical projects of Anish Kumar Gupta, ranging from AI trading assistants (Trading Hand) to e-learning platforms (Dhruv Tara) and risk analyzers.",
  keywords: ["Anish Kumar Gupta Projects", "Trading Hand Project", "Dhruv Tara AI", "Anish Kumar Gupta Portfolio Projects", "AI Risk Analyzer"],
};

export default function Projects() {
  return <ProjectsContent />;
}
