import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { UserCircle2, Quote } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The best decision I made was joining this college!",
      description: "With top-notch faculty and state-of-the-art infrastructure, my learning journey has been phenomenal.",
      name: "Student A",
      program: "Computer Science",
      image: "https://pngimg.com/uploads/student/student_PNG100.png" // Placeholder image
    },
    {
      quote: "Excellent faculty and amazing infrastructure.",
      description: "The practical exposure and industry visits have equipped me with the skills I need for my career.",
      name: "Student B",
      program: "Mechanical Engineering",
      image: "https://pngimg.com/uploads/student/student_PNG8.png" // Placeholder image
    },
    {
      quote: "A vibrant campus life with endless opportunities.",
      description: "Participating in various clubs and events has enhanced my leadership and networking skills.",
      name: "Student C",
      program: "Business Administration",
      image: "https://pngimg.com/uploads/student/student_PNG30.png" // Placeholder image
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-slate-200 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0d173b] mb-3">Testimonials</h2>
          <div className="h-1 w-24 bg-[#0d173b] mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-4 max-w-xl mx-auto">Hear directly from our students about their experiences and journeys with us</p>
        </div>
        
        <Swiper
          effect="fade"
          spaceBetween={30}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: "swiper-pagination-bullet-active bg-[#0d173b]",
          }}
          modules={[Autoplay, Pagination, EffectFade]}
          className="testimonial-swiper max-w-5xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
  <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto transform transition-all duration-300 hover:scale-[1.01] mb-10">
    <div className="absolute -top-5 left-8">
      <div className="bg-[#0d173b] rounded-full p-2 shadow-lg">
        <Quote size={24} className="text-white" />
      </div>
    </div>
    
    <div className="flex flex-col md:flex-row items-center gap-8 pt-4">
      <div className="md:w-1/4 flex justify-center">
        {testimonial.image ? (
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-100 shadow-md">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#0d173b] text-white p-2 rounded-full">
              <UserCircle2 size={20} />
            </div>
          </div>
        ) : (
          <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center">
            <UserCircle2 size={48} className="text-[#0d173b]" />
          </div>
        )}
      </div>
      
      <div className="md:w-3/4 text-center md:text-left">
        <p className="text-2xl font-semibold mb-4 text-[#0d173b]">
          "{testimonial.quote}"
        </p>
        <p className="text-slate-700 mb-6">
          {testimonial.description}
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-2 justify-center md:justify-start">
          <p className="font-bold text-[#0d173b]">{testimonial.name}</p>
          <div className="hidden md:block h-4 w-1 bg-slate-300 rounded-full mx-2"></div>
          <p className="text-[#0d173b] opacity-80">{testimonial.program}</p>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>
          ))}
        </Swiper>
        
        {/* <div className="mt-12 text-center">
          <button className="bg-[#0d173b] hover:bg-slate-900 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1">
            View More Testimonials
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;

