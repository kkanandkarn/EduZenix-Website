import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import InsHeroSection from "../Components/sections/Institution/InsHeroSection";
import InsPartner from "../Components/sections/Institution/InsPartner";
import InsFeature from "../Components/sections/Institution/InsFeature";
import InsAdvantage from "../Components/sections/Institution/InsAdvantage";
import InsPlan from "../Components/sections/Institution/InsPlan";
import InsTestimonials from "../Components/sections/Institution/InsTestimonials";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <InsHeroSection />
      <InsPartner />
      <InsFeature />
      <InsAdvantage />
      <InsPlan />
      <InsTestimonials />
    </div>
  );
};

export default HomePage;
