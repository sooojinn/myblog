import CategoryList from "./CategoryList";
import { getAllTags } from "@/lib/posts";
import Tags from "./Tags";
import { Suspense } from "react";
import { CategoryAndLabel } from "@/config/types";

export default async function Aside({
  categoryList,
}: {
  categoryList: CategoryAndLabel[];
}) {
  const allTags = await getAllTags();

  return (
    <aside className="flex h-full">
      <hr className="w-[1px] h-full" />
      <div className="flex flex-col gap-5 pt-[4vh] pl-[3vw]">
        <Suspense fallback={<div>페이지 로딩 중...</div>}>
          <CategoryList categoryList={categoryList} />
          <Tags tags={allTags} />
        </Suspense>
      </div>
    </aside>
  );
}
