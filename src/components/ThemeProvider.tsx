"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

interface Props extends ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children, ...props }: Props) {
  return (
    <NextThemesProvider enableSystem={true} attribute="class" {...props}>
      {children}
    </NextThemesProvider>
  );
}
