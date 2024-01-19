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

const Banner = () => {
  return (
    <>
      <section className="mt-20 lg:mt-0">
        <Swiper
          slidesPerView={1}
          // navigation={true}
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="!z-0"
        >
          <SwiperSlide>
            <div>
              <div className=" pl-10 py-10 lg:pl-28 lg:py-28 flex items-center slider_bg">
                <div>
                  <p className="md:bg-primary-50 md:px-4 md:py-2 rounded text-primary-600 inline-block font-semibold text-[8px] md:text-[12px]">SUMMER SALE UPTO 50%</p>
                  <h2 className="mt-[4px] md:mt-[10px] mb-[13px] font-bold text-primary-900 text-[20px] md:text-[25px] lg:text-[32px] leading-[22px] md:leading-[35px] lg:leading-[48px]">
                    Make your life <br /> easy with us
                  </h2>
                  <p className="text-[10px] md:text-[16px] text-gray-500 leading-[15px] md:leading-[24px] md:mb-[30px] lg:mb-[40px]">
                    {" "}
                    We offer a wide selection of <br /> high-quality products at <br /> affordable prices.{" "}
                  </p>
                  <div className="hidden md:block">
                    <Link to="/categories">
                      <PrimaryButton title="SHOP NOW" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className=" pl-10 py-10 lg:pl-28 lg:py-28 flex items-center group_bg1">
                <div>
                  <p className="md:bg-primary-50 md:px-4 md:py-2 rounded text-primary-600 inline-block font-semibold text-[8px] md:text-[12px]">SUMMER SALE UPTO 20%</p>
                  <h2 className="mt-[4px] md:mt-[10px] mb-[13px] font-bold text-primary-900 text-[20px] md:text-[25px] lg:text-[32px] leading-[22px] md:leading-[35px] lg:leading-[48px]">
                    Make your life <br /> easy with us
                  </h2>
                  <p className="text-[10px] md:text-[16px] text-gray-500 leading-[15px] md:leading-[24px] md:mb-[30px] lg:mb-[40px]">
                    {" "}
                    We offer a wide selection of <br /> high-quality products at <br /> affordable prices.{" "}
                  </p>
                  <div className="hidden md:block">
                    <Link to="/categories">
                      <PrimaryButton title="SHOP NOW" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className=" pl-10 py-10 lg:pl-28 lg:py-28 flex items-center group_bg2">
                <div>
                  <p className="md:bg-primary-50 md:px-4 md:py-2 rounded text-primary-600 inline-block font-semibold text-[8px] md:text-[12px]">SUMMER SALE UPTO 35%</p>
                  <h2 className="mt-[4px] md:mt-[10px] mb-[13px] font-bold text-primary-900 text-[20px] md:text-[25px] lg:text-[32px] leading-[22px] md:leading-[35px] lg:leading-[48px]">
                    Make your life <br /> easy with us
                  </h2>
                  <p className="text-[10px] md:text-[16px] text-gray-500 leading-[15px] md:leading-[24px] md:mb-[30px] lg:mb-[40px]">
                    {" "}
                    We offer a wide selection of <br /> high-quality products at <br /> affordable prices.{" "}
                  </p>
                  <div className="hidden md:block">
                    <Link to="/categories">
                      <PrimaryButton title="SHOP NOW" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Banner;
