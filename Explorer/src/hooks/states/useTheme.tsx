import { create } from "zustand";

type Theme = "light" | "dark";

type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const getThemeFromStorage = () => {
  const theme = localStorage.getItem("theme") ?? "";
  if (["light", "dark"].includes(theme)) {
    return localStorage.getItem("theme") as Theme;
  }
  return "light";
};

export const useTheme = create<ThemeState>((set) => ({
  theme: getThemeFromStorage(),
  setTheme: (theme: Theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));
