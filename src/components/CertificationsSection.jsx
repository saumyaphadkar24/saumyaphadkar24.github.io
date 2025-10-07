// src/components/CertificationsSection.jsx
import React from 'react'

const certifications = [
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    topics: ['AWS Services', 'AI Ethics', 'AI Governance', 'Secure AI', 'Trustworthy AI'],
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-12 px-8 max-w-[1440px] mx-auto">
      <h2 className="text-[40px] font-extrabold text-[#343F56] text-center mb-8">
        Certifications
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 max-w-[800px]">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="
                bg-white/30 backdrop-blur-sm
                border-[3px] border-[#FAF9F8]
                rounded-[16px]
                shadow-lg
                p-6
                text-[#343F56]
                transform transition-all duration-300 ease-out
                hover:scale-105 hover:shadow-2xl
                flex flex-col
              "
              style={{ minHeight: '200px' }}
            >
              <h3 className="text-[18px] font-bold mb-2">{cert.title}</h3>
              <p className="text-[14px] font-semibold mb-4 text-[#A259F7]">{cert.issuer}</p>
              <div className="flex flex-wrap gap-2">
                {cert.topics.map((topic) => (
                  <span
                    key={topic}
                    className="
                      inline-block
                      bg-[#C6F7E2]/50
                      border-2 border-[#C6F7E2]
                      rounded-full
                      px-3 py-1
                      text-[12px] font-medium
                      text-[#343F56]
                    "
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
