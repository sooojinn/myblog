import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { getSortedPostList } from "/lib/posts";

export default function Home() {
  const allPostsData = getSortedPostList();

  return (
    <>
      <section>
        <ul className={styles.postList}>
          <h1>Post</h1>
          {allPostsData.map((post) => (
            <Link href={post.url} className={styles.post} key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.date}</p>
              <p>{post.desc}</p>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
}
