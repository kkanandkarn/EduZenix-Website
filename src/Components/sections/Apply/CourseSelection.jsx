import React from "react";
import InputBox from "../../UI/InputBox/InputBox";

const CourseSelection = ({
  formData,
  errors,
  handleChange,
  setFormData,
  setErrors,
}) => {
  const courseOptions = [
    { value: "btech", label: "B.Tech" },
    { value: "mtech", label: "M.Tech" },
    { value: "phd", label: "P.H.D" },
  ];
  const departmentOptions = [
    { value: "cse", label: "Computer Science" },
    { value: "mechanical", label: "Mechanical" },
    { value: "electrical", label: "Electrical" },
    { value: "civil", label: "Civil" },
  ];

  const handleCourseChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      course: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      course: "",
    }));
  };
  const handleDepartmentChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      department: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      department: "",
    }));
  };
  console.log("course: ", formData.course);
  return (
    <div className="border-b border-gray-400/30 px-4 md:px-8 w-full pt-4 font-poppins">
      <h1 className="text-white font-bold text-base xl:text-xl">
        Course Selection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-8">
        <InputBox
          error={errors.course}
          required={true}
          label={"Course"}
          value={formData.course}
          onChange={handleCourseChange}
          type="dropdown"
          options={courseOptions}
        />
        <InputBox
          error={errors.course}
          required={true}
          label={"Department"}
          value={formData.department}
          onChange={handleDepartmentChange}
          type="dropdown"
          options={departmentOptions}
          disabled={formData.course === ""}
        />
      </div>
    </div>
  );
};

export default CourseSelection;
