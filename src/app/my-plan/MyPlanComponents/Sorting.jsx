import React from 'react';
import { ChevronDown } from 'lucide-react';

const Sorting = ({ sortBy, onChange }) => {
    return (
        <div className="flex items-center justify-end gap-2 text-sm text-gray-400">
            <span>Sort By</span>
            <div className="relative">
                <select
                    value={sortBy}
                    onChange={(e) => onChange(e.target.value)}
                    className="appearance-none bg-[#111214] border border-white/10 text-white text-sm rounded-full pl-3 pr-8 py-1.5 focus:outline-none"
                >
                    <option value="duration">Duration</option>
                    <option value="caloriesBurned">Calories</option>
                    <option value="rating">Rating</option>
                </select>
                <ChevronDown
                    size={14}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
                />
            </div>
        </div>
    );
};

export default Sorting;