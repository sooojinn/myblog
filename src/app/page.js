import Link from "next/link";
import { getSortedPostsData } from "/lib/posts.js";
import styles from "@/styles/Home.module.css";

export default function Home() {
  const allPostsData = getSortedPostsData();

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
