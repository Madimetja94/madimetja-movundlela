"use client";

import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur border-b border-gray-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="font-bold text-lg">Madimetja</h1>

        <div className="flex items-center gap-6">
          <a href="#projects" className="hover:opacity-70">
            Projects
          </a>

          <a href="#contact" className="hover:opacity-70">
            Contact
          </a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
