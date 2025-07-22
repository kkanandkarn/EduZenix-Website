import React from "react";

const InsPlan = () => {
  const features = [
    "Roles and Users Access Control",
    "Roles and Users Access Control",
    "Human Resource Management System (HRMS)",
    "Student Admission Counselling Services",
    "Fee & Billing Management",
    "Hostel & Accommodation Management",
    "Faculty & Staff Management",
    "Academic Operations or Curriculum Management",
    "Examination & Assessment System",
    "Academic Leave & Attendance Management",
    "Cafeteria & Meal Management",
    "Transport & Fleet Management",
    "Library & Resource Center",
    "Announcements & Notice Board",
  ];
  const packages = [
    {
      packageName: "Startup",
      packagePrice: "Pay-as-you-go",
      description: "For small teams just getting started.",
      userType: "For small teams just getting started.",
      support:
        "Dedicated email and contact support (Response time upto 24- 48 hours)",
      addons: [],
    },
    {
      packageName: "Growth",
      packagePrice: "Pay-as-you-go",
      description: "For small teams just getting started.",
      userType: "For growing institutions that need more flexibility.",
      support:
        "Dedicated email and contact support (Response time upto 12 hours)",
      addons: [],
    },
    {
      packageName: "Enterprise",
      packagePrice: "Pay-as-you-go",
      description: "For small teams just getting started.",
      userType: "For large campuses or groups with custom needs.",
      support: "Dedicated email and contact support (24/7)",
      addons: [
        "Customized Dashboard Design",
        "Institution-Branded ERP & Website",
        "Mobile App Development (iOS & Android)",
        "Advanced Marketing & SEO Services",
        "Priority Onboarding & Training",
        "Dedicated Account Manager",
      ],
    },
  ];
  return (
    <div className="bg-primary  pt-20 pb-10 md:pb-20 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex items-center justify-center text-white font-poppins text-2xl/8 md:text-4xl md:leading-[-1] line lg:text-4xl font-bold text-center">
          Flexible Plans for Every Institution
        </div>
        <div className="text-zinc-500 text-sm  md:text-xl lg:w-3/5 flex items-center justify-center text-center font-poppins py-1">
          Choose the right plan that fits your campus size and requirements. All
          plans are available Monthly, Quarterly, or Yearly.
        </div>
      </div>
      <div className="w-full  mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 items-center justify-items-center">
        {packages.map((card, index) => (
          <div className="bg-secondry rounded-lg gap-2 flex flex-col items-start justify-center p-4 border border-gray-600 hover:border-sky-300 transition-all duration-300  hover:shadow-md hover:shadow-sky-400">
            <div className="py-4 text-white font-poppins text-2xl text-left">
              {card.packageName}
            </div>
            <div className="text-white font-poppins text-xl text-left">
              {card.packagePrice}
            </div>
            <div className="font-poppins text-gray-500 text-sm text-left">
              {card.userType}
            </div>
            <div className="mt-4">
              {features.map((feature) => (
                <div className="text-sm text-gray-500 mt-4">{feature}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsPlan;
