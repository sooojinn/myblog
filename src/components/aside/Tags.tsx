"use client";

import AsideItemTitle from "./AsideItemTitle";
import Tag from "../post/Tag";
import useCurrentCategoryPath from "@/hook/useCurrentPath";

export default function Tags({ tags }: { tags: string[] }) {
  const { currentTag } = useCurrentCategoryPath();
  return (
    <div>
      <AsideItemTitle>🏷️ Tags</AsideItemTitle>
      <div className="flex gap-1.5 flex-wrap">
        {tags.map((tag, index) => (
          <Tag key={index} isActive={tag === currentTag}>
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
}
