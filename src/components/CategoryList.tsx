"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import AsideItemTitle from "./AsideItemTitle";

interface Props {
  categoryList: string[];
}

export default function CategoryList({ categoryList }: Props) {
  const pathname = usePathname();
  const pathParameters = pathname.split("/");
  let currentCategory = pathParameters[2];

  const params = useSearchParams();
  const tagParam = params.get("tag");

  if (pathname === "/posts" && !tagParam) {
    currentCategory = "all";
  }

  return (
    <nav className="flex flex-col justify-start items-start">
      <AsideItemTitle>📁 Categories</AsideItemTitle>
      <div className="flex flex-col gap-[3px]">
        {categoryList.map((categoryWithCount) => {
          const category = categoryWithCount.split(" ")[0].toLowerCase();
          return (
            <Link
              href={`/posts/${category === "all" ? "" : category}`}
              className={`${
                currentCategory === category ? "!bg-main text-white" : ""
              } w-fit p-[0.3em] rounded-[3px] hover:bg-gray-100 dark:hover:bg-gray-800
          `}
              key={category}
            >
              {categoryWithCount}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
