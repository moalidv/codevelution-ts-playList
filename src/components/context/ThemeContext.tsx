// first we should create the context then we can use it.

// import { createContext } from "react";
// import { theme } from "./theme";

// type ThemeContextProviderProps = {
//   children: React.ReactNode;
// };
// export const ThemeContext = createContext(theme);

// export const ThemeContextProvider = ({
//   children,
// }: ThemeContextProviderProps) => {
//   return (
//     <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
//   );
// };

import { createContext } from "react";
import { theme } from "./theme";

export const ThemeContext = createContext(theme);

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
