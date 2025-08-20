import React from "react";

const Faculty = ({ college }) => {
  return (
    <div className="bg-secondry min-h-40 w-full rounded-lg  px-4 py-4">
      {" "}
      {college?.faculty ? (
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 xl:gap-10 w-full min-h-10 py-4 mt-4">
          {college?.faculty?.map((f) => (
            <div className="flex flex-col items-center justify-center border border-gray-700 p-4 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-sky-400/50 hover:-translate-y-2 cursor-pointer">
              <div className="w-24 h-24 object-cover object-center rounded-full">
                <img
                  src={f.image}
                  alt="faculty"
                  className="rounded-full w-full h-full"
                />
              </div>
              <div className="rounded-full text-xs text-white mt-2 text-center py-2 px-4 bg-primary font-poppins">
                {f.designation}
              </div>
              <div className=" text-xl text-white font-bold mt-4 text-center  font-poppins">
                {f.name}
              </div>
              <div className=" text-sm text-gray-400 text-center  font-poppins">
                {f.department}
              </div>
              <div className=" text-sm text-gray-400 text-center  font-poppins">
                {f.highestQualification}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex min-h-40 text-white font-bold font-poppins text-2xl w-full items-center justify-center">
          Information not added.{" "}
        </div>
      )}
    </div>
  );
};

export default Faculty;
