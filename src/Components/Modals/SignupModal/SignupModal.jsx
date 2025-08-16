import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setModalClose } from "../../../store/modalSlice";
import { LuCircleCheckBig, LuPresentation, LuX } from "react-icons/lu";
import logo from "../../../assets/logo.png";
import EduzenixLabel from "../../Labels/EduzenixLabel";
import { freeTrialBenifits, MASTER_OTP } from "../../../utils/constant";
import InputBox from "../../UI/InputBox/InputBox";
import "../styles.css";
import useScreenType from "../../../hooks/useScreenType";
import { toast } from "react-toastify";
import Button from "../../UI/Button/Button";
import bgImagePortrait from "../../../assets/3d-image-portrait.png";
import bgImageLandscape from "../../../assets/3d-image-landScape.png";

const SignupModal = () => {
  const dispatch = useDispatch();
  const device = useScreenType();
  const modalData = useSelector((state) => state.modal.modalData);
  const handleClose = () => {
    dispatch(setModalClose());
  };
  const [formData, setFormData] = useState({
    institutionName: "",
    pocName: "",
    pocEmail: "",
    pocNumber: "",
    otp: "",
    agreeTermsAndConditions: false,
  });
  const [errors, setErrors] = useState({
    institutionName: "",
    pocName: "",
    pocEmail: "",
    otp: "",
    agreeTermsAndConditions: "",
  });
  const [otpSent, setOtpSent] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  const handleChecked = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      agreeTermsAndConditions: e.target.checked,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      agreeTermsAndConditions: "",
    }));
  };

  const handleSubmit = () => {
    if (formData.otp === MASTER_OTP) {
      toast.success(
        "Your sign up request has been submitted successfully!\nOur onboarding team will contact you shortly to get you started.",
        {
          style: { whiteSpace: "pre-line" },
        }
      );
      handleClose();
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        otp: "Invalid OTP",
      }));
    }
  };

  const handleSendOtp = () => {
    setOtpSent(true);
    toast.success("OTP Sent Successfully.");
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
              device === "desktop" ? "h-[90vh]" : "h-34"
            }  w-full xl:w-1/2 text-white rounded-t-lg xl:rounded-t-none xl:rounded-l-lg p-4 xl:p-8`}
            style={{
              backgroundImage: `url(${
                device === "desktop" ? bgImagePortrait : bgImageLandscape
              })`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className={`flex items-center ${
                device === "desktop" ? "justify-start" : "justify-between"
              }`}
            >
              <div className="flex items-center justify-start gap-4">
                <img
                  src={logo}
                  alt="logo"
                  className="w-8 h-8 xl:h-12 xl:w-12"
                />
                {/* <EduzenixLabel /> */}
                <h1
                  className="font-bold font-poppins text-4xl flex justify-center items-center 
    bg-gradient-to-r from-[#56d2db] to-[#241795] bg-clip-text text-transparent"
                >
                  EduZenix
                </h1>
              </div>
              <div>
                {device !== "desktop" && (
                  <button
                    className="text-sky-600 font-bold p-2 text-2xl rounded-full ease-in-out duration-300 cursor-pointer"
                    onClick={handleClose}
                  >
                    <LuX />
                  </button>
                )}
              </div>
            </div>
            <div className="text-white  xl:text-sky-500 text-sm xl:text-xl mt-2 font-bold font-poppins">
              Start Your {modalData.packageName} Package
            </div>
          </div>
          <div
            className={`bg-primary ${
              device === "desktop" ? "h-[90vh]" : "h-[70vh]"
            }  overflow-y-scroll w-full xl:w-1/2 xl:rounded-r-lg custom-scrollbar`}
          >
            <div className="flex items-center justify-between text-xl font-poppins pt-4 px-8">
              {device === "desktop" && (
                <>
                  <h1 className="text-white py-2 font-bold font-poppins">
                    Create Your Account
                  </h1>
                  <button
                    className="text-white hover:bg-secondry p-2 rounded-full ease-in-out duration-300 cursor-pointer"
                    onClick={handleClose}
                  >
                    <LuX />
                  </button>
                </>
              )}
            </div>
            {device === "desktop" && (
              <p className="pb-8 px-8 text-sm font-poppins text-gray-400">
                Just a few details to get you started.
              </p>
            )}

            <div className="px-4 xl:px-8">
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
                error={errors.pocName}
                required={true}
                label={"Point of Contact (POC) Name"}
                autoComplete="off"
                value={formData.pocName}
                name="pocName"
                onChange={handleChange}
                type="text"
                placeholder="e.g. Anand Kumar Karn"
              />
              <InputBox
                required={true}
                label={"Point of Contact (POC) Email"}
                autoComplete="off"
                value={formData.pocEmail}
                name="pocEmail"
                onChange={handleChange}
                type="text"
                placeholder="e.g. anand@eduzenix.com"
              />
              <InputBox
                label={"Point of Contact (POC) Number"}
                autoComplete="off"
                value={formData.pocNumber}
                name="pocNumber"
                onChange={handleChange}
                type="mobileNumber"
                placeholder="9876543210"
              />
              {otpSent && (
                <InputBox
                  error={errors.otp}
                  label={"Enter OTP"}
                  autoComplete="off"
                  value={formData.otp}
                  name="otp"
                  onChange={handleChange}
                  type="number"
                  placeholder="Enter OTP"
                />
              )}
              <div className="px-3 my-2">
                <p className="text-sm font-poppins block mb-1 text-white ">
                  By clicking Submit, you agree to our{" "}
                  <a href="" className="text-sky-400 hover:underline">
                    Terms & Conditions
                  </a>{" "}
                  and{" "}
                  <a href="" className="text-sky-400 hover:underline">
                    Privacy Policy.
                  </a>
                </p>
              </div>
              <div className="flex justify-between items-center gap-8 mb-4 xl:mt-4">
                <Button
                  label={"Cancel"}
                  variant="secondry"
                  onClick={handleClose}
                />
                {otpSent && <Button label={"Submit"} onClick={handleSubmit} />}

                {!otpSent && (
                  <Button label={"Send OTP"} onClick={handleSendOtp} />
                )}
                {/* <Button label={"Submit Request"} onClick={handleSubmit} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
