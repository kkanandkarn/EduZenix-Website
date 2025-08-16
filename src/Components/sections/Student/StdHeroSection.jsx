import React, { useEffect, useState } from "react";
import InputBox from "../../UI/InputBox/InputBox";
import { LuSchool, LuSearch, LuUniversity } from "react-icons/lu";
import { masterInsitutions } from "../../../utils/constant";
import { FaSchool, FaUniversity, FaChalkboardTeacher } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { FaBuildingColumns } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const StdHeroSection = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const icons = [
    LuUniversity,
    FaSchool,
    FaUniversity,
    FaBuildingColumns,
    LuSchool,
  ];
  const [institutions, setInstitutions] = useState([]);
  const handleSubmit = (institutionId) => {
    navigate(`/student/institution/${institutionId}`);
  };

  useEffect(() => {
    if (search.trim() === "") {
      setInstitutions([]);
    } else {
      setInstitutions(
        masterInsitutions.filter((ins) =>
          ins.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search]);

  return (
    <div className="bg-primary pt-40 pb-10 md:pb-20 xl:pb-32 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 px-4 ">
        <div className="flex items-center justify-center text-white font-poppins text-2xl/8 md:text-5xl md:leading-[-1] line lg:text-6xl font-bold text-center">
          Find Your Future Campus
        </div>
        <div className="text-gray-400 text-sm md:text-xl lg:w-4/5 flex items-center justify-center text-center font-poppins py-2 px-4">
          Discover institutions that use EduZenix for a seamless, modern, and
          connected student experience.
        </div>
      </div>
      <div className="w-[90%] xl:w-1/2 mt-10 relative">
        <input
          type="text"
          placeholder="Search for Universities or Colleges...."
          className="w-full font-poppins px-4 py-3 border text-white border-white/20 rounded-md text-sm  
    focus:outline-2 focus:outline-[#6a5af9] bg-transparent pl-14"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute top-3 left-5 text-gray-400 text-xl">
          <LuSearch />
        </div>
        {institutions?.length > 0 && (
          <div className="absolute top-12 mt-1 text-white font-poppins rounded-lg bg-gray-700 w-full z-10">
            {institutions?.map((institution, index) => {
              const Icon = icons[Math.floor(Math.random() * icons.length)];
              return (
                <button
                  key={index}
                  className="py-2 flex items-center justify-start gap-4 cursor-pointer px-6 w-full hover:bg-slate-600 ease-in-out duration-300"
                  onClick={() => handleSubmit(institution.id)}
                >
                  <div className="text-xl">
                    <Icon />
                  </div>
                  <div>
                    {" "}
                    <h1 className="text-white font-bold text-start font-poppins">
                      {institution.name}
                    </h1>
                    <p className="text-gray-300 text-sm text-start font-poppins">
                      {institution.location}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default StdHeroSection;
