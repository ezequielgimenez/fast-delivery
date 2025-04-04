export default function ServicesComp() {
  return (
    <div
      data-aos="fade-up"
      id="services"
      className="flex flex-col items-center justify-center px-12 xs:py-12 lg:py-20"
    >
      <div className="flex flex-col items-center">
        <h2 className="font-oxanium font-bold xs:text-[25px] lg:text-[31px] text-[#f95c19]">
          Services
        </h2>
        <h2 className="font-oxanium font-bold xs:text-[35px] xs:text-center lg:text-[39px] text-[#261134] ">
          Our services for you
        </h2>
      </div>

      {/* contenedor cards */}
      <div className="flex xs:flex-col xs:gap-y-4 xl:flex-row gap-x-8 py-8">
        {/* card 1 */}
        <div className="flex flex-col items-center justify-center xs:w-[300px] sm:w-[340px] h-[583px] bg-white rounded-[16px] px-12 transform transition-transform duration-300 hover:scale-110">
          <div>
            <img src="/services1.svg" alt="services1" />
          </div>
          <div>
            <h3 className="font-raleway font-bold xs:text-[20px] sm:text-[25px] text-[#464558] py-8">
              Bussines Services
            </h3>
          </div>
          <div>
            <p className="font-oxanium text-[16px] text-[#7B7A8A]">
              We give you complete reliable delivery for your company. We will
              take full responsibility of the deliveries.
            </p>
          </div>
          <div className="w-full space-y-4 py-8">
            <p>
              <span className="text-[#f95c19]">●</span> Corporate goods
            </p>
            <p>
              <span className="text-[#f95c19]">●</span> Shipment
            </p>
            <p>
              <span className="text-[#f95c19]">●</span> Accesories
            </p>
          </div>
          <div>
            <a href="#contact">
              <button className="xs:w-[280px] sm:w-[300px] h-[49px] rounded-[5px] border border-[#f95c19] font-oxanium font-bold text-[#f95c19] hover:bg-[#f8c7b4] transition-all duration-500 cursor-pointer">
                Get Started
              </button>
            </a>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col items-center justify-center xs:w-[300px] sm:w-[340px] h-[583px] bg-white rounded-[16px] px-12 transform transition-transform duration-300 hover:scale-110">
          <div>
            <img src="/services2.svg" alt="services2" />
          </div>
          <div>
            <h3 className="font-raleway font-bold xs:text-[20px] sm:text-[25px] text-[#464558] py-8">
              Statewide Services
            </h3>
          </div>
          <div>
            <p className="font-oxanium text-[16px] text-[#7B7A8A]">
              Offering home delivery around the city, where your products will
              be at your doorstep within 48-72 hours.
            </p>
          </div>
          <div className="w-full space-y-4 py-8">
            <p>
              <span className="text-[#f95c19]">●</span> Personal items
            </p>
            <p>
              <span className="text-[#f95c19]">●</span> Products
            </p>
            <p>
              <span className="text-[#f95c19]">●</span> Documents
            </p>
          </div>
          <div>
            <a href="#contact">
              <button className="xs:w-[280px] sm:w-[300px]  h-[49px] rounded-[5px] bg-[#f95c19] font-oxanium font-bold text-white hover:bg-[#f4956f] transition-all duration-500 cursor-pointer">
                Get Started
              </button>
            </a>
          </div>
        </div>

        {/* card 3 */}
        <div className="flex flex-col items-center justify-center xs:w-[300px] sm:w-[340px] h-[583px] bg-white rounded-[16px] px-12 transform transition-transform duration-300 hover:scale-110">
          <div>
            <img src="/services3.svg" alt="services3" />
          </div>
          <div>
            <h3 className="font-raleway font-bold xs:text-[20px] sm:text-[25px] text-[#464558] py-8">
              Personal Services
            </h3>
          </div>
          <div>
            <p className="font-oxanium text-[16px] text-[#7B7A8A]">
              You can trust us to safely deliver your most sensitive documents
              to the specific area in a short time.
            </p>
          </div>
          <div className="w-full space-y-4 py-8">
            <p>
              <span className="text-[#f95c19]">●</span> Gifts
            </p>
            <p>
              <span className="text-[#f95c19]">●</span> Package
            </p>
            <p>
              <span className="text-[#f95c19]">●</span> Documents
            </p>
          </div>
          <div>
            <a href="#contact">
              <button className="xs:w-[280px] sm:w-[300px] h-[49px] rounded-[5px] border border-[#f95c19] font-oxanium font-bold text-[#f95c19] hover:bg-[#f8c7b4] transition-all duration-500 cursor-pointer">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
