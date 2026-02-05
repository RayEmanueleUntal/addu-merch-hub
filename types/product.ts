export interface Product {
  id: string;
  orgId: string;
  name: string;
  slug: string;
  description: string;
  collection: string;
  focalPoint: string;
  price: number;
  images: string[];
  stockStatus: string;
  featured: boolean;
  tags: string[];
}
