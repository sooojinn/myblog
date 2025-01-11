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

  const handleTagClick = (tag: string) => {
    router.push(`/posts?tag=${tag}`);
  };
  return (
    <div
      onClick={() => handleTagClick(children)}
      className={`rounded-md text-[0.9em] px-1.5 py-1 hover:cursor-pointer ${
        isActive ? "bg-main text-white" : "bg-gray-200 text-main"
      }`}
    >
      #{children}
    </div>
  );
}
