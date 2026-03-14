import { Metadata } from "next";
import ExperienceContent from "./ExperienceContent";

export const metadata: Metadata = {
  title: "Experience | Anish Kumar Gupta - Professional Chronology",
  description: "View the professional journey of Anish Kumar Gupta, featuring techathon wins, full-stack roles, and certified engineering nodes.",
  keywords: ["Anish Kumar Gupta Experience", "Anish Kumar Gupta Career", "Anish Kumar Gupta Certifications", "Anish Kumar Gupta Resume", "Anish Kumar Gupta Projects"],
};

export default function Experience() {
  return <ExperienceContent />;
}
