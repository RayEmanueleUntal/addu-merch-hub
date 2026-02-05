"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SearchWrapper from "@/components/ui/SearchWrapper";
import SearchBox from "@/components/ui/SearchBox";
import Image from "next/image";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();

  // Close Search box when the URL changes
  useEffect(() => {
    setIsSearchOpen(false);
  }, [pathname]);

  return (
    <>
      {/* OVERLAY*/}
      {isSearchOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsSearchOpen(false)}
        />
      )}

      {/* HEADER */}
      <header
        className={`
        fixed top-0 left-0 z-50 w-full 
        bg-white/50 backdrop-blur-md
        border-b border-gray-200/50
        transition-[height] duration-500 ease-in-out
        ${isSearchOpen ? "h-auto" : "h-16"}
      `}
      >
        <div className="relative mx-auto w-full max-w-300 px-4 md:px-10 py-3">
          {/* TOP ROW */}
          <div className="flex items-center">
            {/* LEFT */}
            <div className="flex items-center gap-4 md:gap-10">
              <Link href="/" className="shrink-0">
                {/* ADDU MERCH HUB */}
                <Image
                  src={"/images/assets/logov2.svg"}
                  alt="Logo"
                  width={70}
                  height={70}
                  className="w-14 md:w-[90px]"
                ></Image>
              </Link>

              <nav className="hidden sm:flex items-center gap-6">
                <Link
                  href="/org"
                  className="text-xs md:text-sm text-gray-700 hover:text-[#08228d] font-medium uppercase tracking-wider"
                >
                  ORGANIZATIONS
                </Link>
              </nav>
            </div>

            {/* RIGHT */}
            {/* Added ml-auto to push this entire group to the right side */}
            <div className="ml-auto flex items-center gap-4 md:gap-4">
              <SearchWrapper
                isOpen={isSearchOpen}
                onToggle={() => setIsSearchOpen((v) => !v)}
              />

              <Link
                href="/org"
                className="sm:hidden text-xs text-gray-700 font-medium"
              >
                Orgs
              </Link>

              <Link
                href="/about"
                className="text-xs md:text-sm text-gray-700 hover:text-[#08228d] font-medium"
              >
                About
              </Link>
            </div>
          </div>

          {/* SEARCH AREA */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out
            ${isSearchOpen ? " max-h-[500px] opacity-100 mt-4 pb-4" : "max-h-0 opacity-0"}
          `}
          >
            <SearchBox
              isOpen={isSearchOpen}
              onToggle={() => setIsSearchOpen((v) => !v)}
            />
          </div>
        </div>
      </header>
    </>
  );
}
