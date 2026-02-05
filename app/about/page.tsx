import {
  Info,
  Target,
  CheckCircle2,
  AlertTriangle,
  Code2,
  Rocket,
} from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-white pb-24">
      {/* HERO SECTION */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gray-50/50 border-b border-gray-100">
        {/* FIXED: Responsive container replaces w-300 px-30 */}
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase italic leading-none">
            About{" "}
            <span className="text-[#08228d] not-italic">AdDU Merch Hub</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed font-medium">
            A centralized, student-focused platform designed to showcase the
            vibrant creative culture of Ateneo de Davao University
            organizations.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10 py-12 md:py-20">
        {/* GRID: Stacks on mobile, Side-by-side on LG screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* LEFT COLUMN: Main Content */}
          <div className="lg:col-span-8 space-y-16 md:space-y-24">
            {/* What is AdDU Merch Hub */}
            <section>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3 uppercase italic tracking-tight">
                <Info className="text-[#08228d]" size={24} /> What is AdDU Merch
                Hub?
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg font-medium">
                <p>
                  AdDU Merch Hub is a centralized, student-focused website that
                  showcases merchandise from Ateneo de Davao University
                  organizations and offices.
                </p>
                <p>
                  Instead of browsing through multiple social media pages to
                  check available merch, students can explore everything in one
                  place — organized, searchable, and easy to navigate.
                </p>
                <div className="bg-[#08228d]/5 border-l-4 border-[#08228d] p-5 mt-8 rounded-r-2xl">
                  <p className="text-sm text-[#08228d] font-bold leading-relaxed">
                    <span className="uppercase tracking-widest block mb-1">
                      Note:
                    </span>
                    This platform is not an online shopping website. It serves
                    as an informational hub to help students discover
                    merchandise and learn where to purchase them on campus.
                  </p>
                </div>
              </div>
            </section>

            {/* Why this project exists */}
            <section>
              <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3 uppercase italic tracking-tight">
                <Target className="text-[#08228d]" size={24} /> Why this project
                exists
              </h3>
              <p className="text-gray-600 mb-8 italic font-medium">
                Merchandise promotion is often scattered across individual
                Facebook posts, making it:
              </p>
              {/* FIXED: 2 columns on mobile, 3 on desktop */}
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {[
                  "Scattered platforms",
                  "Hard to compare",
                  "Time-consuming",
                ].map((item) => (
                  <li
                    key={item}
                    className="bg-gray-50 p-4 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest text-gray-500 border border-gray-100 flex items-center gap-2"
                  >
                    <span className="text-red-400">✕</span> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-gray-600 leading-relaxed font-medium">
                AdDU Merch Hub was created to solve this problem by providing a
                single, unified platform for browsing AdDU merchandise.
              </p>
            </section>

            {/* Project Scope */}
            <section className="bg-gray-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-gray-200">
              <h3 className="text-xl md:text-2xl font-black mb-6 flex items-center gap-3 uppercase italic tracking-tight">
                <Code2 className="text-blue-400" size={24} /> Project Scope
              </h3>
              <p className="text-gray-400 mb-10 font-medium">
                Developed as part of an Application Development course using
                modern web technologies:
              </p>
              {/* FIXED: 2x2 grid on small mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                {["Next.js", "Tailwind CSS", "Static JSON", "Vercel"].map(
                  (tech) => (
                    <div
                      key={tech}
                      className="p-3 border border-gray-800 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest text-blue-300 bg-white/5"
                    >
                      {tech}
                    </div>
                  ),
                )}
              </div>
              <p className="mt-10 text-xs text-gray-500 italic font-medium">
                At this stage, the project does not include a backend or
                database. Data is static for demonstration purposes.
              </p>
            </section>
          </div>

          {/* RIGHT COLUMN: Quick Lists / Sticky Side */}
          <div className="lg:col-span-4">
            {/* Only sticky on desktop (lg) */}
            <div className="lg:sticky lg:top-32 space-y-6 md:space-y-8">
              {/* Capabilities */}
              <div className="border border-gray-100 rounded-[2rem] p-8 shadow-sm bg-white">
                <h4 className="font-black text-gray-900 mb-6 flex items-center gap-2 uppercase italic tracking-tight">
                  <CheckCircle2 size={18} className="text-green-500" /> What you
                  can do
                </h4>
                <ul className="space-y-4 text-sm text-gray-600 font-bold uppercase tracking-tight">
                  <li className="flex items-start gap-2">
                    {" "}
                    View featured merch
                  </li>
                  <li className="flex items-start gap-2">
                    {" "}
                    Browse by organization
                  </li>
                  <li className="flex items-start gap-2">
                    {" "}
                    Search using keywords
                  </li>
                  <li className="flex items-start gap-2">
                    {" "}
                    Check price & location
                  </li>
                </ul>
              </div>

              {/* Future possibilities */}
              <div className="border border-gray-100 rounded-[2rem] p-8 shadow-sm bg-white">
                <h4 className="font-black text-gray-900 mb-6 flex items-center gap-2 uppercase italic tracking-tight">
                  <Rocket size={18} className="text-purple-500" /> Future ideas
                </h4>
                <ul className="space-y-4 text-sm text-gray-600 font-bold uppercase tracking-tight">
                  <li className="">• Real-time inventory</li>
                  <li className="">• Seller dashboards</li>
                  <li className="">• User notifications</li>
                  <li className="">• Official integration</li>
                </ul>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 rounded-[2rem] p-8 border border-amber-100">
                <h4 className="font-black text-amber-800 mb-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em]">
                  <AlertTriangle size={16} /> Disclaimer
                </h4>
                <p className="text-xs text-amber-700/80 leading-relaxed font-bold italic">
                  All names and images are for educational purposes. This
                  project is not an official Ateneo de Davao University
                  platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Footer */}
        <footer className="mt-24 pt-12 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.1em] leading-loose">
            Developed by a student of{" "}
            <b className="text-gray-900">Ateneo de Davao University</b>
            <br />
            as part of an academic requirement for Application Development.
          </p>
        </footer>
      </div>
    </main>
  );
}
