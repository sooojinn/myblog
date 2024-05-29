"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider enableSystem={true} attribute="class" {...props}>
      {children}
    </NextThemesProvider>
  );
}
