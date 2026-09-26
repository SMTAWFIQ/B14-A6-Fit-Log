"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const WorkoutLink = () => {
  const pathname = usePathname();

  const isActive = pathname === "/";

  return (
    <li>
      <Link
        href="/"
        className={`px-5 py-2 rounded-full font-bold ${
          isActive
            ? "bg-lime-900/40 text-lime-400"
            : "text-gray-400 hover:text-gray-200"
        }`}
      >
        Workouts
      </Link>
    </li>
  );
};

export default WorkoutLink;