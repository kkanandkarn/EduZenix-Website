import React, { useEffect, useRef, useState } from "react";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { useSearchParams } from "react-router-dom";
import ApplyForm from "./../Components/sections/Apply/ApplyForm";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import ConfirmModal from "../Components/Modals/ConfirmModal/ConfirmModal";

const ApplyInstitution = () => {
  const containerRef = useRef(null);
  const modalData = useSelector((state) => state.modal);
  const [modalName, setModalName] = useState("");

  useEffect(() => {
    setModalName(modalData.modalName);
  }, [modalData]);

  return (
    <div className="bg-primary">
      <ToastContainer position="top-center" autoClose={3000} />
      <div
        ref={containerRef}
        className={`content-container md:relative xl:static`}
      >
        {" "}
        <NavBar scrollContainerRef={containerRef} />
        <ApplyForm />
        <div className="md:absolute xl:static w-full md:bottom-0 md:left-0">
          <Footer />
        </div>
      </div>
      {modalName === "confirmDelete" && <ConfirmModal />}
    </div>
  );
};

export default ApplyInstitution;
