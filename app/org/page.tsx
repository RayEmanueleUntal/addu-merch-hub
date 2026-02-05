import { getOrgs } from "@/lib/getOrgs";
import OrgCard from "@/components/org/OrgCard";

export default async function Orgs() {
  const orgs = await getOrgs();
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header Section */}
      <section className="pt-32 pb-16 bg-gray-50/50 border-b border-gray-100">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase italic">
            AdDU <span className="text-[#08228d] not-italic">Orgs</span>
          </h1>
          <p className="mt-4 text-gray-500 font-medium max-w-xl">
            Browse through official organizations and student groups of Ateneo
            de Davao University.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1200px] px-6 py-20">
        {/* Adjusted grid for better spacing and responsiveness */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {orgs.map((org, index) => (
            <OrgCard
              org={org}
              key={org.id}
              index={index} // Passing index for the "01, 02" look
            />
          ))}
        </div>
      </div>
    </main>
  );
}
