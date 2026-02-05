import { Org } from "@/types/org";
import Link from "next/link";
import Image from "next/image";

export default function OrgCard({ org, index }: { org: Org; index: number }) {
  // Simple helper to format number (e.g., 01, 02)
  const displayIndex = (index + 1).toString().padStart(2, "0");

  return (
    <Link
      href={`/org/${org.slug}`}
      key={org.id}
      className="group flex flex-col items-start transition-all"
    >
      <div className="relative w-full aspect-square mb-6">
        {/* Index Number Overlay - adds an editorial touch */}
        <span className="absolute -top-4 -left-2 z-10 text-[40px] font-black text-gray-400 group-hover:text-[#08228d]/10 transition-colors duration-500 leading-none">
          {displayIndex}
        </span>

        {/* Logo container */}
        <div className="relative w-full h-full rounded-2xl bg-white border border-gray-100 shadow-sm overflow-hidden flex items-center justify-center group-hover:shadow-xl group-hover:border-[#08228d]/20 transition-all duration-500">
          <div className="relative w-full h-full">
            <Image
              src={org.logo}
              alt={org.name ?? ""}
              fill
              /* Using object-contain here because org logos usually 
                 shouldn't be cropped by object-cover 
              */
              className="object-contain group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      {/* Org name */}
      <div className="w-full">
        <h3 className="text-sm font-black text-gray-900 uppercase italic tracking-wider group-hover:text-[#08228d] transition-colors">
          {org.name}
        </h3>
        <div className="h-0.5 w-0 group-hover:w-12 bg-[#08228d] transition-all duration-500 mt-1" />
      </div>
    </Link>
  );
}
