import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StickyFeatures from "@/components/StickyFeatures";
import Ticker from "@/components/Ticker";
import HowItWorks from "@/components/HowItWorks";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <Hero />
      <Ticker />
      <StickyFeatures />
      <HowItWorks />
      <FooterCTA />
    </main>
  );
}
