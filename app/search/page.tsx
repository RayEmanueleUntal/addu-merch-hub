import { searchProducts } from "@/lib/search";
import ProductGrid from "@/components/product/ProductGrid";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q ?? "";

  const results = query ? await searchProducts(query) : [];
  console.log(results);

  return (
    <main className="mt-40">
      <ProductGrid products={results}></ProductGrid>
    </main>
  );
}
