import { getPostMetaData, getPostMainText, getPostPaths } from "@/lib/posts";
import PostHeader from "@/components/PostHeader";
import PostBody from "@/components/PostBody";
import TableOfContent from "@/components/TableOfContent";

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const postPaths = await getPostPaths();
  return postPaths.map((postPath: string) => {
    const [category, slug] = postPath.split("/").slice(-2);
    return { category, slug };
  });
}

export default async function PostDetail({ params }: Props) {
  const { category, slug } = params;
  const postMetaData = await getPostMetaData(category, slug);
  const postMainText = getPostMainText(category, slug);

  return (
    <section style={{ position: "relative", height: "100%" }}>
      <PostHeader {...postMetaData} />
      <TableOfContent content={postMainText} />
      <PostBody content={postMainText} />
    </section>
  );
}
