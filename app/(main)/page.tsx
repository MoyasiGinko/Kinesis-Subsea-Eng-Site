import HeroBanner from "@/components/common/HeroBanner";
import ServicesSection from "@/components/common/ServicesSection";
import StatsSection from "@/components/common/StatsSection";
import NewsSection from "@/components/common/NewsSection";
import ContactSection from "@/components/common/ContactSection";
import ThreeSectorLayout from "@/components/common/SectorSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-950 to-slate-900">
      <HeroBanner />
      <ThreeSectorLayout />
      <ServicesSection />
      {/* <StatsSection /> */}
      <NewsSection />
      <ContactSection />
    </main>
  );
}
