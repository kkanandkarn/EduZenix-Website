import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import { toast } from "react-toastify";
import OTPInput from "../../UI/InputBox/OtpInput";

const ApplyFormStep2 = ({
  setStep,
  college,
  formData,
  handleChange,
  errors,
  setFormData,
  setErrors,
  qualifications,
  setQualifications,
}) => {
  const [otp, setOtp] = useState("");
  const handleOTPChange = (OTP) => {
    setOtp(OTP);
  };
  const handleSubmit = () => {
    if (otp.trim() === "1100") {
      toast.success("OTP Verified Successfully.");
    } else {
      toast.error("Invalid OTP");
    }
  };
  console.log("OTP: ", otp);

  return (
    <div className="bg-secondry w-full  rounded-lg font-poppins  border border-sky-300/30 shadow-md py-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl xl:text-3xl font-bold text-sky-500">
          {college?.name}
        </h1>
        <p className="text-gray-400 text-sm xl:text-sm text-center">
          Please fill out the form below to submit your application.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="border-t border-b border-gray-400/30 px-4 mt-10 w-full">
          <div className="flex flex-col items-center mt-8 justify-center">
            <h1 className=" text-base xl:text-xl font-bold font-poppins text-white text-center">
              Verify Your Email
            </h1>
            <p className="text-gray-300 font-poppins text-xs mt-1 xl:text-sm text-center">
              An OTP has been sent to your email address: abc@xyz.com
            </p>
          </div>
          <div className="flex items-center justify-center w-full py-10">
            <OTPInput length={4} handleChange={handleOTPChange} />
          </div>
        </div>
      </div>
      <div className="p-4 w-full md:mt-8  flex items-center justify-center">
        {" "}
        <Button
          label={"Verify OTP and Submit Application"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ApplyFormStep2;
