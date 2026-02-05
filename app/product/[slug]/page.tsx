import { getProducts } from "@/lib/getProducts";
import { getOrgs } from "@/lib/getOrgs";
import { notFound } from "next/navigation";
import Carousel from "@/components/ui/Carousel";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Info } from "lucide-react"; // Nice icons for detail sections

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
      {/* FIXED: Added responsive max-width and padding */}
      <nav className="pt-24 md:pt-32 mx-auto max-w-[1200px] px-6 md:px-10 mb-8">
        <Link
          href={`/org/${org?.id}`}
          className="text-xs md:text-sm font-bold text-gray-400 hover:text-[#08228d] transition-colors flex items-center gap-2 uppercase tracking-widest"
        >
          ← Back to {org?.name}
        </Link>
      </nav>

      <section className="mx-auto max-w-[1200px] px-6 md:px-10">
        {/* FIXED: Mobile stack (flex-col), Desktop side-by-side (lg:flex-row) */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* LEFT COLUMN: Image Gallery */}
          <div className="w-full lg:flex-1 max-w-2xl mx-auto lg:mx-0">
            {/* Sticky only on desktop */}
            <div className="lg:sticky lg:top-32">
              <Carousel images={product.images} />
            </div>
          </div>

          {/* RIGHT COLUMN: Product Details */}
          <div className="w-full lg:flex-1 flex flex-col">
            {/* Header: Org + Name */}
            <div className="mb-8">
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
                  <span className="text-xs font-black text-gray-500 group-hover:text-[#08228d] uppercase tracking-widest transition-colors">
                    {org.name}
                  </span>
                </Link>
              )}

              <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-[0.9] mb-4 uppercase italic tracking-tighter">
                {product.name}
              </h1>

              <div className="flex items-center gap-4">
                <span className="text-2xl md:text-3xl font-black text-[#08228d]">
                  PHP {formatPrice(product.price)}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    product.stockStatus === "in-stock"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {product.stockStatus === "in-stock"
                    ? "Available"
                    : "Sold Out"}
                </span>
              </div>
            </div>

            {/* Description Section */}
            <div className="border-t border-gray-100 py-6">
              <h4 className="text-[10px] font-black uppercase text-gray-400 mb-3 flex items-center gap-2 tracking-[0.2em]">
                <Info size={14} /> Description
              </h4>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm md:text-base font-medium">
                {product.description}
              </p>
            </div>

            {/* Location Section */}
            {org?.location && (
              <div className="border-t border-gray-100 py-6">
                <h4 className="text-[10px] font-black uppercase text-gray-400 mb-3 flex items-center gap-2 tracking-[0.2em]">
                  <MapPin size={14} /> Claim Location
                </h4>
                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
                  <p className="font-black text-gray-800 uppercase text-sm tracking-tight">
                    {org.location.placeName}
                  </p>
                  <p className="text-xs text-gray-500 mt-1 font-medium">
                    {org.location.address}
                  </p>
                </div>
              </div>
            )}

            {/* Buy Action (UI Only for now) */}
            {org && org.socials.facebook && (
              <div className="mt-8 lg:mt-auto pt-6">
                <a
                  href={org?.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center bg-[#08228d] text-white py-5 rounded-2xl font-black uppercase italic tracking-widest text-lg hover:bg-[#061a6d] transition-all shadow-xl shadow-[#08228d]/20 active:scale-[0.98]"
                >
                  Inquire Now
                </a>
                <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-tight mt-4">
                  Confirm availability with {org.name} via Messenger
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
