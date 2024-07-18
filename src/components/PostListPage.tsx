import PostList from "./PostList";
import {
  getRenderedCategoryList,
  getSortedPostList,
  renderCategory,
} from "@/lib/posts";
import DropDownMenu from "./DropDownMenu";
import Aside from "./Aside";
import styles from "@/styles/PostListPage.module.css";

interface Props {
  category?: string;
}

const PostListPage = async ({ category }: Props) => {
  const postList = await getSortedPostList(category);
  const renderedCategory = await renderCategory(category);
  const renderedCategoryList = await getRenderedCategoryList();

  return (
    <section className={styles.section}>
      <DropDownMenu
        currentCategory={category}
        renderedCategoryList={renderedCategoryList}
      />
      <PostList renderedCategory={renderedCategory} postList={postList} />
      <Aside />
    </section>
  );
};

export default PostListPage;
