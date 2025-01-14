import PostList from "./PostList";
import { getSortedPostList, generateCategoryLabel } from "@/lib/posts";
import Aside from "../aside/Aside";
import { PostListTitle } from "./PostListTitle";

interface Props {
  category?: string;
  tag?: string;
}

const PostListPage = async ({ category, tag }: Props) => {
  const postList = await getSortedPostList(category, tag);
  const categoryLabel = await generateCategoryLabel(category);
  const postListTitle = tag ? `#${tag}` : categoryLabel;

  return (
    <section className="flex-grow md:grid md:grid-cols-[auto_200px]">
      <div className="md:pr-5">
        <PostListTitle>{postListTitle}</PostListTitle>
        <PostList postList={postList} />
      </div>
      <div className="hidden md:block">
        <Aside />
      </div>
    </section>
  );
};

export default PostListPage;
