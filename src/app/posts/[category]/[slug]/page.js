import PostHeader from "@/components/PostHeader";
import { getPostMetaData } from "/lib/posts";
import { getPostMainText } from "/lib/posts";
import PostBody from "@/components/PostBody";
import TableOfContent from "@/components/TableOfContent";

export default function PostDetail({ params: { category, slug } }) {
  const postMetaData = getPostMetaData(category, slug);
  const postMainText = getPostMainText(category, slug);

  return (
    <section>
      <PostHeader data={postMetaData} />
      <TableOfContent data={postMainText} />
      <PostBody data={postMainText} />
    </section>
  );
}
