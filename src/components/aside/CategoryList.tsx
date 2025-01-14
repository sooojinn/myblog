"use client";

import Link from "next/link";
import AsideItemTitle from "./AsideItemTitle";
import useCurrentCategoryPath from "@/hook/useCurrentPath";
import { useStaticData } from "../context/StaticDataProvider";

export default function CategoryList() {
  const { currentCategory, currentTag } = useCurrentCategoryPath();
  const { categoryLabelList: categoryList } = useStaticData();

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
