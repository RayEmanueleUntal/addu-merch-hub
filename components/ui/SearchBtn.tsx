"use client";

import { Search, X } from "lucide-react";

interface SearchBtnProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function SearchBtn({ isOpen, onToggle }: SearchBtnProps) {
  return (
    <button
      onClick={onToggle}
      className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
      aria-label="Toggle Search"
    >
      {isOpen ? <X size={20} /> : <Search size={20} />}
    </button>
  );
}
