import Link from "next/link";
import NavLink from "./nav-link";

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
                <NavLink href="/main" label="Home" />
                <NavLink href="/about" label="About" />
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
