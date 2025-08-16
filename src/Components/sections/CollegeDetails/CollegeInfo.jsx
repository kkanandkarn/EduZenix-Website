import React, { Component, useState } from "react";
import Button from "../../UI/Button/Button";
import { toast } from "react-toastify";
import { LuMapPin, LuStar } from "react-icons/lu";
import { IoStar } from "react-icons/io5";
import AboutCollege from "./AboutCollege";

const CollegeInfo = ({ college }) => {
  console.log("COLLEGE INFO: ", college);
  const [activeTab, setActiveTab] = useState({
    value: "info",
    label: "College Info",
    component: <AboutCollege />,
  });
  const handleApply = () => {
    toast.success("Applied Successfully");
  };
  const tabs = [
    {
      value: "info",
      label: "College Info",
      component: <AboutCollege />,
    },
    { value: "courses", label: "Courses" },
    { value: "fees", label: "Fee Structure" },
    { value: "reviews", label: "Reviews" },
    { value: "placements", label: "Placements" },
    { value: "faculties", label: "Faculties" },
    { value: "gallery", label: "Gallery" },
    { value: "qna", label: "Q&A" },
  ];
  return (
    <div className="pt-40 xl:pt-28 pb-10 md:pb-20 flex flex-col items-center justify-center">
      <div className="w-full flex-col xl:flex-row py-10 xl:px-10 bg-secondry flex items-center xl:items-center justify-between">
        <div className="flex flex-col xl:flex-row  items-center justify-center xl:justify-start gap-4">
          <div className="rounded-full border-2 border-sky-400 w-14 h-14 xl:w-24 xl:h-18 text-base xl:text-4xl font-bold font-poppins flex items-center justify-center  text-sky-300 bg-primary">
            {college?.name?.toUpperCase().charAt(0)}
          </div>
          <div className="flex flex-col items-center xl:items-start xl:justify-start justify-center w-full">
            <h1 className="font-bold text-center text-2xl xl:text-3xl text-sky-400 font-poppins">
              {college?.name}
            </h1>
            <div className="flex items-center justify-center xl:justify-start gap-2">
              {" "}
              <div className="text-sky-400">
                <LuMapPin />
              </div>{" "}
              <p className="text-sky-400 font-poppins">{college?.location}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-4 xl:mt-0">
          <div className="flex items-center justify-center xl:justify-start gap-2 xl:gap-4">
            <div className="text-orange-300">
              <IoStar />
            </div>
            <div className="text-gray-300 text-center font-poppins">
              {college?.rating} ratings
            </div>
          </div>
          <div className="text-gray-300 font-poppins text-end">
            {college?.reviews} Reviews
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end mt-4 w-full px-4 xl:px-10">
        <Button label={"Apply Now"} onClick={handleApply} />
      </div>
      <div className="py-2 w-full px-4 mt-4">
        <div className="py-1 bg-secondry rounded-lg flex items-center justify-start xl:justify-between gap-2 overflow-x-auto scrollbar-hide px-4">
          {tabs?.map((tab, index) => (
            <button
              key={index}
              className={`whitespace-nowrap flex-shrink-0 ${
                activeTab.value === tab.value
                  ? "text-white bg-primary rounded-lg"
                  : "text-gray-400"
              } ease-in-out duration-300 cursor-pointer px-6 py-2`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="px-4 w-full">{activeTab["component"]}</div>
    </div>
  );
};

export default CollegeInfo;
