"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import AsideItemTitle from "./AsideItemTitle";

interface Props {
  renderedCategoryList: string[];
}

export default function CategoryList({ renderedCategoryList }: Props) {
  const pathname = usePathname();
  const params = useSearchParams();
  const pathParameters = pathname.split("/");
  const tagParam = params.get("tag");
  let currentCategory = pathParameters[2];

  if (pathname === "/posts" && !tagParam) {
    currentCategory = "all";
  }

  return (
    <nav className="flex flex-col justify-start items-start">
      <AsideItemTitle>📁 Categories</AsideItemTitle>
      <div className="flex flex-col gap-[3px]">
        {renderedCategoryList.map((renderedCategory) => {
          const category = renderedCategory.split(" ")[0].toLowerCase();
          return (
            <Link
              href={`/posts/${category === "all" ? "" : category}`}
              className={`${
                currentCategory === category ? "!bg-main text-white" : ""
              } w-fit p-[0.3em] rounded-[3px] hover:bg-gray-100 dark:hover:bg-gray-800
          `}
              key={category}
            >
              {renderedCategory}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
