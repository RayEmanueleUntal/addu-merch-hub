export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 px-6 py-4">
      <div className="flex items-center gap-6">
        {/* Title / Logo */}
        <div className="text-xl font-bold cursor-pointer whitespace-nowrap">
          AdDU Merch Hub
        </div>

        {/* Organizations */}
        <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
          Organizations
        </a>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Merch Products"
          className="ml-4 flex-1 max-w-md rounded-md border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* About */}
        <a
          href="/about"
          className="ml-auto text-gray-700 hover:text-gray-900 font-medium"
        >
          About
        </a>
      </div>
    </header>
  );
}
