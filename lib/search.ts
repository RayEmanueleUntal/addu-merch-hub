import { getProducts } from "@/lib/getProducts";

export async function searchProducts(query: string) {
  const q = query.toLowerCase();
  const products = await getProducts();

    const filteredByNameProds = products.filter(product => (product.name.toLowerCase().includes(q)));
    const filteredByTagsProds = products.
}
