import CTASection from "@/components/sectors/cta-section";
import OilAndGasPage from "@/components/sectors/oil-and-gas";
import SectorBanner from "@/components/sectors/sector-banner";

export default function Page(): React.ReactElement {
  return (
    <>
      <SectorBanner
        title="Oil & Gas"
        subtitle="Innovative solutions for the oil and gas industry"
        links={[
          { href: "/sectors/#oil-and-gas", label: "Overview" },
          { href: "/sectors/#solutions", label: "Solutions" },
          { href: "/sectors/#case-studies", label: "Case Studies" },
        ]}
        bgImage="/images/sector-banner-oil-gas.jpg"
      />
      <OilAndGasPage />
      <CTASection />
    </>
  );
}
