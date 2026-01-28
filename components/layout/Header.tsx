import { Search } from "lucide-react";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white px-6 py-3 shadow-sm">
      <div className="relative flex items-center">
        {/* LEFT: Logo + Organizations */}
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="text-xl font-bold text-[#08228d] cursor-pointer whitespace-nowrap"
          >
            ADDU MERCH HUB
          </Link>

          <Link
            href="/org"
            className="text-gray-700 hover:text-gray-900 font-semibold"
          >
            ORGANIZATIONS
          </Link>
        </div>

        {/* CENTER: Search Bar */}
        <div className="absolute left-1/2 -translate-x-1/2 w-full max-w-md">
          {/* <div className="relative">
            <input
              type="text"
              placeholder="Search merch products"
              className="w-full rounded-full border border-gray-300 py-2 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F3590]"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-[#08228d] text-sm text-white hover:bg-[#242a75] px-2 py-2 cursor-pointer">
              <Search size={16}></Search>
            </button>
          </div> */}
          <SearchBar></SearchBar>
        </div>

        {/* RIGHT: About */}
        <div className="ml-auto">
          <a
            href="/about"
            className="text-gray-700 hover:text-gray-900 font-semibold"
          >
            About
          </a>
        </div>
      </div>
    </header>
  );
}
