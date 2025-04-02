// import React from "react";
// import Header from "../components/Header";
// // import Hero from "./components/Hero";
// // import OurInstitute from "./components/OurInstitute";
// // import OurInfrastructure from "./components/OurInfrastructure";
// // import PhotoGallery from "./components/PhotoGallery";
// // import MediaCoverage from "./components/MediaCoverage";
// // import VideoGallery from "./components/VideoGallery";
// // import CompaniesVisited from "./components/CompaniesVisited";
// // import PlacementHighlights from "./components/PlacementHighlights";
// // import Testimonials from "./components/Testimonials";
// // import Footer from "./components/Footer";

// export const Home =()=> {
//   return (
//     <div className="font-sans">
//       <Header />
//       {/* <Hero />
//       <OurInstitute />
//       <OurInfrastructure />
//       <PhotoGallery />
//       <MediaCoverage />
//       <VideoGallery />
//       <CompaniesVisited />
//       <PlacementHighlights />
//       <Testimonials />
//       <Footer /> */}
//     </div>
//   );
// }

// src/Home.jsx
import React, { useEffect } from "react";
import { Container, Typography, Box, Grid, Button, Divider } from "@mui/material";
import Slider from "react-slick"; // For carousels
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import csitBanner from "../assets/csitbanner.png";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer'; // Using Intersection Observer
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // Carousel settings for react-slick
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <ArrowForwardIos fontSize="small" />,
    prevArrow: <ArrowBackIos fontSize="small" />,
  };

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <Box className="relative w-full h-[68vh] overflow-hidden">
        <Slider {...carouselSettings} className="relative w-full h-full">
          <div className="relative w-full h-full">
            <img
              src={csitBanner}
              alt="Seminar on Latest Tech"
              className="block w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </Slider>
      </Box>

      {/* News Ticker Section */}
      <Box className="bg-gray-800 py-4 text-white relative overflow-hidden h-16">
        <Slider
          dots={false}
          infinite
          autoplay
          speed={1}
          autoplaySpeed={0}
          cssEase="linear"
          className="flex items-center"
        >
          <Typography>Admissions Open for Session 2025-26</Typography>
          <Typography>Register for the Tech Seminar - 12th July</Typography>
          <Typography>
            Join an institution renowned for academic excellence, cutting-edge
            research, and state-of-the-art facilities. Join us on a journey to
            professional success and innovation.
          </Typography>
        </Slider>
      </Box>

      {/* Our Institutes Section */}
      <Container className="section">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="font-bold text-4xl"
        >
          Our Institute
        </Typography>
      </Container>

      {/* About Us Section */}
      <Box className="py-20 bg-gray-100">
        <Container>
          {/* About Us */}
          <Box className="relative p-8 bg-white rounded-lg shadow-md mb-12" data-aos="fade-right">
            <Typography variant="h4" align="left" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" align="left" paragraph>
              Global Competitive Spirit is the trademark of all the technical
              institutes of the world, as globalization has indeed arrived on
              the wings of Science and Technology and is here to stay.{" "}
              <strong>CSIT</strong>, recognized as the Best Engineering College
              in Chhattisgarh, is an AICTE recognized ISO 9001-2015 Certified
              Institute. Affiliated to Chhattisgarh Swami Vivekanand Technical
              University, Bhilai, CSIT has been a premier center for excellence
              since its foundation in 1999.
            </Typography>
          </Box>

          {/* Our Vision */}
          <Box className="relative p-8 bg-white rounded-lg shadow-md mb-12" data-aos="fade-left">
            <Typography variant="h4" align="left" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" align="left" paragraph>
              To nurture world-class intellectual growth by imparting
              high-quality, futuristic technical education to emerge as one of
              the best technical institutes, serving mankind and contributing to
              societal progress.
            </Typography>
          </Box>

          {/* Our Mission */}
          <Box className="relative p-8 bg-white rounded-lg shadow-md mb-12" data-aos="fade-right">
            <Typography variant="h4" align="left" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" align="left" paragraph>
              Creating an inspiring environment that promotes innovations,
              research, and creativity.
              <br />
              Providing quality technical education with global standards.
              <br />
              Accomplishing a National Centre of Excellence in collaboration
              with industry.
              <br />
              Establishing international alliances and collaborations with
              foreign universities to achieve global excellence.
            </Typography>
          </Box>

          {/* Read More Button */}
          <Box textAlign="center" mt={4}>
            <Button
              variant="contained"
              color="primary"
              href="/about-more"
              size="large"
              className="bg-gradient-to-r from-blue-800 to-blue-600 text-white rounded-full py-3 px-6 transition duration-300 hover:bg-blue-700"
            >
              Read More
            </Button>
          </Box>
        </Container>
      </Box>

           {/* Infrastructure Section */}
