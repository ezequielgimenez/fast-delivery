"use client";

import { useState } from "react";

export default function QuestionsComp() {
  const questions = [
    {
      id: 1,
      question: "How long does delivery take?",
      answer:
        "👉 Delivery times vary depending on your location, but most orders arrive within 1-3 business days.",
    },
    {
      id: 2,
      question: "Can I track my order?",
      answer:
        "👉 Yes! Once your order is shipped, you'll receive a tracking number via email.",
    },
    {
      id: 3,
      question: "How do refunds work?",
      answer:
        "👉 If you're not satisfied with your order, you can request a refund within 14 days of delivery.",
    },
    {
      id: 4,
      question: "Can I change or cancel my order after placing it?",
      answer:
        "👉 You can modify or cancel your order within the first 24 hours by contacting our support team.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAnswer = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div
      data-aos="fade-up"
      id="question"
      className="flex flex-col items-center pt-30 px-2"
    >
      <div className="xs:w-[320px] lg:w-[889px]">
        {/* container h2 & p */}
        <div className="pb-10">
          <h2 className="font-oxanium font-bold xs:text-[25px] xs:text-center lg:text-[31px] text-[#f95c19]">
            Commonly Asked Questions
          </h2>
          <p className="font-oxanium font-bold xs:text-[35px] xs:text-center lg:text-[39px] text-[#261134]">
            I am here to help!
          </p>
        </div>
        {/* /Preguntas/ */}
        <div>
          {questions.map((item, index) => (
            <div key={item.id} className="pb-4 border-b-1 border-[#c6c4cf]">
              <div
                onClick={() => toggleAnswer(index)}
                className="flex justify-between cursor-pointer pb-2"
              >
                <h4 className="font-oxanium text-[#464558] text-[24px]">
                  {item.question}
                </h4>
                <h3 className="text-[#f95c19] text-[30px]">
                  {openIndex === index ? "-" : "+"}
                </h3>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-80 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="font-oxanium xs:text-[16px]  text-[#464558]">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
