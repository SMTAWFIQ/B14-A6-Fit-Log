"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyPlanLink = () => {
  const pathname = usePathname();

  const isActive = pathname === "/my-plan";

  return (
    <li>
      <Link
        href="/my-plan"
        className={`px-5 py-2 rounded-full font-bold ${
          isActive
            ? "bg-lime-900/40 text-custom"
            : "text-gray-400 hover:text-gray-200"
        }`}
      >
        My Plan
      </Link>
    </li>
  );
};

export default MyPlanLink;