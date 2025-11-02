import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MLV Forge - Where AI Meets Ambition",
  description: "AI-powered student workforce platform connecting college students with companies for real projects. Gen Z talent, AI powered, real results.",
  keywords: ["student workforce", "AI platform", "college students", "freelance", "gig economy", "Gen Z talent"],
  authors: [{ name: "MLV Forge" }],
  openGraph: {
    title: "MLV Forge - Where AI Meets Ambition",
    description: "Turn your AI skills into real work. Get paid. Build your portfolio.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
