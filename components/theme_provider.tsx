// import { ThemeContext } from "@/components/providers/theme";
"use client";
import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";

export type Theme = "mocha" | "latte" | "macchiato" | "frappe" | "system";
export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "system",
  setTheme: (theme) => theme,
});

export function useTheme() {
  return useContext(ThemeContext);
}

// export function ThemeProvider({ children }: { children: ReactNode }) {
//   const [theme, setTheme] = useState<Theme>(
//     typeof window !== "undefined"
//       ? (localStorage.getItem("theme") as Theme)
//       : "system"
//   );

//   function changeTheme(theme: Theme) {
//     typeof window !== "undefined" ? localStorage.setItem("theme", theme) : "";
//     setTheme(theme);
//   }

//   useEffect(() => {
//     const localTheme = localStorage.getItem("theme") as Theme;
//     if (localTheme) {
//       setTheme(localTheme);
//     }
//     console.log("Theme: ", theme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

export const ThemeProvider = ({
  children,
}: Readonly<{ children: ReactNode }>) => {
  const [theme, setTheme] = useState<Theme>("system");

  function changeTheme(theme: Theme) {
    typeof window !== "undefined" ? localStorage.setItem("theme", theme) : "";
    setTheme(theme);
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as Theme;
    if (localTheme) {
      setTheme(localTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
