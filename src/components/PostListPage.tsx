import PostList from "./PostList";
import {
  getRenderedCategoryList,
  getSortedPostList,
  renderCategory,
} from "@/lib/posts";
import DropDownMenu from "./DropDownMenu";
import Aside from "./Aside";

interface Props {
  category?: string;
}

const PostListPage = async ({ category }: Props) => {
  const postList = await getSortedPostList(category);
  const renderedCategory = await renderCategory(category);
  const renderedCategoryList = await getRenderedCategoryList();

  return (
    <section className="md:grid md:grid-cols-[auto_200px]">
      <div className="md:pr-5">
        <DropDownMenu
          currentCategory={category}
          renderedCategoryList={renderedCategoryList}
        />
        <PostList renderedCategory={renderedCategory} postList={postList} />
      </div>
      <Aside />
    </section>
  );
};

export default PostListPage;
