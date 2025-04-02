import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Testimonials</h2>
        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="testimonial-swiper"
        >
          {/* Testimonial 1 */}
          <SwiperSlide>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src="https://pngimg.com/uploads/student/student_PNG100.png"
                  alt="Student A"
                  className="w-32 h-32 object-cover rounded-full"
                />
                <div className="text-center md:text-left">
                  <p className="text-xl font-semibold mb-2">
                    "The best decision I made was joining this college!"
                  </p>
                  <p className="text-gray-600 italic mb-3">
                    - Student A, Computer Science
                  </p>
                  <p className="text-gray-700">
                    "With top-notch faculty and state-of-the-art infrastructure,
                    my learning journey has been phenomenal."
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          {/* Testimonial 2 */}
          <SwiperSlide>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src="https://pngimg.com/uploads/student/student_PNG8.png"
                  alt="Student B"
                  className="w-32 h-32 object-cover rounded-full"
                />
                <div className="text-center md:text-left">
                  <p className="text-xl font-semibold mb-2">
                    "Excellent faculty and amazing infrastructure."
                  </p>
                  <p className="text-gray-600 italic mb-3">
                    - Student B, Mechanical Engineering
                  </p>
                  <p className="text-gray-700">
                    "The practical exposure and industry visits have equipped me
                    with the skills I need for my career."
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
          {/* Testimonial 3 */}
          <SwiperSlide>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                  src="https://pngimg.com/uploads/student/student_PNG30.png"
                  alt="Student C"
                  className="w-32 h-32 object-cover rounded-full"
                />
                <div className="text-center md:text-left">
                  <p className="text-xl font-semibold mb-2">
                    "A vibrant campus life with endless opportunities."
                  </p>
                  <p className="text-gray-600 italic mb-3">
                    - Student C, Business Administration
                  </p>
                  <p className="text-gray-700">
                    "Participating in various clubs and events has enhanced my
                    leadership and networking skills."
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;