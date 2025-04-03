import React from 'react';
import Logo from '../assets/csitlogo.png';
import { FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { HiLocationMarker, HiMail, HiPhone } from 'react-icons/hi';

const SchoolFooter = () => {
  return (
    <footer className="bg-[#0d173b] text-white font-sans">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        {/* Top section with logo and social media */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 border-b border-gray-700 pb-8">
          <div className="flex items-center mb-8 lg:mb-0">
            <img 
              src={Logo}
              alt="Chhatrapati Shivaji Institute of Technology Logo" 
              className="w-16 h-auto mr-4"
            />
            <div>
              <h2 className="text-xl font-bold text-white">CSIT DURG</h2>
              <p className="text-gray-300 text-sm">Chhatrapati Shivaji Institute of Technology</p>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/csitdurg/" 
               className="bg-blue bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition duration-300"
               aria-label="Instagram"
               target="_blank"
               rel="noopener noreferrer">
              <FaInstagram className="h-5 w-5 text-white" style={{ fontSize: '1.25rem' }} />
            </a>
            <a href="https://www.facebook.com/csitdurg/"
               className="bg-blue bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition duration-300"
               aria-label="Facebook"
               target="_blank"
               rel="noopener noreferrer">
              <FaFacebookF className="h-5 w-5 text-white" style={{ fontSize: '1.25rem' }} />
            </a>
            <a href="https://www.youtube.com/channel/UCit-WPPLSJ4SYUe4YS9xNVw"
               className="bg-blue bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition duration-300"
               aria-label="YouTube"
               target="_blank"
               rel="noopener noreferrer">
              <FaYoutube className="h-5 w-5 text-white" style={{ fontSize: '1.25rem' }} />
            </a>
            <a href="https://www.linkedin.com/school/csitdurg/"
               className="bg-blue bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition duration-300"
               aria-label="LinkedIn"
               target="_blank"
               rel="noopener noreferrer">
              <FaLinkedinIn className="h-5 w-5 text-white" style={{ fontSize: '1.25rem' }} />
            </a>
            <a href="https://twitter.com/csitdurg"
               className="bg-blue bg-opacity-10 hover:bg-opacity-20 p-3 rounded-full transition duration-300"
               aria-label="Twitter"
               target="_blank"
               rel="noopener noreferrer">
              <FaTwitter className="h-5 w-5 text-white" style={{ fontSize: '1.25rem' }} />
            </a>
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              <span className="border-b-2 border-blue-400 pb-1">About</span>
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1">About CSIT</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1">Students Associations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1">Industrial Visit</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1">SWAR</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1">News Letter</a></li>
            </ul>
          </div>
          
          {/* Academics Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              <span className="border-b-2 border-blue-400 pb-1">Academics</span>
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1">Academic Calendar</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1">Courses Offered</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1">Admission Processes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1">NPTEL</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1">NIRF 2024</a></li>
            </ul>
          </div>
          
          {/* Mandatory Information Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              <span className="border-b-2 border-blue-400 pb-1">Mandatory Information</span>
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1">Anti-Ragging</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1">Mandatory Disclosure</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1">RTI</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1">NSS</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-300 transition duration-300 inline-block py-1">FUNDS & GRANTS</a></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              <span className="border-b-2 border-blue-400 pb-1">Contact Us</span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-blue-900 p-2 rounded-md mr-3 flex-shrink-0 mt-1">
                  <HiLocationMarker className="h-5 w-5 text-blue-300" style={{ fontSize: '1.25rem' }} />
                </div>
                <span className="text-gray-300 text-sm">Shivaji Nagar, Balod Road Durg, Chhattisgarh 491001</span>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-900 p-2 rounded-md mr-3 flex-shrink-0">
                  <HiMail className="h-5 w-5 text-blue-300" style={{ fontSize: '1.25rem' }} />
                </div>
                <a href="mailto:registrar@csitdurg.in" className="text-gray-300 text-sm hover:text-blue-300 transition duration-300">registrar@csitdurg.in</a>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-900 p-2 rounded-md mr-3 flex-shrink-0">
                  <HiMail className="h-5 w-5 text-blue-300" style={{ fontSize: '1.25rem' }} />
                </div>
                <a href="mailto:info@csitdurg.in" className="text-gray-300 text-sm hover:text-blue-300 transition duration-300">info@csitdurg.in</a>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-900 p-2 rounded-md mr-3 flex-shrink-0">
                  <HiPhone className="h-5 w-5 text-blue-300" style={{ fontSize: '1.25rem' }} />
                </div>
                <a href="tel:+918966000059" className="text-gray-300 text-sm hover:text-blue-300 transition duration-300">+91 89660 00059</a>
              </li>
              <li className="flex items-center">
                <div className="bg-blue-900 p-2 rounded-md mr-3 flex-shrink-0">
                  <HiPhone className="h-5 w-5 text-blue-300" style={{ fontSize: '1.25rem' }} />
                </div>
                <a href="tel:+918966000102" className="text-gray-300 text-sm hover:text-blue-300 transition duration-300">+91 89660 00102</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-black bg-opacity-30">
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="text-gray-400 mb-2 md:mb-0">
            Copyright © 2025 All rights reserved By CSIT
          </div>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-300">Terms & Conditions</a>
            <a href="#" className="text-gray-400 hover:text-gray-200 transition duration-300">Sitemap</a>
          </div>
          <div className="text-gray-400 mt-2 md:mt-0">
            Powered by <a href="https://www.zager.in/" className="text-blue-400 hover:text-blue-300 transition duration-300" target="_blank" rel="noopener noreferrer">Zager Digital Services</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SchoolFooter;