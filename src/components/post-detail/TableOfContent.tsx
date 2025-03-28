"use client";
import { PostMainData } from "@/config/types";
import { extractHeadings, parseMarkdownHeading } from "@/lib/utilis";
import useScrollSpy from "@/hook/useScrollSpy";
import TableOfContentItem from "./TableOfContentItem";
import ScrollToTopButton from "./ScrollToTopBtn";

export default function TableOfContent({ content }: PostMainData) {
  const headings = extractHeadings(content);

  const currentHeading = useScrollSpy();

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    headingLink: string
  ) => {
    const element = document.getElementById(headingLink);
    if (element) {
      // 요소가 뷰포트 중앙에 오도록 스크롤
      const topOffset = window.innerHeight / 2 - element.offsetHeight / 2;
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - topOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className="lg:absolute lg:left-full lg:translate-x-10 h-full">
      <div className="lg:sticky lg:top-[50px] lg:min-w-[250px] text-[0.8rem]">
        <h3 className="font-semibold text-[1.1rem]">On This Page</h3>
        <div className="mt-3 mb-[30px] lg:mb-4 leading-[2em]">
          {headings.map((heading, index) => {
            const { depth, headingLink, headingText } =
              parseMarkdownHeading(heading);
            const isActive = currentHeading === headingLink;

            return (
              <div key={index} onClick={(e) => handleClick(e, headingLink)}>
                <TableOfContentItem isActive={isActive} depth={depth}>
                  {headingText}
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
