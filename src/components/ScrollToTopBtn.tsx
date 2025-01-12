import React from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

export default function ScrollToTopButton() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={handleScrollToTop}
      className="w-8 h-8 flex justify-center items-center rounded-full border border-gray-300 dark:border-gray-700 shadow-md hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      <HiOutlineArrowUp className="text-gray-600 dark:text-white" />
    </div>
  );
}
