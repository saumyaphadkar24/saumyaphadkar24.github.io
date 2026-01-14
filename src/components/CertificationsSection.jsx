// src/components/CertificationsSection.jsx
import React from 'react'

const certifications = [
  {
    title: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    topics: ['AWS Services', 'AI Ethics', 'AI Governance', 'Secure AI', 'Trustworthy AI'],
    certificateUrl: '/AWS-Certified-AI-Practitioner-certificate.pdf',
  },
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-16 bg-transparent text-[#343F56]">
    <h2 className="text-3xl font-extrabold text-center mb-10">Certifications</h2>

    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center gap-6 max-w-[700px]">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="
              bg-white/60 backdrop-blur-md
              border border-purple-200/40
              rounded-2xl
              shadow-sm
              p-6
              w-[280px]
              text-center
              hover:shadow-lg
              hover:scale-[1.02]
              transition-all duration-300 ease-out
            "
          >
            <h3 className="text-lg font-bold mb-1">{cert.title}</h3>
            <p className="text-sm text-purple-700 mb-4 font-medium">{cert.issuer}</p>

            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {cert.topics.map((topic) => (
                <span
                  key={topic}
                  className="
                    bg-gradient-to-r from-purple-50 to-green-50
                    border border-purple-100
                    rounded-full
                    px-3 py-1
                    text-xs
                    font-medium
                    text-[#343F56]
                  "
                >
                  {topic}
                </span>
              ))}
            </div>

            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-4 py-2
                bg-gradient-to-r from-purple-300 to-blue-300
                hover:from-purple-400 hover:to-blue-400
                text-white
                text-sm
                font-semibold
                rounded-full
                shadow-sm
                hover:shadow-md
                transition-all
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
              "
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>

  )
}
