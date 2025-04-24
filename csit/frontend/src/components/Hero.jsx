
import Heroimage from '../assets/Hero.jpg'

import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full">
      {/* Hero container with modified styling for proper image display */}
      <div className="relative w-full overflow-hidden">
        {/* Hero image with contain mode to prevent cutting */}
        <img 
          src={Heroimage}
          alt="Chhatrapati Shivaji Group of Institutions" 
          className="w-full md:h-auto object-contain lg:object-fill mx-auto"
          style={{ maxHeight: '80vh' }}
        />
      </div>
    </section>
  );
}