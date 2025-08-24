import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { masterInsitutions } from "../../../utils/constant";
import ApplyFormStep1 from "./ApplyFormStep1";

const ApplyForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [college, setCollege] = useState();
  const navigate = useNavigate();
  const institutionId = searchParams.get("institutionId");
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    gender: "",
    currentAddress: "",
    permanentAddress: "",
    guardianName: "",
    guardianContact: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    gender: "",
    currentAddress: "",
    permanentAddress: "",
    guardianName: "",
    guardianContact: "",
  });

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

  const steps = {
    1: (
      <ApplyFormStep1
        college={college}
        errors={errors}
        formData={formData}
        handleChange={handleChange}
        setFormData={setFormData}
        setErrors={setErrors}
      />
    ),
  };

  useEffect(() => {
    if (!institutionId) {
      navigate("/student");
    }

    const collegeData = masterInsitutions.find(
      (ins) => ins.id === institutionId
    );
    if (collegeData) {
      setCollege(collegeData);
    }
  }, [institutionId]);

  return (
    <div className="pt-40 xl:pt-28 pb-10 md:pb-20 p-2 xl:p-24">
      {steps[step]}
    </div>
  );
};

export default ApplyForm;
