export interface Org {
  id: string;
  name: string;
  slug: string;
  description: string;
  logo: string;
  location: { placeName: string; address: string };
  socials: { facebook: string };
}
