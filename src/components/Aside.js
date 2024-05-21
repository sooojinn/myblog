import CategoryList from "./CategoryList";
import { getRenderedCategoryList } from "/lib/posts";

export default function Aside() {
  const renderedCategoryList = getRenderedCategoryList();

  return (
    <>
      <CategoryList renderedCategoryList={renderedCategoryList} />
    </>
  );
}
