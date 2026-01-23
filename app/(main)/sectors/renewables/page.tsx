import CTASection from "@/components/sectors/cta-section";
import RenewablesPage from "@/components/sectors/renewables";
import SectorBanner from "@/components/sectors/sector-banner";
import { Suspense } from "react";

export default function Page(): React.ReactElement {
  return (
    <>
      <SectorBanner
        title="Renewables"
        subtitle="Innovative solutions for the renewables industry"
        links={[
          { href: "#sub-product-a", label: "Overview" },
          { href: "#sub-product-b", label: "Solutions" },
          { href: "#sub-product-c", label: "Case Studies" },
        ]}
        bgImage="/images/sector-banner-renewables.jpg"
      />
      <Suspense fallback={null}>
        <RenewablesPage />
      </Suspense>
      <CTASection />
    </>
  );
}
