import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const InfrastructureSection = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Our Infrastructure</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <SwiperSlide>
              <img
                src="https://csitdurg.in/admin/uploads/gallery/014b3f5676f89fa6d8aa5f45e06fabdb.jpg"
                alt="Infrastructure 1"
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://csitdurg.in/admin/uploads/gallery/90504c70957c87d4c3b75f85f24e7bcf.jpg"
                alt="Infrastructure 2"
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <Swiper
            spaceBetween={0}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <SwiperSlide>
              <img
                src="https://csitdurg.in/admin/uploads/gallery/59a90dd20e3be9628132249ff4a3046d.jpg"
                alt="Activity 1"
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://csitdurg.in/admin/uploads/gallery/454f2a205a8fd1f568ec9e92d294b217.jpg"
                alt="Activity 2"
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureSection;