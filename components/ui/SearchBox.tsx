"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
              <li key={product.id} className="py-1">
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

// export default function SearchBar() {
//   const [query, setQuery] = useState("");
//   const router = useRouter();

//   function onSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     if (!query.trim()) return;

//     router.push(`/search?q=${encodeURIComponent(query)}`);
//   }

//   return (
//     <form onSubmit={onSubmit} className="flex gap-2">
//       <input
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         placeholder="Search merch..."
//         className="w-full rounded-full border border-gray-300 py-2 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F3590]"
//       />
//       <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#08228d] text-sm text-white hover:bg-[#242a75] px-2 py-2 cursor-pointer">
//         <Search size={16}></Search>
//       </button>
//     </form>
//   );
// }
