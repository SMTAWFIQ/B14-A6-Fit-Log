import Image from "next/image";
import React from "react";
import bannerimage from '../../assets/banner.png';

const Banner = () => {
  return (
    <div className="container mx-auto py-3 px-5 mt-5 ">
      <div className="flex justify-between bg-[#15171D] rounded-2xl px-16 py-15">
        <div>
        <p className="font-inter text-custom text-[11px] mb-5 ">WORKOUT LIBRARY</p>
        <p className="text-6xl font-oswald font-bold my-6">TRAIN WITH INTENT. LOG <br /> EVERY SET.</p>
        <p className="text-[#9CA3AF] text-[16px] my-6">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />into
          todays plan, and watch the weeks work add up.
        </p>
        <button className="mt-2 btn bg-custom text-black rounded-xl">BROWSE WORKOUT</button>
      </div>

      <div>
        <Image src={bannerimage} alt="Banner Image"></Image>
      </div>
      </div>
    </div>
  );
};

export default Banner;
