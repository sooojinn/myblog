import CategoryList from "./CategoryList";
import { getRenderedCategoryList } from "/lib/posts";
import styles from "@/styles/Aside.module.css";

export default function Aside() {
  const renderedCategoryList = getRenderedCategoryList();

  return (
    <aside className={styles.aside}>
      <CategoryList renderedCategoryList={renderedCategoryList} />
    </aside>
  );
}
