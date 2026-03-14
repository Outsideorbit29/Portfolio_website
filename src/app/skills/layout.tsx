import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Skills",
  description: "A comprehensive manifest of Anish Kumar's technical arsenal, from frontend fidelity to backend scalability.",
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
