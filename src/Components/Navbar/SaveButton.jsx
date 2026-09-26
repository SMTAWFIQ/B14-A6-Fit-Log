"use client";

import Link from "next/link";
import React, { useContext } from "react";

import { FitlogContext } from "../../Context/FitlogContext";

const SaveButton = () => {
  const { savedWorkout } = useContext(FitlogContext);

  return (
    <Link
      href="/my-plan"
      className="flex items-center gap-1 md:gap-2"
    >
      <span className="text-neutral-300 text-xs md:text-base font-medium">
        Saved
      </span>

      <span className="w-5 h-5 md:w-6 md:h-6 flex items-center justify-center border border-neutral-600 text-neutral-300 text-[10px] md:text-xs font-bold rounded-full">
        {savedWorkout.length}
      </span>
    </Link>
  );
};

export default SaveButton;