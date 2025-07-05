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

  {
    id: 2,
    name: "Products",
    slug: "products",
    tagline:
      "Expert offshore installation services for renewable energy systems.",
    servicesTitle: "Our Installation Services",
    services: [
      {
        id: 4,
        title: "Subsea Equipment Setup",
        description:
          "Precision setup of subsea equipment for maximum efficiency.",
      },
      {
        id: 5,
        title: "System Integration",
        description:
          "Seamless integration of offshore systems for optimal performance.",
      },
    ],
    certificationsTitle: "Installation Certifications",
    certifications: [
      {
        id: 3,
        title: "ISO 14001",
        description:
          "Certified for environmental management in offshore operations.",
      },
    ],
    contact: {
      title: "Contact Our Installation Team",
      description: "Reach out to discuss your offshore installation needs.",
      email: "install@risertec.com",
      buttonText: "Connect Now",
    },
    images: ["/services/service-1-1.jpg", "/services/service-1-2.jpg"],
  },
  {
    id: 3,
    name: "Software",
    slug: "software",
    tagline: "Innovative software solutions for energy sector challenges.",
    servicesTitle: "Our Software Solutions",
    services: [
      {
        id: 6,
        title: "Energy Management Systems",
        description:
          "Advanced software for efficient energy management and optimization.",
      },
      {
        id: 7,
        title: "Data Analytics Tools",
        description:
          "Powerful analytics tools for data-driven decision making in energy projects.",
      },
    ],
    certificationsTitle: "Software Certifications",
    certifications: [
      {
        id: 4,
        title: "ISO/IEC 27001",
        description:
          "Certified for information security management in software development.",
      },
    ],
    contact: {
      title: "Explore Our Software Solutions",
      description:
        "Contact us to learn how our software can enhance your energy projects.",
      email: "software@risertec.com",
      buttonText: "Get in Touch",
    },
    images: ["/services/service-1-1.jpg", "/services/service-1-2.jpg"],
  },
  {
    id: 4,
    name: "Renewables",
    slug: "renewables",
    tagline: "Sustainable solutions for a greener future.",
    servicesTitle: "Our Renewable Services",
    services: [
      {
        id: 8,
        title: "Wind Energy Solutions",
        description:
          "Innovative solutions for wind energy projects, from design to implementation.",
      },
      {
        id: 9,
        title: "Solar Energy Systems",
        description:
          "Comprehensive solar energy systems for efficient power generation.",
      },
    ],
    certificationsTitle: "Renewable Certifications",
    certifications: [
      {
        id: 5,
        title: "LEED Certification",
        description:
          "Certified for sustainable building practices in renewable energy projects.",
      },
    ],
    contact: {
      title: "Join the Renewable Revolution",
      description:
        "Contact us to discuss how we can support your renewable energy initiatives.",
      email: "renewables@risertec.com",
      buttonText: "Get in Touch",
    },
    images: ["/services/service-1-1.jpg", "/services/service-1-2.jpg"],
  },
  {
    id: 5,
    name: "Testing",
    slug: "testing",
    tagline: "Rigorous testing for reliable energy solutions.",
    servicesTitle: "Our Testing Services",
    services: [
      {
        id: 10,
        title: "Component Testing",
        description:
          "Thorough testing of energy components to ensure reliability and performance.",
      },
      {
        id: 11,
        title: "System Validation",
        description:
          "Comprehensive validation of energy systems for optimal functionality.",
      },
    ],
    certificationsTitle: "Testing Certifications",
    certifications: [
      {
        id: 6,
        title: "ISO/IEC 17025",
        description:
          "Certified for testing and calibration laboratories in the energy sector.",
      },
    ],
    contact: {
      title: "Ensure Reliability with Our Testing Services",
      description:
        "Contact us to learn more about our rigorous testing processes.",
      email: "testing@risertec.com",
      buttonText: "Get in Touch",
    },
    images: ["/services/service-1-1.jpg", "/services/service-1-2.jpg"],
  },
  {
    id: 6,
    name: "Past Projects",
    slug: "past-projects",
    tagline: "Showcasing our successful energy projects.",
    servicesTitle: "Our Project Portfolio",
    services: [
      {
        id: 12,
        title: "Offshore Wind Farms",
        description:
          "Successful implementation of offshore wind farms with advanced technology.",
      },
      {
        id: 13,
        title: "Solar Power Plants",
        description:
          "Efficient solar power plants delivering sustainable energy solutions.",
      },
    ],
    certificationsTitle: "Project Certifications",
    certifications: [
      {
        id: 7,
        title: "Project Management Professional (PMP)",
        description:
          "Certified project management expertise in delivering complex energy projects.",
      },
    ],
    contact: {
      title: "Explore Our Project Successes",
      description:
        "Contact us to learn more about our past projects and success stories.",
      email: "projects@risertec.com",
      buttonText: "Get in Touch",
    },
    images: ["/services/service-1-1.jpg", "/services/service-1-2.jpg"],
  },
  {
    id: 7,
    name: "Training",
    slug: "training",
    tagline: "Empowering teams with expert training programs.",
    servicesTitle: "Our Training Programs",
    services: [
      {
        id: 14,
        title: "Technical Training",
        description:
          "In-depth technical training programs for energy sector professionals.",
      },
      {
        id: 15,
        title: "Safety Training",
        description:
          "Comprehensive safety training to ensure a secure working environment.",
      },
    ],
    certificationsTitle: "Training Certifications",
    certifications: [
      {
        id: 8,
        title: "Certified Energy Manager (CEM)",
        description:
          "Certified training programs for energy management professionals.",
      },
    ],
    contact: {
      title: "Enhance Your Skills with Our Training",
      description:
        "Contact us to learn more about our training programs and how they can benefit your team.",
      email: "training@risertec.com",
      buttonText: "Get in Touch",
    },
    images: ["/services/service-1-1.jpg", "/services/service-1-2.jpg"],
  },
];
