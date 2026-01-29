import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <main>
      {products.map((product) => (
        <ProductCard product={product} key={product.id}></ProductCard>
      ))}
    </main>
  );
}
