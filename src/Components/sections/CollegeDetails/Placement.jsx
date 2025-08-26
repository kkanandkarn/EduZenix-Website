import React from "react";
import { LuBuilding, LuEye, LuTarget } from "react-icons/lu";

const Placement = ({ college }) => {
  return (
    <div className="bg-secondry min-h-40 w-full rounded-lg  px-4 ">
      {" "}
      {college?.placements ? (
        <div className="py-4 px-4">
          <div className="">
            <h1 className="text-white font-poppins text-2xl font-bold">
              Placement Highlights
            </h1>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-10 w-full min-h-10 py-4 mt-4">
            <div className="border border-gray-700 rounded-lg p-4 flex flex-col  transition-all duration-300 hover:shadow-md hover:shadow-sky-400/50 hover:-translate-y-2 cursor-pointer">
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center justify-start text-sky-500 text-2xl font-bold font-poppins">
                  Highest Package
                </div>
              </div>
              <div className="mt-4 text-gray-300 text-2xl font-bold font-poppins">
                {college?.placements?.highestPackage}
              </div>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 flex flex-col  transition-all duration-300 hover:shadow-md hover:shadow-sky-400/50 hover:-translate-y-2 cursor-pointer">
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center justify-start text-sky-500 text-2xl font-bold font-poppins">
                  Average Package
                </div>
              </div>
              <div className="mt-2 text-gray-300 text-xl font-bold font-poppins">
                {college?.placements?.averagePackage}
              </div>
            </div>
          </div>
          <div className="mt-2">
            <h1 className="text-white font-poppins text-2xl font-bold">
              Top Recruiters
            </h1>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-start gap-4 flex-wrap">
              {college?.placements?.topRecruiters.map((r) => (
                <div className="text-white font-poppins flex items-center justify-start gap-2 text-sm py-2 px-4 rounded-lg bg-primary font-bold">
                  <LuBuilding />
                  <p>{r}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex min-h-40 text-white font-bold font-poppins text-2xl w-full items-center justify-center">
          Information not added.{" "}
        </div>
      )}
    </div>
  );
};

export default Placement;
