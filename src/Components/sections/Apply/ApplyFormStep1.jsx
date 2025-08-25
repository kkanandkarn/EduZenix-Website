import React from "react";
import PersonalInfo from "./PersonalInfo";
import GuardianInfo from "./GuardianInfo";
import CourseSelection from "./CourseSelection";
import AcademicQualifications from "./AcademicQualifications";
import Button from "../../UI/Button/Button";

const ApplyFormStep1 = ({
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
  return (
    <div className="bg-secondry w-full  rounded-lg font-poppins  border border-sky-300/30 shadow-md py-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl xl:text-3xl font-bold text-sky-500">
          {college?.name}
        </h1>
        <p className="text-gray-400 text-sm xl:text-sm text-center">
          Please fill out the form below to submit your application.
        </p>
        <PersonalInfo
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          setFormData={setFormData}
          setErrors={setErrors}
        />
        <GuardianInfo
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          setFormData={setFormData}
          setErrors={setErrors}
        />
        <CourseSelection
          formData={formData}
          errors={errors}
          handleChange={handleChange}
          setFormData={setFormData}
          setErrors={setErrors}
        />
        <AcademicQualifications
          qualifications={qualifications}
          setQualifications={setQualifications}
        />
      </div>
      <div className="pt-4 w-full flex items-center justify-center">
        {" "}
        <Button label={"Preview Application"} onClick={() => setStep(2)} />
      </div>
    </div>
  );
};

export default ApplyFormStep1;
