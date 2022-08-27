import React from "react";
import video from "../assets/beachVid.mp4";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen relative ">
      <video
        className="w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/30 "></div>
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white">
        <h1>First Class Travel</h1>
        <h2 className="py-4">Top 1% Locations Worldwide</h2>
        <form
          className="flex justify-between mx-auto items-center max-w-[700px] w-full border p-2 
              rounded-xl text-black bg-white"
        >
          <div>
            <input
              className="bg-transparent focus:outline-none font-[poppins] w-[300px] sm:w-[400px]"
              type="text"
              placeholder="Search Destinations"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
