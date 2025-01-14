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
      className={`bg-transparent border-none cursor-pointer text-gray-500 hover:text-main disabled:hover:text-gray-500 disabled:cursor-default ${
        isSelected ? "text-main" : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
