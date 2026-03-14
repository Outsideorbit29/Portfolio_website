import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional timeline and historical record of Anish Kumar's contributions to software engineering and AI projects.",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
