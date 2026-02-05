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
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Logo Wrapper */}
            <div className="relative shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-white shadow-md overflow-hidden flex items-center justify-center border border-gray-100">
              <Image
                src={org.logo}
                alt={`${org.name} logo`}
                fill
                className="object-cover"
              ></Image>
            </div>

            {/* Info Wrapper */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase italic">
                {org.name}
              </h1>
              <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed font-medium">
                {org.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-300 px-6 md:px-10">
          {/* Section Title */}
          <div className="mb-10 flex items-center justify-between border-b border-gray-100 pb-4">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tight">
              Shop Collection
            </h2>
          </div>

          <ProductGrid products={[...featuredProds, ...otherProds]} />
        </div>
      </section>
    </main>
  );
}
