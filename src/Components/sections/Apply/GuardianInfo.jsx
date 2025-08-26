import React from "react";
import InputBox from "../../UI/InputBox/InputBox";

const GuardianInfo = ({
  formData,
  errors,
  handleChange,
  setFormData,
  setErrors,
}) => {
  return (
    <div className="border-b border-gray-400/30 px-4 md:px-8 w-full py-4 font-poppins">
      <h1 className="text-white font-bold text-base xl:text-xl">
        Guardian's Information
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-8">
        <InputBox
          error={errors.guardianName}
          required={true}
          label={"Guardian's Name"}
          autoComplete="off"
          value={formData.guardianName}
          name="guardianName"
          onChange={handleChange}
          type="text"
          placeholder="e.g. ABC Kumar"
        />

        <InputBox
          error={errors.guardianContact}
          required={true}
          label={"Guardian's Contact"}
          autoComplete="off"
          value={formData.guardianContact}
          name="guardianContact"
          onChange={handleChange}
          type="mobileNumber"
          placeholder="e.g. 9876543210"
        />
      </div>
    </div>
  );
};

export default GuardianInfo;