<Container className="section">
  <Typography
    variant="h4"
    align="center"
    gutterBottom
    className="font-bold text-4xl"
  >
    Our Infrastructure
  </Typography>
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6} className="overflow-hidden max-w-full h-[400px]">
      <Slider {...carouselSettings}>
        <div className="w-full h-full flex justify-center">
          <img
            src="https://csitdurg.in/admin/uploads/gallery/014b3f5676f89fa6d8aa5f45e06fabdb.jpg"
            alt="Infrastructure 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-full flex justify-center">
          <img
            src="https://csitdurg.in/admin/uploads/gallery/90504c70957c87d4c3b75f85f24e7bcf.jpg"
            alt="Infrastructure 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </Slider>
    </Grid>
    <Grid item xs={12} sm={6} className="overflow-hidden max-w-full h-[400px]">
      <Slider {...carouselSettings}>
        <div className="w-full h-full flex justify-center">
          <img
            src="https://csitdurg.in/admin/uploads/gallery/59a90dd20e3be9628132249ff4a3046d.jpg"
            alt="Activity 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-full flex justify-center">
          <img
            src="https://csitdurg.in/admin/uploads/gallery/454f2a205a8fd1f568ec9e92d294b217.jpg"
            alt="Activity 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </Slider>
    </Grid>
  </Grid>
</Container>
<Divider className="border-blue-600 my-10" />

{/* Photo Gallery Section */}
<Container className="section">
  <Typography
    variant="h4"
    align="center"
    gutterBottom
    className="font-bold text-4xl"
  >
    Photo Gallery
  </Typography>
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6} className="overflow-hidden max-w-full h-[400px]">
      <Slider {...carouselSettings}>
        <div className="w-full h-full flex justify-center">
          <img
            src="https://csitdurg.in/admin/uploads/gallery/94eda6a832079a0340f82964287594f7.jpg"
            alt="Photo Gallery 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-full flex justify-center">
          <img
            src="https://csitdurg.in/admin/uploads/gallery/643202aefe68f69aa9e2be9fb896c308.jpg"
            alt="Photo Gallery 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </Slider>
    </Grid>
    <Grid item xs={12} sm={6} className="overflow-hidden max-w-full h-[400px]">
      <Slider {...carouselSettings}>
        <div className="w-full h-full flex justify-center">
          <img
            src="https://csitdurg.in/admin/uploads/gallery/6c3d24fd3edabb16b5cf7acf499dd6d7.jpg"
            alt="Photo Gallery 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="w-full h-full flex justify-center">
          <img
            src="https://csitdurg.in/admin/uploads/gallery/5e20e1bcfb7b6549233347220fa227f9.jpg"
            alt="Photo Gallery 4"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </Slider>
    </Grid>
  </Grid>
</Container>
<Divider className="border-blue-600 my-10" />

