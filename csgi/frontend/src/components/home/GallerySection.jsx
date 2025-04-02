import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const GallerySection = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-12">Photo Gallery</h2>
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
                src="https://csitdurg.in/admin/uploads/gallery/94eda6a832079a0340f82964287594f7.jpg"
                alt="Photo Gallery 1"
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://csitdurg.in/admin/uploads/gallery/643202aefe68f69aa9e2be9fb896c308.jpg"
                alt="Photo Gallery 2"
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
                src="https://csitdurg.in/admin/uploads/gallery/6c3d24fd3edabb16b5cf7acf499dd6d7.jpg"
                alt="Photo Gallery 3"
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://csitdurg.in/admin/uploads/gallery/5e20e1bcfb7b6549233347220fa227f9.jpg"
                alt="Photo Gallery 4"
                className="w-full h-64 object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;