import Image from "next/image";
export default function WhyChooseComp() {
  return (
    <div data-aos="fade-up" id="choose" className="xs:py-12 lg:py-28">
      <div>
        <h2 className="font-oxanium font-bold xs:text-[25px] xs:text-center lg:text-[31px] text-[#f95c19]">
          Why Choose?
        </h2>
        <h2 className="font-oxanium font-bold xs:text-[35px] xs:text-center lg:text-[39px] text-[#261134] ">
          Our Best Choice
        </h2>
      </div>
      <div className="flex xs:flex-col xs:gap-y-12 lg:flex-row justify-center gap-x-24 pt-12">
        <div className="flex flex-col items-center ">
          <Image
            src="/cohete.png"
            width={64}
            height={64}
            alt="1-benefits"
          ></Image>
          <p className="font-oxanium text-[22px] text-[#4D4D4D] pt-2">
            Deliveries in record time
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <Image
            src="/candado.png"
            width={64}
            height={64}
            alt="2-benefits"
          ></Image>
          <p className="font-oxanium text-[22px] text-[#4D4D4D] pt-2">
            Security and trust
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <Image
            src="/dinero.png"
            width={64}
            height={64}
            alt="3-benefits"
          ></Image>
          <p className="font-oxanium text-[22px] text-[#4D4D4D] pt-2">
            Affordable prices
          </p>
        </div>
        <div className="flex flex-col items-center ">
          <Image
            src="/location.png"
            width={64}
            height={64}
            alt="3-benefits"
          ></Image>
          <p className="font-oxanium text-[22px] text-[#4D4D4D] pt-2">
            Real-time tracking
          </p>
        </div>
      </div>
    </div>
  );
}
