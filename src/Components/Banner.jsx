import Image from "next/image";
import React from "react";
import bannerimage from "../../assets/banner.png";
const Banner = () => {
  return (
    <div className="container mx-auto py-3 px-5 mt-5">
      
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#15171D] rounded-2xl px-6 md:px-10 lg:px-16 py-8 md:py-10 lg:py-15 gap-8 md:gap-6 lg:gap-8">
        
        <div className="w-full md:w-1/2">
          
          <p className="font-inter text-custom text-[11px] mb-5">
             
            WORKOUT LIBRARY 
          </p> 
          <p className="text-4xl sm:text-5xl lg:text-5xl font-oswald font-bold my-6">
             
            TRAIN WITH INTENT. LOG <br className="hidden sm:block" /> EVERY
            SET. 
          </p> 
          <p className="text-[#9CA3AF] text-sm sm:text-[15px] lg:text-[16px] my-6">
             
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it 
            <br className="hidden sm:block" /> into todays plan, and watch the
            weeks work add up. 
          </p> 
          <a href="#library">
             
            <button className=" mt-2 btn bg-custom text-black rounded-xl flex items-center gap-2">
               
              BROWSE WORKOUTS 
            </button> 
          </a> 
        </div> 
        <div className="w-full md:w-1/2 flex justify-center">
           
          <Image
            src={bannerimage}
            alt="Banner Image"
            className="w-full max-w-md lg:max-w-90 h-auto"
          /> 
        </div> 
      </div> 
    </div>
  );
};
export default Banner;
