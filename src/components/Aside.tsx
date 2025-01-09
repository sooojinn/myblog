import CategoryList from "./CategoryList";
import { getRenderedCategoryList } from "@/lib/posts";

export default async function Aside() {
  const renderedCategoryList = await getRenderedCategoryList();

  return (
    <aside className="md:flex md:h-full hidden">
      <hr className="w-[1px] h-full" />
      <CategoryList renderedCategoryList={renderedCategoryList} />
    </aside>
  );
}
