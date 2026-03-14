import { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | Anish Kumar - Selected Archive",
  description: "Explore the technical projects of Anish Kumar, ranging from AI trading assistants (Trading Hand) to e-learning platforms (Dhruv Tara) and risk analyzers.",
  keywords: ["Anish Kumar Projects", "Trading Hand Project", "Dhruv Tara AI", "Anish Kumar Portfolio Projects", "AI Risk Analyzer"],
};

export default function Projects() {
  return <ProjectsContent />;
}
