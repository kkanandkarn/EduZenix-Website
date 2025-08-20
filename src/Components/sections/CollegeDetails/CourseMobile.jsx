import React from "react";

const CourseMobile = ({ college }) => {
  return (
    <div className="space-y-4">
      {college?.courses?.map((programme, pIndex) => (
        <div key={pIndex} className="bg-slate-700 rounded-2xl p-4 shadow-md">
          {/* Programme Name */}
          <div className="mb-3">
            <h2 className="text-lg font-semibold text-white text-center">
              {programme.programme}
            </h2>
            <p className="text-sm text-gray-300 text-center">
              Eligibility:{" "}
              <span className="font-medium">{programme.eligibility}</span>
            </p>
          </div>

          {/* Courses List */}
          <div className="space-y-3">
            {programme.courses.map((course, cIndex) => (
              <div
                key={`${pIndex}-${cIndex}`}
                className="border border-gray-600 rounded-xl p-3 bg-slate-800"
              >
                <p className="text-base font-medium text-white">
                  {course.name}
                </p>
                <p className="text-sky-400 font-semibold">
                  Fees: {course.fees}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseMobile;
