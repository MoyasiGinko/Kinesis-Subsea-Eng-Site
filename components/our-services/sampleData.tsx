export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string; // Placeholder for icon class or path
}

export interface ServiceSection {
  title: string;
  description: string;
  services: ServiceItem[];
  buttonText: string;
}

export const serviceData: ServiceSection = {
  title: "INDUSTRIES WITH EXPERT SERVICES",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  services: [
    {
      id: 1,
      title: "Procurement",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      icon: "fa-shopping-cart", // Example icon class
    },
    {
      id: 2,
      title: "Fabrication",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      icon: "fa-tools", // Example icon class
    },
    {
      id: 3,
      title: "Engineering",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      icon: "fa-cogs", // Example icon class
    },
    {
      id: 4,
      title: "Engineering & Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      icon: "fa-drafting-compass", // Example icon class
    },
    {
      id: 5,
      title: "Technical Consulting",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      icon: "fa-headset", // Example icon class
    },
    {
      id: 6,
      title: "Civil Engineering",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
      icon: "fa-building", // Example icon class
    },
  ],
  buttonText: "Learn More",
};
