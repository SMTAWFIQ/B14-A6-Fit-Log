'use client'
import { FitlogContext } from '../../Context/FitlogContext';
import React, { useContext, useState } from 'react';
import TodayTab from './MyPlanComponents/TodayTab';
import SaveTab from './MyPlanComponents/SaveTab';

const MyPlanPage = () => {
    const { myPlan, savedWorkout } = useContext(FitlogContext);
    const [activeTab, setActiveTab] = useState('today');

    const activeData = activeTab === 'saved' ? savedWorkout : myPlan;

    const totalExercises = activeData.length;
    const totalMinutes = activeData.reduce((sum, w) => sum + (w.duration || 0), 0);
    const totalCalories = activeData.reduce((sum, w) => sum + (w.caloriesBurned || 0), 0);

    return (
        <div className="bg-black min-h-screen text-white px-6 md:px-10 py-8">
            <h1 className="text-3xl font-extrabold font-oswald">MY PLAN</h1>
            <p className="text-gray-400 text-sm mt-1">
                Cap of five lifts for today. Finish them, then load more.
            </p>

            <div className="mt-6 bg-[#111214] border border-white/10 rounded-2xl grid grid-cols-3 divide-x divide-white/10 p-6">
                <div className="px-4">
                    <p className="text-gray-400 text-sm">Exercises</p>
                    <p className="text-3xl font-bold text-custom mt-1">{totalExercises}</p>
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

            <div className="mt-6 bg-[#111214] border border-white/10 rounded-full p-1 flex gap-1 w-fit">
                <button
                    onClick={() => setActiveTab('today')}
                    className={` hover: cursor-pointer px-4 py-2 rounded-full text-sm transition ${
                        activeTab === 'today' ? 'bg-[#1c1e22] text-white font-semibold ' : 'text-gray-400'
                    }`}
                >
                    Today's Plan
                </button>
                <button
                    onClick={() => setActiveTab('saved')}
                    className={` hover: cursor-pointer px-4 py-2 rounded-full text-sm transition ${
                        activeTab === 'saved' ? 'bg-[#1c1e22] text-white font-semibold' : 'text-gray-400'
                    }`}
                >
                    Saved
                </button>
            </div>

            {activeTab === 'saved' ? <SaveTab /> : <TodayTab />}
        </div>
    );
};

export default MyPlanPage;