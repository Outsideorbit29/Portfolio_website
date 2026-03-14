import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact | Anish Kumar - Uplink Terminal",
  description: "Secure a direct line of communication with Anish Kumar. Initiate technical collaborations, architectural discussions, or professional inquiries.",
  keywords: ["Contact Anish Kumar", "Anish Kumar Email", "Anish Kumar LinkedIn", "Hire Anish Kumar", "Anish Kumar Web Developer"],
};

export default function Contact() {
  return <ContactContent />;
}
