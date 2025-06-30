import SuspenseBoundary from "@/components/common/SuspenseBoundary";
import SearchResults from "@/components/search";

export default function Page() {
  return (
    <SuspenseBoundary>
      <SearchResults />
    </SuspenseBoundary>
  );
}
