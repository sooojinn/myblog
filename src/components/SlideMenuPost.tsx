import { CategoryAndLabel } from "@/config/types";
import { SlideMenuItem } from "./SlideMenuItem";
import { SlideMenuDropDown } from "./SlideMenuDropDown";

export function SlideMenuPost({
  categoryList,
}: {
  categoryList: CategoryAndLabel[];
}) {
  return (
    <SlideMenuDropDown title="Post">
      {...categoryList.map(({ label, category }) => (
        <SlideMenuItem
          href={`/posts${category ? `/${category}` : ""}`}
          key={category}
          className="pl-12 font-medium"
          hideArrow
        >
          {label}
        </SlideMenuItem>
      ))}
    </SlideMenuDropDown>
  );
}
