import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../../store/modalSlice";
import BgVideo from "../../../assets/bg-video.mp4";
import bgImagePortrait from "../../../assets/3d-image-portrait.png";
import bgImageLandscape from "../../../assets/3d-image-landScape.png";
import useScreenType from "../../../hooks/useScreenType";

const InsHeroSection = () => {
  const device = useScreenType();
  const dispatch = useDispatch();
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
          Transform Your Institution with AI-Driven EduZenix
        </div>
        <div className="text-gray-400 text-sm md:text-2xl lg:w-4/5 flex items-center justify-center text-center font-poppins py-2 px-4">
          Unlock smarter operations — from intelligent admissions to automated
          academic workflows. EduZenix harnesses AI to simplify, optimize, and
          future-proof your entire campus management.
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col lg:flex-row items-center justify-center pt-10 gap-10 w-full px-4 lg:px-10 xl:px-0 xl:w-2/3 z-10">
        <div className="border p-6 rounded-lg text-center xl:text-start border-sky-300/30 w-full md:w-3/5  transition-shadow duration-300 hover:shadow-md hover:shadow-sky-400/40">
          <h1 className="text-white font-bold font-poppins text-base lg:text-xl">
            Ready to Transform Your Campus?
          </h1>
          <p className="text-gray-400 py-2 font-poppins text-sm lg:text-base">
            Join the growing number of institutions leveraging EduZenix to build
            a smarter, more connected campus.
          </p>
          <div className="pt-4 pb-2 flex justify-center xl:justify-start items-center">
            <Button
              label={"Schedule a Free Demo"}
              iconSuffix={<FaArrowRight />}
              onClick={handleDemoModal}
            />
          </div>
        </div>
        <div className="border p-6 rounded-lg text-center xl:text-start border-sky-300/30 w-full md:w-3/5  transition-shadow duration-300 hover:shadow-md hover:shadow-sky-400/40">
          <h1 className="text-white font-bold font-poppins text-base lg:text-xl">
            Get full access to all features.
          </h1>
          <p className="text-gray-400 pt-2 text-sm font-poppins lg:text-base">
            Start your free trial today and explore the platform. No credit card
            required.
          </p>
          <div className="pt-4 pb-2 flex justify-center xl:justify-start items-center">
            <Button
              label={"Start Free Trial"}
              iconSuffix={<FaArrowRight />}
              variant="secondry"
              onClick={handleFreeTrailModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsHeroSection;
