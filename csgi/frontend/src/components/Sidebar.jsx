// File: pages/About/components/Sidebar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Sidebar({ links, activeSection, basePath }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  // Function to handle navigation and scroll to top with smooth transitions
  const handleNavigation = (path) => {
    // Prevent multiple clicks during navigation
    if (isNavigating) return;
    
    // Set navigating state to true
    setIsNavigating(true);
    
    // Add a small delay before navigation to allow for transition effects
    setTimeout(() => {
      // Navigate to the new path
      navigate(`${basePath}/${path}`);
      
      // Scroll to the top of the page with smooth behavior
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Reset navigating state after a short delay
      setTimeout(() => {
        setIsNavigating(false);
      }, 300);
    }, 100);
  };

  // Reset navigating state when location changes
  useEffect(() => {
    setIsNavigating(false);
  }, [location]);

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden w-full md:w-64 min-h-[calc(100vh-400px)] sticky top-20 left-0">
      <div className="bg-[#0d173b] text-white py-3 px-4 font-medium text-base md:text-lg">
        About Navigation
      </div>
      <ul className="w-full">
        {links.map((link, index) => (
          <motion.li 
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              onClick={() => handleNavigation(link.path)}
              disabled={isNavigating}
              className={`w-full text-left px-3 md:px-4 py-2 md:py-3 transition-all duration-200 flex items-center border-l-2 text-sm md:text-base
                ${activeSection === link.name 
                  ? 'border-[#0d173b] bg-gray-50 text-[#0d173b] font-medium' 
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-[#0d173b]'}
                ${isNavigating ? 'opacity-70 cursor-wait' : ''}`}
            >
              <span>{link.name}</span>
              {activeSection === link.name && (
                <motion.div 
                  className="ml-auto w-2 h-2 rounded-full bg-[#0d173b]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </button>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}