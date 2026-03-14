import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore the portfolio of Anish Kumar, featuring AI-powered applications, full-stack systems, and engineering projects.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
