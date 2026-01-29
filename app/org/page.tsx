import Link from "next/link";
import { getOrgs } from "@/lib/getOrgs";
import Image from "next/image";
import OrgCard from "@/components/org/OrgCard";

export default async function Orgs() {
  const orgs = await getOrgs();
  return (
    <main className="px-6 py-10 mt-20">
      <h2 className="text-2xl font-semibold text-center mb-8">
        AdDU Organizations
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {orgs.map((org) => (
          <OrgCard org={org} key={org.id}></OrgCard>
        ))}
      </div>
    </main>
  );
}
