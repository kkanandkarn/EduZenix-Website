import React, { useState } from "react";
import { LuCheck } from "react-icons/lu";
import Button from "../../UI/Button/Button";
import { FaArrowRight } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import useScreenType from "../../../hooks/UseScreenType";
import { packages } from "../../../utils/constant";

const InsPlan = () => {
  const [active, setActive] = useState("");
  const screenType = useScreenType();

  return (
    <div className="bg-primary  pt-20 pb-10 md:pb-20 flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex items-center justify-center text-white font-poppins text-2xl/8 md:text-4xl lg:text-4xl font-bold text-center">
          Flexible Plans for Every Institution
        </div>
        <div className="text-zinc-500 text-sm  md:text-xl lg:w-3/5 flex items-center justify-center text-center font-poppins py-1">
          Choose the right plan that fits your campus size and requirements. All
          plans are available Monthly, Quarterly, or Yearly.
        </div>
      </div>
      <div className="w-full  mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-center">
        {packages.map((card, index) => (
          <div
            className="bg-secondry rounded-lg gap-2 flex flex-col items-start justify-center  border border-gray-600 hover:border-sky-300 transition-all duration-300  hover:shadow-md hover:shadow-sky-400 hover:relative"
            onMouseEnter={() => setActive(card.packageName)}
            onMouseLeave={() => setActive("")}
            key={index}
          >
            {active === card.packageName && (
              <div className="absolute top-0 -translate-y-1/2 -translate-x-5 w-full text-center">
                <span className="px-4 py-2 text-sm font-semibold tracking-wide rounded-full bg-sky-400 text-primary-foreground">
                  Choose {card.packageName}
                </span>
              </div>
            )}
            <div className="p-4 w-full">
              <div className="py-4 text-white font-poppins text-sm text-left font-bold">
                {card.packageName}
              </div>
              <div className="text-white font-poppins text-sm text-left">
                {card.packagePrice}
              </div>
              <div className="font-poppins text-gray-500 text-sm text-left">
                {card.userType}
              </div>
              <div className="mt-4 flex items-center justify-start w-full">
                <Button
                  label={"Contact Sales"}
                  variant={`${
                    screenType === "mobile" || screenType === "tablet"
                      ? "primary"
                      : active === card.packageName
                      ? "primary"
                      : "secondry"
                  }`}
                  additionalClass={"w-full"}
                  iconSuffix={<FaArrowRight />}
                />
              </div>
            </div>
            <div className={`w-full px-4 border-t-2 border-t-gray-600`}>
              {card.features.map((feature, i) => (
                <div
                  className=" text-white mt-4 flex items-center justify-start gap-2 font-poppins text-sm"
                  key={i}
                >
                  <div className="text-green-500">
                    {" "}
                    <LuCheck />
                  </div>

                  <div className="text-xs">{feature}</div>
                </div>
              ))}
            </div>
            <div
              className={`w-full mt-4 p-4 text-white text-sm border-t-2 border-t-gray-600 font-poppins`}
            >
              <div className="w-full text-sm flex flex-col items-start justify-center">
                <div className="flex items-center justify-start gap-2">
                  <div className="text-sm">
                    <MdSupportAgent />
                  </div>
                  Support
                </div>
                <div className="mt-2 text-sm">{card.support}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsPlan;
