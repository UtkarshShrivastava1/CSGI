import { useEffect, useRef } from 'react';

const CompaniesVisited = ()=> {
  // Reference for the animation
  const marqueeRef1 = useRef(null);
  const marqueeRef2 = useRef(null);

  // Companies data
  const companies = [
    {
      name: "Wipro",
      logo: "https://csitdurg.in/Photos/Company-logo/Wipro_Primary_Logo_Color_RGB.svg%20(1).png"
    },
    {
      name: "Accenture",
      logo: "https://csitdurg.in/Photos/Company-logo/Accenture-logo.png"
    },
    {
      name: "Infosys",
      logo: "https://csitdurg.in/Photos/Company-logo/download-removebg-preview.png"
    },
    {
      name: "Tata Technologies",
      logo: "https://csitdurg.in/Photos/Company-logo/TATA+TECHNOLOGIES.png"
    },
    {
      name: "Wipro",
      logo: "https://csitdurg.in/Photos/Company-logo/Wipro_Primary_Logo_Color_RGB.svg%20(1).png"
    },
    {
      name: "Accenture",
      logo: "https://csitdurg.in/Photos/Company-logo/Accenture-logo.png"
    },
    {
      name: "Infosys",
      logo: "https://csitdurg.in/Photos/Company-logo/download-removebg-preview.png"
    },
    {
      name: "Tata Technologies",
      logo: "https://csitdurg.in/Photos/Company-logo/TATA+TECHNOLOGIES.png"
    },
    {
      name: "Wipro",
      logo: "https://csitdurg.in/Photos/Company-logo/Wipro_Primary_Logo_Color_RGB.svg%20(1).png"
    },
    {
      name: "Accenture",
      logo: "https://csitdurg.in/Photos/Company-logo/Accenture-logo.png"
    },
    {
      name: "Infosys",
      logo: "https://csitdurg.in/Photos/Company-logo/download-removebg-preview.png"
    },
    {
      name: "Tata Technologies",
      logo: "https://csitdurg.in/Photos/Company-logo/TATA+TECHNOLOGIES.png"
    },
    // {
    //   name: "TCS",
    //   logo: "/api/placeholder/120/60"
    // },
    // {
    //   name: "Microsoft",
    //   logo: "/api/placeholder/120/60"
    // },
    // {
    //   name: "Amazon",
    //   logo: "/api/placeholder/120/60"
    // },
    // {
    //   name: "IBM",
    //   logo: "/api/placeholder/120/60"
    // }
  ];

  // Create a smooth continuous animation effect
  useEffect(() => {
    const scrollSpeed = 1;
    let animationFrameId;
    let position = 0;

    const scroll = () => {
      if (marqueeRef1.current && marqueeRef2.current) {
        position += scrollSpeed;
        
        // Reset position when first marquee is out of view
        if (position >= marqueeRef1.current.offsetWidth) {
          position = 0;
        }
        
        marqueeRef1.current.style.transform = `translateX(${-position}px)`;
        marqueeRef2.current.style.transform = `translateX(${-position}px)`;
      }
      
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-[#E5E7EB] py-16 text-[#0d173b]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Companies Visited</h2>
        <div className="h-1 w-24 bg-[#0d173b] mx-auto mb-8"></div>
        <p className="text-center text-[#0d173b] mb-12 max-w-3xl mx-auto">
          Our students have been placed in leading organizations across various
          industries. Here are some of the companies that have visited our campus:
        </p>

        {/* Logo Marquee Container */}
        <div className="relative overflow-hidden bg-white py-8 rounded-lg shadow-lg">
          {/* First marquee instance */}
          <div className="flex whitespace-nowrap" ref={marqueeRef1}>
            {companies.map((company, index) => (
              <div key={`marquee1-${index}`} className="flex items-center justify-center min-w-40 mx-8">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
          
          {/* Second marquee instance (duplicated for seamless looping) */}
          <div className="flex whitespace-nowrap absolute top-8 left-0" ref={marqueeRef2}>
            {companies.map((company, index) => (
              <div key={`marquee2-${index}`} className="flex items-center justify-center min-w-40 mx-8">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats Section */}
        {/* <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-[#0d173b] bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-white mb-2">250+</h3>
            <p className="text-white">Companies Visited</p>
          </div>
          <div className="bg-[#0d173b] bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-white mb-2">95%</h3>
            <p className="text-white">Placement Rate</p>
          </div>
          <div className="bg-[#0d173b] bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-white mb-2">₹42 LPA</h3>
            <p className="text-white">Highest Package</p>
          </div>
          <div className="bg-[#0d173b] bg-opacity-10 p-6 rounded-lg">
            <h3 className="text-3xl font-bold text-white mb-2">₹5.5 LPA</h3>
            <p className="text-white">Average Package</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default CompaniesVisited;