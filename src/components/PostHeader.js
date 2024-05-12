export default function PostHeader({ data }) {
  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.desc}</p>
      <p>{data.date}</p>
    </>
  );
}
