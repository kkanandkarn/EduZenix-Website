import React from "react";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../../store/modalSlice";

const Gallery = ({ college }) => {
  const dispatch = useDispatch();
  const handleDemoModal = (activeImage) => {
    dispatch(
      setModalOpen({
        modalName: "galleryImage",
        modalData: { images: college.gallery, activeImage: activeImage },
      })
    );
  };
  return (
    <div className="bg-secondry min-h-40 w-full rounded-lg  px-4 ">
      {" "}
      {college?.gallery ? (
        <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {college?.gallery.map((image, index) => (
            <button
              className="w-full p-1 bg-gray-300 rounded-lg object-cover object-center  h-48 xl:h-56 cursor-pointer"
              onClick={() => handleDemoModal(index)}
            >
              <img
                src={image}
                alt="image"
                className="w-full h-full rounded-lg"
              />
            </button>
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

export default Gallery;
