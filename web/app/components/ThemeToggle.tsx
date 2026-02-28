"use client";

import * as React from "react";
import { useTheme } from "next-themes";

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 14.5C19.9 15.1 18.6 15.4 17.2 15.4C12.9 15.4 9.4 11.9 9.4 7.6C9.4 6.1 9.7 4.8 10.3 3.7C6.5 4.7 3.7 8.2 3.7 12.4C3.7 17.4 7.7 21.4 12.7 21.4C16.8 21.4 20.3 18.6 21 14.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 17.5C15.0376 17.5 17.5 15.0376 17.5 12C17.5 8.96243 15.0376 6.5 12 6.5C8.96243 6.5 6.5 8.96243 6.5 12C6.5 15.0376 8.96243 17.5 12 17.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 2.5V4.2M12 19.8V21.5M3.1 12H4.8M19.2 12H20.9M5.0 5.0L6.2 6.2M17.8 17.8L19.0 19.0M19.0 5.0L17.8 6.2M6.2 17.8L5.0 19.0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const resolved = mounted
    ? theme === "system"
      ? systemTheme
      : theme
    : undefined;
  const isDark = resolved === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="grid h-11 w-11 place-items-center rounded-full border border-zinc-200/70 bg-white/70 text-zinc-900 shadow-sm backdrop-blur transition hover:bg-white dark:border-zinc-700/70 dark:bg-zinc-900/40 dark:text-zinc-100 dark:hover:bg-zinc-900/60"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      type="button"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full border border-zinc-200/70 bg-white/60 dark:border-zinc-700/70 dark:bg-zinc-950/20">
        {isDark ? (
          <SunIcon className="h-5 w-5" />
        ) : (
          <MoonIcon className="h-5 w-5" />
        )}
      </span>
    </button>
  );
}
