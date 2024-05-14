import Link from "next/link";
import styles from "@/styles/PostListPage.module.css";
import { getSortedPostList } from "/lib/posts";
import CategoryList from "./CategoryList";

export default function PostListPage({ category }) {
  return (
    <section className={styles.page}>
      <CategoryList currentCategory={category} />
      <PostList category={category} />
    </section>
  );
}

function PostList({ category }) {
  const postList = getSortedPostList(category);

  return (
    <section>
      <ul className={styles.postList}>
        {postList.map((post) => (
          <Link href={post.url} className={styles.post} key={post.slug}>
            <h2>{post.title}</h2>
            <p className={styles.desc}>{post.desc}</p>
            <p className={styles.date}>{post.date}</p>
          </Link>
        ))}
      </ul>
    </section>
  );
}
