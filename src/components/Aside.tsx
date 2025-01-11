import CategoryList from "./CategoryList";
import { getRenderedCategoryList } from "@/lib/posts";
import Tags from "./Tags";

export default async function Aside() {
  const renderedCategoryList = await getRenderedCategoryList();

  return (
    <aside className="flex h-full">
      <hr className="w-[1px] h-full" />
      <div className="flex flex-col gap-5 pt-[4vh] pl-[3vw]">
        <CategoryList renderedCategoryList={renderedCategoryList} />
        <Tags />
      </div>
    </aside>
  );
}
