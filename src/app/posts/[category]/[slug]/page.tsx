import { getPostMetaData, getPostMainText, getPostPaths } from "@/lib/posts";
import PostHeader from "@/components/post-detail/PostHeader";
import PostBody from "@/components/post-detail/PostBody";
import TableOfContent from "@/components/post-detail/TableOfContent";
import ScrollProgressBar from "@/components/post-detail/ScrollProgressBar";
import { BLOG_DESC, BLOG_KEYWORDS, BLOG_NAME, BLOG_URL } from "@/config/const";

interface Props {
  params: {
    category: string;
    slug: string;
  };
}

export async function generateMetadata({ params }: Props) {
  const { category, slug } = params;
  const { title, tags, keywords } = await getPostMetaData(category, slug);

  return {
    title: `${title} | ${BLOG_NAME}`,
    description: BLOG_DESC,
    keywords: [...BLOG_KEYWORDS, ...tags, ...keywords],
    openGraph: {
      title: BLOG_NAME,
      description: BLOG_DESC,
      siteName: BLOG_NAME,
      url: `${BLOG_URL}/posts/${category}/${slug}`,
      type: "website",
    },
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
  const postMainText = await getPostMainText(category, slug);

  return (
    <section className="w-full relative">
      <ScrollProgressBar />
      <PostHeader {...postMetaData} />
      <TableOfContent />
      <PostBody content={postMainText} />
    </section>
  );
}
