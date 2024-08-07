"use client";
import { useState } from "react";

const Faqs = () => {
  const [index, setIndex] = useState(null);

  const toggleIndex = (i) => {
    setIndex(index === i ? null : i);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {AccordianData.map((item, i) => (
          <div key={i} className="border-b last:border-b-0">
            <div
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-100"
              onClick={() => toggleIndex(i)}
            >
              <span className="text-lg font-medium">{item.question}</span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  index === i ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {index === i && (
              <div className="p-4 text-gray-700 bg-gray-50">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;

export const AccordianData = [
  {
    question: "How to generate blog?",
    answer:
      "asl safld  asdlkghd llak jldsa dslkga ldsagglkgldsa ldslds jlfdsjf jdsfdsjlf",
  },
  {
    question: "How to generate Slides?",
    answer:
      "asl safld  asdlkghd llak jldsa dslkga ldsagglkgldsa ldslds jlfdsjf jdsfdsjlf",
  },
  {
    question: "Which Tech Stack?",
    answer:
      "asl safld  asdlkghd llak jldsa dslkga ldsagglkgldsa ldslds jlfdsjf jdsfdsjlf",
  },
  {
    question: "What is generative AI?",
    answer:
      "asl safld  asdlkghd llak jldsa dslkga ldsagglkgldsa ldslds jlfdsjf jdsfdsjlf",
  },
];
