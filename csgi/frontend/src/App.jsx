// File: App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Footer from './components/Footer';
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
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<AboutPage />} />
        
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
        
        {/* Redirects */}
        <Route path="/introduction" element={<Navigate to="/about/introduction" replace />} />
        <Route path="/society" element={<Navigate to="/about/society" replace />} />
        <Route path="/aspiration" element={<Navigate to="/about/aspiration" replace />} />
        <Route path="/achievement" element={<Navigate to="/about/achievement" replace />} />
        <Route path="/professional-bodies" element={<Navigate to="/about/professional-bodies" replace />} />
        <Route path="/message" element={<Navigate to="/about/message" replace />} />
        <Route path="/governing-body" element={<Navigate to="/about/governing-body" replace />} />
        <Route path="/celebration" element={<Navigate to="/about/celebration" replace />} />
        
        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;