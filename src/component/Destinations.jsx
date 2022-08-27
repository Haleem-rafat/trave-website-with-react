import React from "react";
import borabora from "../assets/borabora.jpeg";
import borabora2 from "../assets/borabora2.jpeg";
import maldives from "../assets/maldives.jpeg";
import maldives2 from "../assets/maldives2.jpeg";
import keywest from "../assets/keywest.jpeg";

const Destinations = () => {
  return (
    <div id="Destinations">
      <div className="max-w-[1240px] mx-auto py-16 px-4 text-center ">
        <h1>All-Inclsive Resosts</h1>
        <p className="py-4">On The Caribbean`s Best Beaches</p>
        <div className="grid  md:grid-cols-5 py-4 gap-2 md:gab-4">
          <img
            className="w-full h-full object-cover col-span-2  row-span-2 md:col-span-3"
            src={borabora}
          />
          <img className="w-full h-full object-cover" src={borabora2} />
          <img className="w-full h-full object-cover" src={maldives} />
          <img className="w-full h-full object-cover" src={maldives2} />
          <img className="w-full h-full object-cover" src={keywest} />
        </div>
      </div>
    </div>
  );
};

export default Destinations;
