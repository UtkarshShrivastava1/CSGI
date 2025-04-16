// File: App.jsx
import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import AboutPage from './pages/About/AboutIndex';
import AdmissionPage from './pages/Admission/AdmissionIndex';
import PlacementPage from './pages/Placement/PlacementIndex';
import Home from './pages/Home';
import AdminLogin from './pages/Admin/AdminLogin';
import AdminDashboard from './pages/Admin/AdminDasboard';
import GalleryForm from './pages/Admin/GalleryForm';
import GalleryDashboard from './pages/Admin/GalleryDashboard';

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
            
            {/* About page and its nested routes */}
            <Route path="/about/*" element={<AboutPage />} />
            
            {/* Admission page and its nested routes */}
            <Route path="/admission/*" element={<AdmissionPage />} />
            
            {/* Placement page and its nested routes */}
            <Route path="/placement/*" element={<PlacementPage />} />
            
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
            
            {/* Redirects for Placement section */}
            <Route path="/about-tnp-cell" element={<Navigate to="/placement/about-tnp-cell" replace />} />
            <Route path="/internship" element={<Navigate to="/placement/internship" replace />} />
            <Route path="/mous" element={<Navigate to="/placement/mous" replace />} />
            <Route path="/our-recruiters" element={<Navigate to="/placement/our-recruiters" replace />} />
            <Route path="/placement-policies" element={<Navigate to="/placement/placement-policies" replace />} />
            <Route path="/team-members" element={<Navigate to="/placement/team-members" replace />} />
            <Route path="/placement-statistics" element={<Navigate to="/placement/placement-statistics" replace />} />
            <Route path="/training-programme" element={<Navigate to="/placement/training-programme" replace />} />
            
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