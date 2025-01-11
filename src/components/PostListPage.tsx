import PostList from "./PostList";
import {
  getRenderedCategoryList,
  getSortedPostList,
  renderCategory,
} from "@/lib/posts";
import DropDownMenu from "./DropDownMenu";
import Aside from "./Aside";
import { PostListTitle } from "./PostListTitle";
import { Suspense } from "react";

interface Props {
  category?: string;
  tag?: string;
}

const PostListPage = async ({ category, tag }: Props) => {
  const postList = await getSortedPostList(category, tag);
  const renderedCategory = await renderCategory(category);
  const renderedCategoryList = await getRenderedCategoryList();
  const postListTitle = tag ? `#${tag}` : renderedCategory;

  return (
    <section className="flex-grow md:grid md:grid-cols-[auto_200px]">
      <div className="md:pr-5">
        <div className="md:hidden">
          <Suspense fallback={<div>페이지 로딩 중...</div>}>
            <DropDownMenu
              currentCategory={category}
              renderedCategoryList={renderedCategoryList}
            />
          </Suspense>
        </div>
        <div className="hidden md:block">
          <PostListTitle>{postListTitle}</PostListTitle>
        </div>
        <PostList postList={postList} />
      </div>
      <div className="hidden md:block">
        <Aside />
      </div>
    </section>
  );
};

export default PostListPage;
