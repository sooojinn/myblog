import PostHeader from "@/components/PostHeader";
import { getPostMetaData } from "/lib/posts";
import { getPostMainText } from "/lib/posts";
import PostBody from "@/components/PostBody";
import TableOfContent from "@/components/TableOfContent";
import { getPostPaths } from "/lib/posts";

export async function generateStaticParams() {
  const postPaths = getPostPaths();
  return postPaths.map((postPath) => {
    const [category, slug] = postPath.split("/").slice(-2);
    return { category, slug };
  });
}

export default async function PostDetail({ params: { category, slug } }) {
  const postMetaData = await getPostMetaData(category, slug);
  const postMainText = await getPostMainText(category, slug);

  return (
    <section>
      <PostHeader data={postMetaData} />
      <TableOfContent data={postMainText} />
      <PostBody data={postMainText} />
    </section>
  );
}
