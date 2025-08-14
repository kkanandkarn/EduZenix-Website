import React from "react";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

const ContactDetails = () => {
  return (
    <div className="bg-primary flex flex-col items-center justify-center py-24 px-4">
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex items-center justify-center text-white font-poppins text-2xl/8 md:text-5xl md:leading-[-1] line lg:text-4xl font-bold text-center">
          Contact Information
        </div>
        <div className="text-zinc-500 text-sm  md:text-xl lg:w-5/6 flex items-center justify-center text-center font-poppins py-2">
          Our team is ready to answer your questions about our platform,
          pricing, or anything else.
        </div>
      </div>
      <div className="flex flex-col w-full mt-10 items-center justify-center">
        <div className="w-full md:px-8 xl:px-10">
          {" "}
          <div className="flex flex-col xl:flex-row items-center justify-between w-full xl:gap-10">
            <div className="w-full  xl:w-1/2 rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="EduZenix Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.421483466826!2d-122.08424968468124!3d37.4219997798254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb0cae6b1c4af%3A0xabcdef1234567890!2sGoogleplex!5e0!3m2!1sen!2sin!4v1691990660000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex flex-col gap-8 mt-10 xl:mt-0 xl:w-1/2  w-full items-start justify-center">
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center text-sm md:text-2xl text-center p-4 rounded-full bg-sky-900 text-sky-500">
                  <LuMapPin />
                </div>
                <div>
                  {" "}
                  <h1 className="text-white font-poppins text-base md:text-xl font-bold">
                    Our Office
                  </h1>
                  <p className="text-gray-300 text-sm md:text-base font-poppins">
                    123 Innovation Drive, Tech Park, Suite 456, Knowledge City,
                    78910
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center text-sm md:text-2xl text-center p-4 rounded-full bg-sky-900 text-sky-500">
                  <LuMail />
                </div>
                <div>
                  {" "}
                  <h1 className="text-white font-poppins text-base md:text-xl font-bold">
                    Email Us
                  </h1>
                  <p className="text-gray-300 text-sm md:text-base font-poppins">
                    contact@eduzenix.com
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center text-sm md:text-2xl text-center p-4 rounded-full bg-sky-900 text-sky-500">
                  <LuPhone />
                </div>
                <div>
                  {" "}
                  <h1 className="text-white font-poppins text-base md:text-xl font-bold">
                    Call Us
                  </h1>
                  <p className="text-gray-300 text-sm md:text-base font-poppins">
                    +91 9876543210
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
