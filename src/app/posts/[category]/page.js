import PostListPage from "@/components/PostListPage";
import { getCategoryList } from "/lib/posts";

export async function generateStaticParams() {
  const categories = await getCategoryList();
  return categories.map((category) => ({ category }));
}

export default function CategoryPage({ params: { category } }) {
  return <PostListPage category={category} />;
}
