import React from "react";
import borabora from "../assets/borabora.jpeg";
import borabora2 from "../assets/borabora2.jpeg";
import maldives from "../assets/maldives.jpeg";
import maldives2 from "../assets/maldives2.jpeg";
import keywest from "../assets/keywest.jpeg";
import maldives3 from "../assets/maldives3.jpeg";
import Selectscard from "./Selectscard";

const Selects = () => {
  return (
    <div
      id="Book"
      className="max-w-[1240px] mx-auto px-4 py-16  grid lg:grid-cols-3 md:grid-cols-2 gap-4"
    >
      <Selectscard pic={borabora} text="borabora" />
      <Selectscard pic={borabora2} text="borabora" />
      <Selectscard pic={maldives} text="maldives" />
      <Selectscard pic={maldives2} text="maldives" />
      <Selectscard pic={keywest} text="keywest" />
      <Selectscard pic={maldives3} text="maldives" />
    </div>
  );
};

export default Selects;
