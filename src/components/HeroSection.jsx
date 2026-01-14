import React, { useState } from 'react';
import Picture from '../assets/Saumya_Grad_Pic_cropped.webp';

const HeroSection = () => {
  const [isBursting, setIsBursting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsBursting(false);
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsBursting(true);
    setTimeout(() => setIsVisible(false), 300); // Hide after burst animation
  };

  return (
    <section
      id="home"
      className="max-w-[1440px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
    >
      {/* Left column: text and buttons */}
      <div className="space-y-6 flex flex-col items-center text-center md:pl-20">
        <h1 className="text-[40px] font-extrabold text-[#343F56]">
          Hi, I'm Saumya
        </h1>
        <p className="text-[24px] font-semibold text-purple-700">
          Full-Stack AI/ML Engineer
        </p>
        <p className="text-[18px] font-medium italic text-gray-700 max-w-xl">
          Building intelligent systems.
        </p>
        <div className="flex flex-wrap gap-4 pt-10 justify-center">
          <a
            href="#projects"
            className="bg-gradient-to-r from-purple-300 to-blue-300 hover:from-purple-400 hover:to-blue-400 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            View Projects
          </a>
          <a
            href="mailto:saumya.phadkar@gmail.com"
            className="bg-white hover:bg-purple-50 text-purple-600 px-8 py-3 rounded-full font-semibold border-2 border-purple-300 shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right column: image */}
      <div
        className="relative border-4 border-purple-500 p-1 rounded-3xl shadow-lg max-w-lg mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={Picture}
          alt="Saumya Parag Phadkar in graduation gown"
          className="rounded-[24px] w-full h-auto object-cover"
          loading="eager"
          width="800"
          height="800"
        />

        {/* Comic-style speech bubble */}
        {isVisible && (
          <div className="absolute top-12 right-[37%] pointer-events-none">
            <div
              className="relative bg-white border-4 border-[#343F56] rounded-full px-6 py-3 shadow-xl origin-bottom-left"
              style={{
                animation: isBursting
                  ? 'burst 0.3s ease-in forwards'
                  : 'blowUp 0.4s ease-out forwards'
              }}
            >
              <span className="text-[20px] font-bold text-[#343F56] whitespace-nowrap">
                Hi! <span role="img" aria-label="waving hand">👋</span>
              </span>
              {/* Speech bubble tail - bottom left */}
              <div className="absolute -bottom-4 left-6 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-[#343F56]"></div>
              <div className="absolute -bottom-[11px] left-[28px] w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-white"></div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
