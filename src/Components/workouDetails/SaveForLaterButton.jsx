import { Bookmark } from "lucide-react";



"use client";
import { FitlogContext } from "../../Context/FitlogContext";

import React, { useContext } from "react";

const AddToTodaysPlanButton = ({ workout }) => {
  const { myPlan, setMyPlan } = useContext(FitlogContext);

  const alreadyAdded = myPlan.find((w) => w.id === workout.id);

  const handleMyPlan = () => {
    if (alreadyAdded) return;

    setMyPlan([...myPlan, workout]);

    alert(`${workout.name} Added to today's plan`);
  };

  return (
    <button
      onClick={handleMyPlan}
      disabled={alreadyAdded}
      className="flex items-center gap-2 border border-neutral-700 text-white font-bold px-5 py-3 rounded-full hover:border-accent transition"
    >
      <Bookmark size={18} />

      {alreadyAdded ? "Already Saved" : "Save for later"}
    </button>
  );
};

export default AddToTodaysPlanButton;
