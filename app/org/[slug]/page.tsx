import { getProducts } from "@/lib/getProducts";
import { getOrgs } from "@/lib/getOrgs";
import { notFound } from "next/navigation";
import ProductGrid from "@/components/product/ProductGrid";
import Image from "next/image";

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
      <main className="flex min-h-[60vh] flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-400">
          No Merch Available
        </h2>
        <p className="text-gray-500">Check back later for new releases!</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Org Section*/}
      <section className="pt-32 pb-16 border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto w-300 px-30">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Logo Wrapper */}
            <div className="relative shrink-0 w-32 h-32 rounded-xl shadow-md overflow-hidden flex items-center justify-center">
              <Image
                src={org.logo}
                alt={`${org.name} logo`}
                fill
                className="object-cover"
              ></Image>
            </div>

            {/* Info Wrapper */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                {org.name}
              </h1>
              <p className="mt-3 text-lg text-gray-600 max-w-2xl leading-relaxed">
                {org.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-12">
        <div className="mx-auto max-w-300 px-30">
          {/* Section Title */}
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              Shop Collection
            </h2>
          </div>

          <ProductGrid products={[...featuredProds, ...otherProds]} />
        </div>
      </section>
    </main>
  );
}
