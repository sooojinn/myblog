import { CategoryAndLabel } from "@/config/types";
import Link from "next/link";
import Tag from "./Tag";
import React, { ReactNode } from "react";
import { GITHUB_LINK, navList } from "@/config/const";
import { capitalizeFirstLetter } from "@/lib/utilis";

function SlideMenuItem({ children }: { children: ReactNode }) {
  return <div className="w-full border-b px-8 py-4">{children}</div>;
}

function SlideMenuItemWrapper({ children }: { children: ReactNode }) {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <SlideMenuItem key={index}>{child}</SlideMenuItem>
      ))}
    </>
  );
}

export default function SlideMenu({
  categoryList,
  tags,
}: {
  categoryList: CategoryAndLabel[];
  tags: string[];
}) {
  const navNodeList = navList.map(({ label, href }) => (
    <Link href={href} key={href}>
      {capitalizeFirstLetter(label)}
    </Link>
  ));
  const categoryNodeList = categoryList.map(({ label, category }) => (
    <Link href={`/posts/${category}`} key={category} className="pl-5">
      {label}
    </Link>
  ));
  return (
    <div className="w-[300px] flex flex-col">
      <SlideMenuItemWrapper>
        {...navNodeList}
        {...categoryNodeList}
        <div>Tags</div>
        <div className="flex flex-wrap gap-1 p-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <Link href={GITHUB_LINK}>Github</Link>
      </SlideMenuItemWrapper>
    </div>
  );
}
