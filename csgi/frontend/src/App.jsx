// File: App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<AboutPage />} />
        {/* Redirect /message to /about/message and similar routes */}
        <Route path="/introduction" element={<Navigate to="/about/introduction" replace />} />
        <Route path="/society" element={<Navigate to="/about/society" replace />} />
        <Route path="/aspiration" element={<Navigate to="/about/aspiration" replace />} />
        <Route path="/achievement" element={<Navigate to="/about/achievement" replace />} />
        <Route path="/professional-bodies" element={<Navigate to="/about/professional-bodies" replace />} />
        <Route path="/message" element={<Navigate to="/about/message" replace />} />
        <Route path="/governing-body" element={<Navigate to="/about/governing-body" replace />} />
        <Route path="/celebration" element={<Navigate to="/about/celebration" replace />} />
        {/* Add other main routes here */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;