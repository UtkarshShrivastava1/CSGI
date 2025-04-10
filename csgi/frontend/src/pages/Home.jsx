import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import NewsTicker from "../components/home/NewsTicker";
import AboutSection from "../components/home/AboutSection";
import GallerySection from "../components/home/GallerySection";
import MediaCoverage from "../components/home/MediaCoverage";
import VideoGallery from "../components/home/VideoGallery";
import CompaniesVisited from "../components/Home/CompaniesVisited";
import PlacementStats from "../components/Home/PlacementStats";
import Testimonials from "../components/Home/Testimonials";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar /> {/* Keep Navbar here, right after Header */}
      <Hero />
      <NewsTicker />
      <AboutSection />
      <GallerySection />
      <MediaCoverage />
      <div className="container mx-auto my-8 border-b border-gray-300"></div>
      <VideoGallery />
      <CompaniesVisited />
      <PlacementStats />
      <Testimonials />
      {/* Footer is already in App.jsx, so you could remove it here if you want it only once */}
    </div>
  );
};

export default Home;