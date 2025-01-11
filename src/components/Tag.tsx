"use client";

import { useRouter } from "next/navigation";

export default function Tag({ children }: { children: string }) {
  const router = useRouter();

  const handleTagClick = (tag: string) => {
    router.push(`/posts?tag=${tag}`);
  };
  return (
    <div
      onClick={() => handleTagClick(children)}
      className="bg-gray-200 text-main rounded-[3px] text-[0.9em] px-1.5 py-1 hover:cursor-pointer"
    >
      #{children}
    </div>
  );
}
