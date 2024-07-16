"use client";

import Link from "next/link";
import styles from "@/styles/DropDownMenu.module.css";
import { useEffect, useRef, useState } from "react";

interface Props {
  currentCategory?: string;
  renderedCategoryList: string[];
}

export default function DropDownMenu({
  currentCategory,
  renderedCategoryList,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLDivElement>(null);

  const handleInputClick = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      const isInside = inputRef.current?.contains(e.target as Node);
      if (!isInside) {
        setIsOpen(false);
      }
    }
    setIsOpen(false);
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const selectedCategory = renderedCategoryList.find((renderedCategory) => {
    const category = renderedCategory.split(" ")[0].toLowerCase();

    return (currentCategory || "all") === category;
  });

  return (
    <nav className={styles.nav}>
      <div
        className={styles.dropDown}
        onClick={handleInputClick}
        onBlur={handleBlur}
        ref={inputRef}
      >
        <div className={styles.dropDownLabel}>
          {selectedCategory}
          <span className={`${isOpen ? styles.opened : ""} ${styles.arrow}`}>
            ▴
          </span>
        </div>
        <div
          className={`${isOpen ? styles.opened : ""} ${styles.dropDownOptions}`}
        >
          {renderedCategoryList.map((renderedCategory) => {
            const category = renderedCategory.split(" ")[0].toLowerCase();
            return (
              <Link
                href={`/posts/${category === "all" ? "" : category}`}
                key={category}
                className={`${
                  category === (currentCategory || "all") ? styles.selected : ""
                } ${styles.option}`}
              >
                {renderedCategory}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
