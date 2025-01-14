import { PostMetaData } from "@/config/types";
import PostDate from "./PostDate";
import { capitalizeFirstLetter } from "@/lib/utilis";
import Link from "next/link";

export default function PostHeader({ title, date, category }: PostMetaData) {
  return (
    <>
      <header className="flex flex-col justify-center items-center mt-[50px] mb-[30px]">
        <h1 className="text-center text-[1.5rem] font-bold mb-6 break-keep">
          {title}
        </h1>
        <Link href={`/posts/${category}`} className="text-main font-bold mb-3">
          {capitalizeFirstLetter(category)}
        </Link>
        <PostDate>{date}</PostDate>
      </header>
      <hr className="mb-[2em]" />
    </>
  );
}
