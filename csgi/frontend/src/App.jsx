import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IntroductionPage from './pages/About/Introduction'; 
// Remove Navbar import from App.jsx
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      {/* Remove Navbar from here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<IntroductionPage />} />
        {/* You can add more routes here for other sidebar pages */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;