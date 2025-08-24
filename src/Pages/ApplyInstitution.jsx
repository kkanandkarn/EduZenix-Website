import React, { useRef } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { useSearchParams } from "react-router-dom";
import ApplyForm from "./../Components/sections/Apply/ApplyForm";
import { ToastContainer } from "react-toastify";

const ApplyInstitution = () => {
  const containerRef = useRef(null);

  return (
    <div className="bg-primary">
      <ToastContainer position="top-center" autoClose={3000} />
      <div ref={containerRef} className={`content-container`}>
        {" "}
        <NavBar scrollContainerRef={containerRef} />
        <ApplyForm />
        <Footer />
      </div>
    </div>
  );
};

export default ApplyInstitution;
