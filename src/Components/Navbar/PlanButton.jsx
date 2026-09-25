"use client";
import Link from "next/link";
import React, { useContext } from "react";

import { FitlogContext } from "../../Context/FitlogContext";
const PlanButton = () => {
  const { myPlan } = useContext(FitlogContext);
  return (
    <Link href="/my-plan" className="flex items-center gap-2">
      <span className="text-neutral-300 font-medium">Plan</span>
      <span className="w-6 h-6 flex items-center justify-center bg-custom text-black text-xs font-bold rounded-full">
        {myPlan.length}
      </span>
    </Link>
  );
};

export default PlanButton;
