import { getProducts } from "@/lib/getProducts";
import { getOrgs } from "@/lib/getOrgs";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: string;
  orgId: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  stockStatus: string;
  featured: boolean;
  tags: string[];
}

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
      {/* Shows Featured Products First */}
      {featuredProds.map(renderProduct)}

      {/* Shows Other Products */}
      {otherProds.map(renderProduct)}
    </main>
  );
}

function renderProduct(product: Product) {
  return (
    <Link href={`/product/${product.slug}`} key={product.id} className="">
      {/* Image container */}
      <div className="relative w-32 h-32 rounded-xl bg-white shadow-md overflow-hidden transition hover:scale-105 hover:shadow-lg">
        <Image
          src={product.images[0]}
          alt={product.name ?? ""}
          fill
          className="object-cover"
        ></Image>
      </div>

      {/* Product Name */}
      <div className="">
        <h3>{product.name}</h3>
      </div>

      {/* Product Price */}
      <div className="">
        <h4>{product.price}</h4>
      </div>
    </Link>
  );
}
