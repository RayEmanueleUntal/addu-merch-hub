import { getProducts } from "@/lib/getProducts";

export async function searchProducts(query: string) {
  const q = query.toLowerCase();
  const products = await getProducts();

  const nameMatches = [];
  const tagsMatches = [];

  for (const product of products) {
    if (product.name.toLowerCase().includes(q)) {
      nameMatches.push(product);
    } else if (product.tags.some((tag) => tag.toLowerCase().includes(q))) {
      tagsMatches.push(product);
    }
  }

  return [...nameMatches, ...tagsMatches];
}
