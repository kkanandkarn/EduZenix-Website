import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalClose } from "../../../store/modalSlice";
import { CiWarning } from "react-icons/ci";
import warningImg from "../../../assets/warning-sign.png";
import Button from "../../UI/Button/Button";

const ConfirmModal = () => {
  const modalData = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setModalClose());
  };
  const handleSubmit = () => {
    modalData.modalData.deleteFunction(modalData.modalData.id);
    dispatch(setModalClose());
  };

  return (
    <div
      className="absolute inset-0  w-[100%] max-h-[100vh] flex items-center justify-center z-999 font-poppins"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      {" "}
      <div className="w-[95%] md:w-[40%] lg:w-[40%] xl:w-[30%] bg-secondry rounded-lg shadow-lg flex flex-col p-4">
        <div className="flex items-center justify-center w-full p-4">
          <img src={warningImg} alt="image" className="w-28 h-28" />
        </div>
        <div className="flex items-center justify-center mt-2">
          <p className="text-gray-300 text-xs md:text-sm text-center">
            Are you sure want to remove this qualification?
          </p>
        </div>
        <div className="mt-8 flex items-center justify-between px-2">
          {" "}
          <Button variant="secondry" label={"Cancel"} onClick={handleClose} />
          <Button variant="primary" label={"Confrim"} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
