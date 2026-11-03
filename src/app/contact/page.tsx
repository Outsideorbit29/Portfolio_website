import { pageMetadata } from "@/lib/metadata";
import ContactContent from "./ContactContent";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Secure a direct line of communication with Anish Kumar Gupta. Initiate technical collaborations, architectural discussions, or professional inquiries.",
  keywords: ["Contact Anish Kumar Gupta", "Anish Kumar Gupta Email", "Anish Kumar Gupta LinkedIn", "Hire Anish Kumar Gupta", "Anish Kumar Gupta Web Developer"],
  path: "/contact",
});

export default function Contact() {
  return <ContactContent />;
}
