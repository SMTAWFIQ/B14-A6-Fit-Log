import React from "react";
import Link from "next/link";
import { Clock, ThumbsUp, Star } from "lucide-react";
import Image from "next/image";

const WorkoutCard = ({ workout }) => {
  return (
    <Link href={`/workout/${workout.id}`}>
      <div className="group bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-accent cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20">
        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className="p-4">
          {/* Category tags */}
          <div className="flex gap-2 flex-wrap">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="bg-custom text-black text-xs font-bold px-3 py-1 rounded-full uppercase"
              >
                {group}
              </span>
            ))}
          </div>

          {/* Name */}
          <h3 className="text-white font-bold uppercase text-lg mt-3 transition-colors duration-300 ">
            {workout.name}
          </h3>

          {/* Equipment */}
          <p className="text-neutral-400 text-sm mt-1">{workout.equipment}</p>

          {/* Divider line */}
          <div className="border-t border-neutral-800 mt-3 pt-3">
            {/* Stats row */}
            <div className="flex items-center gap-4 text-neutral-300 text-sm">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{workout.duration} min</span>
              </div>

              <div className="flex items-center gap-1">
                <ThumbsUp size={16} />
                <span>{workout.caloriesBurned} kcal</span>
              </div>

              <div className="flex items-center gap-1">
                <Star size={16} />
                <span>{workout.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;