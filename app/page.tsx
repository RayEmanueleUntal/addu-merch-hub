import { getProducts } from "@/lib/getProducts";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();

  // Ensures only one featured image will be used
  const seenImages = new Set();
  const featuredProds = products.filter((product) => {
    if (!product.featured) return false;

    const mainImage = product.images[0];

    if (seenImages.has(mainImage)) {
      return false;
    }
    seenImages.add(mainImage);
    return true;
  });
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {featuredProds.map(
        (product) =>
          product.stockStatus === "in-stock" && (
            <Link
              href={`/product/${product.slug}`}
              key={product.id}
              className=""
            >
              <section
                key={product.id}
                className="relative h-screen w-full snap-start snap-always"
              >
                <Image
                  src={product.images[0]}
                  alt={product.name ?? ""}
                  fill
                  className="object-cover"
                  priority
                ></Image>
              </section>
            </Link>
          ),
      )}
    </main>
  );
}
