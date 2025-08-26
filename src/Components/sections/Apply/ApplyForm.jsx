import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { masterInsitutions } from "../../../utils/constant";
import ApplyFormStep1 from "./ApplyFormStep1";
import ApplyFormStep2 from "./ApplyFormStep2";

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
    course: "",
    department: "",
    academicQualification: [{}],
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
    course: "",
    department: "",
  });
  const [qualifications, setQualifications] = useState([
    {
      id: Date.now(),
      name: "",
      college: "",
      year: "",
      percentage: "",
      documents: [{ id: Date.now(), name: "", file: null, error: "" }],
      isPrimary: true,
    },
  ]);

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
        setStep={setStep}
        college={college}
        errors={errors}
        formData={formData}
        handleChange={handleChange}
        setFormData={setFormData}
        setErrors={setErrors}
        qualifications={qualifications}
        setQualifications={setQualifications}
      />
    ),
    2: (
      <ApplyFormStep2
        setStep={setStep}
        college={college}
        errors={errors}
        formData={formData}
        handleChange={handleChange}
        setFormData={setFormData}
        setErrors={setErrors}
        qualifications={qualifications}
        setQualifications={setQualifications}
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
