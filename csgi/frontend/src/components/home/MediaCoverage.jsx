import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MediaCoverage = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0d173b] mb-4 tracking-wide transition-all duration-500 hover:scale-105">
            Media Coverage
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A glimpse of our institution's achievements and activities featured in the media.
          </p>
          <div className="w-20 h-1 bg-[#0d173b] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Swiper Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* First Swiper */}
          <div className="group relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
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
              className="rounded-2xl"
            >
              <SwiperSlide>
                <img
                  src="https://csitdurg.in/admin/uploads/gallery/f6ff4a7b9d0f1d9235efe753a6339eea.jpg"
                  alt="Media Coverage 1"
                  className="w-full h-72 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Second Swiper */}
          <div className="group relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
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
              className="rounded-2xl"
            >
              <SwiperSlide>
                <img
                  src="https://csitdurg.in/admin/uploads/gallery/26.jpeg"
                  alt="Media Coverage 2"
                  className="w-full h-72 object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
