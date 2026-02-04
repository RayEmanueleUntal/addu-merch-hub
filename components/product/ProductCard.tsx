import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      key={product.id}
      className="group flex flex-col w-full bg-white rounded-2xl p-3 transition-all duration-300 hover:bg-gray-50 border border-transparent hover:border-gray-100"
    >
      {/* Image container */}
      <div className="relative w-full h-72 rounded-xl overflow-hidden bg-gray-100">
        <Image
          // If the product is featured and has at least two images, use the second image. Else, use the first
          src={
            product.featured && product.images.length > 1
              ? product.images[1]
              : product.images[0]
          }
          alt={product.name ?? ""}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Badge for featured products */}
        {product.featured && product.stockStatus === "in-stock" && (
          <div className="absolute top-2 left-2 bg-blue-400 backdrop-blue-md px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-700">
            Featured
          </div>
        )}
        {/* Overlay div if product is not in-stock */}
        {product.stockStatus === "out-of-stock" && (
          <div className="absolute inset-0 bg-white opacity-40"></div>
        )}
      </div>

      {/* Product Name / Text and Price */}
      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 group-hover:text-[#08228d] transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm font-medium">
          ₱{Number(product.price).toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
