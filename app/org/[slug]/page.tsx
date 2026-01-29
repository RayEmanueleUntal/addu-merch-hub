import { getProducts } from "@/lib/getProducts";
import { getOrgs } from "@/lib/getOrgs";
import { notFound } from "next/navigation";
import ProductGrid from "@/components/product/ProductGrid";

export default async function Org({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: orgId } = await params;

  const [orgs, products] = await Promise.all([getOrgs(), getProducts()]);

  const org = orgs.find((_org) => _org.id == orgId);
  if (!org) notFound();

  // Featured Products
  const featuredProds = products.filter(
    (product) => product.orgId == orgId && product.featured,
  );

  // Non Featured Products
  const otherProds = products.filter(
    (product) => product.orgId == orgId && !product.featured,
  );

  // If No Products Available
  if (featuredProds.length == 0 && otherProds.length == 0) {
    return (
      <main>
        <h2 className="mt-50">No Merch Available</h2>
      </main>
    );
  }

  return (
    <main>
      <ProductGrid products={[...featuredProds, ...otherProds]}></ProductGrid>
    </main>
  );
}
