import React from "react";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../../../utils/constant";

const InsTestimonials = () => {
  return (
    <div className="bg-secondry  pt-20 pb-10 md:pb-20 flex flex-col items-center justify-center px-8">
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex items-center justify-center text-white font-poppins text-2xl/8 md:text-4xl md:leading-[-1] line lg:text-4xl font-bold text-center">
          What Our Partners Say
        </div>
        <div className="text-zinc-500 text-sm  md:text-xl lg:w-5/6 flex items-center justify-center text-center font-poppins py-1">
          Hear from academic leaders who have transformed their institutions
          with EduZenix.
        </div>
      </div>
      <div className="w-full  mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-items-center">
        {testimonials.map((card, index) => (
          <div
            className="bg-secondry rounded-lg gap-4 flex flex-col items-start justify-center px-4 py-8 border border-sky-300/30 transition-all duration-300 hover:shadow-md hover:shadow-sky-400/50 "
            key={index}
          >
            <div className="flex items-center gap-1 text-yellow-400">
              {[...Array(card.ratings)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <div className="font-poppins text-white italic">{`"${card.review}"`}</div>
            <div className="flex items-center justify-center gap-2">
              <div className="flex items-center justify-center h-10 w-10 rounded-full">
                <img
                  src={card.image}
                  alt="testimonial"
                  className="h-10 w-10 rounded-full"
                />
              </div>
              <div className="text-white font-poppins">{card.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsTestimonials;
