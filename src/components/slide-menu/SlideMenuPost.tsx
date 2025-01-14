import { SlideMenuItem } from "./SlideMenuItem";
import { SlideMenuDropDown } from "./SlideMenuDropDown";
import { useStaticData } from "../context/StaticDataProvider";

export function SlideMenuPost() {
  const { categoryLabelList: categoryList } = useStaticData();
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
