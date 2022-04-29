import React, { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handelNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };
  return (
    <div>
      <div className="flex justify-between items-center h-20 px-4 absolute w-full z-10 text-white">
        <div>
          <h1
            onClick={handelNav}
            className={logo ? "hidden" : "block cursor-default"}
          >
            BEACHES.
          </h1>
        </div>
        <ul className="hidden md:flex ">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Destinations</li>
          <li className="cursor-pointer">Travel</li>
          <li className="cursor-pointer">View</li>
          <li className="cursor-pointer">Book</li>
        </ul>
        <div className="hidden md:flex cursor-pointer ">
          <BsPerson className=" hover:text-[#5651e5] mr-3" size={20} />
          <BiSearch className=" hover:text-[#5651e5]" size={20} />
        </div>

        <div
          onClick={handelNav}
          className=" md:hidden cursor-pointer z-10 hover:text-[#5651e5]"
        >
          {nav ? (
            <AiOutlineClose size={20} className="text-black" />
          ) : (
            <HiOutlineMenuAlt4 size={20} />
          )}
        </div>

        <div
          onClick={handelNav}
          className={
            nav
              ? " top-0 left-0 absolute text-black py-5 px-4 w-full bg-gray-100/90 flex flex-col transition-all	"
              : "top-0 left-[-100%] bg-gray-100/90 flex flex-col  absolute transition-all"
          }
        >
          <ul>
            <h1 className="cursor-default ">BEACHES.</h1>
            <li className="border-b cursor-pointer">Home</li>
            <li className="border-b cursor-pointer">Destinations</li>
            <li className="border-b cursor-pointer">Travel</li>
            <li className="border-b cursor-pointer">View</li>
            <li className="border-b cursor-pointer">Book</li>
          </ul>
          <div className="flex flex-col ">
            <button className="my-6 ">Search</button>
            <button className="">Account</button>
          </div>
          <div className="flex justify-between  my-6 ">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaInstagram className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
