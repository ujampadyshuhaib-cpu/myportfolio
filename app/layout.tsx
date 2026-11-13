import type { Metadata } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolioData";

export const metadata: Metadata = {
  title: `${portfolioData.name} | ${portfolioData.title}`,
  description: portfolioData.tagline,
  keywords: ["Full-Stack Engineer", "Software Engineer", "Next.js", "React", "TypeScript", "Portfolio"],
  openGraph: {
    title: `${portfolioData.name} - ${portfolioData.title}`,
    description: portfolioData.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0a0a0f] text-gray-100 antialiased min-h-screen relative selection:bg-blue-600 selection:text-white">
        {/* Ambient Top Glow Effect */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[380px] bg-gradient-to-b from-blue-600/15 via-purple-600/10 to-transparent blur-[120px] pointer-events-none -z-10" />
        {/* Subtle grid layer */}
        <div className="fixed inset-0 bg-grid-pattern pointer-events-none -z-10 opacity-60" />
        {children}
      </body>
    </html>
  );
}
