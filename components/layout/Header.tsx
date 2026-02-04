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
        bg-white/30 backdrop-blur-md
        border-b border-gray-200/50
        transition-[height] duration-500 ease-in-out
        ${isSearchOpen ? "h-auto" : "h-16"}
      `}
      >
        <div className="relative mx-auto w-300 px-30 py-3">
          {/* TOP ROW */}
          <div className="flex items-center">
            {/* LEFT */}
            <div className="flex items-center gap-10">
              <Link href="/" className="text-xl font-bold text-[#08228d]">
                {/* ADDU MERCH HUB */}
                <Image
                  src={"/images/assets/logov1.svg"}
                  alt="Logo"
                  width={90}
                  height={90}
                ></Image>
              </Link>

              <Link
                href="/org"
                className="text-gray-700 hover:text-gray-900 font-bold"
              >
                ORGANIZATIONS
              </Link>
            </div>

            {/* RIGHT */}
            <div className="ml-auto flex items-center gap-4">
              <SearchWrapper
                isOpen={isSearchOpen}
                onToggle={() => setIsSearchOpen((v) => !v)}
              />

              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 font-semibold"
              >
                About
              </Link>
            </div>
          </div>

          {/* SEARCH AREA */}
          <div
            className={`
               transition-all duration-500 ease-in-out
            ${isSearchOpen ? " max-h-200 opacity-100 mt-4" : "max-h-0 opacity-0"}
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

    // <header
    //   className={`
    //     fixed top-0 left-0 z-50 w-full
    //     bg-white/30 backdrop-blur-md
    //     border-b border-gray-200/50
    //     transition-[height] duration-500 ease-in-out
    //     ${isSearchOpen ? "h-32" : "h-16"}
    //   `}
    // >
    //   <div className="relative mx-auto w-300 px-30 py-3">
    //     {/* TOP ROW */}
    //     <div className="flex items-center">
    //       {/* LEFT */}
    //       <div className="flex items-center gap-10">
    //         <Link href="/" className="text-xl font-bold text-[#08228d]">
    //           {/* ADDU MERCH HUB */}
    //           <Image
    //             src={"/images/assets/logov1.svg"}
    //             alt="Logo"
    //             width={90}
    //             height={90}
    //           ></Image>
    //         </Link>

    //         <Link
    //           href="/org"
    //           className="text-gray-700 hover:text-gray-900 font-bold"
    //         >
    //           ORGANIZATIONS
    //         </Link>
    //       </div>

    //       {/* RIGHT */}
    //       <div className="ml-auto flex items-center gap-4">
    //         <SearchWrapper
    //           isOpen={isSearchOpen}
    //           onToggle={() => setIsSearchOpen((v) => !v)}
    //         />

    //         <Link
    //           href="/about"
    //           className="text-gray-700 hover:text-gray-900 font-semibold"
    //         >
    //           About
    //         </Link>
    //       </div>
    //     </div>

    //     {/* SEARCH AREA */}
    //     <div
    //       className={`
    //         overflow-hidden transition-all duration-500 ease-in-out
    //         ${isSearchOpen ? "max-h-20 opacity-100 mt-4" : "max-h-0 opacity-0"}
    //       `}
    //     >
    //       <SearchBox
    //         isOpen={isSearchOpen}
    //         onToggle={() => setIsSearchOpen((v) => !v)}
    //       />
    //     </div>
    //   </div>

    //   {/* Adds div so user can't click elsewhere if search box is open */}
    //   {isSearchOpen && (
    //     <div
    //       className="fixed inset-0 top-32 bg-black/10 z-[-1]"
    //       onClick={() => setIsSearchOpen(false)}
    //     />
    //   )}
    // </header>
  );
}
