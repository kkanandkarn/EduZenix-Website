import React from "react";
import leaderImage from "../../../assets/founder-image.jpg";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const Leadership = () => {
  return (
    <div className="bg-primary  pt-20 pb-10 md:pb-20 flex flex-col items-center justify-center">
      {" "}
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex items-center justify-center text-white font-poppins text-2xl/8 md:text-4xl md:leading-[-1] line lg:text-4xl font-bold text-center">
          Meet the Leadership
        </div>
        <div className="text-zinc-500 text-sm  md:text-xl lg:w-full flex items-center justify-center text-center font-poppins py-1">
          The passionate mind dedicated to shaping the future of education.
        </div>
      </div>
      {/* Leader Card */}
      <div className="z-10 mt-10   flex justify-center px-4">
        <div className="border border-sky-300/30 rounded-lg bg-slate-900/80 backdrop-blur-md shadow-lg hover:shadow-sky-400/40 transition-shadow duration-300 w-full xl:w-3/4 flex flex-col md:flex-row items-center overflow-hidden">
          {/* Image */}
          <div className="w-full h-full md:w-1/2">
            <img
              src={leaderImage}
              alt="Anand Kumar Karn"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:w-2/3 text-center md:text-left">
            <h3 className="text-white text-2xl font-bold font-poppins">
              Anand Kumar Karn
            </h3>
            <p className="text-sky-400 text-sm mb-4">Founder & CEO</p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Anand Kumar Karn is a visionary entrepreneur several years of
              experience in IT and software development. Throughout his career,
              he has collaborated with leading educational institutions to
              identify and address their real-world challenges through
              innovative software solutions.
              <br />
              <br />
              With a strong track record of developing scalable SaaS platforms,
              Anand has played a pivotal role in solving complex business
              problems and driving digital transformation. His expertise spans
              building robust, user-centric systems that empower organizations
              to operate efficiently and achieve sustainable growth.
              <br />
              <br />
              He helped numerous brands, organizations, and institutions enhance
              their operational capabilities, streamline processes, and unlock
              new opportunities for success.
            </p>

            {/* Links */}
            <div className="flex gap-4 mt-5 justify-center md:justify-start">
              <a href="" className="text-sky-400 hover:text-sky-300 text-xl">
                <FaLinkedin />
              </a>
              <a href="" className="text-sky-400 hover:text-sky-300 text-xl">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
