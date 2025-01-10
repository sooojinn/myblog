import { PostListItemProps } from "@/config/types";
import Link from "next/link";

export function PostListItem({
  url,
  slug,
  title,
  desc,
  date,
}: PostListItemProps) {
  return (
    <Link
      href={url}
      className="block w-full p-[1rem_0.7rem] rounded-[5px] hover:bg-gray-100 dark:hover:bg-gray-800"
      key={slug}
    >
      <h2 className="break-keep leading-[1.5] text-[1.2rem] font-bold">
        {title}
      </h2>
      <p className="text-gray-400 text-[0.9rem] my-[0.4em]">{desc}</p>
      <p className="text-[0.9rem] text-gray-400">{date}</p>
    </Link>
  );
}
