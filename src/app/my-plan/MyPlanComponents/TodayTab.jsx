"use client";
import { FitlogContext } from "../../../Context/FitlogContext";
import React, { useContext, useMemo, useState } from "react";
import Link from "next/link";
import { Clock, Flame, Star, Check, X } from "lucide-react";
import { toast } from "react-toastify";
import Sorting from "./Sorting";
import EmptyState from "./EmptyState";
import Image from "next/image";

const TodayTab = () => {
  const { myPlan, setMyPlan } = useContext(FitlogContext);
  const [sortBy, setSortBy] = useState("duration");
  const [doneWorkouts, setDoneWorkouts] = useState([]);

  const sortedList = useMemo(() => {
    return [...myPlan].sort((a, b) => (a[sortBy] ?? 0) - (b[sortBy] ?? 0));
  }, [myPlan, sortBy]);

  const handleRemove = (id) => {
    setMyPlan((prev) => prev.filter((w) => w.id !== id));
  };

  const handleDone = (id, name) => {
    setDoneWorkouts((prev) => [...prev, id]);
    toast.success(`${name} marked as done!`);
  };

  return (
    <>
      <div className="mt-6">
        <Sorting sortBy={sortBy} onChange={setSortBy} />
      </div>
      {sortedList.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="mt-6 flex flex-col gap-4">
          {sortedList.map((workout) => {
            const isDone = doneWorkouts.includes(workout.id);
            return (
              <div
                key={workout.id}
                className="bg-[#111214] border border-white/10 rounded-2xl p-4 flex items-center justify-between flex-wrap gap-4"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    width={100}
                    height={100}
                    className="rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-bold uppercase text-sm tracking-wide">
                      {workout.name}
                    </h3>
                    <p className="text-gray-400 text-xs mt-0.5">
                      {workout.category}
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-gray-300">
                      <span className="flex justify-center gap-1">
                        <Clock size={14} className="text-custom" />
                        {workout.duration} min
                      </span>
                      <span className="flex justify-center gap-1">
                        <Flame size={14} className="text-orange-500" />
                        {workout.caloriesBurned} kcal
                      </span>
                      <span className="flex justify-center gap-1">
                        <Star size={14} className="text-yellow-400 " />
                        {workout.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/workout/${workout.id}`}
                    className="px-4 py-2 rounded-full border border-white/20 text-sm font-medium hover:bg-white/5 transition"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => handleDone(workout.id, workout.name)}
                    disabled={isDone}
                    className="px-4 py-2 rounded-full bg-lime-400 text-black text-sm font-semibold flex items-center gap-1 hover:bg-lime-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Check size={14} /> {isDone ? "Done" : "Mark as Done"}
                  </button>
                  <button
                    onClick={() => handleRemove(workout.id)}
                    className="text-gray-400 hover:text-white p-1"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default TodayTab;
