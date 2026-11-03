import { pageMetadata } from "@/lib/metadata";
import HomeContent from "./HomeClient";

export const metadata = pageMetadata({
  description: "Welcome to the official portfolio of Anish Kumar Gupta. Explore my work in web development, AI architectures, and creative engine design.",
  keywords: ["Anish Kumar Gupta", "Anish Kumar Gupta Home", "Anish Kumar Gupta Portfolio", "anishkumar.online Home", "Anish Kumar Gupta Full Stack"],
  path: "/",
});

export default function Home() {
  return <HomeContent />;
}
