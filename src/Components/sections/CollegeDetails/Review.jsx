import React from "react";
import { LuEye } from "react-icons/lu";
import useScreenType from "../../../hooks/useScreenType";
import { IoStar, IoStarOutline, IoStarHalf } from "react-icons/io5";

const Review = ({ college }) => {
  const device = useScreenType();

  // ⭐ Helper function to render stars
  const renderStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center justify-center">
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <IoStar key={`full-${i}`} className="text-orange-300" />
          ))}

        {hasHalfStar && <IoStarHalf className="text-orange-300" />}

        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <IoStarOutline key={`empty-${i}`} className="text-orange-300" />
          ))}
      </div>
    );
  };

  return (
    <div className="bg-secondry min-h-40 w-full rounded-lg px-4">
      {college?.reviews ? (
        <div className="py-4 md:px-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-10 w-full min-h-10 py-4 mt-4">
            {college?.reviews?.map((review, index) => (
              <div
                key={index}
                className="border border-gray-700 rounded-lg p-4 flex flex-col transition-all duration-300 hover:shadow-md hover:shadow-sky-400/50 hover:-translate-y-2 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-2">
                  <div className="flex items-center justify-center text-base text-center p-2 w-6 h-6 font-bold rounded-full bg-sky-900 text-sky-500">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col md:flex-row items-center justify-center md:justify-start md:gap-4 text-base font-poppins">
                    <p className="text-sky-500 font-bold">{review.name}</p>
                    {device !== "mobile" && <p className="text-gray-500">|</p>}
                    <p className="text-gray-500 text-sm">
                      {review.collegeHistory}
                    </p>
                  </div>
                </div>

                {/* Rating Section */}
                <div className="mt-2 flex items-center justify-start text-sm font-poppins gap-2">
                  <p className="text-gray-300">{review.rating}</p>
                  {renderStars(parseFloat(review.rating))}
                </div>

                {/* Review Text */}
                <div className="mt-2 text-gray-300 text-sm font-poppins">
                  {review.review}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex min-h-40 text-white font-bold font-poppins text-2xl w-full items-center justify-center">
          Information not added.
        </div>
      )}
    </div>
  );
};

export default Review;
