import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mhan-portfolio.vercel.app"),
  title: "Edmar Cayabyab — Senior Multimedia Artist · Brand · Cinematography · AI-augmented",
  description: "Full-pipeline Senior Multimedia Artist. Brand. Cinematography. AI-augmented. Built for scale.",
  openGraph: {
    title: "Edmar Cayabyab — Senior Multimedia Artist",
    description: "Full-pipeline Senior Multimedia Artist. Brand. Cinematography. AI-augmented. Built for scale.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body data-anim="full" className={`${fraunces.variable} ${jetbrainsMono.variable}`}>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
