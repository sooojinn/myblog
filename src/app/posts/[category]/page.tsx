import PostListPage from "@/components/post-list/PostListPage";
import { getCategoryList } from "@/lib/posts";

interface Props {
  params: {
    category: string;
  };
}

export function generateStaticParams() {
  const categories = getCategoryList();
  return categories.map((category) => ({ category }));
}

export default async function CategoryPage({ params: { category } }: Props) {
  return <PostListPage category={category} />;
}
