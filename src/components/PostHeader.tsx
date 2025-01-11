import { PostMetaData } from "@/config/types";
import PostDate from "./PostDate";

export default function PostHeader({ title, date, category }: PostMetaData) {
  return (
    <>
      <header className="flex flex-col justify-center items-center mt-[50px] mb-[30px]">
        <h1 className="text-center text-[1.5rem] font-bold mb-6">{title}</h1>
        <p className="text-main font-bold mb-3">{category}</p>
        <PostDate>{date}</PostDate>
      </header>
      <hr className="mb-[2em]" />
    </>
  );
}
