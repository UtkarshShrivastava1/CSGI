// File: App.jsx
import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AboutPage from './pages/About';
import AdmissionPage from './pages/Admission';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About page and its nested routes */}
            <Route path="/about/*" element={<AboutPage />} />
            
            {/* Admission page and its nested routes */}
            <Route path="/admission/*" element={<AdmissionPage />} />

            {/* Redirects for About section */}
            <Route path="/introduction" element={<Navigate to="/about/introduction" replace />} />
            <Route path="/society" element={<Navigate to="/about/society" replace />} />
            <Route path="/aspiration" element={<Navigate to="/about/aspiration" replace />} />
            <Route path="/achievement" element={<Navigate to="/about/achievement" replace />} />
            <Route path="/professional-bodies" element={<Navigate to="/about/professional-bodies" replace />} />
            <Route path="/message" element={<Navigate to="/about/message" replace />} />
            <Route path="/governing-body" element={<Navigate to="/about/governing-body" replace />} />
            <Route path="/governing-bodies" element={<Navigate to="/about/governing-body" replace />} />
            <Route path="/celebration" element={<Navigate to="/about/celebration" replace />} />

            {/* Redirects for Admission section */}
            <Route path="/courses-offered" element={<Navigate to="/admission/courses-offered" replace />} />
            <Route path="/admission-process" element={<Navigate to="/admission/admission-process" replace />} />
            <Route path="/leaflet" element={<Navigate to="/admission/leaflet" replace />} />
            <Route path="/help-desk" element={<Navigate to="/admission/help-desk" replace />} />

            {/* Catch all route - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
