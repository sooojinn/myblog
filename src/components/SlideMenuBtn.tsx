"use client";

import { useState } from "react";
import { BsList } from "react-icons/bs";
import BackgroundShadow from "./BackgroundShadow";
import SlideMenu from "./SlideMenu";
import { CategoryAndLabel } from "@/config/types";

export default function SlideMenuBtn({
  categoryList,
  tags,
}: {
  categoryList: CategoryAndLabel[];
  tags: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsAnimating(true);
    }, 10);
  };

  const closeMenu = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <>
      <BsList size={20} className="hover:cursor-pointer" onClick={openMenu} />
      {isOpen && (
        <BackgroundShadow onClose={closeMenu} isVisible={isAnimating}>
          <div
            className={`fixed inset-y-0 left-0 bg-white border-r z-50 transition-transform duration-300 ease-in-out ${
              isAnimating ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <SlideMenu categoryList={categoryList} tags={tags} />
          </div>
        </BackgroundShadow>
      )}
    </>
  );
}
