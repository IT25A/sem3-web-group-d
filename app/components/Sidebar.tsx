"use client";

import { useState } from "react";
import { HomeIcon, DumbbellIcon, BicepsIcon, CalendarIcon } from "./icons";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="fixed top-4 left-4 z-30 flex flex-col gap-1.5 p-2 rounded-md bg-white dark:bg-gray-800 shadow md:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span className={`block h-0.5 w-5 bg-gray-800 dark:bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
        <span className={`block h-0.5 w-5 bg-gray-800 dark:bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-5 bg-gray-800 dark:bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-20
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex justify-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="py-4 text-2xl font-semibold text-gray-900 dark:text-white">RepLog</h2>
        </div>
        <nav className="p-4 flex flex-col gap-2">
            <button className="btn-sidebar"><HomeIcon className="text-gray-900 dark:text-white" />Dashboard</button>
            <button className="btn-sidebar"><DumbbellIcon className="text-gray-900 dark:text-white" />Exercises</button>
            <button className="btn-sidebar"><BicepsIcon className="text-gray-900 dark:text-white" />Body parts</button>
            <button className="btn-sidebar"><CalendarIcon className="text-gray-900 dark:text-white" />Workouts</button>
        </nav>
      </aside>
    </>
  );
}