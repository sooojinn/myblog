"use client";

import { useEffect, useState } from "react";
import { BsList } from "react-icons/bs";
import SlideMenu from "./SlideMenu";
import { CategoryAndLabel } from "@/config/types";
import { usePathname, useSearchParams } from "next/navigation";
import BackgroundShadow from "../common/BackgroundShadow";
import Swipable from "../common/Swipable";

export default function SlideMenuBtn({
  categoryList,
  tags,
}: {
  categoryList: CategoryAndLabel[];
  tags: string[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tag = searchParams.get("tag");

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

  useEffect(() => {
    closeMenu();
  }, [pathname, tag]);

  return (
    <>
      <BsList size={20} className="hover:cursor-pointer" onClick={openMenu} />
      {isOpen && (
        <BackgroundShadow onClose={closeMenu} isVisible={isAnimating}>
          <Swipable onSwipeLeft={closeMenu}>
            <div
              className={`fixed inset-y-0 left-0 bg-gray-100 dark:bg-gray-950 border-r dark:border-gray-800 z-50 transition-transform duration-300 ease-in-out ${
                isAnimating ? "translate-x-0" : "-translate-x-full"
              }`}
              onClick={(event) => event.stopPropagation()}
            >
              <SlideMenu categoryList={categoryList} tags={tags} />
            </div>
          </Swipable>
        </BackgroundShadow>
      )}
    </>
  );
}
