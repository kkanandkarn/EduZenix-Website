import React, { useEffect, useRef, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import InsHeroSection from "../Components/sections/Institution/InsHeroSection";
import InsPartner from "../Components/sections/Institution/InsPartner";
import InsFeature from "../Components/sections/Institution/InsFeature";
import InsAdvantage from "../Components/sections/Institution/InsAdvantage";
import InsPlan from "../Components/sections/Institution/InsPlan";
import InsTestimonials from "../Components/sections/Institution/InsTestimonials";
import InsFaq from "../Components/sections/Institution/InsFaq";
import Footer from "../Components/Footer/Footer";
import "./styles.css";
import { useSelector } from "react-redux";
import useScreenType from "../hooks/UseScreenType";
import { ToastContainer } from "react-toastify";
import DemoModal from "../Components/Modals/DemoModal/DemoModal";
import FreeTrialModal from "../Components/Modals/FreeTrialModal/FreeTrialModal";
import SignupModal from "../Components/Modals/SignupModal/SignupModal";
import AboutHero from "../Components/sections/About/AboutHero";
import Leadership from "../Components/sections/About/Leadership";

const AboutPage = () => {
  const modalData = useSelector((state) => state.modal);
  const [modalName, setModalName] = useState("");
  const device = useScreenType();
  const containerRef = useRef(null);
  useEffect(() => {
    setModalName(modalData.modalName);
  }, [modalData]);

  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} />
      <div ref={containerRef} className={`content-container`}>
        <NavBar scrollContainerRef={containerRef} />
        <AboutHero />
        <Leadership />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
