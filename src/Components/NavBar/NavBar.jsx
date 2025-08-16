import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import Button from "../UI/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { LuBuilding } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import useScreenType from "../../hooks/useScreenType";
import { useSelector } from "react-redux";

const NavBar = ({ scrollContainerRef }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const screenType = useScreenType();
  const currentPath = location.pathname;
  const [activeTab, setActiveTab] = useState("institution");
  const modalName = useSelector((state) => state.modal.modalName);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setIsScrolled(container.scrollTop > 50);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [scrollContainerRef]);

  useEffect(() => {
    setActiveTab(currentPath.includes("student") ? "student" : "institution");
  }, [currentPath]);

  return (
    <div
      className={`flex flex-col justify-center fixed top-0 xl:right-2 w-full transition-colors duration-300 ${
        modalName === "" ? "z-50" : ""
      } ${
        isScrolled
          ? "bg-primary border-b border-zinc-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* <div
      className={`bg-primary flex flex-col justify-center border-b border-zinc-800 shadow-lg fixed top-0 w-full ${
        modalName === "" ? "z-50" : ""
      }`}
    > */}
      <div className="flex justify-between items-center px-8 py-4 ">
        <div className="flex items-center justify-start gap-4">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <h1 className="font-bold font-poppins text-xl flex justify-center items-center text-white">
            EduZenix
          </h1>
        </div>
        {screenType !== "mobile" && (
          <div className="flex items-center justify-between px-2 py-1 gap-2 bg-secondry text-white rounded-full font-poppins">
            <button
              className={`${
                activeTab === "institution" ? "bg-primary" : "bg-secondry"
              } px-4 py-1 flex items-center justify-center gap-2 rounded-full hover:bg-primary cursor-pointer ease-in-out duration-300`}
              onClick={() => navigate("/")}
            >
              <LuBuilding /> For Insitutions
            </button>
            <button
              className={`${
                activeTab === "student" ? "bg-primary" : "bg-secondry"
              } px-4 py-1 flex items-center justify-center gap-2 rounded-full hover:bg-primary cursor-pointer`}
              onClick={() => navigate("/student")}
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
                activeTab === "institution" ? "bg-primary" : "bg-secondry"
              } px-4 py-1 flex items-center justify-center gap-2 rounded-full cursor-pointer text-sm`}
              onClick={() => navigate("/")}
            >
              <LuBuilding /> For Insitutions
            </button>
            <button
              className={`${
                activeTab === "student" ? "bg-primary" : "bg-secondry"
              } px-4 py-1 flex items-center justify-center gap-2 rounded-full cursor-pointer text-sm`}
              onClick={() => navigate("/student")}
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
