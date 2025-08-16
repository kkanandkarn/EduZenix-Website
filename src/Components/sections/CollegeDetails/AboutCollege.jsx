import React, { useEffect, useState } from "react";
import { masterInsitutions } from "../../../utils/constant";
import { useParams } from "react-router-dom";
import { LuEye, LuTarget } from "react-icons/lu";

const AboutCollege = () => {
  const [college, setCollege] = useState(null);

  const { institutionId } = useParams();

  useEffect(() => {
    setCollege(masterInsitutions.find((ins) => ins.id === institutionId));
  }, [institutionId]);
  return (
    <div className="bg-secondry min-h-40 w-full rounded-lg  px-4 ">
      {college?.AboutCollege ? (
        <div className="py-4 px-4">
          <div className="">
            <h1 className="text-white font-poppins text-xl font-bold">
              About {college?.name}
            </h1>
            <p className="font-poppins text-gray-400 text-sm mt-2">
              {college?.AboutCollege?.about}
            </p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-10 w-full min-h-10 py-4 mt-4">
            <div className="border border-gray-700 rounded-lg p-4 flex flex-col">
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center justify-center text-base text-center p-2 rounded-full bg-sky-900 text-sky-500">
                  <LuEye />
                </div>
                <div className="flex items-center justify-start text-sky-500 text-2xl font-bold font-poppins">
                  Vision
                </div>
              </div>
              <div className="mt-2 text-gray-300 text-sm font-poppins">
                {college?.AboutCollege?.vision}
              </div>
            </div>

            <div className="border border-gray-700 rounded-lg p-4 flex flex-col">
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center justify-center text-lg text-center p-2 rounded-full bg-sky-900 text-sky-500">
                  <LuTarget />
                </div>
                <div className="flex items-center justify-start text-sky-500 text-2xl font-bold font-poppins">
                  Mission
                </div>
              </div>
              <div className="mt-2 text-gray-300 text-sm font-poppins">
                {college?.AboutCollege?.mission}
              </div>
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

export default AboutCollege;
