export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  environment: string;
  price: number;
  image: string;
  secondaryImages: string[];
  isFeatured: boolean;
}

export interface Environment {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  type: string;
  message: string;
}