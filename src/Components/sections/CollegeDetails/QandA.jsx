import React from "react";
import Accordion from "../../UI/Accordion/Accordion";

const QandA = ({ college }) => {
  return (
    <div className="bg-secondry min-h-40 w-full rounded-lg ">
      {" "}
      {college?.qna ? (
        <div className="py-4 ">
          {" "}
          <Accordion data={college.qna} bg="secondry" />
        </div>
      ) : (
        <div className="flex min-h-40 text-white font-bold font-poppins text-2xl w-full items-center justify-center">
          Information not added.{" "}
        </div>
      )}
    </div>
  );
};

export default QandA;
