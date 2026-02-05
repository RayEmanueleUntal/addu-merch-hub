import { Product } from "@/types/product";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      key={product.id}
      className="group flex flex-col w-full bg-white rounded-2xl p-2 md:p-3 transition-all duration-500 hover:shadow-gray-100 border border-transparent hover:border-gray-100"
    >
      {/* Image container */}
      <div className="relative w-full aspect-4/5 md:h-80 rounded-xl overflow-hidden bg-gray-100">
        <Image
          // If the product is featured and has at least two images, use the second image. Else, use the first
          src={
            product.featured && product.images.length > 1
              ? product.images[1]
              : product.images[0]
          }
          alt={product.name ?? ""}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Badge for featured products */}
        {product.featured && product.stockStatus === "in-stock" && (
          <div className="absolute top-3 left-3 bg-[#08228d] px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest text-white shadow-lg">
            Featured
          </div>
        )}
        {/* Overlay div if product is not in-stock */}
        {product.stockStatus === "out-of-stock" && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center">
            <span className="text-xs font-black uppercase tracking-widest text-gray-500 border-2 border-gray-400 px-3 py-1">
              Sold Out
            </span>
          </div>
        )}
      </div>

      {/* Product Name / Text and Price */}
      <div className="mt-5 px-1 pb-2">
        <h3 className="text-lg font-black text-gray-900 uppercase italic tracking-tight line-clamp-1 group-hover:text-[#08228d] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <p className="text-[#08228d] text-sm font-bold">
            ₱{Number(product.price).toLocaleString()}
          </p>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
