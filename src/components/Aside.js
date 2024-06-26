import CategoryList from "./CategoryList";
import { getRenderedCategoryList } from "/lib/posts";
import styles from "@/styles/Aside.module.css";

export default async function Aside() {
  const renderedCategoryList = await getRenderedCategoryList();

  return (
    <aside className={styles.aside}>
      <hr />
      <CategoryList renderedCategoryList={renderedCategoryList} />
    </aside>
  );
}
