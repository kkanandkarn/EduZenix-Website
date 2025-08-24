import React, { useRef, useState } from "react";
import { LuUpload } from "react-icons/lu";
import InputBox from "../../UI/InputBox/InputBox";

const PersonalInfo = ({
  formData,
  errors,
  handleChange,
  setFormData,
  setErrors,
}) => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [permanentChecked, setPermanentChecked] = useState(false);
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "other" },
  ];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };
  const handleGenderChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      gender: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      gender: "",
    }));
  };
  const handleCheckboxChange = (checked) => {
    if (checked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        permanentAddress: formData.currentAddress,
      }));
      setErrors((prevErrors) => ({
        ...prevErrors,
        permanentAddress: "",
      }));
    }
  };

  return (
    <div className="border-t border-b border-gray-400/30 px-4 md:px-8 w-full pt-4 mt-6 font-poppins">
      <h1 className="text-white font-bold text-base xl:text-xl">
        Personal Information
      </h1>

      <div className="flex flex-col items-center justify-center mt-4 xl:mt-0">
        <p className="mb-2 text-gray-300 text-sm xl:text-base">
          Recent Passport Size Picture
        </p>

        {/* Hidden input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        {!file ? (
          // Show Upload button
          <button
            onClick={handleButtonClick}
            className="h-28 w-28 xl:h-36 xl:w-36 text-3xl xl:text-5xl rounded-full text-white bg-gray-300/30 cursor-pointer flex items-center justify-center"
          >
            <LuUpload />
          </button>
        ) : (
          // Show uploaded file preview with hover overlay
          <div
            className="relative h-28 w-28 xl:h-36 xl:w-36 rounded-full border border-gray-400/30 overflow-hidden group cursor-pointer"
            onClick={handleButtonClick}
          >
            <img
              src={URL.createObjectURL(file)}
              alt="Preview"
              className="h-full w-full object-cover rounded-full"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <LuUpload className="text-white text-4xl" />
            </div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-8">
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
          error={errors.email}
          required={true}
          label={"Email"}
          autoComplete="off"
          value={formData.email}
          name="email"
          onChange={handleChange}
          type="text"
          placeholder="e.g. anand@gmail.com"
        />
        <InputBox
          error={errors.mobileNumber}
          required={true}
          label={"Mobile Number"}
          autoComplete="off"
          value={formData.mobileNumber}
          name="mobileNumber"
          onChange={handleChange}
          type="mobileNumber"
          placeholder="e.g. 9876543210"
        />
        <InputBox
          error={errors.gender}
          required={true}
          label={"Gender"}
          value={formData.gender}
          onChange={handleGenderChange}
          dropdownLabel={"Choose Gender"}
          type="dropdown"
          options={genderOptions}
        />
        <InputBox
          error={errors.currentAddress}
          required={true}
          label={"Current Address"}
          autoComplete="off"
          value={formData.currentAddress}
          name="currentAddress"
          onChange={handleChange}
          type="textarea"
          placeholder="e.g. 01, abc colony, xyz city, state-123456"
        />
        <InputBox
          error={errors.permanentAddress}
          required={true}
          label={"Permanent Address"}
          autoComplete="off"
          value={formData.permanentAddress}
          name="permanentAddress"
          onChange={handleChange}
          type="textarea"
          placeholder="e.g. 01, abc colony, xyz city, state-123456"
        />
      </div>
      <div className="flex items-center justify-end">
        <div className="">
          <InputBox
            error={""}
            required={false}
            label={"Same as Current Address"}
            autoComplete="off"
            value={permanentChecked}
            name="sameasaddress"
            onChange={handleCheckboxChange}
            type="checkbox"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
