import { getProducts } from "@/lib/getProducts";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();
  const featuredProds = products.filter((product) => product.featured);
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {featuredProds.map((product) => (
        <Link href={`/product/${product.slug}`} key={product.id} className="">
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
      ))}
    </main>
  );
}
