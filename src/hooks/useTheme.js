import { useContext } from "react";
import { ThemeContext } from "../patterns/provider/ThemeProvider";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return { theme, setTheme };
};
