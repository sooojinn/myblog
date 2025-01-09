import { PostMetaData } from "@/config/types";


export default function PostHeader({ title, desc, date }: PostMetaData) {
  return (
    <>
      <header className="text-center mt-[50px] mb-[30px]">
        <h1 className="font-bold">{title}</h1>
        <p className="my-2.5 text-gray-400">{desc}</p>
        <p className="font-[0.9rem] text-gray-400">{date}</p>
      </header>
      <hr className="mb-[2em]" />
    </>
  );
}
