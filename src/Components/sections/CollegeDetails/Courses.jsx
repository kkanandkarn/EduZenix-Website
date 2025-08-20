import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { masterInsitutions } from "../../../utils/constant";
import useScreenType from "../../../hooks/useScreenType";
import CourseMobile from "./CourseMobile";
import CourseDesktop from "./CourseDesktop";

const Courses = ({ college }) => {
  const device = useScreenType();

  return (
    <div className="bg-secondry min-h-40 w-full rounded-lg  px-4 ">
      {" "}
      {college?.courses ? (
        <div className="py-4 md:px-4">
          {device === "mobile" ? (
            <CourseMobile college={college} />
          ) : (
            <CourseDesktop college={college} />
          )}
        </div>
      ) : (
        <div className="flex min-h-40 text-white font-bold font-poppins text-2xl w-full items-center justify-center">
          Information not added.{" "}
        </div>
      )}
    </div>
  );
};

export default Courses;
