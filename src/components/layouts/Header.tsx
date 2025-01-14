import Link from "next/link";
import { BLOG_NAME, GITHUB_LINK } from "@/config/const";
import ThemeToggle from "./theme/ThemeToggle";
import NavBar from "./NavBar";
import { Suspense } from "react";
import SlideMenuBtn from "../slide-menu/SlideMenuBtn";
import FullWidthHrLine from "../common/FullWidthHrLine";

export default async function Header() {
  return (
    <div className="w-full flex flex-col px-[5vw] z-20">
      <header className="bg-inherit px-inherit h-[60px] md:h-[100px] flex justify-between items-center">
        <div className="md:hidden">
          <Suspense>
            <SlideMenuBtn />
          </Suspense>
        </div>
        <Link href="/">
          <h1 className="text-[1.3rem] md:text-[1.7rem] font-bold">
            {BLOG_NAME}
          </h1>
        </Link>
        <div className="flex justify-center items-center gap-4">
          <Link href={GITHUB_LINK} className="hidden md:block">
            <div className='w-7 h-7 bg-contain bg-[url("/github_icon.png")] dark:bg-[url("/github_icon_white.png")] '></div>
          </Link>
          <ThemeToggle />
        </div>
      </header>
      <NavBar />
      <FullWidthHrLine />
    </div>
  );
}
