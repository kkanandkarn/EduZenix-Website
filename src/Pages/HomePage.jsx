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
import DemoModal from "../Components/Modals/DemoModal";
import useScreenType from "../hooks/UseScreenType";
import { ToastContainer } from "react-toastify";

const HomePage = () => {
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
        <InsHeroSection />
        <InsPartner />
        <InsFeature />
        <InsAdvantage />
        <InsPlan />
        <InsTestimonials />
        <InsFaq />
        <Footer />
      </div>

      {modalName === "demo" && <DemoModal />}
    </div>
  );
};

export default HomePage;
