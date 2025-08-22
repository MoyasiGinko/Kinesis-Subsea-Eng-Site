import RenewablesPage from "@/components/sectors/renewables";
import SectorBanner from "@/components/sectors/sector-banner";

export default function Page(): React.ReactElement {
  return (
    <>
      <SectorBanner
        title="Renewables"
        subtitle="Innovative solutions for the renewables industry"
        links={[
          { href: "/sectors/#renewables", label: "Overview" },
          { href: "/sectors/#solutions", label: "Solutions" },
          { href: "/sectors/#case-studies", label: "Case Studies" },
        ]}
        bgImage="/images/sector-banner-renewables.jpg"
      />
      <RenewablesPage />
    </>
  );
}
