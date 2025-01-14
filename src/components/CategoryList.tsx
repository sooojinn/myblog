"use client";

import Link from "next/link";
import AsideItemTitle from "./AsideItemTitle";
import { CategoryAndLabel } from "@/config/types";
import useCurrentCategoryPath from "@/hook/useCurrentPath";

interface Props {
  categoryList: CategoryAndLabel[];
}

export default function CategoryList({ categoryList }: Props) {
  const { currentCategory, currentTag } = useCurrentCategoryPath();

  return (
    <nav className="flex flex-col justify-start items-start">
      <AsideItemTitle>📁 Categories</AsideItemTitle>
      <div className="flex flex-col gap-[3px]">
        {categoryList.map(({ label, category }) => {
          return (
            <Link
              href={`/posts/${category}`}
              className={`${
                currentCategory === category && !currentTag
                  ? "!bg-main text-white"
                  : ""
              } w-fit p-[0.3em] rounded-[3px] hover:bg-gray-100 dark:hover:bg-gray-800
          `}
              key={label}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
