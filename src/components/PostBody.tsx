import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "@/styles/PostBody.module.css";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

export default function PostBody({ content }: { content: string }) {
  return (
    <article className="prose dark:prose-invert">
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkBreaks],
            rehypePlugins: [
              [
                // @ts-ignore
                rehypePrettyCode,
                { theme: "dark-plus" },
              ],
              rehypeSlug,
            ],
          },
        }}
      />
    </article>
  );
}
