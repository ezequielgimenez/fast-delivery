import Image from "next/image";

export default function StatsComp() {
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center xs:py-12 lg:py-28"
    >
      <h2 className="font-oxanium font-bold xs:text-[25px] lg:text-[31px] text-[#f95c19]">
        Our results
      </h2>
      <div className="flex justify-center items-center xs:flex-col xs:gap-y-4 lg:flex-row lg:gap-x-12 xl:gap-x-24 pt-12">
        <div>
          <div className="relative h-[40px]">
            <Image
              src="/images/stats1.png"
              alt="stat1"
              fill
              className="object-contain"
            />
          </div>
          {/* <Image
            src="/images/stats1.png"
            width={69}
            height={50}
            alt="stat1"
            style={{ height: "50px" }}
          ></Image> */}
          <h3 className="font-oxanium font-bold text-center text-[30px]  py-1 text-[#f95c19]">
            5+
          </h3>
          <p className="font-oxanium xs:text-[16px] lg:text-[22px] text-[#464558]">
            Awards won
          </p>
        </div>

        <div>
          <div className="relative h-[40px]">
            <Image
              src="/images/stats3.png"
              alt="stat3"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="font-oxanium font-bold text-center text-[30px] py-1 text-[#f95c19]">
            3K
          </h3>
          <p className="font-oxanium xs:text-[16px] lg:text-[22px] text-[#464558]">
            Happy clients
          </p>
        </div>

        <div>
          <div className="relative h-[40px]">
            <Image
              src="/images/stats4.png"
              alt="stat4"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="font-oxanium font-bold text-center text-[30px] py-1 text-[#f95c19]">
            4K+
          </h3>
          <p className="font-oxanium xs:text-[16px] lg:text-[22px] text-[#464558]">
            Products delivered
          </p>
        </div>

        <div>
          <div className="relative h-[40px]">
            <Image
              src="/images/stats5.png"
              alt="stat5"
              fill
              className="object-contain"
            />
          </div>

          <h3 className="font-oxanium font-bold text-center text-[30px] py-1 text-[#f95c19]">
            1000+
          </h3>
          <p className="font-oxanium xs:text-[16px] lg:text-[22px] text-[#464558]">
            Hours delivered
          </p>
        </div>
      </div>
    </div>
  );
}
