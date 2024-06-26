import PostList from "./PostList";
import { getSortedPostList } from "/lib/posts";
import { getRenderedCategoryList } from "/lib/posts";
import DropDownMenu from "./DropDownMenu";
import Aside from "./Aside";
import styles from "@/styles/PostListPage.module.css";

export default function PostListPage({ category }) {
  const postList = getSortedPostList(category);
  const renderedCategoryList = getRenderedCategoryList();

  return (
    <section className={styles.section}>
      <DropDownMenu
        currentCategory={category}
        renderedCategoryList={renderedCategoryList}
      />
      <PostList postList={postList} />
      <Aside />
    </section>
  );
}
