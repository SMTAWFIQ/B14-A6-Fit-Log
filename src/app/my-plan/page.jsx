"use client";
import { FitlogContext } from "../../Context/FitlogContext";
import React, { useContext, useState, useMemo } from "react";
import Link from "next/link";
import { Clock, Flame, Star, Check, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const MyPlanPage = () => {
  const { myPlan, setMyPlan, savedWorkout, setSavedWorkout } =
    useContext(FitlogContext);

  const [activeTab, setActiveTab] = useState("today"); // 'today' | 'saved'
  const [sortBy, setSortBy] = useState("duration");

  const currentList = activeTab === "today" ? myPlan : savedWorkout;

  const sortedList = useMemo(() => {
    const list = [...currentList];
    list.sort((a, b) => (a[sortBy] ?? 0) - (b[sortBy] ?? 0));
    return list;
  }, [currentList, sortBy]);

  const totalExercises = myPlan.length;
  const totalMinutes = myPlan.reduce((sum, w) => sum + (w.duration || 0), 0);
  const totalCalories = myPlan.reduce((sum, w) => sum + (w.calories || 0), 0);

  const handleMarkAsDone = (id) => {
    setMyPlan((prev) => prev.filter((w) => w.id !== id));
  };

  const handleRemove = (id) => {
    if (activeTab === "today") {
      setMyPlan((prev) => prev.filter((w) => w.id !== id));
    } else {
      setSavedWorkout((prev) => prev.filter((w) => w.id !== id));
    }
  };

  return (
    <div className="bg-black min-h-screen text-white px-6 md:px-10 py-8">
      {/* Header */}
      <h1 className="text-3xl font-extrabold tracking-tight">MY PLAN</h1>
      <p className="text-gray-400 text-sm mt-1">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Stats */}
      <div className="mt-6 bg-[#111214] border border-white/10 rounded-2xl grid grid-cols-3 divide-x divide-white/10 p-6">
        <div className="px-4">
          <p className="text-gray-400 text-sm">Exercises</p>
          <p className="text-3xl font-bold text-lime-400 mt-1">
            {totalExercises}
          </p>
        </div>
        <div className="px-4">
          <p className="text-gray-400 text-sm">Minutes</p>
          <p className="text-3xl font-bold text-white mt-1">{totalMinutes}</p>
        </div>
        <div className="px-4">
          <p className="text-gray-400 text-sm">Calories</p>
          <p className="text-3xl font-bold text-white mt-1">{totalCalories}</p>
        </div>
      </div>

      {/* Tabs + Sort */}
      <div className="mt-6 flex items-center justify-between flex-wrap gap-3">
        <div className="bg-[#111214] border border-white/10 rounded-full p-1 flex gap-1">
          <button
            onClick={() => setActiveTab("today")}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeTab === "today"
                ? "bg-[#1c1e22] text-white font-semibold"
                : "text-gray-400"
            }`}
          >
            Today's Plan
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeTab === "saved"
                ? "bg-[#1c1e22] text-white font-semibold"
                : "text-gray-400"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Sort By</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-[#111214] border border-white/10 text-white text-sm rounded-full pl-3 pr-8 py-1.5 focus:outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
            <ChevronDown
              size={14}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* List / Empty state */}
      {sortedList.length === 0 ? (
        <div className="mt-6 border border-dashed border-white/15 rounded-2xl py-20 flex flex-col items-center justify-center text-center">
          <p className="font-bold text-lg uppercase tracking-wide">
            Nothing here yet
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="mt-6 px-6 py-2.5 rounded-full bg-lime-400 text-black font-semibold text-sm hover:bg-lime-300 transition"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-4">
          {sortedList.map((workout) => (
            <div
              key={workout.id}
              className="bg-[#111214] border border-white/10 rounded-2xl p-4 flex items-center justify-between flex-wrap gap-4"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={workout.image}
                  width={40}
                  height={40}
                  alt={workout.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-bold uppercase text-sm tracking-wide">
                    {workout.name}
                  </h3>
                  <p className="text-gray-400 text-xs mt-0.5">
                    {workout.category}
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-300">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {workout.duration} min
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame size={14} className="text-orange-500" />
                      {workout.calories} kcal
                    </span>
                    <span className="flex items-center gap-1">
                      <Star
                        size={14}
                        className="text-yellow-400 fill-yellow-400"
                      />
                      {workout.rating}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={`/workouts/${workout.id}`}
                  className="px-4 py-2 rounded-full border border-white/20 text-sm font-medium hover:bg-white/5 transition"
                >
                  View Details
                </Link>
                {activeTab === "today" && (
                  <button
                    onClick={() => handleMarkAsDone(workout.id)}
                    className="px-4 py-2 rounded-full bg-lime-400 text-black text-sm font-semibold flex items-center gap-1 hover:bg-lime-300 transition"
                  >
                    <Check size={14} />
                    Mark as Done
                  </button>
                )}
                <button
                  onClick={() => handleRemove(workout.id)}
                  className="text-gray-400 hover:text-white p-1"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlanPage;
