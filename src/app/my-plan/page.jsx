'use client'
import { FitlogContext } from '../../Context/FitlogContext';
import React, { useContext } from 'react';

const MyPlanPage = () => {
    const {myPlan, setMyPlan} = useContext(FitlogContext)
    console.log(myPlan, "myplan");

    return (
        <div>
            
        </div>
    );
};

export default MyPlanPage;