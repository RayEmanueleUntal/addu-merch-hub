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
      <section className="pt-32 pb-16 bg-gray-50/50 border-b border-gray-100">
        <div className="mx-auto w-300 px-30">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight uppercase italic">
            About{" "}
            <span className="text-[#08228d] not-italic">AdDU Merch Hub</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl leading-relaxed">
            A centralized, student-focused platform designed to showcase the
            vibrant creative culture of Ateneo de Davao University
            organizations.
          </p>
        </div>
      </section>

      <div className="mx-auto w-300 px-30 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT COLUMN: Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* What is AdDU Merch Hub */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Info className="text-[#08228d]" /> What is AdDU Merch Hub?
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
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
                <div className="bg-blue-50 border-l-4 border-[#08228d] p-4 mt-6">
                  <p className="text-sm text-[#08228d] font-medium">
                    <strong>Note:</strong> This platform is not an online
                    shopping website. It serves as an informational hub to help
                    students discover merchandise and learn where to purchase
                    them on campus.
                  </p>
                </div>
              </div>
            </section>

            {/* Why this project exists */}
            <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Target className="text-[#08228d]" /> Why this project exists
              </h3>
              <p className="text-gray-600 mb-6 italic">
                Merchandise promotion is often scattered across individual
                Facebook posts, making it:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Scattered platforms",
                  "Hard to compare",
                  "Time-consuming",
                ].map((item) => (
                  <li
                    key={item}
                    className="bg-gray-50 p-4 rounded-xl text-sm font-bold text-gray-700 border border-gray-100"
                  >
                    ✕ {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-gray-600 leading-relaxed">
                AdDU Merch Hub was created to solve this problem by providing a
                single, unified platform for browsing AdDU merchandise.
              </p>
            </section>

            {/* Project Scope */}
            <section className="bg-gray-900 text-white p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Code2 className="text-blue-400" /> Project Scope & Limitations
              </h3>
              <p className="text-gray-400 mb-8">
                Developed as part of an Application Development course using
                modern web technologies:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {["Next.js", "Tailwind CSS", "Static JSON", "Vercel"].map(
                  (tech) => (
                    <div
                      key={tech}
                      className="p-3 border border-gray-700 rounded-lg text-sm font-mono text-blue-300"
                    >
                      {tech}
                    </div>
                  ),
                )}
              </div>
              <p className="mt-8 text-sm text-gray-500 italic">
                At this stage, the project does not include a backend or
                database. Data is static for demonstration purposes.
              </p>
            </section>
          </div>

          {/* RIGHT COLUMN: Quick Lists / Sticky Side */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              {/* Capabilities */}
              <div className="border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-green-500" /> What you
                  can do
                </h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• View featured merchandise</li>
                  <li>• Browse by organization</li>
                  <li>• Search using keywords</li>
                  <li>• Check price & location</li>
                </ul>
              </div>

              {/* Future possibilities */}
              <div className="border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Rocket size={18} className="text-purple-500" /> Future
                  possibilities
                </h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>• Real-time inventory</li>
                  <li>• Seller dashboards</li>
                  <li>• User notifications</li>
                  <li>• Official AdDU integration</li>
                </ul>
              </div>

              {/* Disclaimer */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2 text-sm uppercase">
                  <AlertTriangle size={16} /> Disclaimer
                </h4>
                <p className="text-xs text-amber-700 leading-relaxed">
                  All names and images are for educational purposes. This
                  project is not an official Ateneo de Davao University
                  platform.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Developer Footer */}
        <footer className="mt-20 pt-10 border-t border-gray-100 text-center">
          <p className="text-gray-500 text-sm">
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
