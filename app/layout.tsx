import type { Metadata } from "next";
import { Inter_Tight, Space_Grotesk } from "next/font/google";
import "./globals.css";

/* FONTS */
const inter = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

/* METADATA (IMPORTANT FOR CLIENT TRUST + SEO) */
export const metadata: Metadata = {
  title: "ShadowLab — Systems that solve real problems",
  description:
    "ShadowLab builds SaaS platforms, AI tools, and automation systems designed for real-world usage.",
  keywords: [
    "SaaS development",
    "AI automation",
    "custom software",
    "startup development",
    "ShadowLab",
  ],
  authors: [{ name: "ShadowLab" }],
};

/* ROOT LAYOUT */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${space.variable}`}
      suppressHydrationWarning
    >
      <body
        className="
          bg-[#0b0b0c]
          text-[#e6e6e6]
          antialiased
          selection:bg-white/20
        "
      >
        {children}
      </body>
    </html>
  );
}