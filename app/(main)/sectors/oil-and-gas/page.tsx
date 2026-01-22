import CTASection from "@/components/sectors/cta-section";
import OilAndGasPage from "@/components/sectors/oil-and-gas";
import SectorBanner from "@/components/sectors/sector-banner";

export default function Page(): React.ReactElement {
  return (
    <>
      <SectorBanner
        title="Oil & Gas"
        subtitle="Our expertise spans a wide range of subsea systems in the oil and gas sector, delivering innovative and reliable solutions to meet the most demanding project requirements."
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
