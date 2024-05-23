"use client";

import Link from "next/link";
import styles from "@/styles/Header.module.css";
import { BLOG_NAME } from "@/config/const";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname().split("/");
  const currentPage = pathname[1];
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h1>{BLOG_NAME}</h1>
        </Link>
        <div className={styles.icons}>
          <Link href="https://github.com/sooojinn">
            <Image src="/github_icon.png" alt="GitHub" width={30} height={30} />
          </Link>
          <ThemeToggle />
        </div>
        <nav className={styles.nav}>
          <Link
            href="/about"
            className={currentPage === "about" ? styles.active : ""}
          >
            about
          </Link>
          <Link
            href="/posts"
            className={currentPage === "posts" ? styles.active : ""}
          >
            post
          </Link>
        </nav>
      </header>
      <hr />
    </>
  );
}
