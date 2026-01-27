import products from "../../../data/products.json";
import orgs from "../../../data/orgs.json";
import NotFound from "@/app/not-found";
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
  const orgId = (await params).slug;

  const org = orgs.find((_org) => _org.id == orgId);
  if (!org) return NotFound();

  // Featured Products
  const featuredProds = products.filter(
    (product) => product.orgId == orgId && product.featured,
  );

  // Non Featured Products
  const otherProds = products.filter(
    (product) => product.orgId == orgId && !product.featured,
  );
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
