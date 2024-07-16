import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "@/styles/PostBody.module.css";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

interface Props {
  content: string;
}

const PostBody = ({ content }: Props) => {
  return (
    <article className={styles.article}>
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkBreaks],
            rehypePlugins: [
              [
                // @ts-ignore
                rehypePrettyCode,
                {
                  theme: { dark: "github-dark-dimmed", light: "github-light" },
                },
              ],
              rehypeSlug,
            ],
          },
        }}
      />
    </article>
  );
};

export default PostBody;
