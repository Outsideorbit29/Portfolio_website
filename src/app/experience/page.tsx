import { pageMetadata } from "@/lib/metadata";
import ExperienceContent from "./ExperienceContent";

export const metadata = pageMetadata({
  title: "Experience",
  description: "View the professional journey of Anish Kumar Gupta, featuring techathon wins, full-stack roles, and certified engineering nodes.",
  keywords: ["Anish Kumar Gupta Experience", "Anish Kumar Gupta Career", "Anish Kumar Gupta Certifications", "Anish Kumar Gupta Resume", "Anish Kumar Gupta Projects"],
  path: "/experience",
});

export default function Experience() {
  return <ExperienceContent />;
}
