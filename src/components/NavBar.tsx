"use client";
import { navList } from "@/config/const";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname().split("/");
  const currentPage = pathname[1];
  return (
    <nav className="hidden md:flex items-center gap-5">
      {navList.map(({ label, href }) => (
        <Link
          href={href}
          key={href}
          className={`text-center h-8 sm:h-10
          ${
            `/${currentPage}` === href
              ? "border-b-[3px] border-solid border-main"
              : ""
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
