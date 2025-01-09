export function PageNumBtn({
  children,
  isSelected,
  disabled,
}: {
  children: number | string;
  isSelected?: boolean;
  disabled?: boolean;
}) {
  return (
    <button
      className={`bg-transparent border-none cursor-pointer text-[var(--page-btn-color)] hover:text-main disabled:text-[var(--page-btn-color)] disabled:cursor-default ${
        isSelected ? "text-main" : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
