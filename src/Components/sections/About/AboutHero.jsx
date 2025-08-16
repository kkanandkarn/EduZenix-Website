import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../../store/modalSlice";
import BgVideo from "../../../assets/bg-video.mp4";
import bgImagePortrait from "../../../assets/3d-image-portrait.png";
import bgImageLandscape from "../../../assets/3d-image-landScape.png";
import useScreenType from "../../../hooks/useScreenType";
import { LuTarget, LuEye, LuBookOpen } from "react-icons/lu";

const AboutHero = () => {
  const dispatch = useDispatch();
  const device = useScreenType();
  const handleDemoModal = () => {
    dispatch(setModalOpen({ modalName: "demo", modalData: "" }));
  };
  const handleFreeTrailModal = () => {
    dispatch(
      setModalOpen({
        modalName: "freeTrial",
        modalData: {
          packageId: 1,
          packageName: "15 Days Free Trial",
        },
      })
    );
  };

  return (
    // <div className="pt-40 pb-10 md:pb-20 flex flex-col items-center justify-center">
    <div className="relative pt-40 pb-10 md:pb-20 flex flex-col items-center justify-center overflow-hidden bg-secondry">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      >
        <source src={BgVideo} type="video/mp4" />
      </video>

      <div className="flex flex-col items-center justify-center gap-4 px-4 z-10">
        <div className="flex items-center justify-center text-white font-poppins text-2xl/8 md:text-5xl md:leading-[-1] line lg:text-6xl font-bold text-center">
          Abous Us
        </div>
        <div className="text-gray-400 text-sm md:text-2xl lg:w-4/5 flex items-center justify-center text-center font-poppins py-2 px-4">
          We are dedicated to revolutionizing education management by providing
          innovative, seamless, and comprehensive solutions for institutions
          worldwide.
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row items-center justify-center pt-10 gap-10 w-full px-4 lg:px-10 xl:px-0 xl:w-[90%] z-10">
        <div className="border p-6 rounded-lg text-center xl:text-start border-sky-300/30 w-full md:w-3/5  transition-shadow duration-300 hover:shadow-md hover:shadow-sky-400/40">
          <div className="flex items-center justify-start gap-2">
            <div className="flex items-center justify-center text-2xl text-center p-2 rounded-full bg-sky-900 text-sky-500">
              <LuTarget />
            </div>
            <h1 className="text-white font-bold font-poppins text-base lg:text-2xl">
              Our Mission
            </h1>
          </div>

          <p className="text-gray-300 py-2 font-poppins text-sm lg:text-base">
            To empower educational institutions with a unified, cloud-based
            platform that streamlines administrative tasks, enhances
            communication, and fosters a collaborative environment, allowing
            educators to focus on what matters most.
          </p>
        </div>
        <div className="border p-6 rounded-lg text-center xl:text-start border-sky-300/30 w-full md:w-3/5  transition-shadow duration-300 hover:shadow-md hover:shadow-sky-400/40">
          <div className="flex items-center justify-start gap-2">
            <div className="flex items-center justify-center text-2xl text-center p-2 rounded-full bg-sky-900 text-sky-500">
              <LuEye />
            </div>
            <h1 className="text-white font-bold font-poppins text-base lg:text-2xl">
              Our Vision
            </h1>
          </div>

          <p className="text-gray-300 pt-2 text-sm font-poppins lg:text-base">
            To be the global leader in educational technology, creating a future
            where every campus is a smart, connected, and efficient ecosystem
            that enriches the learning experience for every student, faculty
            member, and administrator.
          </p>
        </div>
        <div className="border p-6 rounded-lg text-center xl:text-start border-sky-300/30 w-full md:w-3/5  transition-shadow duration-300 hover:shadow-md hover:shadow-sky-400/40">
          <div className="flex items-center justify-start gap-2">
            <div className="flex items-center justify-center text-2xl text-center p-2 rounded-full bg-sky-900 text-sky-500">
              <LuBookOpen />
            </div>
            <h1 className="text-white font-bold font-poppins text-base lg:text-2xl">
              Our Story
            </h1>
          </div>
          <p className="text-gray-300 pt-2 text-sm font-poppins lg:text-base">
            Founded by a team of educators and technologists, EduZenix was born
            from a shared passion for improving education. We saw firsthand the
            challenges of fragmented systems and manual processes. So, we set
            out to build the solution we wished existed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
