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
  const paddingLeft: Record<number, string> = {
    0: "pl-[1em]",
    1: "pl-[2em]",
    2: "pl-[3em]",
  };

  return (
    <div
      className={`${paddingLeft[depth]} ${
        isActive
          ? "text-main underline lg:no-underline lg:bg-gray-100 dark:lg:bg-gray-700 lg:text-gray-700 dark:lg:text-gray-100 lg:border-l-[3px] lg:border-main"
          : "text-gray-400 hover:text-main lg:border-l-[3px] lg:border-gray-100 dark:lg:border-gray-800"
      } hover:underline hover:cursor-pointer lg:hover:no-underline lg:pr-[1em] underline-offset-4`}
    >
      {children}
    </div>
  );
}
