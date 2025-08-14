import React, { useRef } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import Terms from "../Components/sections/Terms/Terms";

const TermsOfService = () => {
  const containerRef = useRef(null);
  return (
    <div>
      <div ref={containerRef} className={`content-container`}>
        <NavBar scrollContainerRef={containerRef} />
        <Terms />
        <Footer />
      </div>
    </div>
  );
};

export default TermsOfService;
