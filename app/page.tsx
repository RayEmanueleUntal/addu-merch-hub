import products from "../data/products.json";
import Image from "next/image";

export default function Home() {
  const featuredProds = products.filter((product) => product.featured);
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {featuredProds.map((product) => (
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
      ))}
    </main>
  );
}
