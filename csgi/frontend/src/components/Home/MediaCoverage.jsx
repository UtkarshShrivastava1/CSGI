import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MediaCoverage = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Media Coverage</h2>
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
                src="https://csitdurg.in/admin/uploads/gallery/f6ff4a7b9d0f1d9235efe753a6339eea.jpg"
                alt="Media Coverage 1"
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
                src="https://csitdurg.in/admin/uploads/gallery/26.jpeg"
                alt="Media Coverage 3"
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MediaCoverage;