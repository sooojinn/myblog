import Link from "next/link";
import { getCategoryList } from "/lib/posts";
import styles from "@/styles/CategoryList.module.css";
import { CountPosts } from "/lib/posts";
import { changeCategoryName } from "../../lib/posts";

export default function CategoryList({ currentCategory }) {
  const categoryList = getCategoryList();
  categoryList.unshift("");

  return (
    <nav className={styles.nav}>
      {categoryList.map((category) => {
        return (
          <Link
            href={`/posts/${category}`}
            className={currentCategory == category ? styles.active : ""}
            key={category}
          >
            {changeCategoryName(category || "all")} ({CountPosts(category)})
          </Link>
        );
      })}
    </nav>
  );
}
