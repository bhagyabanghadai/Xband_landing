import Navbar from "@/components/Navbar";
import LandingHero from "@/components/LandingHero";
import NotchSeparator from "@/components/NotchSeparator";
import OperationalProtocol from "@/components/OperationalProtocol";
import GallerySection from "@/components/GallerySection";
import JurisdictionsCarousel from "@/components/JurisdictionsCarousel";
import HowItWorksSection from "@/components/HowItWorksSection";
import FinalCTA from "@/components/FinalCTA";
import clsx from "clsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 overflow-hidden">
      <Navbar />
      
      <LandingHero />
      
      <NotchSeparator fillColorClass="fill-white" />
      
      <OperationalProtocol />

      <NotchSeparator fillColorClass="fill-slate-50" />

      <GallerySection />

      <NotchSeparator fillColorClass="fill-white" />

      <JurisdictionsCarousel />

      <NotchSeparator fillColorClass="fill-slate-50" />

      <HowItWorksSection />

      <NotchSeparator fillColorClass="fill-slate-50" />

      <FinalCTA />
    </main>
  );
}
