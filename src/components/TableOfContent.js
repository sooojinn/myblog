"use client";

import Link from "next/link";
import GithubSlugger from "github-slugger";
import styles from "@/styles/TableOfContent.module.css";
import { useEffect, useState } from "react";

export default function TableOfContent({ data }) {
  const slugger = new GithubSlugger();
  const headings = data.split("\n").filter((str) => str.match(/^#+/));
  const [currentHeading, setCurrentHeading] = useState();

  useEffect(() => {
    const observerOptions = {
      root: null, // 기본값, 뷰포트 기준
      rootMargin: "-20px 0px", // root의 범위를 확장하거나 축소할 수 있다
      threshold: 1, // 타겟이 40% 이상 보여질 때 실행
    };

    // 마지막으로 교차한 요소의 ID를 저장하는 변수를 초기화합니다.
    let lastIntersectingId = null;

    const observerCallback = (entries) => {
      // 교차 상태가 변했는지 여부를 추적하는 변수를 초기화합니다.
      let anyIntersecting = false;

      entries.forEach((entry) => {
        const targetId = entry.target.id;

        if (entry.isIntersecting) {
          // 요소가 교차하고 있을 때의 처리
          lastIntersectingId = targetId; // 마지막으로 교차한 요소의 ID를 업데이트
          anyIntersecting = true; // 교차하는 요소가 있음을 표시
          setCurrentHeading(targetId);
        }
      });

      // 교차하는 요소가 없을 때 lastIntersectingId를 currentHeading으로 설정
      if (!anyIntersecting && lastIntersectingId) {
        setCurrentHeading(lastIntersectingId);
      }
    };

    // new IntersectionObserver()를 통해 생성한 인스턴스로 관측자를 초기화
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // 관측할 타겟들(섹션들)을 지정
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
