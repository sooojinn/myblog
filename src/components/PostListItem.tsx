import { PostListItemProps } from "@/config/types";
import Link from "next/link";
import Tag from "./Tag";
import PostDate from "./PostDate";

export function PostListItem({
  url,
  slug,
  title,
  tags,
  date,
  previewContent,
}: PostListItemProps) {
  return (
    <Link
      href={url}
      className="w-full flex flex-col gap-2 p-[1rem_0.7rem] rounded-[5px] hover:bg-gray-100 dark:hover:bg-gray-800"
      key={slug}
    >
      <h2 className="break-keep leading-[1.5] text-[1.2rem] font-bold">
        {title}
      </h2>
      <p className="line-clamp-3 text-gray-400 text-[0.85rem]">
        {previewContent}
      </p>
      <PostDate>{date}</PostDate>
      <div className="flex gap-1.5">
        {tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </div>
    </Link>
  );
}
