interface TableOfContentItemProps {
  depth: number;
  isActive: boolean;
  children: string;
}

export default function TableOfContentItem({
  depth,
  isActive,
  children,
}: TableOfContentItemProps) {
  return (
    <div
      className={`${depth === 1 ? "pl-[2em]" : "pl-[1em]"} ${
        isActive
          ? "text-main underline lg:no-underline lg:bg-gray-100 dark:lg:bg-gray-700 lg:text-gray-700 dark:lg:text-gray-100 lg:border-l-[3px] lg:border-main"
          : "text-gray-400 hover:text-main"
      } hover:underline hover:cursor-pointer lg:hover:no-underline underline-offset-4`}
    >
      {children}
    </div>
  );
}
