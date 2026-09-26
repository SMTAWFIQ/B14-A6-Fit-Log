import React from "react";
import WorkoutCard from "./WorkoutCard";


const getWorkoutData = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const WorkoutLibrary = async () => {
  const workoutData = await getWorkoutData();
  console.log(workoutData);

  return (
    <section id="library" className="container mx-auto py-3 px-5 mt-12">
      <h2 className="font-oswald text-3xl font-bold">The Library</h2>
      <p className="text-sm text-[#9CA3AF] mt-2 mb-9">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutData.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutLibrary;
