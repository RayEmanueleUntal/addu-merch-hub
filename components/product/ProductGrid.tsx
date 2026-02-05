import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <main>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {products.map((product) => (
          <ProductCard product={product} key={product.id}></ProductCard>
        ))}
      </div>
    </main>
  );
}
