import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const MobileInputBox = ({
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
}) => {
  return (
    <div className="h-28 w-full px-2 flex flex-col gap-2 relative">
      <label className="text-sm font-poppins block mb-1 text-white">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-24 py-3 font-poppins  border text-white ${
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
      <button className="absolute top-9 px-1 left-4 py-2 text-white border-r border-r-white/20 flex items-center justify-center gap-2 cursor-pointer">
        <img src="https://flagcdn.com/16x12/in.png" alt="flag" /> <p>91</p>{" "}
        <div>
          <IoIosArrowDown />
        </div>
      </button>
      {error?.length > 0 && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  );
};

export default MobileInputBox;
