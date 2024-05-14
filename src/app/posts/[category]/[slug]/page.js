import PostHeader from "@/components/PostHeader";
import { getPostMetaData } from "/lib/posts";
import { getPostMainText } from "/lib/posts";
import PostBody from "@/components/PostBody";

export default function PostDetail({ params: { category, slug } }) {
  const postMetaData = getPostMetaData(category, slug);
  const postMainText = getPostMainText(category, slug);

  return (
    <section>
      <PostHeader data={postMetaData} />
      <PostBody data={postMainText} />
    </section>
  );
}