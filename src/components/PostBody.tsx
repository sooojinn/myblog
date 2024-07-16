import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import styles from "./PostBody.module.css";

interface PostBodyProps {
  content: MDXRemoteSerializeResult;
}

const PostBody = ({ content }: PostBodyProps) => {
  return (
    <article className={styles.article}>
      <MDXRemote {...content} />
    </article>
  );
};

export default PostBody;
