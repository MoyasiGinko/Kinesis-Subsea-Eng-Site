import HeroBanner from './components/HeroBanner';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import NewsSection from './components/NewsSection';
import ContactSection from './components/ContactSection';

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
