import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { setModalClose } from "../../../store/modalSlice";
import { LuCircleCheckBig, LuPresentation, LuX } from "react-icons/lu";
import logo from "../../../assets/logo.png";
import EduzenixLabel from "../../Labels/EduzenixLabel";
import { demoBenifits } from "../../../utils/constant";
import InputBox from "../../UI/InputBox/InputBox";
import "../styles.css";
import useScreenType from "../../../hooks/UseScreenType";
import { toast } from "react-toastify";
import Button from "../../UI/Button/Button";

const DemoModal = () => {
  const dispatch = useDispatch();
  const device = useScreenType();
  const handleClose = () => {
    dispatch(setModalClose());
  };
  const [formData, setFormData] = useState({
    fullName: "",
    institutionName: "",
    workEmail: "",
    phoneNumber: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    institutionName: "",
    workEmail: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    toast.success(
      "Your demo request is confirmed.\nOur team will connect with you shortly.",
      {
        style: { whiteSpace: "pre-line" },
      }
    );
    handleClose();
  };

  return (
    <div
      className="absolute inset-0  w-[100%] max-h-[100vh] flex items-center justify-center z-999"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="w-[95%] xl:w-[60%] rounded-lg shadow-lg flex flex-col">
        <div
          className={`w-full h-full flex ${
            device === "desktop" ? "flex-row" : "flex-col"
          } items-center justify-center rounded-lg border border-gray-700`}
        >
          <div
            className={`bg-secondry ${
              device === "desktop" ? "h-[90vh]" : "h-40"
            }  w-full xl:w-1/2 text-white xl:rounded-l-lg p-4 xl:p-8`}
          >
            <div
              className={`flex items-center ${
                device === "desktop" ? "justify-start" : "justify-between"
              }`}
            >
              <div className="flex items-center justify-start gap-4">
                <img src={logo} alt="logo" className="w-8 h-8" />
                <EduzenixLabel />
              </div>
              <div>
                {device !== "desktop" && (
                  <button
                    className="text-white hover:bg-secondry p-2 rounded-full ease-in-out duration-300 cursor-pointer"
                    onClick={handleClose}
                  >
                    <LuX />
                  </button>
                )}
              </div>
            </div>
            <div className="text-white text-sm xl:text-xl mt-4 xl:mt-10 font-bold font-poppins">
              Get a Personalized Demo
            </div>
            <div className="text-zinc-400 text-xs xl:text-base mt-2 font-poppins">
              See how our platform can revolutionize your campus management.
            </div>
            {device === "desktop" && (
              <>
                {/* <div className="w-full h-1/2 text-sky-600 flex items-center justify-center">
                  <div className="h-2/3">
                    {" "}
                    <LuPresentation style={{ height: "100%", width: "100%" }} />
                  </div>
                </div> */}
                <div className="mt-8">
                  {demoBenifits.map((benifit, index) => (
                    <div
                      key={index}
                      className="font-poppins  flex items-center justify-start gap-4"
                    >
                      <div className="text-green-600 text-xl">
                        <LuCircleCheckBig />
                      </div>
                      <p className="text-white py-1"> {benifit}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div
            className={`bg-primary ${
              device === "desktop" ? "h-[90vh]" : "h-[60vh]"
            }  overflow-y-scroll w-full xl:w-1/2 xl:rounded-r-lg custom-scrollbar`}
          >
            <div className="flex items-center justify-between text-xl font-poppins py-4 px-8">
              {device === "desktop" && (
                <>
                  <h1 className="text-white py-2 font-bold">Request a Demo</h1>
                  <button
                    className="text-white hover:bg-secondry p-2 rounded-full ease-in-out duration-300 cursor-pointer"
                    onClick={handleClose}
                  >
                    <LuX />
                  </button>
                </>
              )}
            </div>
            <div className="px-4 xl:px-8">
              <InputBox
                error={errors.fullName}
                required={true}
                label={"Full Name"}
                autoComplete="off"
                value={formData.fullName}
                name="fullName"
                onChange={handleChange}
                type="text"
                placeholder="e.g. Anand Kumar Karn"
              />
              <InputBox
                error={errors.institutionName}
                required={true}
                label={"Institution Name"}
                autoComplete="off"
                value={formData.institutionName}
                name="institutionName"
                onChange={handleChange}
                type="text"
                placeholder="e.g. Anand University"
              />
              <InputBox
                error={errors.workEmail}
                required={true}
                label={"Work Email"}
                autoComplete="off"
                value={formData.workEmail}
                name="workEmail"
                onChange={handleChange}
                type="text"
                placeholder="e.g. anand@eduzenix.com"
              />
              <InputBox
                label={"Phone Number (Optional)"}
                autoComplete="off"
                value={formData.phoneNumber}
                name="phoneNumber"
                onChange={handleChange}
                type="mobileNumber"
                placeholder="9876543210"
              />

              <InputBox
                label={"Message (Optional)"}
                autoComplete="off"
                value={formData.message}
                name="message"
                onChange={handleChange}
                type="textarea"
                placeholder="Tell us about your institution's needs...."
              />
              <div className="flex justify-between items-center gap-8 mt-2 mb-4 xl:mt-8">
                <Button
                  label={"Cancel"}
                  variant="secondry"
                  onClick={handleClose}
                />
                <Button label={"Submit Request"} onClick={handleSubmit} />
              </div>
            </div>
          </div>
          {device !== "desktop" && (
            <div className="bg-secondry w-full h-20 overflow-y-scroll custom-scrollbar">
              <div className="px-2 py-1">
                {demoBenifits.map((benifit, index) => (
                  <div
                    key={index}
                    className="font-poppins  flex items-center justify-start gap-4"
                  >
                    <div className="text-green-600 text-base">
                      <LuCircleCheckBig />
                    </div>
                    <p className="text-white py-1 text-xs"> {benifit}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
