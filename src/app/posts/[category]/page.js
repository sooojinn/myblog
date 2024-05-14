import PostListPage from "@/components/PostListPage";

export default function CategoryPage({ params: { category } }) {
  return <PostListPage category={category} />;
}
