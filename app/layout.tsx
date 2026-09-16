import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mohamedelmogy.vercel.app"),
  title: "Mohamed Elmogy | AI Engineer · LLMs & AI Agents",
  description: "AI Engineer based in Jubail, Saudi Arabia. Explore Mohamed Elmogy's work in Arabic NLP, LLM fine-tuning, and multi-agent workflows. Open to relocation with a transferable Iqama.",
  alternates: { canonical: "/" },
  openGraph: { title: "Mohamed Elmogy | AI Engineer", description: "Language. Agents. Applied AI. Explore my projects and experience.", url: "https://mohamedelmogy.vercel.app", type: "website", images: [{ url: "/mohamed4.png", alt: "Mohamed Elmogy" }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
