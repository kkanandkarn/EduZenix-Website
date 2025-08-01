import React from "react";
import logo from "../../assets/logo.png";
import { LuFacebook, LuInstagram, LuLinkedin, LuTwitter } from "react-icons/lu";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-secondry border-t border-t-zinc-700 px-6 py-2">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 lg:justify-between border-b-2 border-b-gray-700 py-6">
        <div className="flex items-center justify-start gap-4">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <h1 className="font-bold font-poppins text-xl flex justify-center items-center font-headline text-white">
            EduZenix
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-6 text-gray-300 text-sm font-poppins">
          <button className="cursor-pointer hover:text-sky-400 ease-in-out duration-300">
            About Us
          </button>
          <button className="cursor-pointer hover:text-sky-400  ease-in-out duration-300">
            Contact
          </button>
          <button className="cursor-pointer hover:text-sky-400  ease-in-out duration-300">
            Terms of Service
          </button>
          <button className="cursor-pointer hover:text-sky-400  ease-in-out duration-300">
            Privacy Policy
          </button>
        </div>
        <div className="flex justify-center items-center gap-6 text-gray-300 text-lg">
          <button className="p-2 rounded-full cursor-pointer hover:bg-zinc-600 ease-in-out duration-300">
            <LuTwitter />
          </button>
          <button className="p-2 rounded-full cursor-pointer hover:bg-zinc-600 ease-in-out duration-300">
            <LuLinkedin />
          </button>
          <button className="p-2 rounded-full cursor-pointer hover:bg-zinc-600 ease-in-out duration-300">
            <LuInstagram />
          </button>
          <button className="p-2 rounded-full cursor-pointer hover:bg-zinc-600 ease-in-out duration-300">
            <LuFacebook />
          </button>
        </div>
      </div>
      <div className="w-full font-poppins flex items-center justify-center text-gray-300 text-sm py-6">
        &copy; {year} EduZenix. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
