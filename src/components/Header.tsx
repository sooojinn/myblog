"use client";

import Link from "next/link";
import { BLOG_NAME } from "@/config/const";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import FullWidthHrLine from "./FullWidthHrLine";

const navList = [
  { label: "about", href: "/about" },
  { label: "post", href: "/posts" },
];

export default function Header() {
  const pathname = usePathname().split("/");
  const currentPage = pathname[1];

  return (
    <div className="bg-inherit w-full flex flex-col px-[5vw]">
      <header className="bg-inherit px-inherit h-[70px] sm:h-[100px] flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold">{BLOG_NAME}</h1>
        </Link>
        <div className="flex justify-center items-center gap-4">
          <Link href="https://github.com/sooojinn">
            <div className='w-7 h-7 bg-contain bg-[url("/github_icon.png")] dark:bg-[url("/github_icon_white.png")] '></div>
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <nav className="flex items-center gap-5">
        {navList.map(({ label, href }) => (
          <Link
            href={href}
            key={href}
            className={`text-center h-8 sm:h-10
                ${
                  `/${currentPage}` === href
                    ? "border-b-[3px] border-solid border-main"
                    : ""
                }
              `}
          >
            {label}
          </Link>
        ))}
      </nav>
      <FullWidthHrLine />
    </div>
  );
}
