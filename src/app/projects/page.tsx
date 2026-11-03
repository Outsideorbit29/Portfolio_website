import { pageMetadata } from "@/lib/metadata";
import ProjectsContent from "./ProjectsContent";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Explore the technical projects of Anish Kumar Gupta, including EdgeBook, BullAI, CartShare, Trading Hand and Dhruv Tara.",
  keywords: ["Anish Kumar Gupta Projects", "Trading Hand Project", "Dhruv Tara AI", "Anish Kumar Gupta Portfolio Projects", "EdgeBook", "BullAI", "CartShare"],
  path: "/projects",
});

export default function Projects() {
  return <ProjectsContent />;
}
