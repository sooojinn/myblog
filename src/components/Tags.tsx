import { getSortedPostList } from "@/lib/posts";
import AsideItemTitle from "./AsideItemTitle";
import Tag from "./Tag";

export default async function Tags() {
  const allPostMetaData = await getSortedPostList();
  const allTags = allPostMetaData
    .map((el) => el.tags)
    .flat()
    .filter((el) => el !== undefined);
  const uniqueTags = [...new Set(allTags)];
  return (
    <div>
      <AsideItemTitle>🏷️ Tags</AsideItemTitle>
      <div className="flex gap-1 flex-wrap">
        {uniqueTags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </div>
  );
}