{/* Media Coverage Section */}
<Container className="media-coverage-container">
  <Typography
    variant="h4"
    align="center"
    gutterBottom
    className="font-bold text-4xl"
  >
    Media Coverage
  </Typography>
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6} className="overflow-hidden max-w-full h-[400px]">
      <Slider {...carouselSettings}>
        <div className="w-full h-full flex justify-center">
          <img
            src="https://csitdurg.in/admin/uploads/gallery/f6ff4a7b9d0f1d9235efe753a6339eea.jpg"
            alt="Media Coverage 1"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </Slider>
    </Grid>
    <Grid item xs={12} sm={6} className="overflow-hidden max-w-full h-[400px]">
      <Slider {...carouselSettings}>
        <div className="w-full h-full flex justify-center">
          <img
            src="https://csitdurg.in/admin/uploads/gallery/26.jpeg"
            alt="Media Coverage 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </Slider>
    </Grid>
  </Grid>
</Container>
<Divider className="border-blue-600 my-10" />

      {/* Video and Events Gallery Section */}
      <Container className="section">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="font-bold text-4xl"
        >
          Video Gallery
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Box className="w-full h-72 relative overflow-hidden rounded-lg shadow-md">
              <video controls className="w-full h-full object-cover">
                <source
                  src="https://csitdurg.in/Photos/csit_video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className="w-full h-72 relative overflow-hidden rounded-lg shadow-md">
              <video controls className="w-full h-full object-cover">
                <source
                  src="https://csitdurg.in/Photos/csit_video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Companies Visited */}
      <Box className="py-20">
        <Container>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            className="font-bold text-4xl"
          >
            Companies Visited
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Our students have been placed in leading organizations across
            various industries. Here are some of the companies that have visited
            our campus:
          </Typography>
          <Box className="overflow-hidden relative w-full h-40">
            <div className="flex gap-12 animate-marquee">
              <img
                src="https://csitdurg.in/Photos/Company-logo/Wipro_Primary_Logo_Color_RGB.svg%20(1).png"
                alt="Wipro"
                className="max-w-[200px] max-h-[140px] transition-transform duration-400 hover:scale-110"
              />
              <img
                src="https://csitdurg.in/Photos/Company-logo/Accenture-logo.png"
                alt="Accenture"
                className="max-w-[200px] max-h-[140px] transition-transform duration-400 hover:scale-110"
              />
              <img
                src="https://csitdurg.in/Photos/Company-logo/download-removebg-preview.png"
                alt="Company 3"
                className="max-w-[200px] max-h-[140px] transition-transform duration-400 hover:scale-110"
              />
              <img
                src="https://csitdurg.in/Photos/Company-logo/TATA+TECHNOLOGIES.png"
                alt="Tata Technologies"
                className="max-w-[200px] max-h-[140px] transition-transform duration-400 hover:scale-110"
              />
              {/* Duplicate logos for seamless looping */}
              <img
                src="https://csitdurg.in/Photos/Company-logo/Wipro_Primary_Logo_Color_RGB.svg%20(1).png"
                alt="Wipro"
                className="max-w-[200px] max-h-[140px] transition-transform duration-400 hover:scale-110"
              />
              <img
                src="https://csitdurg.in/Photos/Company-logo/Accenture-logo.png"
                alt="Accenture"
                className="max-w-[200px] max-h-[140px] transition-transform duration-400 hover:scale-110"
              />
              <img
                src="https://csitdurg.in/Photos/Company-logo/download-removebg-preview.png"
                alt="Company 3"
                className="max-w-[200px] max-h-[140px] transition-transform duration-400 hover:scale-110"
              />
              <img
                src="https://csitdurg.in/Photos/Company-logo/TATA+TECHNOLOGIES.png"
                alt="Tata Technologies"
                className="max-w-[200px] max-h-[140px] transition-transform duration-400 hover:scale-110"
              />
            </div>
          </Box>
        </Container>
      </Box>

      <Box className="py-20 text-center bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-lg shadow-md">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="font-bold text-4xl"
        >
          Placement Highlights
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography variant="h6">Highest Package</Typography>
              <CountUp start={0} end={10} duration={3} suffix=" LPA">
                {({ countUpRef, start }) => {
                  const { ref, inView } = useInView({
                    threshold: 0.1,
                    triggerOnce: true,
                  });
                  return (
                    <div ref={ref}>
                      {inView && (
                        <Typography
                          variant="h4"
                          ref={countUpRef}
                          className="text-3xl text-yellow-400 font-bold mb-2"
                        />
                      )}
                    </div>
                  );
                }}
              </CountUp>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography variant="h6">Average Package</Typography>
              <CountUp start={0} end={5.2} duration={3} suffix=" LPA">
                {({ countUpRef, start }) => {
                  const { ref, inView } = useInView({
                    threshold: 0.1,
                    triggerOnce: true,
                  });
                  return (
                    <div ref={ref}>
                      {inView && (
                        <Typography
                          variant="h4"
                          ref={countUpRef}
                          className="text-3xl text-yellow-400 font-bold mb-2"
                        />
                      )}
                    </div>
                  );
                }}
              </CountUp>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box>
              <Typography variant="h6">Companies Tie-Up</Typography>
              <CountUp start={0} end={100} duration={3} suffix="+">
                {({ countUpRef, start }) => {
                  const { ref, inView } = useInView({
                    threshold: 0.1,
                    triggerOnce: true,
                  });
                  return (
                    <div ref={ref}>
                      {inView && (
                        <Typography
                          variant="h4"
                          ref={countUpRef}
                          className="text-3xl text-yellow-400 font-bold mb-2"
                        />
                      )}
                    </div>
                  );
                }}
              </CountUp>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Testimonials Section */}
      <Box className="py-20 bg-gray-100">
        <Container>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            className="font-bold text-4xl"
          >
            Testimonials
          </Typography>
          <Slider {...carouselSettings}>
            {/* Testimonial 1 */}
            <Box className="bg-white rounded-lg p-6 shadow-md">
              <Box className="flex flex-col items-center">
                <img
                  src="https://pngimg.com/uploads/student/student_PNG100.png"
                  alt="Student A"
                  className="w-24 h-24 rounded-full border-3 border-gray-300 mb-4"
                />
                <Typography variant="h6" className="italic">
                  "The best decision I made was joining this college!"
                </Typography>
                <Typography variant="caption" className="font-bold">
                  - Student A, Computer Science
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  "With top-notch faculty and state-of-the-art infrastructure,
                  my learning journey has been phenomenal."
                </Typography>
              </Box>
            </Box>
            {/* Testimonial 2 */}
            <Box className="bg-white rounded-lg p-6 shadow-md">
              <Box className="flex flex-col items-center">
                <img
                  src="https://pngimg.com/uploads/student/student_PNG8.png"
                  alt="Student B"
                  className="w-24 h-24 rounded-full border-3 border-gray-300 mb-4"
                />
                <Typography variant="h6" className="italic">
                  "Excellent faculty and amazing infrastructure."
                </Typography>
                <Typography variant="caption" className="font-bold">
                  - Student B, Mechanical Engineering
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  "The practical exposure and industry visits have equipped me
                  with the skills I need for my career."
                </Typography>
              </Box>
            </Box>
            {/* Testimonial 3 */}
            <Box className="bg-white rounded-lg p-6 shadow-md">
              <Box className="flex flex-col items-center">
                <img
                  src="https://pngimg.com/uploads/student/student_PNG30.png"
                  alt="Student C"
                  className="w-24 h-24 rounded-full border-3 border-gray-300 mb-4"
                />
                <Typography variant="h6" className="italic">
                  "A vibrant campus life with endless opportunities."
                </Typography>
                <Typography variant="caption" className="font-bold">
                  - Student C, Business Administration
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  "Participating in various clubs and events has enhanced my
                  leadership and networking skills."
                </Typography>
              </Box>
            </Box>
          </Slider>
        </Container>
      </Box>
    </>
  );
};

export default Home;