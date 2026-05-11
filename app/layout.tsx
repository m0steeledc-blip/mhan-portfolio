import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Instrument_Serif, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Edmar Cayabyab — Senior Multimedia Artist · Brand · Cinematography · AI-augmented",
  description: "Full-pipeline Senior Multimedia Artist. Brand. Cinematography. AI-augmented. Built for scale.",
  openGraph: {
    title: "Edmar Cayabyab — Senior Multimedia Artist",
    description: "Full-pipeline Senior Multimedia Artist. Brand. Cinematography. AI-augmented. Built for scale.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${instrumentSerif.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
