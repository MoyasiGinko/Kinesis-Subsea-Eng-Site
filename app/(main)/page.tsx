import HeroBanner from "@/components/common/HeroBanner";
import ServicesSection from "@/components/common/ServicesSection";
import StatsSection from "@/components/common/StatsSection";
import NewsSection from "@/components/common/NewsSection";
import ContactSection from "@/components/common/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <ServicesSection />
      <StatsSection />
      <NewsSection />
      <ContactSection />
    </main>
  );
}
