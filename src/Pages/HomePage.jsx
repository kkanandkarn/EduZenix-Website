import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import InsHeroSection from "../Components/sections/Institution/InsHeroSection";
import InsPartner from "../Components/sections/Institution/InsPartner";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <InsHeroSection />
      <InsPartner />
    </div>
  );
};

export default HomePage;
