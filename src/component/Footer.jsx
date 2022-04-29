import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full bg-gray-200 py-16">
      <div className="flex  flex-col  max-w-[1240] mx-auto px-4">
        <div className="sm:flex text-center justify-between items-center">
          <h1 className="">BEACHES.</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />
            <FaTwitter className=" icon" />
            <FaInstagram className=" icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
          </div>
        </div>
        <div className=" flex justify-between ">
          <ul className=" md:flex ">
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Partnerships</li>
            <li className="cursor-pointer">Careers</li>
            <li className="cursor-pointer">Newsroom</li>
            <li className="cursor-pointer">Advertising</li>
          </ul>
          <ul className=" md:flex text-right ">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Destinations</li>
            <li className="cursor-pointer">Travel</li>
            <li className="cursor-pointer">View</li>
            <li className="cursor-pointer">Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
