import React, { useState } from 'react';
import { User } from 'lucide-react';
import Logo from '../assets/csitlogo.png';
import Image1 from '../assets/Aicte-logo.png';
import Image2 from '../assets/Institutions innovation council.png';
import Image3 from '../assets/ISO_logo.png';
import Image4 from '../assets/CSVTU.png';
import Image5 from '../assets/dataquest.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownHover = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="w-full">
      {/* Top Navbar - Burgundy Background */}
      <div className="bg-gray-200 text-white py-4 px-8 md:px-8">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center space-x-6">
            <img src={Logo} alt="CSIT Logo" className="w-40 h-full rounded-full bg-white" />
            <div className="hidden md:block">
              <h1 className="text-4xl text-black md:text-3xl font-serif">Chhatrapati Shivaji Institute of Technology</h1>
              <p className="text-sm text-black">Shivaji Nagar, Baload Road Durg, Chhattisgarh 491001</p>
            </div>
          </div>
          
          {/* Mobile Title - Shown only on smallest screens */}
          <div className="md:hidden text-center absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-xl text-black font-serif">Chhatrapati Shivaji Institute of Technology</h1>
            <p className="text-xs text-black">Shivaji Nagar, Baload Road Durg, Chhattisgarh 491001</p>
          </div>

          {/* Right Side Menu */}
          <div className="flex items-center space-x-4">
            {/* Quick Access Icons - Desktop */}
            <div className="hidden md:flex items-center gap-17 space-x-15">
                {/* Additional Photos */}
              <div className="flex space-x-3">
                <img src={Image1} alt="Sample 1" className="h-13 w-13 rounded-md" />
                <img src={Image2} alt="Sample 2" className="h-13 w-13 rounded-md" />
                <img src={Image3} alt="Sample 3" className="h-13 w-13 rounded-md" />
                <img src={Image4} alt="Sample 4" className="h-13 w-13 rounded-md" />
                <img src={Image5} alt="Sample 5" className="h-13 w-13 rounded-md" />
              </div>
              {/* Directory Icon */}
              <div 
                className="flex flex-col items-center cursor-pointer"
                onMouseEnter={() => handleDropdownHover('directory')}
                onMouseLeave={handleDropdownLeave}
              >
                <User className="h-5 w-5 text-black" />
                <span className="text-xs text-black mt-1">ADMISSION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            {/* Icons with labels */}
            <div className="flex justify-around py-4 border-b">
              <div className="flex flex-col items-center">
                <User size={20} className="text-red-900" />
                <span className="text-xs mt-1">ADMISSION</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
