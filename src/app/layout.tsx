import type { Metadata } from "next";
import { Inter, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ReactLenis } from 'lenis/react'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: 'swap' });
const ibmPlexMono = IBM_Plex_Mono({ weight: ['400', '600'], subsets: ["latin"], variable: "--font-ibm-plex-mono", display: 'swap' });

export const metadata: Metadata = {
  title: "XBandGlobal | Verified Incorporation Setup",
  description: "XBandGlobal is a specialized B2B marketplace connecting businesses seeking international company incorporation services with vetted, verified service providers across multiple jurisdictions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
