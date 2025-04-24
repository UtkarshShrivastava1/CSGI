import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-red-800 text-white font-sans">
      <div className="container mx-auto py-8 px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4 relative pl-2 border-l-4 border-white">Quick Links</h3>
            <ul className="space-y-2">
              {/* <li>
                <Link to="/about" className="text-white hover:text-gray-300 transition duration-300 flex items-center">
                  <span className="mr-2">›</span>About
                </Link>
              </li> */}
              <li>
                <Link to="/contact-us" className="text-white hover:text-gray-300 transition duration-300 flex items-center">
                  <span className="mr-2">›</span>Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-white hover:text-gray-300 transition duration-300 flex items-center">
                  <span className="mr-2">›</span>Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-white hover:text-gray-300 transition duration-300 flex items-center">
                  <span className="mr-2">›</span>Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative pl-2 border-l-4 border-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-white" />
                <a 
                  href="https://www.google.com/maps/place/CSIT+Durg/@21.1482141,81.2611754,722m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a293bf98e611daf:0x9aeb86912d1db8e7!8m2!3d21.1482141!4d81.2611754!16s%2Fm%2F076xq1f?entry=ttu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition duration-300"
                >
                  Shivaji Nagar, Balod Road Durg, Chhattisgarh 491001
                </a>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-white" />
                <div>
                  <a href="tel:+918966000059" className="text-white hover:text-gray-300 transition duration-300">+91-8966000059</a>,
                  <a href="tel:+918966000102" className="text-white hover:text-gray-300 transition duration-300 ml-1">+91-8966000102</a>
                </div>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-white" />
                <div>
                  <a href="mailto:registrar@csitdurg.in" className="text-white hover:text-gray-300 transition duration-300">registrar@csitdurg.in</a>,
                  <a href="mailto:info@csitdurg.in" className="text-white hover:text-gray-300 transition duration-300 ml-1">info@csitdurg.in</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 my-8">
          <a href="https://www.facebook.com/csgidurg.in" target="_blank" rel="noopener noreferrer" 
             className="bg-red-800 hover:bg-red-700 p-2 rounded-full transition duration-300">
            <FaFacebookF size={18} />
          </a>
          <a href="https://x.com/DurgCsit" target="_blank" rel="noopener noreferrer" 
             className="bg-red-800 hover:bg-red-700 p-2 rounded-full transition duration-300">
            <FaTwitter size={18} />
          </a>
          <a href="https://www.instagram.com/csgidurg/" target="_blank" rel="noopener noreferrer" 
             className="bg-red-800 hover:bg-red-700 p-2 rounded-full transition duration-300">
            <FaInstagram size={18} />
          </a>
          <a href="https://www.linkedin.com/in/chhatrapati-shivaji-group-of-institutions-durg-9909173b/" target="_blank" rel="noopener noreferrer" 
             className="bg-red-800 hover:bg-red-700 p-2 rounded-full transition duration-300">
            <FaLinkedinIn size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm border-t border-red-600 pt-4">
          © 2025 CSGI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;