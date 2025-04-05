export default function MainComp() {
  return (
    <div className="xs:flex xs:flex-col xs:px-8 xs:py-12 xs:items-center xs:justify-center lg:flex-row gap-x-4 lg:px-32 lg:py-24">
      <div className="">
        <h1 className="font-raleway xs:text-[35px] xs:text-center lg:text-left sm:text-[40px] lg:text-[45px] text-[#261134]">
          A trusted provider of
          <span className="font-bold"> fast deliveries.</span>
        </h1>
        <p className="font-oxanium text-[#4D4D4D] xs:text-[15px] xs:text-center lg:text-left sm:text-[16px] lg:text-[18px]">
          We deliver your products safely to your home in a reasonable time.
        </p>
        <div className="xs:flex xs:justify-center xs:py-8 lg:block lg:py-0 lg:pt-8">
          <a href="#contact">
            <button className="w-[178px] h-[49px] bg-[#f95c19] text-white font-oxanium font-bold rounded-lg cursor-pointer hover:bg-[#f8c7b4] transition-all duration-500">
              Get started ➜
            </button>
          </a>
        </div>
      </div>
      <div>
        <img className="" src="/main.svg" alt="main-img" />
      </div>
    </div>
  );
}
