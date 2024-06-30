"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label: string;
};

function NavLink({ href, label }: Props) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 mx-2 rounded-md text-sm font-medium ${path === href ? "bg-gray-700 text-white" : ""}`}
    >
      {label}
    </Link>
  );
}

export default NavLink;
