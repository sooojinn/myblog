"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import styles from "@/styles/ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return mounted && theme === "dark" ? (
    <button className={styles.toggleBtn} onClick={() => setTheme("light")}>
      <HiOutlineSun size={20} />
    </button>
  ) : (
    <button className={styles.toggleBtn} onClick={() => setTheme("dark")}>
      <HiOutlineMoon size={20} />
    </button>
  );
}
