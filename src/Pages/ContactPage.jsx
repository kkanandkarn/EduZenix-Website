import React, { useEffect, useRef, useState } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";
import useScreenType from "../hooks/useScreenType";
import ContactHero from "../Components/sections/Conact/ContactHero";
import ContactDetails from "../Components/sections/Conact/ContactDetails";

const ContactPage = () => {
  const containerRef = useRef(null);

  return (
    <div>
      {" "}
      <ToastContainer position="top-center" autoClose={3000} />
      <div ref={containerRef} className={`content-container`}>
        <NavBar scrollContainerRef={containerRef} />
        <ContactHero />
        <ContactDetails />
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
