"use client";
import { useState } from "react";

import Image from "next/image";
export default function FormComp() {
  ///
  //
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("name"));

    e.currentTarget.reset();
  };

  return (
    <div
      data-aos="fade-up"
      id="contact"
      className="flex justify-center items-center xs:flex-col lg:flex-row xs:py-12 lg:py-28"
    >
      <div className="xs:w-[300px] sm:w-[500px] lg:w-[424px] lg:pr-16">
        <Image src="/form.png" width={334} height={257} alt="message"></Image>
        <h2 className="font-oxanium font-bold text-[24px] xs:text-center lg:text-left text-[#F95C19]">
          REQUEST A CALLBACK
        </h2>
        <h2 className="font-oxanium font-bold text-[#261134] xs:text-center lg:text-left text-[32px]">
          We will contact in the shortest time.
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="xs:w-[300px] sm:w-[500px] lg:w-[430px]"
        action=""
      >
        <div className="flex flex-col py-2">
          <input
            id="name"
            name="name"
            type="text"
            // value={}
            // onChange={}
            placeholder="Your Name"
            className=" font-oxanium p-3 rounded-lg border-2 border-[#c6c4cf] outline-none focus:border-[#FFAF0F] focus:ring-2 focus:ring-[#FFAF0F] transition"
          />
        </div>
        <div className="flex flex-col py-2">
          <input
            id="email"
            name="email"
            type="text"
            // value={}
            // onChange={}
            placeholder="Email"
            className=" font-oxanium p-3 rounded-lg border-2 border-[#c6c4cf] outline-none focus:border-[#FFAF0F] focus:ring-2 focus:ring-[#FFAF0F] transition"
          />
        </div>

        <div className="flex flex-col py-2">
          <textarea
            className="resize-none h-32 font-oxanium  p-3 rounded-lg border-2 border-[#c6c4cf] outline-none focus:border-[#FFAF0F] focus:ring-2 focus:ring-[#FFAF0F] transition"
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="py-8">
          <button className="xs:w-[300px] sm:w-[500px] lg:w-[424px] h-[49px] font-oxanium font-bold text-white text-[20px] rounded-[5px] bg-[#F95C19]  hover:bg-[#f4956f] transition-all duration-500 cursor-pointer">
            Send Message ➤
          </button>
        </div>
      </form>
    </div>
  );
}
