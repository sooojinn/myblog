export function PostListCategory({ category }: { category: string }) {
  return (
    <h2 className="text-[1.3rem] font-semibold inline-block my-[2rem] mx-[0.7rem] mb-[0.8rem] border-b-[3px] border-solid border-main leading-[1.5]">
      {category}
    </h2>
  );
}
