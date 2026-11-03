import { Metadata } from "next";
import ProjectsContent from "./ProjectsContent";

export const metadata: Metadata = {
  title: "Projects | Anish Kumar Gupta - Selected Archive",
  description: "Explore the technical projects of Anish Kumar Gupta, including EdgeBook, BullAI, CartShare, Trading Hand and Dhruv Tara.",
  keywords: ["Anish Kumar Gupta Projects", "Trading Hand Project", "Dhruv Tara AI", "Anish Kumar Gupta Portfolio Projects", "EdgeBook", "BullAI", "CartShare"],
};

export default function Projects() {
  return <ProjectsContent />;
}
