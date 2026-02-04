"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { searchProducts } from "@/lib/search";
import { Product } from "@/types/product";
import { Search } from "lucide-react";
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
    <>
      <form onSubmit={onSubmit} className="flex gap-2">
        <div className="flex w-full">
          <Search></Search>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search merch..."
            className="w-full ml-5 focus:outline-none"
          ></input>
        </div>
      </form>

      <div>
        {results && (
          <ul className="mt-2 pt-2">
            {results.map((product) => (
              <li
                key={product.id}
                className="py-1 hover:bg-gray-500/10 cursor-pointer"
              >
                <Link
                  href={`/product/${product.slug}`}
                  key={product.id}
                  className=""
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
