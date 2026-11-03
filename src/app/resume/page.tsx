import { pageMetadata } from "@/lib/metadata";
import ResumeContent from "./ResumeContent";

export const metadata = pageMetadata({
  title: "Resume",
  description: "View and download the professional resume of Anish Kumar Gupta, a Full Stack Software Engineer specializing in modern web ecosystems and cognitive AI applications.",
  keywords: ["Anish Kumar Gupta Resume", "Anish Kumar Gupta CV", "Full Stack Developer Resume", "Anish Kumar Gupta Portfolio"],
  path: "/resume",
});

export default function ResumePage() {
  return <ResumeContent />;
}
