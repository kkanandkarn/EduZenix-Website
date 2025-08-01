import React from "react";
import Accordion from "../../UI/Accordion/Accordion";
import { faqs } from "../../../utils/constant";

const InsFaq = () => {
  return (
    <div className="bg-primary  pt-20 pb-10 md:pb-20 flex flex-col items-center justify-center xl:px-8">
      <div className="flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex items-center justify-center text-white font-poppins text-2xl/8 md:text-4xl md:leading-[-1] line lg:text-4xl font-bold text-center">
          Frequently Asked Questions
        </div>
        <div className="text-zinc-500 text-sm  md:text-xl md:w-5/6 flex items-center justify-center text-center font-poppins py-1">
          Have questions? We have answers. If you can't find what you're looking
          for, feel free to contact us.
        </div>
      </div>
      <div className="mt-4 w-full xl:w-3/5 xl:px-0">
        <Accordion data={faqs} />
      </div>
    </div>
  );
};

export default InsFaq;
