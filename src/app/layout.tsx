import type { Metadata } from "next";
import { Oswald, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import SmoothScrolling from "@/components/SmoothScrolling";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "XBandGlobal | Global Incorporation Marketplace",
  description: "Form & operate globally. Trusted businesses, verified setup across regions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${manrope.variable} ${ibmPlexMono.variable} h-full antialiased bg-slate-50`}
    >
      <body className="min-h-full flex flex-col bg-slate-50">
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
