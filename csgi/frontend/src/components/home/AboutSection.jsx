import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        {/* About Us */}
        <div className="mb-12" data-aos="fade-right">
          <h3 className="text-3xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-700 leading-relaxed">
            Global Competitive Spirit is the trademark of all the technical
            institutes of the world, as globalization has indeed arrived on the
            wings of Science and Technology and is here to stay.{" "}
            <strong>CSIT</strong>, recognized as the Best Engineering College in
            Chhattisgarh, is an AICTE recognized ISO 9001-2015 Certified
            Institute. Affiliated to Chhattisgarh Swami Vivekanand Technical
            University, Bhilai, CSIT has been a premier center for excellence
            since its foundation in 1999.
          </p>
        </div>

        {/* Our Vision */}
        <div className="mb-12" data-aos="fade-left">
          <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-700 leading-relaxed">
            To nurture world-class intellectual growth by imparting high-quality,
            futuristic technical education to emerge as one of the best technical
            institutes, serving mankind and contributing to societal progress.
          </p>
        </div>

        {/* Our Mission */}
        <div className="mb-12" data-aos="fade-right">
          <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-700 leading-relaxed">
            Creating an inspiring environment that promotes innovations, research,
            and creativity.
            <br />
            Providing quality technical education with global standards.
            <br />
            Accomplishing a National Centre of Excellence in collaboration with
            industry.
            <br />
            Establishing international alliances and collaborations with foreign
            universities to achieve global excellence.
          </p>
        </div>

        {/* Read More Button */}
        <div className="text-center">
          <a 
            href="/about-more" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;