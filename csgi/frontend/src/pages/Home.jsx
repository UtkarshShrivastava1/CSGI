import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Demo from "../components/Demo";
import Hero from "../components/home/Hero";
import NewsTicker from "../components/home/NewsTicker";
import InstituteInfo from "../components/home/InstituteInfo";
import AboutSection from "../components/home/AboutSection";
import InfrastructureSection from "../components/home/InfrastructureSection";
import GallerySection from "../components/home/GallerySection";
import MediaCoverage from "../components/home/MediaCoverage";
import VideoGallery from "../components/home/VideoGallery";
import CompaniesVisited from "../components/home/CompaniesVisited";
import PlacementStats from "../components/home/PlacementStats";
import Testimonials from "../components/Home/Testimonials";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navbar/>
      <Hero />
      <NewsTicker />
      <InstituteInfo />
      <AboutSection />
      <InfrastructureSection />
      <div className="container mx-auto my-8 border-b border-gray-300"></div>
      <GallerySection />
      <div className="container mx-auto my-8 border-b border-gray-300"></div>
      <MediaCoverage />
      <div className="container mx-auto my-8 border-b border-gray-300"></div>
      <VideoGallery />
      <CompaniesVisited />
      <PlacementStats />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;