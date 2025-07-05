export interface ServiceItem {
  id: number;
  title: string;
  description: string;
}

export interface CertificationItem {
  id: number;
  title: string;
  description: string;
}

export interface ContactItem {
  title: string;
  description: string;
  email: string;
  buttonText: string;
}

export interface Service {
  id: number;
  name: string;
  slug: string;
  tagline: string;
  servicesTitle: string;
  services: ServiceItem[];
  certificationsTitle: string;
  certifications: CertificationItem[];
  contact: ContactItem;
  images: string[];
}

export const serviceData: Service[] = [
  {
    id: 1,
    name: "Engineering Analysis",
    slug: "engineering-analysis",
    tagline: "Precision engineering solutions for renewable energy projects.",
    servicesTitle: "Our Engineering Services",
    services: [
      {
        id: 1,
        title: "Cables & Umbilicals",
        description:
          "Design and installation analyses for cables and umbilicals to ensure optimal performance and reliability.",
      },
      {
        id: 2,
        title: "Field Components",
        description:
          "Comprehensive analyses of field components and gravity-based structures for robust solutions.",
      },
      {
        id: 3,
        title: "Installation Assistance",
        description:
          "Expert support for installation, including equipment supply and system certification.",
      },
    ],
    certificationsTitle: "Certifications & Expertise",
    certifications: [
      {
        id: 1,
        title: "ISO 9001:2015",
        description:
          "Certified for the design of riser and umbilical systems and component testing.",
      },
      {
        id: 2,
        title: "DnV Certified",
        description:
          "Proven expertise with previously produced DnV-certified designs.",
      },
    ],
    contact: {
      title: "Get in Touch",
      description:
        "Contact our team to discuss your renewable energy project requirements.",
      email: "contact@risertec.com",
      buttonText: "Contact Us",
    },
    images: ["/services/service-1-1.jpg", "/services/service-1-2.jpg"],
  },
  // Additional services can be added here, e.g.:
  /*
  {
    id: 2,
    name: 'Offshore Installation',
    slug: 'offshore-installation',
    tagline: 'Expert offshore installation services for renewable energy systems.',
    servicesTitle: 'Our Installation Services',
    services: [
      {
        id: 4,
        title: 'Subsea Equipment Setup',
        description: 'Precision setup of subsea equipment for maximum efficiency.',
      },
      {
        id: 5,
        title: 'System Integration',
        description: 'Seamless integration of offshore systems for optimal performance.',
      },
    ],
    certificationsTitle: 'Installation Certifications',
    certifications: [
      {
        id: 3,
        title: 'ISO 14001',
        description: 'Certified for environmental management in offshore operations.',
      },
    ],
    contact: {
      title: 'Contact Our Installation Team',
      description: 'Reach out to discuss your offshore installation needs.',
      email: 'install@risertec.com',
      buttonText: 'Connect Now',
    },
    images: [
      'https://via.placeholder.com/600x400?text=Subsea+Setup',
      'https://via.placeholder.com/600x400?text=System+Integration',
    ],
  },
  */
];
