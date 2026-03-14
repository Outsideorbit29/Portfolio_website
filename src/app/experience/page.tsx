import { Metadata } from "next";
import ExperienceContent from "./ExperienceContent";

export const metadata: Metadata = {
  title: "Experience | Anish Kumar - Professional Chronology",
  description: "View the professional journey of Anish Kumar, featuring techathon wins, full-stack roles, and certified engineering nodes.",
  keywords: ["Anish Kumar Experience", "Anish Kumar Career", "Anish Kumar Certifications", "Anish Kumar Resume", "Anish Kumar Projects"],
};

export default function Experience() {
  return <ExperienceContent />;
}
