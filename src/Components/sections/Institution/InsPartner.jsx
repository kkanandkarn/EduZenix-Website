import React from "react";

import {
  LuBuilding,
  LuFlaskConical,
  LuGraduationCap,
  LuLightbulb,
  LuTelescope,
} from "react-icons/lu";

const InsPartner = () => {
  const trustedOrganisations = [
    { icon: <LuBuilding />, label: "University of Knowledge" },
    { icon: <LuLightbulb />, label: "College of Innovation" },
    { icon: <LuGraduationCap />, label: "Academy of Excellence" },
    { icon: <LuFlaskConical />, label: "Institute of Technology" },
    { icon: <LuTelescope />, label: "Graduate Institute" },
  ];
  return (
    <div className="bg-secondry h-60 md:h-52  p-4 md:p-8 flex items-start md:items-center justify-center flex-col">
      <div className="flex items-center justify-start md:justify-center text-left md:text-center text-zinc-400 text-sm md:text-xl font-poppins uppercase font-bold">
        Trusted by leading institutions
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 justify-items-start xl:justify-items-center items-center mt-2 xl:mt-8 w-full">
        {trustedOrganisations.map((org, index) => (
          <div
            className="flex justify-center items-center gap-2 text-zinc-400 hover:text-white mt-2 md:mt-4 xl:mt-0"
            key={index}
          >
            <div className="text-base md:text-2xl">{org.icon}</div>
            <div className="text-base md:text-lg font-poppins">{org.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsPartner;
