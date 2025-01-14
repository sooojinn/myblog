"use client";

import { useRouter } from "next/navigation";

export default function Tag({
  children,
  isActive,
}: {
  children: string;
  isActive?: boolean;
}) {
  const router = useRouter();

  const handleTagClick = (e: React.MouseEvent<HTMLDivElement>, tag: string) => {
    e.preventDefault();
    router.push(`/posts?tag=${tag}`);
  };
  return (
    <div
      onClick={(e) => handleTagClick(e, children)}
      className={`rounded-md text-[0.9em] px-2 py-1.5 hover:cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out ${
        isActive
          ? "bg-main text-white dark:text-black"
          : "bg-gray-200 dark:bg-gray-700 text-main"
      }`}
    >
      #{children}
    </div>
  );
}
