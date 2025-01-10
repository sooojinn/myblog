"use client";

import { useState } from "react";
import { PostListItemProps } from "@/config/types";
import { PostListCategory } from "./PostListCategory";
import { PostListItem } from "./PostListItem";
import { PageNumBtns } from "./PageNumBtns";

const POST_PER_PAGE = 5;

interface Props {
  renderedCategory: string;
  postList: PostListItemProps[];
}

export default function PostList({ renderedCategory, postList }: Props) {
  const totalPage = Math.ceil(postList.length / POST_PER_PAGE);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const startIndex = POST_PER_PAGE * (currentPage - 1);
  const endIndex = startIndex + POST_PER_PAGE;
  const postListInPage = postList.slice(startIndex, endIndex);

  const pageNumList = Array.from({ length: totalPage }, (_, i) => i + 1);

  return (
    <section>
      <div className="hidden md:block">
        <PostListCategory category={renderedCategory} />
      </div>
      <div className="pb-[4vh]">
        {postListInPage.map((post) => (
          <PostListItem {...post} />
        ))}
      </div>
      {totalPage ? (
        <PageNumBtns
          pageNumList={pageNumList}
          totalPage={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <p className="text-center">등록된 포스트가 없습니다.</p>
      )}
    </section>
  );
}
