import React, { useState } from "react";
import InputBox from "../../UI/InputBox/InputBox";
import { LuX } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { setModalOpen } from "../../../store/modalSlice";

const AcademicQualifications = ({ qualifications, setQualifications }) => {
  //   const [qualifications, setQualifications] = useState([
  //     {
  //       id: Date.now(),
  //       name: "",
  //       college: "",
  //       year: "",
  //       percentage: "",
  //       documents: [{ id: Date.now(), name: "", file: null, error: "" }],
  //       isPrimary: true,
  //     },
  //   ]);
  const dispatch = useDispatch();
  const handleRemoveModal = (id) => {
    dispatch(
      setModalOpen({
        modalName: "confirmDelete",
        modalData: {
          id: id,
          deleteFunction: handleRemoveQualification,
        },
      })
    );
  };
  const handleQualificationChange = (id, field, value) => {
    setQualifications((prev) =>
      prev.map((q) => (q.id === id ? { ...q, [field]: value } : q))
    );
  };

  // Handle document input change
  const handleDocumentChange = (qualificationId, documentId, field, value) => {
    setQualifications((prev) =>
      prev.map((q) =>
        q.id === qualificationId
          ? {
              ...q,
              documents: q.documents.map((doc) =>
                doc.id === documentId ? { ...doc, [field]: value } : doc
              ),
            }
          : q
      )
    );
  };

  // Add a new document row
  const addDocument = (qualificationId) => {
    setQualifications((prev) =>
      prev.map((q) =>
        q.id === qualificationId
          ? {
              ...q,
              documents: [
                ...q.documents,
                { id: Date.now(), name: "", file: null },
              ],
            }
          : q
      )
    );
  };

  // Add a new qualification block
  const addQualification = () => {
    setQualifications((prev) => [
      ...prev,
      {
        id: Date.now(),
        college: "",
        year: "",
        percentage: "",
        documents: [{ id: Date.now(), name: "", file: null }],
        isPrimary: false,
      },
    ]);
  };

  // Mark one qualification as primary
  const setPrimary = (id) => {
    setQualifications((prev) =>
      prev.map((q) => ({
        ...q,
        isPrimary: q.id === id,
      }))
    );
  };
  const handleRemoveQualification = (id) => {
    const newQualifcations = qualifications.filter(
      (qualification) => qualification.id !== id
    );
    setQualifications(newQualifcations);
  };
  const handleRemoveDocument = (qualificationId, documentId) => {
    setQualifications((prev) =>
      prev.map((q) =>
        q.id === qualificationId
          ? {
              ...q,
              documents: q.documents.filter((doc) => doc.id !== documentId),
            }
          : q
      )
    );
  };
  return (
    <div className="border-b border-gray-400/30 px-2 xl:px-4 md:px-8 w-full py-4 font-poppins">
      {" "}
      <h1 className="text-white font-bold text-base xl:text-xl">
        Academic Qualifications
      </h1>
      {qualifications.map((qualification, index) => (
        <div
          key={qualification.id}
          className="border border-gray-600 rounded-lg px-1 py-4 xl:p-4 mt-6"
        >
          <div
            className={`flex items-center ${
              qualifications.length > 1 ? "justify-between" : "justify-start"
            }  px-2`}
          >
            {" "}
            <h3 className="text-lg text-white font-bold">
              Qualification {index + 1}
            </h3>
            {qualifications.length > 1 && (
              <button
                className="text-white cursor-pointer bg-gray-800 rounded-full p-2 flex items-center justify-center"
                onClick={() => handleRemoveModal(qualification.id)}
              >
                {" "}
                <LuX />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 xl:gap-4 my-4">
            <InputBox
              required={true}
              label={"Qualification Name"}
              autoComplete="off"
              value={qualification.name}
              name="name"
              onChange={(e) =>
                handleQualificationChange(
                  qualification.id,
                  "name",
                  e.target.value
                )
              }
              type="text"
              placeholder="e.g. Intermediate In Science"
            />
            <InputBox
              required={true}
              label={"University/Board"}
              autoComplete="off"
              value={qualification.college}
              name="name"
              onChange={(e) =>
                handleQualificationChange(
                  qualification.id,
                  "college",
                  e.target.value
                )
              }
              type="text"
              placeholder="e.g. Central Board of school Examination"
            />
            {/* <input
              type="text"
              placeholder="e.g., Central Board of Secondary"
              className="p-2 rounded bg-slate-800 border border-gray-600 w-full"
              value={qualification.college}
              onChange={(e) =>
                handleQualificationChange(
                  qualification.id,
                  "college",
                  e.target.value
                )
              }
            /> */}
            <InputBox
              required={true}
              label={"Year of Passing"}
              autoComplete="off"
              value={qualification.year}
              name="year"
              onChange={(e) =>
                handleQualificationChange(
                  qualification.id,
                  "year",
                  e.target.value
                )
              }
              type="number"
              placeholder="e.g. 2019"
            />
            {/* <input
              type="text"
              placeholder="e.g., 2020"
              className="p-2 rounded bg-slate-800 border border-gray-600 w-full"
              value={qualification.year}
              onChange={(e) =>
                handleQualificationChange(
                  qualification.id,
                  "year",
                  e.target.value
                )
              }
            /> */}
            <InputBox
              required={true}
              label={"Pearcentage/CGPA"}
              autoComplete="off"
              value={qualification.percentage}
              name="percentage"
              onChange={(e) =>
                handleQualificationChange(
                  qualification.id,
                  "percentage",
                  e.target.value
                )
              }
              type="text"
              placeholder="e.g. 74%"
            />
            {/* <input
              type="text"
              placeholder="e.g., 85.5 or 9.2"
              className="p-2 rounded bg-slate-800 border border-gray-600 w-full"
              value={qualification.percentage}
              onChange={(e) =>
                handleQualificationChange(
                  qualification.id,
                  "percentage",
                  e.target.value
                )
              }
            /> */}
          </div>

          {/* Documents Section */}
          <h4 className="font-medium mb-2 ml-2 xl:ml-0 text-white">
            Documents
          </h4>
          {qualification.documents.map((doc, index) => (
            <div
              key={doc.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 xl:gap-4 items-center mt-4 mb-2  relative"
            >
              <InputBox
                required={true}
                label={`Document ${index + 1} Name`}
                autoComplete="off"
                value={doc.name}
                name="name"
                onChange={(e) =>
                  handleDocumentChange(
                    qualification.id,
                    doc.id,
                    "name",
                    e.target.value
                  )
                }
                type="text"
                placeholder="e.g. Certificate, Marksheet"
              />
              {/* <input
                type="text"
                placeholder="e.g., Marksheet, Certificate"
                className="p-2 rounded bg-slate-800 border border-gray-600 w-full"
                value={doc.name}
                onChange={(e) =>
                  handleDocumentChange(
                    qualification.id,
                    doc.id,
                    "name",
                    e.target.value
                  )
                }
              /> */}
              {/* <input
                type="file"
                className="p-2 w-full text-gray-300  border border-white/20 rounded-md text-sm py-3"
                onChange={(e) =>
                  handleDocumentChange(
                    qualification.id,
                    doc.id,
                    "file",
                    e.target.files[0]
                  )
                }
              /> */}
              <div className="h-28 w-full px-2 flex flex-col gap-2">
                <label className="text-sm text-left font-poppins block mb-1 text-white">
                  Upload Document *
                </label>
                <input
                  type="file"
                  className={`w-full font-poppins px-4 py-1 border text-white file:bg-blue-600 file:text-white file:border-0 file:rounded-md file:px-3 file:py-2 file:cursor-pointer
      ${doc.error?.length ? "border-red-400" : "border-white/20"}
      rounded-md text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6a5af9] 
     `}
                  onChange={(e) =>
                    handleDocumentChange(
                      qualification.id,
                      doc.id,
                      "file",
                      e.target.files[0]
                    )
                  }
                  //   disabled={disabled}
                />
                {doc.error?.length > 0 && (
                  <p className="text-red-400 text-sm">{doc.error}</p>
                )}
              </div>
              {qualification.documents.length > 1 && (
                <button
                  className="absolute top-[-5px] right-0 text-white cursor-pointer bg-gray-800 rounded-full p-2 flex items-center justify-center"
                  onClick={() => handleRemoveDocument(qualification.id, doc.id)}
                >
                  <LuX size={16} />
                </button>
              )}
            </div>
          ))}

          <button
            onClick={() => addDocument(qualification.id)}
            className="mt-0 px-4 py-2 text-sm md:text-base bg-blue-600 rounded xl:ml-0 ml-2 text-white cursor-pointer"
          >
            + Add Document
          </button>

          <div className="mt-4 flex items-center gap-2 xl:ml-0 ml-2">
            <input
              type="radio"
              name="primaryQualification"
              checked={qualification.isPrimary}
              onChange={() => setPrimary(qualification.id)}
            />
            <label className="text-white">Mark as Primary</label>
          </div>
        </div>
      ))}
      <button
        onClick={addQualification}
        className="px-4 py-2 text-sm md:text-base bg-green-600 text-white rounded  mt-4 cursor-pointer"
      >
        + Add Another Qualification
      </button>
    </div>
  );
};

export default AcademicQualifications;
