// src/components/ExperienceSection.jsx
import React from 'react'

const experiences = [
  {
    title: 'Research Analyst',
    company: 'Office of the Provost, New York University',
    location: 'New York, NY',
    dates: 'Oct 2024 – Present',
    bullets: [
      'Conducted comprehensive market research across 50 R1 universities (web-scraping), analyzing PhD alumni dashboard functionalities to develop a strategic metric system that identifies and maps customer needs effectively.',
      'Designed and deployed a centralized, interactive Tableau dashboard on Tableau Cloud, integrating over 20,000 data points, which enhanced stakeholder engagement and institutional transparency.',
      'Leveraged AI-powered tools like NYU’s Gemini API and HPC cluster to clean and classify unstructured data, automating backend processes and improving reporting accuracy via prompt engineering for feature generation and text classification.',
    ],
  },
  {
    title: 'AI / Machine Learning Engineer',
    company: 'American Dog Society',
    location: 'Remote, NY',
    dates: 'May 2024 – Oct 2024',
    bullets: [
      'Developed and deployed an attention-based CNN on AWS SageMaker, utilizing MBart for feature engineering and REST APIs for data collection, achieving an F1 score of 0.91 in data categorization.',
      'Implemented SHAP for Explainable AI to ensure model transparency and adherence to AI Governance principles; collaborated on frontend enhancements in Angular and Vue3 for dynamic data visualizations.',
      'Built interactive Tableau dashboards on AWS EC2, optimized for performance and security; automated data pipelines using Tableau’s CLI & REST API and integrated them with Java-based backend APIs and MSSQL.',
    ],
  },
  {
    title: 'Artificial Intelligence Intern, Software Consultant',
    company: 'AlgoAnalytics Pvt. Ltd.',
    location: 'Pune, India',
    dates: 'Oct 2022 – May 2023',
    bullets: [
      'Designed an NLP knowledge-graph search engine using OntoText GraphDB, SparkSQL, and PySpark for efficient BSE stock pattern retrieval.',
      'Engineered a RAG-based chatbot for real-time sentiment analysis on 1,000+ financial news sources; prototyped frontend modules in Angular and Vue3 for interactive data dashboards.',
      'Built an automated multilingual translation pipeline for 4,000+ film scripts via LoRA-fine-tuned M2M and MBart, achieving a BLEU score of 0.689 and ROUGE-L 0.822.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 px-8 max-w-[1440px] mx-auto">
      <h2 className="text-[40px] font-extrabold text-[#343F56] text-center mb-8">
        Experience
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {experiences.map((exp) => (
          <div
            key={exp.title}
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
            style={{ minHeight: '280px' }}
          >
            <h3 className="text-[18px] font-bold mb-1">{exp.title}</h3>
            <p className="text-[14px] font-semibold mb-1">{exp.company}</p>
            <p className="text-[14px] opacity-80 mb-1">{exp.location}</p>
            <p className="text-[14px] opacity-80 mb-3">{exp.dates}</p>
            <ul className="list-disc pl-5 space-y-2 text-[14px] flex-1 overflow-auto">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
