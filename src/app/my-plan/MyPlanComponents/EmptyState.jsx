import React from 'react';
import Link from 'next/link';

const EmptyState = () => {
    return (
        <div className="mt-6 border border-dashed border-white/15 rounded-2xl py-20 flex flex-col items-center justify-center text-center">
            <p className="font-bold text-lg uppercase tracking-wide">Nothing here yet</p>
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
    );
};

export default EmptyState;