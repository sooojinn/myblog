import PostListPage from "@/components/PostListPage";

export default async function Posts({
  searchParams,
}: {
  searchParams: { [tag: string]: string };
}) {
  const tag = searchParams["tag"];
  return (
    <>
      <PostListPage tag={tag} />
    </>
  );
}
