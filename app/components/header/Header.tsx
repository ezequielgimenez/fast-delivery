"use client";
import Image from "next/image";
import { useState } from "react";

export default function HeaderComp() {
  const [showNav, setShowNav] = useState(false);

  const openNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div>
      <header>
        {/* 360px for mobile */}
        <div className="xs:flex xs:justify-between xs:shadow-md xs:pb-2 xs:h-[60px] xs:px-8 lg:hidden">
          <div className="flex items-center xs:h-full cursor-pointer">
            <Image src="/logo.png" width={50} height={45} alt="logo"></Image>

            <h3 className="font-oxanium font-bold text-[25px] text-[#f95c19] ">
              FastDelivery
            </h3>
          </div>
          <div onClick={openNav} className="py-2 cursor-pointer">
            <Image
              src={"/images/burger.png"}
              width={35}
              height={35}
              alt="menu"
            ></Image>
          </div>
        </div>

        <div
          className={`${
            showNav ? "flex" : "hidden"
          } inset-0 h-screen flex-col items-center gap-y-8 fixed top-0 left-0 opacity-95 bg-[#f2b6a0] z-50`}
        >
          <div className="flex w-full justify-end pr-4 pt-4">
            <button onClick={openNav}>✖</button>
          </div>
          <a
            className="font-raleway font-bold text-[22px] text-[#464558]"
            href="/"
          >
            Home
          </a>
          <a
            className="font-raleway font-bold text-[22px] text-[#464558]"
            href="#services"
          >
            Our services
          </a>
          <a
            className="font-raleway font-bold text-[22px] text-[#464558]"
            href="#choose"
          >
            Why Choose us?
          </a>
          <a
            className="font-raleway font-bold text-[22px] text-[#464558]"
            href="#cuestion"
          >
            F&Q
          </a>
          <a
            className="font-raleway font-bold text-[22px] text-[#464558]"
            href="#contact"
          >
            Contact
          </a>
        </div>

        <div className="xs:hidden lg:flex lg:items-center lg:justify-between h-[80px] shadow-md pb-2 px-16">
          <div className="flex items-center cursor-pointer">
            <Image src="/logo.png" width={55} height={55} alt="logo"></Image>
            <h3 className="font-oxanium font-bold text-[#f95c19] text-[28px]">
              FastDelivery
            </h3>
          </div>
          <div className="flex items-center gap-x-5">
            <a
              className="font-raleway font-bold text-[16px] text-[#817382] hover:text-[#f95c19] transition-all duration-500"
              href="/"
            >
              Home
            </a>
            <a
              className="font-raleway font-bold text-[16px] text-[#817382]  hover:text-[#f95c19] transition-all duration-500"
              href="#services"
            >
              Our services
            </a>
            <a
              className="font-raleway font-bold text-[16px] text-[#817382]  hover:text-[#f95c19] transition-all duration-500"
              href="#choose"
            >
              Why Choose Us?
            </a>
            <a
              className="font-raleway font-bold text-[16px] text-[#817382]  hover:text-[#f95c19] transition-all duration-500"
              href="#question"
            >
              F&Q
            </a>
            <div>
              <a href="#contact">
                <button className="font-oxanium font-bold text-[20px] text-[#f95c19]  w-[142px] h-[45px] bg-[#ffe4d9] rounded-[5px] cursor-pointer hover:bg-[#f8c7b4] transition-all duration-500 ">
                  Contact us
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
