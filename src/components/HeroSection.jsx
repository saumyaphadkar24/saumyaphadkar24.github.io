import React from 'react';
import Picture from '../assets/Saumya_Grad_Pic_cropped.jpeg';

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
        <p className="text-[24px] font-semibold text-[#A259F7] text-center">
          I build playful, modern AI and web experiences
        </p>
        <p className="text-[18px] font-medium text-[#343F56] max-w-xl text-center">
          Full-Stack Engineer & AI/ML Developer <br></br> Making technology more delightful and human :)
        </p>
        <div className="flex flex-wrap gap-4 pt-4 justify-center">
          <a
            href="#projects"
            className="bg-[#FF6F61] hover:bg-[#e65a52] text-[#343F56] px-6 py-3 rounded-full font-semibold transition"
          >
            See my work
          </a>
        </div>
        <div className="flex flex-wrap gap-4 pt-4 justify-center">
          <a
            href="mailto:saumya.phadkar@gmail.com"
            className="bg-[#FFC6E0] hover:bg-[#e0a6c2] text-[#343F56] px-6 py-3 rounded-full font-semibold border border-[#343F56] transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right column: image */}
      <div className="border-4 border-[#A259F7] p-1 rounded-[32px]">
        <img
          src={Picture}
          alt="Saumya in graduation gown"
          className="rounded-[24px] w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
