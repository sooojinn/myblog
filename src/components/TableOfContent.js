"use client";

import Link from "next/link";
import GithubSlugger from "github-slugger";
import styles from "@/styles/TableOfContent.module.css";
import { useEffect, useState } from "react";

export default function TableOfContent({ data }) {
  const slugger = new GithubSlugger();
  const headings = data
    .split("\n")
    .filter((str) => str.match(/^(#{1,3})\s.*$/));
  const [currentHeading, setCurrentHeading] = useState();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20px 0px -350px 0px",
      threshold: 1,
    };

    let lastIntersectingId = null;

    const observerCallback = (entries) => {
      let anyIntersecting = false;

      entries.forEach((entry) => {
        const targetId = entry.target.id;

        if (entry.isIntersecting) {
          lastIntersectingId = targetId;
          anyIntersecting = true;
          setCurrentHeading(targetId);
        }
      });

      if (!anyIntersecting && lastIntersectingId) {
        setCurrentHeading(lastIntersectingId);
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const tags = document.querySelectorAll("h1, h2, h3");
    tags.forEach((tag) => observer.observe(tag));

    return () => {
      Object.values(tags).forEach((tag) => {
        observer.unobserve(tag);
      });
    };
  }, []);

  return (
    <div className={styles.toc}>
      <h3>On This Page</h3>
      <ul className={styles.headings}>
        {headings.map((str) => {
          const level = str.match(/^#+/)[0].length - 1;
          const headingText = str.replace(/^#+/, "");
          const headingLink = slugger.slug(headingText.trim());
          return (
            <li
              key={headingLink}
              className={`${styles[`toc-level-${level}`]} ${
                currentHeading === headingLink ? styles.current : ""
              } ${styles.heading}`}
            >
              <Link href={`#${headingLink}`}>{headingText}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
