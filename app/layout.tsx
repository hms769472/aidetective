import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedBackground from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "AI DETECTIVE — Daily Detective Game",
  description: "Solve today's case before everyone else.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="relative">
        <ScrollToTop />
        <AnimatedBackground intensity={2} />
        <div className="relative z-10">
          <SiteNav />
          {children}
        </div>
      </body>
    </html>
  );
}