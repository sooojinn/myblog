import Link from "next/link";
import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>Soojin</h1>
      </Link>
      <div className={styles.menu}>
        <Link href="/about">about</Link>
        <Link href="/posts">post</Link>
      </div>
    </header>
  );
}
