import Link from 'next/link';

function Navbar() {
  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/main" className="text-white text-xl font-bold">
                ZORO UK
              </Link>
            </div>
            <div className="">
              <div className="flex">
                <Link
                  href="/main"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="m-auto mt-2 max-w-7xl border-t-0.5 border-gray-500" />
    </nav>
  );
}

export default Navbar;
