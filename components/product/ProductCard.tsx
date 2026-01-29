import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
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
