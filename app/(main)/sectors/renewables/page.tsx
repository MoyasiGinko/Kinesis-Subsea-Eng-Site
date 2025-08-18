import RenewablesPage from "@/components/sectors/renewables";
import SectorBanner from "@/components/sectors/sector-banner";

export default function Page(): React.ReactElement {
  return (
    <>
      {/* <SectorBanner
        title="Renewables"
        subtitle="Innovative solutions for the renewables industry"
        links={[
          { href: "/sectors/#renewables", label: "Overview" },
          { href: "/sectors/#solutions", label: "Solutions" },
          { href: "/sectors/#case-studies", label: "Case Studies" },
        ]}
        bgImage="https://images.unsplash.com/photo-1548337138-e87d889cc369?q=80&w=1196&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      /> */}
      <RenewablesPage />
    </>
  );
}
