import { Dispatch, SetStateAction } from "react";
import { PageNumBtn } from "./PageNumBtn";

export function PageNumBtns({
  pageNumList,
  totalPage,
  currentPage,
  setCurrentPage,
}: {
  pageNumList: number[];
  totalPage: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}) {
  const handlePrevBtn = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
  };

  const handleNextBtn = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  };

  const handlePageChange = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  const isPrevBtnDisabled = currentPage <= 1;
  const isNextBtnDisabled = currentPage >= totalPage;

  return (
    <div className="flex justify-center items-center gap-4 mt-5 mb-[70px]">
      <div onClick={handlePrevBtn}>
        <PageNumBtn disabled={isPrevBtnDisabled}>이전</PageNumBtn>
      </div>
      {pageNumList.map((pageNum) => (
        <div onClick={() => handlePageChange(pageNum)}>
          <PageNumBtn isSelected={currentPage === pageNum}>
            {pageNum}
          </PageNumBtn>
        </div>
      ))}
      <div onClick={handleNextBtn}>
        <PageNumBtn disabled={isNextBtnDisabled}>다음</PageNumBtn>
      </div>
    </div>
  );
}
