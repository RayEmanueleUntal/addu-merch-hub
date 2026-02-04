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

  if (results.length === 0) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-400">
          Search Result Not Found
        </h2>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* PRODUCTS SECTION */}
      <section className="py-12 pt-32">
        <div className="mx-auto max-w-300 px-30">
          {/* Section Title */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              Search Results for {query}
            </h2>
          </div>

          <ProductGrid products={results} />
        </div>
      </section>
    </main>
  );
}
