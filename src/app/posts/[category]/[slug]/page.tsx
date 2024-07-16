import PostHeader from "@/components/PostHeader";
import { getPostMetaData, getPostMainText, getPostPaths } from "@/lib/posts";
import PostBody from "@/components/PostBody";
import TableOfContent from "@/components/TableOfContent";
import { serialize } from "next-mdx-remote/serialize";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import { Plugin } from "unified";
import { Options } from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

// 타입 정의
interface PostDetailProps {
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

const PostDetail = async ({ params }: PostDetailProps) => {
  const { category, slug } = params;
  const postMetaData = await getPostMetaData(category, slug);
  const postMainText = await getPostMainText(category, slug);
  const mdxSource = await serialize(postMainText, {
    mdxOptions: {
      remarkPlugins: [remarkBreaks],
      rehypePlugins: [
        [
          // 라이브러리간 타입 정의 불일치 문제로 타입 검사 우회
          rehypePrettyCode as unknown as Plugin<[Options?]>,
          { theme: "dark-plus" },
        ],
        rehypeSlug,
      ],
    },
  });

  return (
    <section style={{ position: "relative", height: "100%" }}>
      <PostHeader data={postMetaData} />
      <TableOfContent content={postMainText} />
      <PostBody content={mdxSource} />
    </section>
  );
};

export default PostDetail;
