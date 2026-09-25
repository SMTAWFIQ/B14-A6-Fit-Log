"use client";
import { FitlogContext } from "../../Context/FitlogContext";
import { CalendarPlus } from "lucide-react";
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
      className="flex items-center gap-2 bg-custom text-black font-bold px-5 py-3 rounded-full hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <CalendarPlus size={18} />

      {alreadyAdded ? "Already Added" : "Add to today's plan"}
    </button>
  );
};

export default AddToTodaysPlanButton;
