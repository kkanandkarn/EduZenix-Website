import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import { FaArrowRight, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../../store/modalSlice";
import BgVideo from "../../../assets/bg-video.mp4";
import bgImagePortrait from "../../../assets/3d-image-portrait.png";
import bgImageLandscape from "../../../assets/3d-image-landscape.png";
import useScreenType from "../../../hooks/useScreenType";
import { LuTarget, LuEye, LuBookOpen, LuSend } from "react-icons/lu";
import InputBox from "../../UI/InputBox/InputBox";
import { toast } from "react-toastify";

const ContactHero = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = () => {
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
    toast.success(
      "Thanks for contacting us!\nOur team will contact you shortly.",
      {
        style: { whiteSpace: "pre-line" },
      }
    );
  };

  return (
    // <div className="pt-40 pb-10 md:pb-20 flex flex-col items-center justify-center">
    <div className="relative pt-40 pb-10 md:pb-20 flex flex-col items-center justify-center overflow-hidden bg-secondry">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
      >
        <source src={BgVideo} type="video/mp4" />
      </video>

      <div className="flex flex-col items-center justify-center gap-4 px-4 w-full z-10">
        <div className="flex items-center justify-center text-white font-poppins text-2xl/8 md:text-5xl md:leading-[-1] line lg:text-6xl font-bold text-center">
          Get in Touch
        </div>
        <div className="text-gray-400 text-sm md:text-2xl lg:w-4/5 flex items-center justify-center text-center font-poppins py-2 px-4">
          Have a question or want to work with us? Drop us a line.
        </div>
      </div>

      {/* Cards */}
      <div className="z-10 mt-10  flex justify-center px-4 xl:w-3/5 w-full">
        <div className="border border-sky-300/30 rounded-lg bg-slate-900/80 backdrop-blur-md shadow-lg hover:shadow-sky-400/40 transition-shadow duration-300 w-full flex flex-col md:flex-row items-center overflow-hidden">
          {/* Content */}
          <div className="px-4 py-6 text-center md:text-left w-full">
            <div className="flex flex-col xl:flex-row items-center justify-between w-full ">
              <div className="w-full xl:w-1/2">
                <InputBox
                  error={errors.fullName}
                  required={true}
                  label={"Full Name"}
                  autoComplete="off"
                  value={formData.fullName}
                  name="fullName"
                  onChange={handleChange}
                  type="text"
                  placeholder="e.g. Anand Kumar Karn"
                />
              </div>
              <div className="w-full xl:w-1/2">
                <InputBox
                  error={errors.email}
                  required={true}
                  label={"Email Address"}
                  autoComplete="off"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                  type="text"
                  placeholder="e.g. anand@eduzenix.com"
                />
              </div>
            </div>
            <InputBox
              error={errors.subject}
              required={true}
              label={"Subject"}
              autoComplete="off"
              value={formData.subject}
              name="subject"
              onChange={handleChange}
              type="text"
              placeholder="e.g.  Subject"
            />
            <InputBox
              error={errors.message}
              required={true}
              label={"Message"}
              autoComplete="off"
              value={formData.message}
              name="message"
              onChange={handleChange}
              type="textarea"
              placeholder="e.g. Your Message"
            />
            <div className="mt-4 w-full px-2">
              {" "}
              <Button
                iconPrfix={<LuSend />}
                label={"Send Message"}
                onClick={handleSubmit}
                additionalClass={"w-full"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
