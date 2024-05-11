import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <nav className={styles.header}>
      <h1>Soojin</h1>
      <div className={styles.menu}>
        <Link href="/about">about</Link>
        <Link href="/">post</Link>
      </div>
    </nav>
  );
}
