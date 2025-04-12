import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/about/Sidebar';
import IntroductionPage from '../../pages/About/Introduction';
import SocietyPage from '../../pages/About/Society';
import AspirationPage from '../../pages/About/Aspiration';
import AchievementPage from '../../pages/About/Achievement';
import ProfessionalBodiesPage from '../../pages/About/ProfessionalBodies';
import MessagePage from '../../pages/About/Message';
import GoverningBodyPage from '../../pages/About/GoverningBody';
import CelebrationPage from '../../pages/About/Celebration';

const sidebarLinks = [
  { name: 'Introduction', path: 'introduction' },
  { name: 'Society', path: 'society' },
  { name: 'Aspiration', path: 'aspiration' },
  { name: 'Achievement', path: 'achievement' },
  { name: 'Professional Bodies', path: 'professional-bodies' },
  { name: 'Message', path: 'message' },
  { name: 'Governing Body', path: 'governing-body' },
  { name: 'Celebration', path: 'celebration' }
];

export default function AboutPage() {
  const location = useLocation();
  
  // Determine active section based on current path
  const getActiveSection = () => {
    const path = location.pathname.split('/').pop();
    const activeLink = sidebarLinks.find(link => link.path === path);
    return activeLink ? activeLink.name : 'Introduction';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      {/* Full-width Navbar - removed constraining container */}
      <div className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 w-full">
        <Navbar />
      </div>
      
      {/* Subtle Hero Section */}
      <div className="bg-gradient-to-r from-[#0d173b] to-[#1e305f] text-white">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <h1 className="text-3xl md:text-4xl font-bold">About Our Institute</h1>
          <p className="mt-3 text-base md:text-lg font-light">Shaping the future through excellence in technical education since 1999</p>
          <div className="mt-4 h-0.5 w-16 bg-white"></div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4 order-2 lg:order-1">
            <Sidebar
              links={sidebarLinks}
              activeSection={getActiveSection()}
              basePath="/about"
            />
          </aside>

          {/* Main Content Area - Routes will render here */}
          <main className="flex-1 order-1 lg:order-2">
            <Routes>
              <Route path="introduction" element={<IntroductionPage />} />
              <Route path="society" element={<SocietyPage />} />
              <Route path="aspiration" element={<AspirationPage />} />
              <Route path="achievement" element={<AchievementPage />} />
              <Route path="professional-bodies" element={<ProfessionalBodiesPage />} />
              <Route path="message" element={<MessagePage />} />
              <Route path="governing-body" element={<GoverningBodyPage />} />
              <Route path="celebration" element={<CelebrationPage />} />
              <Route index element={<Navigate to="introduction" replace />} />
              <Route path="*" element={<Navigate to="introduction" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}