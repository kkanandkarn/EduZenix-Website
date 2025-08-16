import React, { useRef } from "react";
import NavBar from "../Components/NavBar/NavBar";
import StdHeroSection from "../Components/sections/Student/StdHeroSection";
import { ToastContainer } from "react-toastify";
import "./styles.css";
import CampusExp from "../Components/sections/Student/CampusExp";
import StdFaq from "../Components/sections/Student/StdFaq";
import Footer from "../Components/Footer/Footer";

const StudentPage = () => {
  const containerRef = useRef(null);

  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} />
      <div ref={containerRef} className={`content-container`}>
        <NavBar scrollContainerRef={containerRef} />
        <StdHeroSection />
        <CampusExp />
        <StdFaq />
        <Footer />
      </div>
    </div>
  );
};

export default StudentPage;
