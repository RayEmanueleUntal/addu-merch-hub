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

  // Focus of featured images for smaller screens
  const focalClass: Record<string, string> = {
    "left-top": "object-left-top",
    left: "object-left",
    right: "object-right",
    top: "object-top",
    bottom: "object-bottom",
    center: "object-center", // Default
  };

  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {featuredProds.map(
        (product) =>
          product.stockStatus === "in-stock" && (
            <Link
              href={`/product/${product.slug}`}
              key={product.id}
              className="relative block"
            >
              <section
                key={product.id}
                className="relative h-screen w-full snap-start snap-always overflow-hidden"
              >
                <Image
                  src={product.images[0]}
                  alt={product.name ?? ""}
                  fill
                  /* "object-cover" crops the image.
                    "object-center" is default, but you can use "md:object-center object-top" 
                    if your product's vital parts are at the top of the photo.
                  */
                  className={`object-cover ${focalClass[product.focalPoint || "center"]} transition-transform duration-700 hover:scale-105`}
                  priority
                ></Image>

                {/* TEXT OVERLAY: Makes it look intentional on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-8 md:p-20">
                  <div className="max-w-300 mx-auto w-full">
                    <h2 className="text-white text-3xl md:text-6xl font-black uppercase italic tracking-tighter">
                      {product.collection || product.name}
                    </h2>
                    <p className="text-white/80 mt-2 text-sm md:text-lg font-medium">
                      Featured Collection — Tap to view
                    </p>
                  </div>
                </div>

                {/* SCROLL INDICATOR (Only shows on first or all items) */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                  <div className="w-1 h-12 border-l border-white/50 mx-auto"></div>
                </div>
              </section>
            </Link>
          ),
      )}
    </main>
  );
}
