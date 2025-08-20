import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import { toast } from "react-toastify";
import { LuMapPin } from "react-icons/lu";
import { IoStar } from "react-icons/io5";
import AboutCollege from "./AboutCollege";
import Courses from "./Courses";
import { useSelector } from "react-redux";
import Review from "./Review";
import Placement from "./Placement";
import Faculty from "./Faculty";

const CollegeInfo = () => {
  const college = useSelector((state) => state.college.collegeDetails);
  const [activeTab, setActiveTab] = useState("info");

  // Render nothing or loader if college data is not ready

  const tabs = [
    {
      value: "info",
      label: "College Info",
      component: <AboutCollege college={college} />,
    },
    {
      value: "coursesFee",
      label: "Courses & Fees",
      component: <Courses college={college} />,
    },
    {
      value: "reviews",
      label: "Reviews",
      component: <Review college={college} />,
    },
    {
      value: "placements",
      label: "Placements",
      component: <Placement college={college} />,
    },
    {
      value: "faculties",
      label: "Faculties",
      component: <Faculty college={college} />,
    },
    {
      value: "gallery",
      label: "Gallery",
      component: <div>Gallery Section</div>,
    },
    { value: "qna", label: "Q&A", component: <div>Q&A Section</div> },
  ];

  const handleApply = () => toast.success("Applied Successfully");

  return (
    <div className="bg-primary pt-40 xl:pt-28 pb-10 md:pb-20 flex flex-col items-center justify-center">
      {/* College Header */}
      <div className="w-full flex-col xl:flex-row py-10 xl:px-10 bg-secondry flex items-center xl:items-center justify-between">
        <div className="flex flex-col xl:flex-row items-center gap-4">
          <div className="rounded-full border-2 border-sky-400 w-14 h-14 xl:w-24 xl:h-18 text-base xl:text-4xl font-bold font-poppins flex items-center justify-center text-sky-300 bg-primary">
            {college.name?.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col items-center xl:items-start w-full">
            <h1 className="font-bold text-2xl xl:text-3xl text-sky-400 font-poppins">
              {college.name}
            </h1>
            <div className="flex items-center gap-2">
              <LuMapPin className="text-sky-400" />
              <p className="text-sky-400 font-poppins">{college.location}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 xl:mt-0">
          <div className="flex items-center gap-2 xl:gap-4">
            <IoStar className="text-orange-300" />
            <div className="text-gray-300 font-poppins">
              {college.rating} ratings
            </div>
          </div>
          <div className="text-gray-300 font-poppins">
            {college.totalreviews} Reviews
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="flex justify-end mt-4 w-full px-4 xl:px-10">
        <Button label="Apply Now" onClick={handleApply} />
      </div>

      {/* Tabs */}
      <div className="py-2 w-full px-4 mt-4">
        <div className="py-1 bg-secondry rounded-lg flex items-center justify-between gap-2 overflow-x-auto scrollbar-hide px-4">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`whitespace-nowrap flex-shrink-0 ${
                activeTab === tab.value
                  ? "text-white bg-primary rounded-lg"
                  : "text-gray-400"
              } ease-in-out duration-300 cursor-pointer px-6 py-2`}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 w-full">
        {tabs.map((tab) => (
          <div
            key={tab.value}
            className={activeTab === tab.value ? "block" : "hidden"}
          >
            {tab.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollegeInfo;
