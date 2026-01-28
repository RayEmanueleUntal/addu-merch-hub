import { searchProducts } from "@/lib/search";

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const query = searchParams.q ?? "";
  const results = query ? searchProducts(query) : [];
  return <main className="mt-40">Hello</main>;
}
