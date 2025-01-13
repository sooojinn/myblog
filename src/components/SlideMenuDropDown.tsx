import { ReactNode, useState } from "react";
import { SlideMenuItem } from "./SlideMenuItem";
import { FiChevronDown } from "react-icons/fi";

export function SlideMenuDropDown({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <SlideMenuItem onClick={() => setIsOpen(!isOpen)}>
        {title}
        <FiChevronDown
          size={20}
          className={`transform transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </SlideMenuItem>
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}
