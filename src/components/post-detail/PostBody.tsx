import { MDXRemote } from "next-mdx-remote/rsc";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { MdxComponents } from "../post/MdxComponents";

export default function PostBody({ content }: { content: string }) {
  return (
    <article className="prose dark:prose-invert max-w-none mt-[5rem] mb-[300px]">
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkBreaks],
            rehypePlugins: [
              [
                // @ts-ignore
                rehypePrettyCode,
                { theme: "slack-dark" },
              ],
              rehypeSlug,
            ],
          },
        }}
        components={MdxComponents}
      />
    </article>
  );
}
