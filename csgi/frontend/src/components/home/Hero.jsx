import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import csitBanner from "../../assets/csitbanner.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  return (
    <div className="w-full bg-gray-100">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={csitBanner}
            alt="Seminar on Latest Tech"
            className="w-full h-[500px] object-cover"
          />
        </SwiperSlide>
        {/* Add more slides here if needed */}
      </Swiper>
    </div>
  );
};

export default Hero;