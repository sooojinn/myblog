"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    console.log("Theme changed to:", theme);
  }, [theme]);

  if (!mounted) return null;

  return (
    <button
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        console.log(theme);
      }}
    >
      Toggle Theme
    </button>
  );
}
