"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { searchProducts } from "@/lib/search";
import { Product } from "@/types/product";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SearchBoxProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function SearchBar({ isOpen, onToggle }: SearchBoxProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const router = useRouter();

  // Clear input when isOpen becomes false
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  // For search suggestions with a bit of delay
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      const found = query ? await searchProducts(query) : [];
      setResults(found.slice(0, 8)); // Max of 8 search results
      console.log(results);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  // On Submit
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;

    onToggle();
    router.push(`/search?q=${encodeURIComponent(query)}`);
  }

  return (
    <div className="w-full">
      <form
        onSubmit={onSubmit}
        className="flex items-center rounded-xl px-4 py-2"
      >
        <Search size={18} className="text-shadow-gray-700"></Search>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search merch..."
          className="w-full ml-3 bg-transparent focus:outline-none text-base py-1 text-shadow-gray-700"
        ></input>
      </form>

      {results.length > 0 && (
        <ul className="mt-4 overflow-hidden max-h-[60vh] overflow-y-auto">
          {results.map((product) => (
            <li key={product.id} className="">
              <Link
                href={`/product/${product.slug}`}
                key={product.id}
                className="flex items-center p-4 hover:bg-gray-50/5 active:bg-gray-50/20 transition-colors"
              >
                <div className="w-10 h-10 relative rounded-md overflow-hidden bg-gray-100 mr-3">
                  <Image
                    src={
                      product.featured && product.images.length > 1
                        ? product.images[1]
                        : product.images[0]
                    }
                    alt=""
                    fill
                    className="object-cover"
                  ></Image>
                </div>
                <span className="text-sm font-medium text-gray-800">
                  {product.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
