"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="bg-gray-100 dark:bg-gray-700 border-none rounded-md w-7 h-7 flex justify-center items-center cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <HiOutlineSun size={20} />
      ) : (
        <HiOutlineMoon size={20} />
      )}
    </button>
  );
}
