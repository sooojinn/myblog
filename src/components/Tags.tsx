"use client";

import { useSearchParams } from "next/navigation";
import AsideItemTitle from "./AsideItemTitle";
import Tag from "./Tag";

export default function Tags({ tags }: { tags: string[] }) {
  const params = useSearchParams();
  const currentTag = params.get("tag");
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
