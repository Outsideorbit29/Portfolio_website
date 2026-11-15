import { pageMetadata } from "@/lib/metadata";
import ProjectsContent from "./ProjectsContent";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Explore the technical projects of Anish Kumar Gupta, including Wind Forecast Desk, Alex, EdgeBook, BullAI, CartShare, Trading Hand and Dhruv Tara.",
  keywords: ["Anish Kumar Gupta Projects", "Trading Hand Project", "Dhruv Tara AI", "Anish Kumar Gupta Portfolio Projects", "Wind Forecast Desk", "Alex AI Assistant", "EdgeBook", "BullAI", "CartShare"],
  path: "/projects",
});

export default function Projects() {
  return <ProjectsContent />;
}
