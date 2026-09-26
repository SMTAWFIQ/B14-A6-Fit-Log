import React from "react";

const LoadingState = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-spinner text-warning"> </span>
      Loading Workout...
    </div>
  );
};

export default LoadingState;
