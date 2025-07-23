import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../UI/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { LuBuilding } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import useScreenType from "../../hooks/UseScreenType";

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const screenType = useScreenType();
  const currentPath = location.pathname;
  const [activeTab, setActiveTab] = useState("institution");

  useEffect(() => {
    setActiveTab(currentPath === "/" ? "institution" : "student");
  }, [currentPath]);

  return (
    <div className="bg-primary flex flex-col justify-center border-b border-zinc-800 shadow-lg fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-8 py-4 ">
        <div className="flex items-center justify-start gap-4">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <h1 className="font-bold text-xl flex justify-center items-center font-headline text-white">
            EduZenix
          </h1>
        </div>
        {screenType !== "mobile" && (
          <div className="flex items-center justify-between px-2 py-1 gap-2 bg-secondry text-white rounded-full font-poppins">
            <button
              className={`${
                activeTab === "institution" ? "bg-[#0F1729]" : "bg-secondry"
              } px-4 py-1 flex items-center justify-center gap-2 rounded-full cursor-pointer`}
              onClick={() => navigate("/")}
            >
              <LuBuilding /> For Insitutions
            </button>
            <button
              className={`${
                activeTab === "student" ? "bg-[#0F1729]" : "bg-secondry"
              } px-4 py-1 flex items-center justify-center gap-2 rounded-full cursor-pointer`}
              // onClick={() => navigate("/student")}
            >
              <TbUsers /> For Students
            </button>
          </div>
        )}

        <Button variant="primary" label={"Login"} onClick={() => {}} />
      </div>
      {screenType === "mobile" && (
        <div className="pt-2 pb-4 px-2 flex justify-center items-center">
          <div className="flex items-center justify-between px-2 py-1 gap-2 bg-secondry text-white rounded-full font-poppins">
            <button
              className={`${
                activeTab === "institution" ? "bg-[#0F1729]" : "bg-secondry"
              } px-4 py-1 flex items-center justify-center gap-2 rounded-full cursor-pointer text-sm`}
              onClick={() => navigate("/")}
            >
              <LuBuilding /> For Insitutions
            </button>
            <button
              className={`${
                activeTab === "student" ? "bg-[#0F1729]" : "bg-secondry"
              } px-4 py-1 flex items-center justify-center gap-2 rounded-full cursor-pointer text-sm`}
              // onClick={() => navigate("/student")}
            >
              <TbUsers /> For Students
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
