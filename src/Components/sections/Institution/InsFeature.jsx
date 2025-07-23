import React from "react";
import {
  LuBedDouble,
  LuBookCopy,
  LuBus,
  LuCalculator,
  LuClipboardCheck,
  LuFileText,
  LuLibrary,
  LuUsers,
} from "react-icons/lu";

const InsFeature = () => {
  const featureCards = [
    {
      icon: <LuFileText />,
      title: "Admission & Counselling",
      description:
        "Streamline the entire student admission and counselling process.",
    },
    {
      icon: <LuCalculator />,
      title: "Accounts Management",
      description: "Manage fees, payroll, and institutional finances.",
    },
    {
      icon: <LuBedDouble />,
      title: "Smart Hostel Allotment",
      description: "Automate hostel room allocation and management.",
    },
    {
      icon: <LuUsers />,
      title: "HRMS & Leave Management",
      description: "Simplify HR processes from recruitment to leave tracking.",
    },
    {
      icon: <LuLibrary />,
      title: "Assignment & Library Portal",
      description: "Digital portal for assignments and library resources.",
    },
    {
      icon: <LuBookCopy />,
      title: "Smart Syllabus & Routine",
      description: "Generate and manage academic syllabus and class routines.",
    },
    {
      icon: <LuBus />,
      title: "Transport & Canteen",
      description: "Efficiently manage campus transport and canteen services.",
    },
    {
      icon: <LuClipboardCheck />,
      title: "Examination & Smart Result",
      description:
        "Conduct exams and publish results with automated precision.",
    },
  ];
  return (
    <div className="bg-primary flex flex-col items-center justify-center py-24 px-4">
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex items-center justify-center text-white font-poppins text-2xl/8 md:text-5xl md:leading-[-1] line lg:text-4xl font-bold text-center">
          Everything Your Institution Needs
        </div>
        <div className="text-zinc-500 text-sm  md:text-xl lg:w-5/6 flex items-center justify-center text-center font-poppins py-2">
          A comprehensive suite of tools to manage every aspect of your campus
          operations.
        </div>
      </div>
      <div className="w-full  mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center justify-items-center">
        {featureCards.map((card, index) => (
          <div
            className="bg-secondry rounded-lg gap-4 flex flex-col items-center justify-center px-4 py-8 border border-sky-300/30 transition-all duration-300 hover:shadow-md hover:shadow-sky-400/50 hover:-translate-y-2"
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

export default InsFeature;
