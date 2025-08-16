import React from "react";
import {
  LuBriefcase,
  LuCalendarDays,
  LuFileCheck,
  LuGraduationCap,
  LuMessageSquare,
  LuNetwork,
} from "react-icons/lu";

const CampusExp = () => {
  const campusExperienceCards = [
    {
      icon: <LuFileCheck />,
      title: "Easy Admissions",
      description:
        "Apply and track your application status through a simple, unified online portal.",
    },
    {
      icon: <LuCalendarDays />,
      title: "Your Timetable, Simplified",
      description:
        "Access your class schedules, exam dates, and academic calendar anytime.",
    },
    {
      icon: <LuGraduationCap />,
      title: "Academic Progress",
      description:
        "Stay on top of your grades, assignments, and attendance with a personalized dashboard.",
    },
    {
      icon: <LuMessageSquare />,
      title: "Stay Connected",
      description:
        "Receive important announcements and communicate with faculty seamlessly.",
    },
    {
      icon: <LuNetwork />,
      title: "Campus Life Hub",
      description:
        "Manage hostel, transport, and library services all in one place.",
    },
    {
      icon: <LuBriefcase />,
      title: "Career Opportunities",
      description:
        "Get updates on placement drives and career opportunities from your institution.",
    },
  ];

  return (
    <div className="bg-secondry  pt-20 pb-10 md:pb-20 flex flex-col items-center justify-center">
      {" "}
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex items-center justify-center text-white font-poppins text-2xl/8 md:text-4xl md:leading-[-1] line lg:text-4xl font-bold text-center">
          A Smarter Campus Experience
        </div>
        <div className="text-zinc-500 text-sm  md:text-xl lg:w-full flex items-center justify-center text-center font-poppins py-1">
          Discover how EduZenix enhances your entire academic journey, from
          application to graduation.
        </div>
      </div>
      <div className="w-full mt-4 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center">
        {campusExperienceCards?.map((card, index) => (
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

export default CampusExp;
