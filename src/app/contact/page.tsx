import { pageMetadata } from "@/lib/metadata";
import ContactContent from "./ContactContent";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Get in touch with Anish Kumar Gupta about jobs, projects, or collaborations.",
  keywords: ["Contact Anish Kumar Gupta", "Anish Kumar Gupta Email", "Anish Kumar Gupta LinkedIn", "Hire Anish Kumar Gupta", "Anish Kumar Gupta Web Developer"],
  path: "/contact",
});

export default function Contact() {
  return <ContactContent />;
}
