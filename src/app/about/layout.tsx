import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About",
  description: "Discover the professional background, tech stack, and engineering philosophy of Anish Kumar.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
