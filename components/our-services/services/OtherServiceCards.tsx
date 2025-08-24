"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ServiceCardItem from "./ServiceCardItem";

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface IndustrialServicesSectionProps {
  cards?: ServiceCard[];
}

const defaultCards: ServiceCard[] = [
  {
    id: "1",
    title: "Best innovations in metallurgy",
    description: "Consectetur ipiscing elit tellus ullam corper mattis",
    image:
      "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738820/5_yhjlu6.webp",
    category: "metallurgy",
  },
  {
    id: "2",
    title: "Fuel & Gas management",
    description: "Consectetur ipiscing elit tellus ullam corper mattis",
    image:
      "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/4_a40enk.webp",
    category: "fuel-gas",
  },
  {
    id: "3",
    title: "Manufacturer of tin lead and lead",
    description: "Consectetur ipiscing elit tellus ullam corper mattis",
    image:
      "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/3_yp4wiw.webp",
    category: "manufacturing",
  },
  {
    id: "4",
    title: "Manufacturing Solutions",
    description: "Consectetur ipiscing elit tellus ullam corper mattis",
    image:
      "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738819/2_vfvnuz.webp",
    category: "solutions",
  },
  {
    id: "5",
    title: "State of the art for hight control in",
    description: "Consectetur ipiscing elit tellus ullam corper mattis",
    image:
      "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738820/1_jvnjiz.webp",
    category: "control",
  },
  {
    id: "6",
    title: "Oil construction and gas production",
    description: "Consectetur ipiscing elit tellus ullam corper mattis",
    image:
      "https://res.cloudinary.com/dvvcwzp4n/image/upload/v1754738820/5_yhjlu6.webp",
    category: "oil-gas",
  },
];

const OtherServicesCards: React.FC<IndustrialServicesSectionProps> = ({
  cards = defaultCards,
}) => {
  // cards are plain white with no gradient backgrounds per design

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {cards.map((card, index) => (
            <ServiceCardItem key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherServicesCards;
