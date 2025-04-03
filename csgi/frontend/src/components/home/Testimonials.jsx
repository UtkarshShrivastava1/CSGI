import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Software Engineer at Wipro",
      image: "https://pngimg.com/uploads/student/student_PNG100.png",
      quote: "The best decision I made was joining this college! The faculty's dedication and the industry-relevant curriculum prepared me perfectly for my career.",
      rating: 5,
      year: "2023"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Data Scientist at Accenture",
      image: "https://pngimg.com/uploads/student/student_PNG8.png",
      quote: "The practical exposure and industry visits have equipped me with the skills I need for my career. The placement cell's support was invaluable.",
      rating: 5,
      year: "2023"
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Mechanical Engineer at Tata Technologies",
      image: "https://pngimg.com/uploads/student/student_PNG30.png",
      quote: "Participating in various technical clubs and events enhanced my leadership and networking skills. The campus life was truly enriching.",
      rating: 5,
      year: "2023"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0d173b] mb-4 tracking-wide transition-all duration-500 hover:scale-105">
            Student Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Hear from our successful alumni about their journey and experiences
          </p>
          <div className="w-20 h-1 bg-[#0d173b] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Testimonials Slider */}
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
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-[#0d173b] text-white p-2 rounded-full">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg italic mb-6">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="text-xl font-semibold text-[#0d173b]">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-[#0d173b] font-medium mt-1">
                        Placed in {testimonial.year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;