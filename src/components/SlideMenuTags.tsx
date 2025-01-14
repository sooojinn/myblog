import useCurrentPath from "@/hook/useCurrentPath";
import { SlideMenuDropDown } from "./SlideMenuDropDown";
import Tag from "./Tag";

export function SlideMenuTags({ tags }: { tags: string[] }) {
  const { currentTag } = useCurrentPath();
  return (
    <SlideMenuDropDown title="Tags">
      <div className="flex flex-wrap gap-2 p-3 pl-8 border-b-[1.5px] border-gray-200 dark:border-gray-800">
        {tags.map((tag) => (
          <Tag key={tag} isActive={currentTag === tag}>
            {tag}
          </Tag>
        ))}
      </div>
    </SlideMenuDropDown>
  );
}
