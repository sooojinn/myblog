import PostList from "./PostList";
import { getSortedPostList } from "/lib/posts";
import { getRenderedCategoryList } from "/lib/posts";
import DropDownMenu from "./DropDownMenu";
import Aside from "./Aside";
import styles from "@/styles/PostListPage.module.css";

export default async function PostListPage({ category }) {
  const postList = await getSortedPostList(category);
  const renderedCategoryList = await getRenderedCategoryList();

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
