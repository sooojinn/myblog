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
      rootMargin: "-45% 0px -45% 0px",
      threshold: 0.5,
    };

    let lastIntersectingId = null;

    const observerCallback = (entries) => {
      let anyIntersecting = false;

      const intersectingEntries = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target.id);

      console.log(intersectingEntries);

      if (intersectingEntries.length > 0) {
        setCurrentHeading(intersectingEntries[0]);
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anyIntersecting = true;
          lastIntersectingId = entry.target.id;
        }
      });

      if (!anyIntersecting && lastIntersectingId) {
        setCurrentHeading(lastIntersectingId);
      }
    };

    const observerInstance = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const tags = document.querySelectorAll("h1, h2, h3");
    tags.forEach((tag) => observerInstance.observe(tag));

    return () => {
      tags.forEach((tag) => observerInstance.unobserve(tag));
    };
  }, []);

  const handleClick = (e, headingLink) => {
    e.preventDefault(); // 기본 링크 동작 막기

    const element = document.getElementById(headingLink);
    if (element) {
      // 요소가 뷰포트 중앙에 오도록 스크롤
      const topOffset = window.innerHeight / 2 - element.offsetHeight / 2;
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className={styles.aside}>
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
                <Link
                  onClick={(e) => handleClick(e, headingLink)}
                  href={`#${headingLink}`}
                >
                  {headingText}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
