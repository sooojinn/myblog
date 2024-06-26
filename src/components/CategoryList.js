"use client";

import Link from "next/link";
import styles from "@/styles/CategoryList.module.css";
import { usePathname } from "next/navigation";

export default function CategoryList({ renderedCategoryList }) {
  const pathname = usePathname();
  const pathParameters = pathname.split("/");
  let currentCategory = pathParameters[2];

  if (pathname === "/posts") {
    currentCategory = "all";
  }

  return (
    <nav className={styles.nav}>
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
