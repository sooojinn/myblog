"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/PostList.module.css";
import { PostListItem } from "@/config/types";

const POST_PER_PAGE = 5;

interface Props {
  renderedCategory: string;
  postList: PostListItem[];
}

export default function PostList({ renderedCategory, postList }: Props) {
  const totalPage = Math.ceil(postList.length / POST_PER_PAGE);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const startIndex = POST_PER_PAGE * (currentPage - 1);
  const endIndex = startIndex + POST_PER_PAGE;
  const postListInPage = postList.slice(startIndex, endIndex);

  const pageNumList = Array.from({ length: totalPage }, (_, i) => i + 1);

  const handlePrevBtn = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
  };

  const handleNextBtn = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  };

  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  const isPrevBtnDisabled = currentPage <= 1;
  const isNextBtnDisabled = currentPage >= totalPage;

  return (
    <section>
      <h2 className={styles.category}>{renderedCategory}</h2>
      <ul className={styles.postList}>
        {postListInPage.map((post) => (
          <Link href={post.url} className={styles.post} key={post.slug}>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.desc}>{post.desc}</p>
            <p className={styles.date}>{post.date}</p>
          </Link>
        ))}
      </ul>
      {totalPage ? (
        <div className={styles.pageBtns}>
          <button
            className={styles.pageBtn}
            onClick={handlePrevBtn}
            disabled={isPrevBtnDisabled}
          >
            〈
          </button>
          {pageNumList.map((pageNum) => (
            <button
              className={`${styles.pageBtn}${
                currentPage === pageNum ? ` ${styles.selected}` : ""
              }`}
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
            〉
          </button>
        </div>
      ) : (
        <p style={{ textAlign: "center" }}>등록된 포스트가 없습니다.</p>
      )}
    </section>
  );
}
