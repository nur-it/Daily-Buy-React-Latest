import React from "react";
import { Link } from "react-router-dom";
import "../../styles/banner.css";
import { PrimaryButton } from "../theme/Button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const slides = [
  {
    bgClass: "slider_bg",
    saleText: "SUMMER SALE UPTO 50%",
    title: "Make your life easy with us",
    description:
      "We offer a wide selection of high-quality products at affordable prices.",
  },
  {
    bgClass: "group_bg1",
    saleText: "SUMMER SALE UPTO 20%",
    title: "Make your life easy with us",
    description:
      "We offer a wide selection of high-quality products at affordable prices.",
  },
  {
    bgClass: "group_bg2",
    saleText: "SUMMER SALE UPTO 35%",
    title: "Make your life easy with us",
    description:
      "We offer a wide selection of high-quality products at affordable prices.",
  },
];

const Banner = () => {
  return (
    <section className="mt-20 lg:mt-0">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3500,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="!z-0"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className={`pl-10 py-10 lg:pl-28 lg:py-28 flex items-center ${slide.bgClass}`}
            >
              <div>
                <p className="md:bg-primary-50 md:px-4 md:py-2 rounded text-primary-600 inline-block font-semibold text-[8px] md:text-[12px]">
                  {slide.saleText}
                </p>
                <h2 className="mt-[4px] md:mt-[10px] mb-[13px] font-bold text-primary-900 text-[20px] md:text-[25px] lg:text-[32px] leading-[22px] md:leading-[35px] lg:leading-[48px] max-w-[162px] sm:max-w-[200px] lg:max-w-full">
                  {slide.title}
                </h2>
                <p className="text-[10px] md:text-[16px] text-gray-500 leading-[15px] md:leading-[24px] md:mb-[30px] lg:mb-[40px] max-w-[139px] sm:max-w-[180px] md:max-w-[340px] lg:max-w-[440px] 2xl:max-w-full">
                  {slide.description}
                </p>
                <div className="hidden md:block">
                  <Link to="/categories">
                    <PrimaryButton title="SHOP NOW" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
