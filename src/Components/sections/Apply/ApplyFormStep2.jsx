import React from "react";
import Button from "../../UI/Button/Button";
import { toast } from "react-toastify";

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
  const handleSubmit = () => {
    toast.success("OTP Sent Successfully");
  };
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
      <div className="p-4 w-full flex items-center justify-between">
        {" "}
        <Button
          variant="secondry"
          label={"Back to Edit"}
          onClick={() => setStep(1)}
        />
        <Button label={"Send OTP and Proceed"} onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default ApplyFormStep2;
