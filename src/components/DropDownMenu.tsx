"use client";

import { useDropdown } from "@/hook/useDropDown";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface Props {
  currentCategory?: string;
  renderedCategoryList: string[];
}

export default function DropDownMenu({
  currentCategory,
  renderedCategoryList,
}: Props) {
  const { isOpen, toggle, close, dropDownRef } = useDropdown();

  const selectedCategory = renderedCategoryList.find((renderedCategory) => {
    const category = renderedCategory.split(" ")[0].toLowerCase();

    return (currentCategory || "all") === category;
  });

  const params = useSearchParams();
  const tag = params.get("tag");

  return (
    <div
      className="bg-background w-[130px] border border-gray-300 dark:border-gray-800 rounded-[4px] p-[7px] mt-5 mb-2.5 relative"
      onClick={toggle}
      onBlur={close}
      ref={dropDownRef}
    >
      <div className="flex justify-between items-center cursor-pointer">
        {tag ? <span className="text-gray-400">선택</span> : selectedCategory}
        <span
          className={`${
            isOpen ? "!transform !rotate-0" : ""
          } text-[0.8rem] transform rotate-180 transition-transform duration-200 ease-in-out`}
        >
          ▴
        </span>
      </div>
      <div
        className={`${
          isOpen ? "!flex" : ""
        } hidden flex-col bg-background text-[0.9rem] p-[7px] border border-gray-300 dark:border-gray-800 rounded-bl-[4px] rounded-br-[4px] border-t-0 absolute right-[-1px] left-[-1px]`}
      >
        {renderedCategoryList.map((renderedCategory) => {
          const category = renderedCategory.split(" ")[0].toLowerCase();
          return (
            <Link
              href={`/posts/${category === "all" ? "" : category}`}
              key={category}
              className={`${
                category === (currentCategory || "all")
                  ? "bg-gray-100 dark:bg-gray-800"
                  : ""
              } hover:bg-gray-100 dark:hover:bg-gray-800 p-[4px_7px]`}
            >
              {renderedCategory}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
