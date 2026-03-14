import { Metadata } from "next";
import SkillsContent from "./SkillsContent";

export const metadata: Metadata = {
  title: "Skills | Anish Kumar - Technical Arsenal",
  description: "Explore the technical capabilities of Anish Kumar, spanning React/Next.js interfaces, Node.js/FastAPI backends, and TensorFlow/LangChain AI modules.",
  keywords: ["Anish Kumar Skills", "Anish Kumar Tech Stack", "Full Stack Developer Skills", "AI Engineer Skills", "React Developer", "Python Developer"],
};

export default function Skills() {
  return <SkillsContent />;
}
