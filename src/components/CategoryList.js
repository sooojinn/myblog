import Link from "next/link";
import styles from "@/styles/CategoryList.module.css";
import { changeCategoryName } from "/lib/posts";

export default function CategoryList({
  currentCategory,
  renderedCategoryList,
}) {
  return (
    <>
      <nav className={styles.nav}>
        {renderedCategoryList.map((renderedCategory) => {
          const category = renderedCategory.split(" ")[0].toLowerCase();
          return (
            <Link
              href={`/posts/${category === "all" ? "" : category}`}
              className={
                (currentCategory || "all") == category ? styles.active : ""
              }
              key={category}
            >
              {renderedCategory}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
