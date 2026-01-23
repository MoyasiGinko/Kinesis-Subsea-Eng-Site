import CTASection from "@/components/sectors/cta-section";
import OilAndGasPage from "@/components/sectors/oil-and-gas";
import SectorBanner from "@/components/sectors/sector-banner";
import { Suspense } from "react";

export default function Page(): React.ReactElement {
  return (
    <>
      <SectorBanner
        title="Oil & Gas"
        subtitle="Innovative solutions for the oil and gas industry"
        links={[
          { href: "#sub-product-1", label: "Overview" },
          { href: "#sub-product-2", label: "Solutions" },
          { href: "#sub-product-3", label: "Case Studies" },
        ]}
        bgImage="/images/sector-banner-oil-gas.jpg"
      />
      <Suspense fallback={null}>
        <OilAndGasPage />
      </Suspense>
      <CTASection />
    </>
  );
}
