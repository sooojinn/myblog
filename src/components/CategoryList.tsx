"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  renderedCategoryList: string[];
}

export default function CategoryList({ renderedCategoryList }: Props) {
  const pathname = usePathname();
  const pathParameters = pathname.split("/");
  let currentCategory = pathParameters[2];

  if (pathname === "/posts") {
    currentCategory = "all";
  }

  return (
    <nav className="md:flex md:flex-col md:justify-start md:items-start md:gap-[3px] md:pt-[4vh] md:pl-[3vw] hidden">
      <h3 className="mb-[5px] font-bold">📁 Categories</h3>
      {renderedCategoryList.map((renderedCategory) => {
        const category = renderedCategory.split(" ")[0].toLowerCase();
        return (
          <Link
            href={`/posts/${category === "all" ? "" : category}`}
            className={`${
              currentCategory === category ? "!bg-main text-white" : ""
            } p-[0.3em] rounded-[3px] hover:bg-gray-100 dark:hover:bg-gray-800
            `}
            key={category}
          >
            {renderedCategory}
          </Link>
        );
      })}
    </nav>
  );
}
