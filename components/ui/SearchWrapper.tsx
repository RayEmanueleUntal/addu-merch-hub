"use client";

import SearchBtn from "./SearchBtn";

interface SearchWrapperProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function SearchWrapper({
  isOpen,
  onToggle,
}: SearchWrapperProps) {
  return <SearchBtn isOpen={isOpen} onToggle={onToggle} />;
}
