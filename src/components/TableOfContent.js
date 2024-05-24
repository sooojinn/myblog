"use client";

import Link from "next/link";
import GithubSlugger from "github-slugger";
import styles from "@/styles/TableOfContent.module.css";

export default function TableOfContent({ data }) {
  const slugger = new GithubSlugger();
  const headings = data.split("\n").filter((str) => str.match(/^#+/));

  return (
    <div className={styles.toc}>
      <ul>
        {headings.map((str) => {
          const level = str.match(/^#+/)[0].length - 1;
          const headingText = str.replace(/^#+/, "");
          const headingLink = slugger.slug(headingText.trim());
          return (
            <li
              key={headingLink}
              className={`${styles[`toc-level-${level}`]} ${styles.heading}`}
            >
              <Link href={`#${headingLink}`}>{headingText}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
