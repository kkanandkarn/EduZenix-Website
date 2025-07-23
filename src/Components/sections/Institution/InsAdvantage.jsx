import React from "react";
import { LuScaling, LuShieldCheck, LuZap } from "react-icons/lu";

const InsAdvantage = () => {
  const advantageCards = [
    {
      icon: <LuZap />,
      title: "Automation-First Workflows",
      description:
        "Reduce manual tasks and increase efficiency with our intelligent automation.",
    },
    {
      icon: <LuScaling />,
      title: "Scalable & Customizable",
      description:
        "EduZenix grows with your institution and adapts to your unique processes.",
    },
    {
      icon: <LuShieldCheck />,
      title: "Cloud-Based & Secure",
      description:
        "Access your data anytime, anywhere with state-of-the-art security.",
    },
  ];
  return (
    <div className="bg-secondry  pt-20 pb-10 md:pb-20 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex items-center justify-center text-white font-poppins text-2xl/8 md:text-4xl md:leading-[-1] line lg:text-4xl font-bold text-center">
          Unlock The EduZenix Advantage
        </div>
        <div className="text-zinc-500 text-sm  md:text-xl lg:w-full flex items-center justify-center text-center font-poppins py-1">
          Experience the core benefits that set our platform apart from the
          rest.
        </div>
      </div>
      <div className="w-full mt-4 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center">
        {advantageCards?.map((card, index) => (
          <div
            className=" gap-4 flex flex-col items-center justify-center px-4 py-8"
            key={index}
          >
            <div className="flex items-center justify-center text-4xl text-center p-4 rounded-full bg-sky-900 text-sky-500">
              {card.icon}
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center justify-center text-base font-bold text-center text-white font-poppins">
                {card.title}
              </div>
              <div className="flex items-center justify-center text-sm text-center text-gray-400 font-poppins">
                {card.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsAdvantage;
