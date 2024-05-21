import PostList from "./PostList";
import { getSortedPostList } from "/lib/posts";
import { getRenderedCategoryList } from "/lib/posts";
import DropDownMenu from "./DropDownMenu";

export default function PostListPage({ category }) {
  const postList = getSortedPostList(category);
  const renderedCategoryList = getRenderedCategoryList();

  return (
    <section>
      <DropDownMenu
        currentCategory={category}
        renderedCategoryList={renderedCategoryList}
      />
      <PostList postList={postList} />
    </section>
  );
}
