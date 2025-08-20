import React from "react";

const Gallery = ({ college }) => {
  return (
    <div className="bg-secondry min-h-40 w-full rounded-lg  px-4 ">
      {" "}
      {college?.gallries ? (
        <div className="py-4 md:px-4">Gallery</div>
      ) : (
        <div className="flex min-h-40 text-white font-bold font-poppins text-2xl w-full items-center justify-center">
          Information not added.{" "}
        </div>
      )}
    </div>
  );
};

export default Gallery;
