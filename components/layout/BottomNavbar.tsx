import Link from "next/link";
import { House, Search, Info } from "lucide-react";

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-8 left-0 w-full flex justify-center items-center gap-6 md:gap-20 lg:gap-40 ">
      {/* Home Button */}
      <Link
        href="/"
        id="homeLink"
        className="w-12 h-12 bg-white rounded-full flex justify-center items-center shadow-md"
      >
        <House strokeWidth={1.5}></House>
      </Link>

      {/* Search Button */}
      <button
        id="searchBtn"
        className="w-15 h-15 bg-white rounded-full flex justify-center items-center shadow-md cursor-pointer"
      >
        <Search></Search>
      </button>

      {/* About Button */}
      <Link
        href="/about"
        id="aboutLink"
        className="w-12 h-12 bg-white rounded-full flex justify-center items-center shadow-md"
      >
        <Info></Info>
      </Link>
    </div>
  );
}
