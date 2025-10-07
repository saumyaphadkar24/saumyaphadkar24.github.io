// src/components/EducationSection.jsx
import React from 'react'

const education = [
  {
    school: "New York University",
    degree: "MS in Computer and Information Sciences",
    location: "New York, NY",
    dates: "Sept 2023 – May 2025",
  },
  {
    school: "University of Pune (Savitribai Phule Pune University)",
    degree: "BE in Computer Engineering, Hons in AI/ML",
    location: "Pune, India",
    dates: "Aug 2019 – Jun 2023",
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-12 px-8 max-w-[800px] mx-auto">
      <h2 className="text-[40px] font-extrabold text-[#343F56] text-center mb-12">
        Education
      </h2>

      <div className="relative">
        {/* central vertical line */}
        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-[#D1C2F6]" />

        <div className="space-y-16">
          {education.map((edu, idx) => {
            const isLeft = idx % 2 === 0
            return (
              <div
                key={edu.school}
                className={`
                  relative flex items-center
                  ${isLeft ? 'justify-start' : 'justify-end'}
                `}
              >
                {/* dot on timeline */}
                <span
                  className="absolute left-1/2 w-3 h-3 bg-[#D1C2F6] rounded-full -translate-x-1/2"
                />

                {/* card */}
                <div
                  className={`
                    w-1/2
                    ${isLeft ? 'ml-8 text-left' : 'mr-8 text-right'}
                  `}
                >
                  <div
                    className="
                      bg-white/30 backdrop-blur-sm
                      border-[3px] border-[#FAF9F8]
                      rounded-[16px]
                      shadow-lg
                      p-6
                      transform transition-all duration-300 ease-out
                      hover:scale-105 hover:shadow-2xl
                    "
                  >
                    <h3 className="text-[20px] font-semibold text-[#343F56]">
                      {edu.school}
                    </h3>
                    <p className="mt-2 text-[16px] text-[#343F56]">
                      {edu.degree}
                    </p>
                    <p className="mt-1 text-[14px] text-[#343F56] opacity-80">
                      {edu.location}
                    </p>
                    <p className="mt-1 text-[14px] text-[#343F56] opacity-80">
                      {edu.dates}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
