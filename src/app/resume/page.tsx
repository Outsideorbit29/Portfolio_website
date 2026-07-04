import { Metadata } from "next";
import ResumeContent from "./ResumeContent";

export const metadata: Metadata = {
  title: "Resume | Anish Kumar Gupta - System CV",
  description: "View and download the professional resume of Anish Kumar Gupta, a Full Stack Engineer specializing in modern web ecosystems and cognitive AI applications.",
  keywords: ["Anish Kumar Gupta Resume", "Anish Kumar Gupta CV", "Full Stack Developer Resume", "Anish Kumar Gupta Portfolio"],
};

export default function ResumePage() {
  return <ResumeContent />;
}
