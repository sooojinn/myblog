"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/PostListPage.module.css";

const POST_PER_PAGE = 2;

export default function PostList({ postList }) {
  const totalPage = Math.ceil(postList.length / POST_PER_PAGE);

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = POST_PER_PAGE * (currentPage - 1);
  const endIndex = startIndex + POST_PER_PAGE;
  const postListInPage = postList.slice(startIndex, endIndex);

  console.log(currentPage);

  const pageNumList = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumList.push(i);
  }

  const handlePrevBtn = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
  };

  const handleNextBtn = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  };

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
  };

  const isPrevBtnDisabled = currentPage <= 1;
  const isNextBtnDisabled = currentPage >= totalPage;

  return (
    <section>
      <ul className={styles.postList}>
        {postListInPage.map((post) => (
          <Link href={post.url} className={styles.post} key={post.slug}>
            <h2>{post.title}</h2>
            <p className={styles.desc}>{post.desc}</p>
            <p className={styles.date}>{post.date}</p>
          </Link>
        ))}
      </ul>
      <div className={styles.pageBtns}>
        <button
          className={styles.pageBtn}
          onClick={handlePrevBtn}
          disabled={isPrevBtnDisabled}
        >
          이전
        </button>
        {pageNumList.map((pageNum) => (
          <button
            className={
              styles.pageBtn +
              (currentPage === pageNum ? ` ${styles.selected}` : "")
            }
            onClick={() => handlePageChange(pageNum)}
            key={pageNum}
          >
            {pageNum}
          </button>
        ))}
        <button
          className={styles.pageBtn}
          onClick={handleNextBtn}
          disabled={isNextBtnDisabled}
        >
          다음
        </button>
      </div>
    </section>
  );
}
