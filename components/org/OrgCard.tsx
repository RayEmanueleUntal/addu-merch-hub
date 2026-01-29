import { Org } from "@/types/org";
import Link from "next/link";
import Image from "next/image";

export default function OrgCard({ org }: { org: Org }) {
  return (
    <Link
      href={`/org/${org.slug}`}
      key={org.id}
      className="flex flex-col items-center text-center"
    >
      {/* Logo container */}
      <div className="relative w-32 h-32 rounded-xl bg-white shadow-md overflow-hidden transition hover:scale-105 hover:shadow-lg">
        <Image
          src={org.logo}
          alt={org.name ?? ""}
          fill
          className="object-cover"
        />
      </div>

      {/* Org name */}
      <p className="mt-3 text-sm font-medium">{org.name}</p>
    </Link>
  );
}
