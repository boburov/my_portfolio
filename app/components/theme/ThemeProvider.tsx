"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Theme = "light" | "dark" | "system";
export const STORAGE_KEY = "boburov-theme";

type ThemeContextValue = {
  /** What the user chose. */
  theme: Theme;
  /** What is actually painted right now. */
  resolved: "light" | "dark";
  setTheme: (theme: Theme) => void;
  /** False until after hydration, so the toggle can avoid a mismatched first paint. */
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

const prefersDark = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const apply = (theme: Theme) => {
  const dark = theme === "dark" || (theme === "system" && prefersDark());
  document.documentElement.classList.toggle("dark", dark);
  return dark ? "dark" : "light";
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolved, setResolved] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  // Read the stored preference. The blocking script in <head> has already
  // painted the correct theme; this only syncs React state to it.
  useEffect(() => {
    let stored: Theme = "system";
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === "light" || raw === "dark" || raw === "system") stored = raw;
    } catch {
      /* private mode / storage disabled — fall back to system */
    }
    setThemeState(stored);
    setResolved(apply(stored));
    setMounted(true);
  }, []);

  // Follow the OS while the user is on "system".
  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setResolved(apply("system"));
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    setResolved(apply(next));
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* preference simply won't persist */
    }
  }, []);

  const value = useMemo(
    () => ({ theme, resolved, setTheme, mounted }),
    [theme, resolved, setTheme, mounted],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
