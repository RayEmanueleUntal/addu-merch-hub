import { getProducts } from "@/lib/getProducts";
import { getOrgs } from "@/lib/getOrgs";
import { notFound } from "next/navigation";
import Carousel from "@/components/ui/Carousel";
import Image from "next/image";
import Link from "next/link";

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
    <main className="mt-50">
      {/* Org Logo */}
      {org?.logo && (
        <Link
          href={`/org/${org.slug}`}
          key={org.id}
          className="relative h-20 w-20 mt-100 block overflow-hidden"
        >
          <Image
            src={org.logo}
            alt={org.name || "Organization logo"}
            fill
            className="object-cover"
          />
        </Link>
      )}

      {/* Image Carousel */}
      <Carousel images={product.images}></Carousel>

      {/* Name */}
      <h2>{product.name}</h2>

      {/* Price */}
      <h3>PHP {formatPrice(product.price)}</h3>

      {/* Description */}
      <p>{product.description}</p>

      {/* Stock Status */}
      <h5>{product.stockStatus}</h5>

      {/* Location */}
      {org?.location && (
        <div>
          <h4>{org.location.placeName}</h4>
          <h5>{org.location.address}</h5>
        </div>
      )}
    </main>
  );
}

function formatPrice(amount: number, locale: string = "en-US"): string {
  return amount.toLocaleString(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
