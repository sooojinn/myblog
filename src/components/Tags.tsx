"use client";

import AsideItemTitle from "./AsideItemTitle";
import Tag from "./Tag";
import { useState } from "react";

export default function Tags({ tags }: { tags: string[] }) {
  const [activeTag, setActiveTag] = useState<string | null>();

  return (
    <div>
      <AsideItemTitle>🏷️ Tags</AsideItemTitle>
      <div className="flex gap-1.5 flex-wrap">
        {tags.map((tag, index) => (
          <div key={index} onClick={() => setActiveTag(tag)}>
            <Tag isActive={tag === activeTag}>{tag}</Tag>
          </div>
        ))}
      </div>
    </div>
  );
}
