// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import useScreenType from "../../../hooks/useScreenType";
// import { setModalClose } from "../../../store/modalSlice";
// import { LuCross } from "react-icons/lu";
// import { MdClose } from "react-icons/md";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// const ImageModal = () => {
//   const dispatch = useDispatch();
//   const device = useScreenType();
//   const [images, setImages] = useState([]);

//   const modalData = useSelector((state) => state.modal.modalData);
//   const [activeImage, setActiveImage] = useState(modalData.activeImage ?? 0);
//   const handleClose = () => {
//     dispatch(setModalClose());
//   };
//   useEffect(() => {
//     setImages(modalData.images);
//   }, [modalData]);
//   const handleForward = () => {
//     if (images.length - 1 > activeImage) {
//       setActiveImage(activeImage + 1);
//     }
//   };
//   const handleBackward = () => {
//     if (activeImage !== 0) {
//       setActiveImage(activeImage - 1);
//     }
//   };

//   console.log("ACTIVE IMAGE: ", activeImage);
//   console.log("IMAGE LENGTH: ", images.length);

//   return (
//     <div
//       className="absolute inset-0  w-[100%] max-h-[100vh] flex items-center justify-center z-999 "
//       style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
//     >
//       {images?.length && (
//         <div className="w-full h-full relative flex flex-col xl:flex-row items-center justify-center">
//           <div className="w-[95%] h-[40%] md:h-[50%] xl:h-[80%] xl:w-[50%] bg-gray-600 p-2 rounded-lg ">
//             <img
//               src={images[activeImage]}
//               alt="image"
//               className="h-full w-full"
//             />
//           </div>
//           <button
//             className="absolute top-5 right-5 xl:right-10 bg-gray-700 text-white text-2xl rounded-full p-2 h-10 w-10  flex items-center justify-center z-10 cursor-pointer"
//             onClick={handleClose}
//           >
//             <MdClose />
//           </button>
//           {device === "desktop" && (
//             <>
//               {activeImage !== 0 && (
//                 <button
//                   className="absolute top-[50%] left-10 bg-gray-700 text-white text-2xl rounded-full p-2 h-10 w-10  flex items-center justify-center cursor-pointer  z-10"
//                   onClick={handleBackward}
//                 >
//                   <IoIosArrowBack />
//                 </button>
//               )}
//               {images.length - 1 > activeImage && (
//                 <button
//                   className="absolute top-[50%]  xl:right-10 bg-gray-700 text-white text-2xl rounded-full p-2 h-10 w-10  flex items-center justify-center z-10 cursor-pointer"
//                   onClick={handleForward}
//                 >
//                   <IoIosArrowForward />
//                 </button>
//               )}
//               <div className=" absolute bottom-6 text-white text-2xl rounded-full p-2 h-10 w-10  flex items-center justify-center z-10">
//                 {activeImage + 1}/{images.length}
//               </div>
//             </>
//           )}
//           {device !== "desktop" && (
//             <div className="flex items-center justify-center gap-4 pt-4">
//               {activeImage !== 0 && (
//                 <button
//                   className=" bg-gray-700 text-white text-2xl rounded-full p-2 h-10 w-10  flex items-center justify-center cursor-pointer  z-10"
//                   onClick={handleBackward}
//                 >
//                   <IoIosArrowBack />
//                 </button>
//               )}
//               <div className=" text-white text-2xl rounded-full p-2 h-10 w-10  flex items-center justify-center z-10">
//                 {activeImage + 1}/{images.length}
//               </div>
//               {images.length - 1 > activeImage && (
//                 <button
//                   className=" bg-gray-700 text-white text-2xl rounded-full p-2 h-10 w-10  flex items-center justify-center z-10 cursor-pointer"
//                   onClick={handleForward}
//                 >
//                   <IoIosArrowForward />
//                 </button>
//               )}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageModal;
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useScreenType from "../../../hooks/useScreenType";
import { setModalClose } from "../../../store/modalSlice";
import { MdClose } from "react-icons/md";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./styles.css";

const ImageModal = () => {
  const dispatch = useDispatch();
  const device = useScreenType();
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState(0);
  const [direction, setDirection] = useState(null);

  const modalData = useSelector((state) => state.modal.modalData);

  useEffect(() => {
    setImages(modalData.images || []);
    setActiveImage(modalData.activeImage ?? 0);
  }, [modalData]);

  const handleClose = () => dispatch(setModalClose());

  const handleForward = () => {
    if (activeImage < images.length - 1) {
      setDirection("next");
      setActiveImage((prev) => prev + 1);
    }
  };

  const handleBackward = () => {
    if (activeImage > 0) {
      setDirection("prev");
      setActiveImage((prev) => prev - 1);
    }
  };

  return (
    <div
      className="absolute inset-0 w-full max-h-[100vh] flex items-center justify-center z-[999]"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
    >
      {images?.length > 0 && (
        <div className="w-full h-full relative flex flex-col xl:flex-row items-center justify-center overflow-hidden">
          <div className="w-[95%] h-[40%] md:h-[50%] xl:h-[80%] xl:w-[50%] bg-gray-600 p-2 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              key={activeImage} // important to re-trigger animation
              src={images[activeImage]}
              alt="image"
              className={`h-full w-full transform transition-transform duration-500 ease-in-out
                ${direction === "next" ? "animate-slideNext" : ""}
                ${direction === "prev" ? "animate-slidePrev" : ""}
              `}
              onAnimationEnd={() => setDirection(null)} // reset animation
            />
          </div>

          {/* Close button */}
          <button
            className="absolute top-5 right-5 xl:right-10 bg-gray-700 text-white text-2xl rounded-full p-2 h-10 w-10 flex items-center justify-center z-10 cursor-pointer"
            onClick={handleClose}
          >
            <MdClose />
          </button>

          {/* Desktop controls */}
          {device === "desktop" && (
            <>
              {activeImage > 0 && (
                <button
                  className="absolute top-[50%] left-10 bg-gray-700 text-white text-2xl rounded-full p-2 h-10 w-10 flex items-center justify-center cursor-pointer z-10"
                  onClick={handleBackward}
                >
                  <IoIosArrowBack />
                </button>
              )}
              {activeImage < images.length - 1 && (
                <button
                  className="absolute top-[50%] xl:right-10 bg-gray-700 text-white text-2xl rounded-full p-2 h-10 w-10 flex items-center justify-center z-10 cursor-pointer"
                  onClick={handleForward}
                >
                  <IoIosArrowForward />
                </button>
              )}
              <div className="absolute bottom-6 text-white text-2xl z-10">
                {activeImage + 1}/{images.length}
              </div>
            </>
          )}

          {/* Mobile/tablet controls */}
          {device !== "desktop" && (
            <div className="flex items-center justify-center gap-4 pt-4">
              {activeImage > 0 && (
                <button
                  className="bg-gray-700 text-white text-2xl rounded-full p-2 h-10 w-10 flex items-center justify-center cursor-pointer z-10"
                  onClick={handleBackward}
                >
                  <IoIosArrowBack />
                </button>
              )}
              <div className="text-white text-2xl z-10">
                {activeImage + 1}/{images.length}
              </div>
              {activeImage < images.length - 1 && (
                <button
                  className="bg-gray-700 text-white text-2xl rounded-full p-2 h-10 w-10 flex items-center justify-center cursor-pointer z-10"
                  onClick={handleForward}
                >
                  <IoIosArrowForward />
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageModal;
