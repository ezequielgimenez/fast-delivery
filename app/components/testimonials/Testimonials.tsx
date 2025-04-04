"use client";
import Image from "next/image";

// Import Swiper React components
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function TestimonialComp() {
  return (
    <div data-aos="fade-up" className="xs:py-12 lg:py-28">
      <h2 className="font-oxanium font-bold text-center xs:text-[25px] lg:text-[31px] text-[#f95c19]">
        Testimonials
      </h2>
      <h2 className="font-oxanium font-bold text-center xs:text-[25px] lg:text-[31px] text-[#261134]">
        Our Awesome Clients
      </h2>

      <div className="flex justify-center items-center pt-12">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          className="w-[872px]" // Tamaño del Swiper
          breakpoints={{
            1024: { slidesPerView: 1.2 }, // En pantallas grandes, muestra bien los laterales
            768: { slidesPerView: 1.5 }, // En tablets, se ven menos los laterales
            480: { slidesPerView: 1.2 }, // En móviles grandes, casi no se ven los laterales
            375: { slidesPerView: 1.1 }, // Para pantallas de 375px
            360: { slidesPerView: 1.05 }, // Para pantallas de 360px
          }}
          spaceBetween={20} /* Espaciado entre slides */
          loop={true} // Permite que los slides roten sin dejar espacios vacíos
          centeredSlides={true} /* Centra el slide activo */
          navigation // Flechas de navegación
          pagination={{ clickable: true }} // Indicadores de paginación
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center  bg-white rounded-[16px] p-8 h-[300px]">
              <h4 className="font-raleway xs:text-[20px] lg:text-[23px] text-[#f95c19]">
                Fantastic service!
              </h4>
              <div className="py-4">
                <p className="font-oxanium xs:text-[14px] lg:text-[16px] text-[#464558]">
                  Since I started working with this company, my shipments have
                  always arrived on time and in perfect condition. Their
                  commitment to quality is unmatched.
                </p>
              </div>
              <div className="flex xs:flex-col lg:flex-row justify-between px-4">
                <div>
                  <p className="text-[#f95c19] text-[22px]">★★★★★</p>
                </div>
                <div className="flex">
                  <div className="px-4">
                    <h4 className="font-raleway font-bold text-[#222132]">
                      Yves Tanguy
                    </h4>
                    <p className="font-oxanium text-[#464558]">
                      Chief Executive, DLF
                    </p>
                  </div>
                  <Image
                    src="/client1.png"
                    width={53}
                    height={54}
                    alt="Client 1"
                  ></Image>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col justify-center  bg-white rounded-[16px] p-8 h-[300px]">
              <h4 className="font-raleway xs:text-[20px] lg:text-[23px] text-[#f95c19]">
                Quality and Commitment!
              </h4>
              <div className="py-4">
                <p className="font-oxanium  xs:text-[14px] lg:text-[16px] text-[#464558]">
                  I had an issue with my delivery address, and the support team
                  fixed it within minutes. I was amazed by how fast and friendly
                  they were. I will definitely use this service again!
                </p>
              </div>
              <div className="flex xs:flex-col lg:flex-row justify-between px-4">
                <div>
                  <p className="text-[#f95c19] text-[22px]">★★★★★</p>
                </div>
                <div className="flex">
                  <div className="px-4">
                    <h4 className="font-raleway font-bold text-[#222132]">
                      James Anderson
                    </h4>
                    <p className="font-oxanium text-[#464558]">
                      CEO, Global Solutions
                    </p>
                  </div>
                  <Image
                    src="/client2.png"
                    width={53}
                    height={54}
                    alt="Client 2"
                  ></Image>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col justify-center bg-white rounded-[16px] p-8 h-[300px]">
              <h4 className="font-raleway xs:text-[20px] lg:text-[23px] text-[#f95c19]">
                Outstanding Customer Support
              </h4>
              <div className="py-4">
                <p className="font-oxanium  xs:text-[14px] lg:text-[16px] text-[#464558]">
                  I ordered a product online, and it was delivered in less than
                  24 hours. The real-time tracking kept me updated at all times.
                  Highly recommended!
                </p>
              </div>
              <div className="flex xs:flex-col lg:flex-row justify-between px-4">
                <div>
                  <p className="text-[#f95c19] text-[22px]">★★★★★</p>
                </div>
                <div className="flex">
                  <div className="px-4">
                    <h4 className="font-raleway font-bold text-[#222132]">
                      Sophia Martinez
                    </h4>
                    <p className="font-oxanium text-[#464558]">
                      Product Designer, InnovateX
                    </p>
                  </div>
                  <Image
                    src="/client3.png"
                    width={53}
                    height={54}
                    alt="Client 1"
                  ></Image>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
