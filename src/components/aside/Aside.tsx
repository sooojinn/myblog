import CategoryList from "./CategoryList";
import Tags from "./Tags";
import { Suspense } from "react";

export default async function Aside() {
  return (
    <aside className="flex h-full">
      <hr className="w-[1px] h-full" />
      <div className="flex flex-col gap-5 py-[4vh] pl-[3vw]">
        <Suspense fallback={<div>페이지 로딩 중...</div>}>
          <CategoryList />
          <Tags />
        </Suspense>
      </div>
    </aside>
  );
}
