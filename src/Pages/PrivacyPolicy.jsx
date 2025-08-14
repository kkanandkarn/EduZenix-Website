import React, { useRef } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import Policy from "../Components/sections/Policy/Policy";

const PrivacyPolicy = () => {
  const containerRef = useRef(null);
  return (
    <div>
      <div ref={containerRef} className={`content-container`}>
        <NavBar scrollContainerRef={containerRef} />
        <Policy />
        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
