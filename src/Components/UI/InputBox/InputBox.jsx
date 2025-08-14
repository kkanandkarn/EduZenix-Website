import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import MobileInputBox from "./MobileInputBox";

const InputBox = ({
  error,
  required = false,
  label,
  autoComplete = "off",
  autoFocus = false,
  value,
  name,
  onChange,
  type = "text",
  ref,
  disabled = false,
  placeholder,
  options = [],
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownLabel, setDropdownLabel] = useState("");
  const handleDropDown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const [countryCodeOpen, setCountryCodeOpen] = useState();

  useEffect(() => {
    if (options.length) {
      let findLabel = options.find((v) => v.value === value);
      console.log("FIND LABEL: ", findLabel);
      setDropdownLabel(findLabel ? findLabel.label : `Choose ${label}`);
    }
  }, [options]);

  if (type === "text" || type === "password") {
    return (
      <div className="h-28 w-full px-2 flex flex-col gap-2">
        <label className="text-sm text-left font-poppins block mb-1 text-white">
          {label} {required && "*"}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full font-poppins px-4 py-3  border text-white ${
            error?.length ? "border-red-400" : "border-white/20"
          } rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a5af9] ${
            disabled ? "bg-gray-900 " : "bg-transparent"
          }`}
          autoFocus={autoFocus}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          ref={ref}
          disabled={disabled}
        />
        {error?.length > 0 && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    );
  }
  if (type === "number") {
    const handleNumberChange = (e) => {
      const val = e.target.value;
      // Allow only digits (and empty string for backspace/delete)
      if (/^\d*$/.test(val)) {
        onChange(e);
      }
    };
    return (
      <div className="h-28 w-full px-2 flex flex-col gap-2">
        <label className="text-sm text-left font-poppins block mb-1 text-white">
          {label} {required && "*"}
        </label>
        <input
          type="text"
          placeholder={placeholder}
          className={`w-full font-poppins px-4 py-3  border text-white ${
            error?.length ? "border-red-400" : "border-white/20"
          } rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a5af9] ${
            disabled ? "bg-gray-900 " : "bg-transparent"
          }`}
          autoFocus={autoFocus}
          name={name}
          value={value}
          onChange={handleNumberChange}
          required={required}
          ref={ref}
          disabled={disabled}
        />
        {error?.length > 0 && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    );
  }
  if (type === "textarea") {
    return (
      <div className="h-28 w-full px-2 flex flex-col gap-2">
        <label className="text-sm text-left font-poppins block mb-1 text-white">
          {label} {required && "*"}
        </label>
        <textarea
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-3 font-poppins  border text-white ${
            error?.length ? "border-red-400" : "border-white/20"
          } rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a5af9] ${
            disabled ? "bg-gray-900 " : "bg-transparent"
          }`}
          autoFocus={autoFocus}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          ref={ref}
          disabled={disabled}
          rows={100}
        />
        {error?.length > 0 && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    );
  }
  if (type === "mobileNumber") {
    const handleMobileChange = (e) => {
      const val = e.target.value;
      // Allow only digits (and empty string for backspace/delete)
      if (/^\d*$/.test(val)) {
        onChange(e);
      }
    };

    return (
      <MobileInputBox
        error={error}
        required={required}
        label={label}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        value={value}
        name={name}
        onChange={handleMobileChange}
        type={type}
        ref={ref}
        disabled={disabled}
        placeholder={placeholder}
      />
    );
  }
  if (type === "checkbox") {
    return (
      <div className="h-28 w-full px-2 flex flex-col gap-2">
        <label className="text-sm font-poppins block mb-1 text-white">
          {label} {required && "*"}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full font-poppins px-4 py-3  border text-white ${
            error?.length ? "border-red-400" : "border-white/20"
          } rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a5af9] ${
            disabled ? "bg-gray-900 " : "bg-transparent"
          }`}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          ref={ref}
          disabled={disabled}
        />
        {error?.length > 0 && <p className="text-red-400 text-sm">{error}</p>}
      </div>
    );
  }
  if (type === "dropdown") {
    return (
      <div className="h-28">
        <label className="text-sm block mb-1 text-gray-300">
          {label} {required && "*"}
        </label>
        <button
          className={`w-full px-4 py-3  border relative ${
            error.length ? "border-red-400" : "border-white/20"
          } rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a5af9] bg-transparent cursor-pointer flex items-center justify-start`}
          onClick={handleDropDown}
        >
          {dropdownLabel ?? `Choose ${label}`}
          <div className="absolute top-4 right-2">
            {dropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown size={15} />}
          </div>
        </button>
      </div>
    );
  }
};

export default InputBox;
