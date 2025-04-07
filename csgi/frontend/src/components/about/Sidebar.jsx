// File: pages/About/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar({ links, activeSection, basePath }) {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden sticky top-20">
      <div className="bg-[#0d173b] text-white py-3 px-4 font-medium text-lg">
        About Navigation
      </div>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={`${basePath}/${link.path}`}
              className={`block w-full text-left px-4 py-3 transition-all duration-200 flex items-center border-l-2 
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