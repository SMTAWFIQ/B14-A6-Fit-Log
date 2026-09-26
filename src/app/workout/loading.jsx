import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-spinner text-warning"></span>
      Loading Workout Details…
    </div>
  );
};

export default Loading;