import { SlideMenuDropDown } from "./SlideMenuDropDown";
import Tag from "./Tag";

export function SlideMenuTags({ tags }: { tags: string[] }) {
  return (
    <SlideMenuDropDown title="Tags">
      <div className="flex flex-wrap gap-2 p-3 pl-8">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </SlideMenuDropDown>
  );
}
