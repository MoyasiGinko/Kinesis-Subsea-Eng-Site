// types/service.ts
export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  category: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}
