import Link from "next/link";
import { getOrgs } from "@/lib/getOrgs";
import Image from "next/image";

export default async function Orgs() {
  const orgs = await getOrgs();
  return (
    <main className="px-6 py-10 mt-20">
      <h2 className="text-2xl font-semibold text-center mb-8">
        AdDU Organizations
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {orgs.map((org) => (
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
        ))}
      </div>
    </main>
  );
}
