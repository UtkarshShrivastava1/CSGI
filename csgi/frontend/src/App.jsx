// File: App.jsx
import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AboutPage from './pages/About/AboutIndex';
import AcademicPage from './pages/Academics/AcaedmicIndex';
import AdminDashboard from './pages/Admin/AdminDasboard';
import AdminLogin from './pages/Admin/AdminLogin';
import GalleryDashboard from './pages/Admin/GalleryDashboard';
import GalleryForm from './pages/Admin/GalleryForm';
import AdmissionPage from './pages/Admission/AdmissionIndex';
import Home from './pages/Home';
import Cse from './pages/Campus/Facilities/Facilitiesindex'
import FacilitiesIndex from './pages/Campus/Facilities/Facilitiesindex';


// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('adminToken');
  if (!token) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
};


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/cse" element={<Cse />} />

            {/* About page and its nested routes */}
            <Route path="/about/*" element={<AboutPage />} />
            <Route path="/admission/*" element={<AdmissionPage />} />
            <Route path="/academics/*" element={<AcademicPage />} />
            <Route path="/campus/facilities" element={<FacilitiesIndex />} /> {/* Facilities Route */}

            {/* Admin Routes */}
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/gallery/upload" 
              element={
                <ProtectedRoute>
                  <GalleryForm />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/gallery-dashboard" 
              element={
                <ProtectedRoute>
                  <GalleryDashboard />
                </ProtectedRoute>
              } 
            />

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

            {/* Redirects for Academics section */}
            <Route path="/computer-science-and-engineering" element={<Navigate to="/academics/computer-science-and-engineering" replace />} />
            <Route path="/artificial-intelligence-and-data-engineering" element={<Navigate to="/academics/artificial-intelligence-and-data-engineering" replace />} />
            <Route path="/civil-engineering" element={<Navigate to="/academics/civil-engineering" replace />} />
            <Route path="/electrical-and-electronics-engineering" element={<Navigate to="/academics/electrical-and-electronics-engineering" replace />} />
            <Route path="/mechatronics" element={<Navigate to="/academics/mechatronics" replace />} />
            <Route path="/mechanical-engineering" element={<Navigate to="/academics/mechanical-engineering" replace />} />
            <Route path="/information-technology-engineering" element={<Navigate to="/academics/information-technology-engineering" replace />} />

            {/* Redirects for Campus section */}

            {/* Catch-all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
