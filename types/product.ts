export interface Product {
  id: string;
  orgId: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  stockStatus: string;
  featured: boolean;
  tags: string[];
}
