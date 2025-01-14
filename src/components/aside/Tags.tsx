"use client";

import AsideItemTitle from "./AsideItemTitle";
import Tag from "../post/Tag";
import useCurrentCategoryPath from "@/hook/useCurrentPath";
import { useStaticData } from "../context/StaticDataProvider";

export default function Tags() {
  const { currentTag } = useCurrentCategoryPath();
  const { allTags: tags } = useStaticData();
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
