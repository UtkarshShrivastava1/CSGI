import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { Quote, Star, GraduationCap } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The best decision I made was joining this college!",
      description: "With top-notch faculty and state-of-the-art infrastructure, my learning journey has been phenomenal.",
      name: "Student A",
      program: "Computer Science",
      rating: 5,
      image: "https://pngimg.com/uploads/student/student_PNG100.png"
    },
    {
      id: 2,
      quote: "Excellent faculty and amazing infrastructure.",
      description: "The practical exposure and industry visits have equipped me with the skills I need for my career.",
      name: "Student B",
      program: "Mechanical Engineering",
      rating: 5,
      image: "https://pngimg.com/uploads/student/student_PNG8.png"
    },
    {
      id: 3,
      quote: "A vibrant campus life with endless opportunities.",
      description: "Participating in various clubs and events has enhanced my leadership and networking skills.",
      name: "Student C",
      program: "Business Administration",
      rating: 5,
      image: "https://pngimg.com/uploads/student/student_PNG30.png"
    }
  ];

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            className={`${
              i < rating 
                ? "text-yellow-400 fill-yellow-400" 
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header with decorative elements */}
        <div className="relative text-center mb-16">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#0d173b]/5"></div>
          <h2 className="relative inline-block text-4xl font-bold text-[#0d173b]">
            Student <span className="text-[#0d173b]/70">Testimonials</span>
          </h2>
          <div className="mt-4 flex justify-center">
            <div className="w-16 h-1 bg-[#0d173b]"></div>
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Discover what our students say about their transformative journey at our institution
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div>
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="mySwiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} style={{ width: '70%', maxWidth: '800px' }}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                  <div className="flex flex-col md:flex-row">
                    {/* Left column with image and info */}
                    <div className="md:w-2/5 bg-gradient-to-br from-[#0d173b] to-blue-900 p-6 relative flex flex-col items-center justify-center text-center">
                      <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white border-opacity-20 shadow-lg mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <h3 className="text-white text-lg font-bold mb-1">{testimonial.name}</h3>
                      <div className="flex items-center justify-center gap-2 text-blue-200 mb-2">
                        <GraduationCap size={14} className="opacity-70" />
                        <p className="text-sm">{testimonial.program}</p>
                      </div>
                      
                      <div className="mt-2 mb-4">
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>
                    
                    {/* Right column with testimonial content */}
                    <div className="md:w-3/5 p-6 flex flex-col justify-center">
                      <div className="mb-4">
                        <Quote size={32} className="text-[#0d173b] opacity-20" />
                      </div>
                      
                      <p className="text-xl font-medium mb-4 text-[#0d173b] leading-relaxed">
                        "{testimonial.quote}"
                      </p>
                      
                      <p className="text-base text-slate-600 mb-6 leading-relaxed">
                        {testimonial.description}
                      </p>
                      
                      <div className="h-1 w-16 bg-[#0d173b] rounded-full opacity-30"></div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;