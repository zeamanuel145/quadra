import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Playfair_Display({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  title: "quadra | Social media, video, photography and software",
  description:
    "Four creators, one team: a social media manager, a video editor, a photographer and a software engineer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
