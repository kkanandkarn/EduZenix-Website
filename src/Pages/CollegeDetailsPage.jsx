import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { masterInsitutions } from "../utils/constant";
import { ToastContainer } from "react-toastify";
import NavBar from "../Components/NavBar/NavBar";
import topImage from "../assets/3d-image-landscape.png";
import CollegeInfo from "../Components/sections/CollegeDetails/CollegeInfo";
import Footer from "../Components/Footer/Footer";
import { useDispatch } from "react-redux";
import { collegeDetails } from "../store/collegeSlice";

const CollegeDetailsPage = () => {
  const containerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const institutionId = searchParams.get("institutionId");

  useEffect(() => {
    if (!institutionId) {
      console.log("INSITUTION ID: ", institutionId);
      navigate("/student");
      return;
    }
    const collegeData = masterInsitutions.find(
      (ins) => ins.id === institutionId
    );
    if (collegeData) {
      dispatch(
        collegeDetails({
          collegeId: institutionId,
          collegeDetails: collegeData,
        })
      );
    }
  }, [institutionId]);

  return (
    <div className="bg-primary">
      <ToastContainer position="top-center" autoClose={3000} />
      <div ref={containerRef} className={`content-container`}>
        <NavBar scrollContainerRef={containerRef} />
        <CollegeInfo />
        <Footer />
      </div>
    </div>
  );
};

export default CollegeDetailsPage;
