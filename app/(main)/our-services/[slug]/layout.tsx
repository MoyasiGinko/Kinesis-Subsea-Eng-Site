// app/services/[slug]/layout.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Kinesis Subsea",
  description:
    "Discover our comprehensive range of professional services designed to help your business grow and succeed.",
};

export default function ServiceDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
