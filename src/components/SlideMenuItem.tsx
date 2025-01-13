import Link from "next/link";
import { ReactNode } from "react";
import { FiArrowRight } from "react-icons/fi";

export function SlideMenuItem({
  children,
  href,
  className,
  onClick,
  hideArrow,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  hideArrow?: boolean;
}) {
  const baseClassName =
    "w-full flex justify-between items-center border-y px-8 py-4 font-semibold border-gray-200 dark:border-gray-800 hover:bg-gray-200 dark:hover:bg-gray-800";
  return href ? (
    <Link href={href} className={`${baseClassName} block ${className}`}>
      {children} {hideArrow || <FiArrowRight size={20} strokeWidth={1.5} />}
    </Link>
  ) : (
    <div className={`${baseClassName} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
}
