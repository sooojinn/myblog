import styles from "@/styles/PostListPage.module.css";
import CategoryList from "./CategoryList";
import PostList from "./PostList";
import { getSortedPostList } from "/lib/posts";

export default function PostListPage({ category }) {
  const postList = getSortedPostList(category);

  return (
    <section className={styles.page}>
      <CategoryList currentCategory={category} />
      <PostList postList={postList} />
    </section>
  );
}
