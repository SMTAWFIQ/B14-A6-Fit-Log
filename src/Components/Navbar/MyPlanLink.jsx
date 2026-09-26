import Link from 'next/link';
import React from 'react';

const MyPlanLink = () => {
    return (
        <li>
            <Link
                href="/my-plan"
                className="px-5 py-2 text-gray-400 font-bold hover:text-gray-200"
            >
                My Plan
            </Link>
        </li>
    );
};

export default MyPlanLink;