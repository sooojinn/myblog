"use client";

import Link from "next/link";
import styles from "@/styles/CategoryList.module.css";
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
    <nav className={styles.nav}>
      <h3 className={styles.header}>📁 Categories</h3>
      {renderedCategoryList.map((renderedCategory) => {
        const category = renderedCategory.split(" ")[0].toLowerCase();
        return (
          <Link
            href={`/posts/${category === "all" ? "" : category}`}
            className={currentCategory === category ? styles.active : ""}
            key={category}
          >
            {renderedCategory}
          </Link>
        );
      })}
    </nav>
  );
}
