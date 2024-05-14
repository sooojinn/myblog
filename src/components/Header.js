import Link from "next/link";
import styles from "@/styles/Header.module.css";
import { blogName } from "@/config/const";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>{blogName}</h1>
      </Link>
      <div className={styles.menu}>
        <Link href="/about">about</Link>
        <Link href="/posts">post</Link>
        <Link href="https://github.com/sooojinn">GitHub</Link>
      </div>
    </header>
  );
}
