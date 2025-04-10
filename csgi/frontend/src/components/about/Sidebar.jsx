// File: pages/About/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ links, activeSection, basePath }) {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden w-full md:w-64 min-h-[calc(100vh-400px)] sticky top-20 left-0">
      <div className="bg-[#0d173b] text-white py-3 px-4 font-medium text-base md:text-lg">
        About Navigation
      </div>
      <ul className="w-full">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={`${basePath}/${link.path}`}
              className={`w-full text-left px-3 md:px-4 py-2 md:py-3 transition-all duration-200 flex items-center border-l-2 text-sm md:text-base
                ${activeSection === link.name 
                  ? 'border-[#0d173b] bg-gray-50 text-[#0d173b] font-medium' 
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-[#0d173b]'}`}
            >
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}