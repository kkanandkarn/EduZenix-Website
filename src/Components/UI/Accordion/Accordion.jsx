import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    // Trigger layout recalculation for height animation
    if (activeIndex !== null && contentRefs.current[activeIndex]) {
      contentRefs.current[activeIndex].style.maxHeight =
        contentRefs.current[activeIndex].scrollHeight + "px";
    }
    // Collapse all others
    contentRefs.current.forEach((el, idx) => {
      if (el && idx !== activeIndex) {
        el.style.maxHeight = "0px";
      }
    });
  }, [activeIndex]);

  return (
    <div className="w-full p-6 text-white bg-primary rounded-lg">
      {data.map((d, index) => (
        <div key={index} className="border-b border-gray-700 py-4 px-4">
          <button
            className="w-full font-poppins text-left text-sm md:text-lg font-semibold focus:outline-none flex justify-between items-center cursor-pointer"
            onClick={() => toggle(index)}
          >
            {d.question}
            <span className="ml-4 text-gray-400">
              {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </button>
          <div
            ref={(el) => (contentRefs.current[index] = el)}
            className="overflow-hidden transition-all duration-300 ease-in-out text-gray-300"
            style={
              {
                // maxHeight: activeIndex === index ? "1000px" : "0px",
              }
            }
          >
            <p className="mt-3 text-sm md:text-base font-poppins">{d.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
