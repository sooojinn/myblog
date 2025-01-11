import CategoryList from "./CategoryList";
import { getAllTags, getRenderedCategoryList } from "@/lib/posts";
import Tags from "./Tags";
import { Suspense } from "react";

export default async function Aside() {
  const renderedCategoryList = await getRenderedCategoryList();
  const allTags = await getAllTags();

  return (
    <aside className="flex h-full">
      <hr className="w-[1px] h-full" />
      <div className="flex flex-col gap-5 pt-[4vh] pl-[3vw]">
        <Suspense fallback={<div>페이지 로딩 중...</div>}>
          <CategoryList renderedCategoryList={renderedCategoryList} />
          <Tags tags={allTags} />
        </Suspense>
      </div>
    </aside>
  );
}
