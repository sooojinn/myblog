import PostHeader from "@/components/PostHeader";
import { getPostMetaData } from "/lib/posts";
import { getPostMainText } from "/lib/posts";
import PostBody from "@/components/PostBody";

export default function PostDetail({ params: { slug } }) {
  const postMetaData = getPostMetaData(slug);
  const postMainText = getPostMainText(slug);

  return (
    <>
      <PostHeader data={postMetaData} />
      <PostBody data={postMainText} />
    </>
  );
}
