"use client";

import useScrollSpy from "@/hook/useScrollSpy";
import TableOfContentItem from "./TableOfContentItem";
import ScrollToTopButton from "./ScrollToTopBtn";
import { useEffect, useState } from "react";
import { scrollToHeadingCenterById } from "@/lib/utilis";

export default function TableOfContent() {
  const [headingData, setHeadingData] = useState<
    { text: string; id: string; depth: number }[]
  >([]);

  const currentHeading = useScrollSpy();

  useEffect(() => {
    const article = document.querySelector(".prose");
    if (!article) return;

    const headingElements = article.querySelectorAll("h1, h2, h3");

    const data = Array.from(headingElements).map((heading) => {
      const tagName = heading.tagName.toLowerCase();
      const depth = Number(tagName.replace("h", "")) - 1;

      return {
        text: heading.textContent ?? "",
        id: heading.id,
        depth,
      };
    });

    setHeadingData(data);
  }, []);

  return (
    <aside className="lg:absolute lg:left-full lg:w-[calc((100vw-var(--main-width))/2)] lg:translate-x-10 h-full">
      <div className="lg:sticky lg:top-[50px] lg:min-w-[250px] lg:w-fit text-[0.8rem]">
        <h3 className="font-semibold text-[1.1rem]">On This Page</h3>
        <div className="mt-3 mb-[30px] lg:mb-4 leading-[2em]">
          {headingData.map(({ text, id, depth }, index) => {
            const isActive = currentHeading === id;

            return (
              <div key={index} onClick={() => scrollToHeadingCenterById(id)}>
                <TableOfContentItem isActive={isActive} depth={depth}>
                  {text}
                </TableOfContentItem>
              </div>
            );
          })}
        </div>
        <hr className="lg:hidden" />
        <div className="hidden lg:block ml-5">
          <ScrollToTopButton />
        </div>
      </div>
    </aside>
  );
}
