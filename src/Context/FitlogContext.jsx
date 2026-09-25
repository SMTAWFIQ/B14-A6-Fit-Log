'use client'
import React, { createContext, useState } from 'react';

    const FitlogContext = createContext({})

const FitlogProvider = ({children}) => {
    const {myPlan, setMyPlan} = useState([])
    const {savedWorkout, setSavedWorkout} = useState([])

    const sharedData = {
        myPlan, 
        setMyPlan,
        savedWorkout,
        setSavedWorkout
    }

    return (
        <FitlogContext.Provider value={sharedData}>{children}</FitlogContext.Provider>
    );
};

export default FitlogProvider;