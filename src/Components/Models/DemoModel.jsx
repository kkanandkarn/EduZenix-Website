import React from "react";
import Button from "../UI/Button/Button";

const DemoModel = ({ onClose }) => {
  return (
    <div
      className="absolute inset-0  w-[100%] max-h-[100vh] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      {/* Header */}
      <div className="w-[30%] max-h-[60vh] bg-white border-2 border-zinc-400 rounded-lg shadow-lg m-auto flex flex-col">
        Demo
        <Button label={"Close"} onClick={onClose} />
      </div>
    </div>
  );
};

export default DemoModel;
