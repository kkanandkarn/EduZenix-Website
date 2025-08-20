import React from "react";
import { useSelector } from "react-redux";

const CourseDesktop = ({ college }) => {
  return (
    <div className="">
      <div className="">
        <table className="w-full  rounded-lg overflow-hidden text-white font-poppins">
          <thead>
            <tr className="border-b-2 border-b-gray-600">
              <th className="px-4 py-2 text-center">Programme</th>
              <th className="px-4 py-2 text-left">Course Name</th>
              <th className="px-4 py-2 text-left">Fees</th>
              <th className="px-4 py-2 text-center">Eligibility</th>
            </tr>
          </thead>
          <tbody>
            {college?.courses?.map((programme, pIndex) =>
              programme.courses.map((course, cIndex) => (
                <tr key={`${pIndex}-${cIndex}`} className="">
                  {cIndex === 0 && (
                    <td
                      rowSpan={programme.courses.length}
                      className="px-4 py-3 font-semibold text-white text-center align-middle border-b-2 border-r-2 border-gray-600"
                    >
                      {programme.programme}
                    </td>
                  )}

                  <td className="px-4 py-3 text-white border-b-2 border-gray-600">
                    {course.name}
                  </td>
                  <td className="px-4 py-3 text-sky-500  font-medium border-b-2 border-gray-600 border-r-2">
                    {course.fees}
                  </td>

                  {cIndex === 0 && (
                    <td
                      rowSpan={programme.courses.length}
                      className="px-4 py-3 text-white align-middle text-center border-l-2 border-b-2 border-gray-600"
                    >
                      {programme.eligibility}
                    </td>
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CourseDesktop;
