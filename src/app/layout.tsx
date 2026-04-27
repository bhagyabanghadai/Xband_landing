import type { Metadata } from "next";
// Removed font loader temporarily to debug playwright font loading hang
import "./globals.css";
import { ReactLenis } from 'lenis/react'
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";

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
      <body className="antialiased">
        <Preloader />
        <CustomCursor />
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
