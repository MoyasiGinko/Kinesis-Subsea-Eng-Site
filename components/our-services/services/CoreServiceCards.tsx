"use client";
import React from "react";
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
];

const CoreServicesCards: React.FC<IndustrialServicesSectionProps> = ({
  cards = defaultCards,
}) => {
  // cards are plain white with no gradient backgrounds per design

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-blue">
              Our Core Services
            </h2>
            <p className="mt-2 text-base md:text-lg text-primary-blue">
              Specialized solutions tailored to your needs
            </p>
          </div>

          {/* decorative design pattern on the right (larger & colored) */}
          <div className="hidden sm:block">
            <svg
              width="240"
              height="96"
              viewBox="0 0 240 96"
              fill="none"
              aria-hidden="true"
              className="text-indigo-200"
            >
              <g fill="currentColor" opacity="0.18">
                {/* row 1 */}
                <circle cx="12" cy="12" r="6" />
                <circle cx="48" cy="12" r="6" />
                <circle cx="84" cy="12" r="6" />
                <circle cx="120" cy="12" r="6" />
                <circle cx="156" cy="12" r="6" />
                <circle cx="192" cy="12" r="6" />
                {/* row 2 */}
                <circle cx="12" cy="48" r="6" />
                <circle cx="48" cy="48" r="6" />
                <circle cx="84" cy="48" r="6" />
                <circle cx="120" cy="48" r="6" />
                <circle cx="156" cy="48" r="6" />
                <circle cx="192" cy="48" r="6" />
                {/* row 3 */}
                <circle cx="12" cy="84" r="6" />
                <circle cx="48" cy="84" r="6" />
                <circle cx="84" cy="84" r="6" />
                <circle cx="120" cy="84" r="6" />
                <circle cx="156" cy="84" r="6" />
                <circle cx="192" cy="84" r="6" />
              </g>
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {cards.map((card, index) => (
            <ServiceCardItem key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServicesCards;
