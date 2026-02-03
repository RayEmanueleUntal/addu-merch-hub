"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { searchProducts } from "@/lib/search";
import { Product } from "@/types/product";
import { Search } from "lucide-react";

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
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(async () => {
      const found = await searchProducts(query);
      setResults(found);
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
