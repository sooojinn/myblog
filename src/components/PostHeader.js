import styles from "@/styles/PostHeader.module.css";

export default function PostHeader({ data }) {
  return (
    <>
      <header className={styles.header}>
        <h1>{data.title}</h1>
        <p className={styles.desc}>{data.desc}</p>
        <p className={styles.date}>{data.date}</p>
      </header>
      <hr className={styles.line} />
    </>
  );
}
