import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiBook, FiEye, FiTarget } from "react-icons/fi";
import AboutImageSlider from "./AboutImageSlider";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 120,
    });
  }, []);

  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[#0d173b] opacity-5"></div>

      <div className="container mx-auto px-4 max-w-7xl relative">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-[#0d173b] font-semibold text-lg mb-4 block transition-all duration-300 hover:opacity-80">
            About Institution
          </span>
          <h2 className="text-4xl font-bold text-[#0d173b] mb-6 transform transition duration-500 hover:scale-105">
            Shaping Future Innovators
          </h2>
          <div className="w-24 h-1 bg-[#0d173b] mx-auto rounded-full transition-all duration-300 hover:w-32"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">
          {/* Left Column */}
          <div className="space-y-12" data-aos="fade-right">
            {/* About Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-start mb-6">
                <div className="bg-[#0d173b] p-4 rounded-xl mr-5 transition-all duration-300 hover:rotate-12">
                  <FiBook className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0d173b] mb-3">About CSIT</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Established in 1999, CSIT stands as a beacon of excellence in technical education.
                    Recognized as Chhattisgarh's premier engineering institute, we combine academic rigor
                    with industry relevance to shape tomorrow's leaders.
                  </p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { value: "24+", label: "Years of Excellence" },
                  { value: "50+", label: "Industry Partners" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-[#f8f9fa] rounded-xl transition-all duration-300 hover:bg-[#0d173b] hover:text-white group"
                  >
                    <div className="text-2xl font-bold text-[#0d173b] mb-2 group-hover:text-white">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-white/90">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Slider */}
            <AboutImageSlider />
          </div>

          {/* Right Column */}
          <div className="space-y-8" data-aos="fade-left">
            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-start mb-6">
                <div className="bg-[#0d173b] p-4 rounded-xl mr-5 transition-all duration-300 hover:rotate-12">
                  <FiEye className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0d173b] mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To cultivate global innovators through transformative education, fostering 
                    intellectual growth that bridges technological advancement with societal progress.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="flex items-start mb-6">
                <div className="bg-[#0d173b] p-4 rounded-xl mr-5 transition-all duration-300 hover:rotate-12">
                  <FiTarget className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0d173b] mb-3">Our Mission</h3>
                  <ul className="space-y-4 text-gray-600">
                    {[
                      "Deliver world-class technical education through innovative pedagogy",
                      "Foster research-driven environment with industry collaborations",
                      "Develop socially responsible technocrats with global perspective",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start transition-all duration-300 hover:pl-2">
                        <div className="w-2 h-2 bg-[#0d173b] rounded-full mt-2 mr-3 transition-all duration-300 hover:scale-125"></div>
                        <span className="transition-all duration-300 hover:text-[#0d173b]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
