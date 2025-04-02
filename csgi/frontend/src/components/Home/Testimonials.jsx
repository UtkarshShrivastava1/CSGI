import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    image: "https://pngimg.com/uploads/student/student_PNG100.png",
    quote: "The best decision I made was joining this college!",
    name: "Student A, Computer Science",
    description: "With top-notch faculty and state-of-the-art infrastructure, my learning journey has been phenomenal."
  },
  {
    image: "https://pngimg.com/uploads/student/student_PNG8.png",
    quote: "Excellent faculty and amazing infrastructure.",
    name: "Student B, Mechanical Engineering",
    description: "The practical exposure and industry visits have equipped me with the skills I need for my career."
  },
  {
    image: "https://pngimg.com/uploads/student/student_PNG30.png",
    quote: "A vibrant campus life with endless opportunities.",
    name: "Student C, Business Administration",
    description: "Participating in various clubs and events has enhanced my leadership and networking skills."
  }
];

const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const Testimonials = () => {
  return (
    <Box className="py-20 bg-gray-100">
      <Container>
        <Typography variant="h4" align="center" gutterBottom className="font-bold text-4xl">
          Testimonials
        </Typography>
        <Slider {...carouselSettings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full border-3 border-gray-300 mb-4 mx-auto"
              />
              <Typography variant="h6" className="italic">
                "{testimonial.quote}"
              </Typography>
              <Typography variant="caption" className="font-bold">
                - {testimonial.name}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                {testimonial.description}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Testimonials;