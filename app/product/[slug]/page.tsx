import { getProducts } from "@/lib/getProducts";
import { getOrgs } from "@/lib/getOrgs";
import { notFound } from "next/navigation";
import Carousel from "@/components/ui/Carousel";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Store, Package, Info } from "lucide-react"; // Nice icons for detail sections

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: prodId } = await params;
  const [orgs, products] = await Promise.all([getOrgs(), getProducts()]);

  const product = products.find((prod) => prod.id === prodId);
  if (!product) notFound();

  const org = orgs.find((_org) => _org.id == product.orgId);

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* Breadcrumbs or Back Link */}
      <nav className="pt-32 mx-auto w-300 px-30 mb-8">
        <Link
          href={`/org/${org?.id}`}
          className="text-sm text-gray-500 hover:text-[#08228d] transition-colors flex items-center gap-2"
        >
          ← Back to {org?.name}
        </Link>
      </nav>

      <section className="mx-auto w-300 px-30">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT COLUMN: Image Gallery */}
          <div className="flex-1 max-w-xl">
            <div className="sticky top-40">
              <Carousel images={product.images} />
            </div>
          </div>

          {/* RIGHT COLUMN: Product Details */}
          <div className="flex-1 flex flex-col">
            {/* Header: Org + Name */}
            <div className="mb-6">
              {org && (
                <Link
                  href={`/org/${org.id}`}
                  className="flex items-center gap-2 mb-4 group"
                >
                  <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-100">
                    <Image
                      src={org.logo}
                      alt={org.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm font-bold text-gray-600 group-hover:text-[#08228d] uppercase tracking-wide">
                    {org.name}
                  </span>
                </Link>
              )}
              <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-[#08228d]">
                  PHP {formatPrice(product.price)}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                    product.stockStatus === "in-stock"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {product.stockStatus}
                </span>
              </div>
            </div>

            {/* Description Section */}
            <div className="border-t border-gray-100 py-6">
              <h4 className="text-sm font-bold uppercase text-gray-400 mb-3 flex items-center gap-2">
                <Info size={16} /> Description
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Location Section */}
            {org?.location && (
              <div className="border-t border-gray-100 py-6">
                <h4 className="text-sm font-bold uppercase text-gray-400 mb-3 flex items-center gap-2">
                  <MapPin size={16} /> Claim Location
                </h4>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="font-bold text-gray-800">
                    {org.location.placeName}
                  </p>
                  <p className="text-sm text-gray-500">
                    {org.location.address}
                  </p>
                </div>
              </div>
            )}

            {/* Buy Action (UI Only for now) */}

            {org && org.socials.facebook && (
              <div className="mt-auto pt-8">
                <a
                  href={org?.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center bg-[#08228d] text-white py-4 rounded-2xl font-bold text-lg hover:bg-[#061a6d] transition-all shadow-lg shadow-[#08228d]/20 active:scale-[0.98]"
                >
                  Inquire via Organization
                </a>
                <p className="text-center text-xs text-gray-400 mt-4">
                  Verify stock availability with the organization before
                  visiting.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function formatPrice(amount: number, locale: string = "en-US"): string {
  return amount.toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
