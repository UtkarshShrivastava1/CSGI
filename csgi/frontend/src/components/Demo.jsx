import Logo from '../assets/csitlogo.png'; 
import React from 'react';

const SchoolFooter = () => {
  return (
    <div className="font-sans">
      {/* Enhanced Footer with integrated gradient background */}
      <div className="bg-gradient-to-b from-indigo-50 via-blue-50 to-indigo-100 pt-12 pb-6 shadow-inner">
        <div className="container mx-auto px-4">
          {/* Grid layout for all footer content including logo */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            {/* Logo and institute name integrated in the footer */}
            <div className="md:col-span-2">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-28 md:w-36 mb-4">
                  <img 
                    src={Logo}
                    alt="Chhatrapati Shivaji Institute of Technology Logo" 
                    className="w-full h-auto drop-shadow-lg transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center md:text-left">
                  <div className="text-blue-800 font-bold text-2xl md:text-3xl mb-1 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">CSIT</div>
                  <div className="text-gray-700 text-sm md:text-base">Chhatrapati Shivaji Institute of Technology</div>
                </div>
                
                {/* Social Media Icons with vibrant colors */}
                <div className="flex flex-wrap gap-4 mt-6">
                  {/* Instagram */}
                  <a href="#" className="text-pink-500 hover:text-pink-600 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  
                  {/* Facebook */}
                  <a href="#" className="text-blue-600 hover:text-blue-700 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  
                  {/* YouTube */}
                  <a href="#" className="text-red-600 hover:text-red-700 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110" aria-label="YouTube">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  
                  {/* LinkedIn */}
                  <a href="#" className="text-blue-700 hover:text-blue-800 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </a>
                  
                  {/* Twitter */}
                  <a href="#" className="text-sky-500 hover:text-sky-600 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* About Column with enhanced styling */}
            <div className="transform hover:translate-y-1 transition-transform duration-300">
              <h3 className="font-semibold text-xl mb-6 pb-2 border-b-2 border-indigo-300 inline-block bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">About</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center group"><span className="mr-2 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">→</span>About CSIT</a></li>
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center group"><span className="mr-2 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">→</span>Students Associations</a></li>
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center group"><span className="mr-2 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">→</span>Industrial Visit</a></li>
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center group"><span className="mr-2 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">→</span>SWAR</a></li>
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center group"><span className="mr-2 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">→</span>News Letter</a></li>
              </ul>
            </div>

            {/* Academics Column with enhanced styling */}
            <div className="transform hover:translate-y-1 transition-transform duration-300">
              <h3 className="font-semibold text-xl mb-6 pb-2 border-b-2 border-indigo-300 inline-block bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">Academics</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center group"><span className="mr-2 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">→</span>Academic Calendar</a></li>
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center group"><span className="mr-2 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">→</span>Courses Offered</a></li>
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center group"><span className="mr-2 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">→</span>Admission Processes</a></li>
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center group"><span className="mr-2 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">→</span>NPTEL</a></li>
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center group"><span className="mr-2 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">→</span>NIRF 2024</a></li>
              </ul>
            </div>

            {/* Mandatory Information Column with enhanced styling */}
            <div className="transform hover:translate-y-1 transition-transform duration-300">
              <h3 className="font-semibold text-xl mb-6 pb-2 border-b-2 border-indigo-300 inline-block bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">Mandatory Info</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center group"><span className="mr-2 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">→</span>Anti-Ragging</a></li>
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center group"><span className="mr-2 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">→</span>Mandatory Disclosure</a></li>
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center group"><span className="mr-2 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">→</span>RTI</a></li>
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center group"><span className="mr-2 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">→</span>NSS</a></li>
                <li><a href="#" className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 flex items-center group"><span className="mr-2 w-5 h-5 flex items-center justify-center rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-500 group-hover:text-indigo-700 transition-colors duration-300">→</span>FUNDS & GRANTS</a></li>
              </ul>
            </div>

            {/* School Contact Info Column with enhanced styling */}
            <div className="transform hover:translate-y-1 transition-transform duration-300">
              <h3 className="font-semibold text-xl mb-6 pb-2 border-b-2 border-indigo-300 inline-block bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start group">
                  <div className="p-2 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mr-3 text-white shadow-md group-hover:shadow-lg transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-indigo-700 transition-colors duration-300">Shivaji Nagar, Balod Road Durg, Chhattisgarh 491001</span>
                </li>
                <li className="flex items-start group">
                  <div className="p-2 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mr-3 text-white shadow-md group-hover:shadow-lg transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-indigo-700 transition-colors duration-300">registrar@csitdurg.in</span>
                </li>
                <li className="flex items-start group">
                  <div className="p-2 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mr-3 text-white shadow-md group-hover:shadow-lg transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-indigo-700 transition-colors duration-300">info@csitdurg.in</span>
                </li>
                <li className="flex items-start group">
                  <div className="p-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mr-3 text-white shadow-md group-hover:shadow-lg transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-indigo-700 transition-colors duration-300">+918966000059</span>
                </li>
                <li className="flex items-start group">
                  <div className="p-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mr-3 text-white shadow-md group-hover:shadow-lg transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 group-hover:text-indigo-700 transition-colors duration-300">+918966000102</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer with vibrant gradient */}
      <div className="bg-gradient-to-r from-blue-800 via-indigo-800 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-6">
          {/* Decorative separator */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full"></div>
          </div>
          
          {/* Final footer section with links and copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 hover:underline">Privacy Policy</a>
              <span className="text-blue-400">•</span>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 hover:underline">Terms & Conditions</a>
            </div>
            <div className="mb-4 md:mb-0 text-blue-200">
              Powered by <a href="#" className="text-yellow-300 hover:text-yellow-200 transition-colors duration-300 font-medium hover:underline">Zager Digital Services</a>
            </div>
            <div>
              <p className="text-blue-200">Copyright © 2025 All rights reserved By CSIT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolFooter;