"use client";
import { Bookmark } from "lucide-react";
import { FitlogContext } from "../../Context/FitlogContext";
import React, { useContext } from "react";
import { toast } from "react-toastify";


const SaveForLaterButton = ({ workout }) => {
  const { savedWorkout, setSavedWorkout } = useContext(FitlogContext);

  const alreadyAdded = savedWorkout.find((w) => w.id === workout.id);

  const handleSavedWorkout = () => {
    console.log("save btn trigerred", workout);
    if (alreadyAdded) return;

    setSavedWorkout([...savedWorkout, workout]);
    
    toast.success(`${workout.name} Added to Saved Workout`);
  };

  return (
    <button
      onClick={handleSavedWorkout}
      disabled={alreadyAdded}
      className="flex items-center gap-2 border border-neutral-700 text-white font-bold px-5 py-3 rounded-full hover:border-white hover:cursor-pointer transition disabled:opacity-50 disabled:cursor-not-allowed"
    >
      <Bookmark size={18} />

      {alreadyAdded ? "Already Saved" : "Save for later"}
    </button>
  );
};

export default SaveForLaterButton;
