import React from "react";

const Selectscard = ({ text, pic }) => {
  return (
    <div className="relative object-cover ">
      <img className="object-cover w-full h-full " src={pic} />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Selectscard;
