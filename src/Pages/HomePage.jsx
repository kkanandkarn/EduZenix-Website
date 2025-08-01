import React, { useEffect } from "react";
import NavBar from "../Components/NavBar/NavBar";
import InsHeroSection from "../Components/sections/Institution/InsHeroSection";
import InsPartner from "../Components/sections/Institution/InsPartner";
import InsFeature from "../Components/sections/Institution/InsFeature";
import InsAdvantage from "../Components/sections/Institution/InsAdvantage";
import InsPlan from "../Components/sections/Institution/InsPlan";
import InsTestimonials from "../Components/sections/Institution/InsTestimonials";
import InsFaq from "../Components/sections/Institution/InsFaq";
import Footer from "../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import DemoModel from "../Components/Models/DemoModel";
import { setModelClose } from "../store/modelSlice";
import "./styles.css";
import useScreenType from "../hooks/UseScreenType";

const HomePage = () => {
  const modelName = useSelector((state) => state.model.model);
  const screenType = useScreenType();
  const dispatch = useDispatch();
  const handleModelClose = () => {
    dispatch(setModelClose());
  };
  console.log("SCREEN TYPE: ", screenType);

  useEffect(() => {
    if (screenType === "mobile") {
      if (modelName !== "") {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
      return () => {
        document.body.classList.remove("no-scroll");
      };
    } else {
      document.body.classList.add("content-container");
    }

    // Clean up on unmount just in case
  }, [modelName, screenType]);
  console.log("screen type: ", screenType);

  return (
    <div>
      <div className={``}>
        <NavBar />

        <InsHeroSection />
        <InsPartner />
        <InsFeature />
        <InsAdvantage />
        <InsPlan />
        <InsTestimonials />
        <InsFaq />
        <Footer />
      </div>
      {modelName === "demo" && <DemoModel onClose={handleModelClose} />}
    </div>
  );
};

export default HomePage;
