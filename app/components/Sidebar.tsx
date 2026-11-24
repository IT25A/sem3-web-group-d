"use client";

import { useState, type SVGProps, type JSX } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HomeIcon, DumbbellIcon, BookIcon, CalendarWeekIcon, HistoryIcon, TargetIcon, UserIcon, WorkoutIcon, CogIcon, LogoutIcon } from "./icons";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLink = (href: string, label: string, type: string, Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={`${type} ${active ? "border-transparent bg-blue-950/4 dark:bg-blue-900" : ""}`}
      >
        <Icon className="icon" />
        {label}
      </Link>
    );
  };

  return (
    <>
      <button
        className="fixed top-4 left-4 z-30 flex flex-col gap-1.5 p-2 rounded-md bg-white dark:bg-gray-800 shadow md:hidden cursor-pointer"
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
          fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-20 flex flex-col
          transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        <div className="flex justify-center p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="py-4 text-2xl font-semibold text-gray-900 dark:text-white">RepLog</h2>
        </div>
        <nav className="flex flex-col justify-between p-4 flex-1">
            <div className="flex flex-col gap-2">
                {navLink("/", "Dashboard", "btn-sidebar", HomeIcon)}
                {navLink("/pages/exercises", "Exercises", "btn-sidebar", DumbbellIcon)}
                {navLink("/pages/workouts", "Workouts", "btn-sidebar", WorkoutIcon)}
                {navLink("/pages/log", "Logs", "btn-sidebar", BookIcon)}
                {navLink("/pages/history", "History", "btn-sidebar", HistoryIcon)}
                {navLink("/pages/week", "Week", "btn-sidebar", CalendarWeekIcon)}
                {navLink("/pages/goals", "Goals", "btn-sidebar", TargetIcon)}
            </div>
            <div className="flex gap-2">
                {navLink("/pages/profile", "", "btn-sidebar btn-sidebar-footer", UserIcon)}
                {navLink("", "", "btn-sidebar btn-sidebar-footer", CogIcon)} {/* TODO Settings Page */}
                {navLink("", "", "btn-sidebar btn-sidebar-footer", LogoutIcon)} {/* TODO Log In/Sign Up Page */}
            </div>
        </nav>
      </aside>
    </>
  );
}