import React from 'react';
import Picture from '../assets/Saumya_Grad_Pic_cropped.webp';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="max-w-[1440px] mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      {/* Left column: text and buttons */}
      <div className="space-y-6">
        <h1 className="text-[40px] font-extrabold text-[#343F56] text-center">
          Hi! I am Saumya <span role="img" aria-label="waving hand">👋</span>
        </h1>
        <p className="text-[24px] font-semibold text-purple-700 text-center">
          Full-Stack AI/ML Engineer
        </p>
        <p className="text-[18px] font-medium text-gray-700 max-w-xl text-center">
          Building intelligent systems and modern web experiences
        </p>
        <div className="flex flex-wrap gap-4 pt-6 justify-center">
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
      <div className="border-4 border-purple-500 p-1 rounded-3xl shadow-lg">
        <img
          src={Picture}
          alt="Saumya Parag Phadkar in graduation gown"
          className="rounded-[24px] w-full h-auto object-cover"
          loading="eager"
          width="800"
          height="800"
        />
      </div>
    </section>
  );
};

export default HeroSection;
