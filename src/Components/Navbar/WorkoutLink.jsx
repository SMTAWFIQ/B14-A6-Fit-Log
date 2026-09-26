import Link from 'next/link';
import React from 'react';

const WorkoutLink = () => {
    return (
        <li>
            <Link
                href="/"
                className="px-5 py-2 rounded-full bg-lime-900/40 text-lime-400 font-bold"
            >
                Workouts
            </Link>
        </li>
    );
};

export default WorkoutLink;