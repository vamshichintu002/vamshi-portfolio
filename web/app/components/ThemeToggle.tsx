"use client";

import * as React from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        className="rounded-full border border-zinc-200/70 bg-white/40 px-3 py-2 text-sm font-semibold text-zinc-900 backdrop-blur transition dark:border-zinc-700/70 dark:bg-zinc-900/30 dark:text-zinc-100"
        aria-label="Toggle theme"
        type="button"
      >
        Theme
      </button>
    );
  }

  const resolved = theme === "system" ? systemTheme : theme;
  const isDark = resolved === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full border border-zinc-200/70 bg-white/40 px-3 py-2 text-sm font-semibold text-zinc-900 backdrop-blur transition hover:bg-white/60 dark:border-zinc-700/70 dark:bg-zinc-900/30 dark:text-zinc-100 dark:hover:bg-zinc-900/50"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
