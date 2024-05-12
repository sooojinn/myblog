import { compileMDX } from "next-mdx-remote/rsc";

export default async function PostBody({ data }) {
  const { content } = await compileMDX({
    source: data,
    options: { parseFrontmatter: true },
    compiledSource: "",
  });

  return (
    <>
      <div>{content}</div>
    </>
  );
}
