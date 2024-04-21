"use client";

import { ThemeContext } from "@/components/theme_provider";
import { useContext } from "react";

export default function View({
  children,
  font,
}: Readonly<{ children: React.ReactNode; font: string }>) {
  const { theme } = useContext(ThemeContext);
  const klass =
    `${font} ` +
    (theme === "system"
      ? `dark:mocha latte bg-base text-text`
      : `${theme} bg-base text-text`);

  return <body className={klass}>{children}</body>;
}
