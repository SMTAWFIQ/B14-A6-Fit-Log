import React from "react";
import Image from "next/image";
import AddToTodaysPlanButton from "../../../Components/workouDetails/AddToTodaysPlanButton";
import SaveForLaterButton from "../../../Components/workouDetails/SaveForLaterButton";

const getWorkoutData = async (workoutId) => {
  try {
    const res = await fetch(
      `https://api.api-store.workers.dev/api/fitlog/${workoutId}`
    );

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    return data;
  } catch (error) {
    return null;
  }
};

const WorkoutDetailsPage = async ({ params }) => {
  const { workoutId } = await params;

  const workout = await getWorkoutData(workoutId);

  if (!workout || workout.error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl font-bold">
            Error fetching!
          </h1>

          <p className="text-neutral-400 mt-2">
            Please try again.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left side — big image */}
      <div className="relative w-full h-72 lg:h-full rounded-xl overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Right side — details */}
      <div>
        <h1 className="text-white font-bold font-oswald uppercase text-3xl">
          {workout.name}
        </h1>

        <p className="text-[#9CA3AF] mt-3">
          {workout.description}
        </p>

        {/* Category tags */}
        <div className="flex gap-2 flex-wrap mt-4">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="bg-custom text-black text-xs font-bold px-3 py-1 rounded-full uppercase"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Key specs table */}
        <div className="mt-6 bg-neutral-900 rounded-xl border border-neutral-800 divide-y divide-neutral-800">
          <SpecRow label="Equipment" value={workout.equipment} />
          <SpecRow label="Difficulty" value={workout.difficulty} />
          <SpecRow label="Sets" value={workout.sets} />
          <SpecRow label="Reps" value={workout.reps} />
          <SpecRow
            label="Duration"
            value={`${workout.duration} min`}
          />
          <SpecRow
            label="Calories"
            value={`${workout.caloriesBurned} kcal`}
          />
          <SpecRow label="Rating" value={workout.rating} />
        </div>

        {/* Instructions */}
        <div className="mt-6">
          <h2 className="text-white font-bold uppercase text-lg mb-3">
            Instructions
          </h2>

          <ol className="space-y-2">
            {workout.instructions.map((step, index) => (
              <li
                key={index}
                className="text-neutral-300 flex gap-2"
              >
                <span className="text-gray-500 font-semibold">
                  {index + 1}.
                </span>

                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA buttons */}
        <div className="flex gap-4 mt-8">
          <AddToTodaysPlanButton workout={workout} />

          <SaveForLaterButton workout={workout} />
        </div>
      </div>
    </div>
  );
};

// Small helper component for one row in the specs table
const SpecRow = ({ label, value }) => (
  <div className="flex justify-between px-4 py-3">
    <span className="text-neutral-400 text-sm uppercase">
      {label}
    </span>

    <span className="text-white font-semibold text-sm">
      {value}
    </span>
  </div>
);

export default WorkoutDetailsPage;