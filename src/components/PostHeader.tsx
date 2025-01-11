import { PostMetaData } from "@/config/types";
import PostDate from "./PostDate";

export default function PostHeader({ title, date }: PostMetaData) {
  return (
    <>
      <header className="flex flex-col gap-5 justify-center items-center mt-[50px] mb-[30px]">
        <h1 className="text-[1.5rem] font-bold">{title}</h1>
        <PostDate>{date}</PostDate>
      </header>
      <hr className="mb-[2em]" />
    </>
  );
}
