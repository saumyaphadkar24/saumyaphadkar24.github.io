// src/components/ExperienceSection.jsx
import React from 'react'

const experiences = [
  {
    title: 'Machine Learning Engineer',
    company: 'Sanio AI',
    description: 'Empowering enterprises to unlock siloed data and build differentiated AI faster through real-time labeling, intelligent data orchestration, and scalable data pipelines.',
    location: 'New York City Metropolitan Area',
    dates: 'Sept 2025 – Present',
    bullets: [
      'Built a Dynamic Attribute Extraction Pipeline for 3M+ SKUs, leveraging LLM-powered raw attribute extraction with OpenAI/Ollama and advanced prompt engineering.',
      'Designed an embedding-driven normalization system using cosine similarity clustering, low-threshold recall, and LLM semantic validation to unify attribute variants.',
      'Architected a schema-free EAV framework with coverage-scored attribute ranking, enabling adaptive catalog analytics and effortless schema evolution across diverse product domains.',
    ],
  },
  {
    title: 'Senior Engineer and Research Analyst',
    company: 'New York University',
    description: 'Office of Academic Program Review and Assessment (OAPRA) ensures academic program quality and regulatory compliance by reviewing and approving new programs in alignment with Middle States accreditation.',
    location: 'New York, NY',
    dates: 'Oct 2024 – Sept 2025',
    bullets: [
      'Enhanced the dashboard with longitudinal career-path analytics, enabling visualization of alumni movement across sectors and time for trend and retention analysis.',
      'Applied advanced Tableau capabilities (LOD expressions, parameter-driven filtering, calculated fields, custom hierarchies) to build complex, interactive visualizations tailored to institutional decision-making.',
      'Integrated Generative AI accessibility frameworks, using prompt engineering and LLM-based data classification to support scalable feature generation and ensure the dashboard met inclusive, accessible design standards.',
      'Conducted comprehensive market research across 50 R1 universities (web scraping) to analyze PhD alumni dashboard functionalities and develop a strategic metric system aligning with stakeholder needs.',
      'Designed and deployed a centralized, interactive Tableau dashboard, integrating 20K+ alumni records across academia, corporate, nonprofit, and government sectors to improve data-driven decision-making and transparency.',
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
    <section id="experience" className="py-12 px-8 max-w-[1200px] mx-auto">
      <h2 className="text-[40px] font-extrabold text-[#343F56] text-center mb-12">
        Experience
      </h2>

      <div className="relative">
        {/* Timeline line - lighter gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-300 via-purple-300 to-purple-400 hidden md:block"></div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.title + exp.company}
              className="relative pl-0 md:pl-12 group"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-[3px] h-full bg-gradient-to-b from-blue-300 to-purple-300 md:hidden"></div>
              <div className="absolute left-[-6px] top-2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 border-4 border-white shadow-lg hidden md:block group-hover:scale-125 transition-transform duration-300"></div>

              <div className="bg-white/70 backdrop-blur-sm border border-gray-200/60 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:border-purple-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div className="flex-1">
                    <h3 className="text-[22px] font-bold text-[#343F56] mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-[18px] font-semibold text-purple-700 mb-2">
                      {exp.company}
                    </p>
                    {exp.description && (
                      <p className="text-[13px] text-gray-600 italic leading-relaxed mb-3 border-l-2 border-gray-300 pl-3">
                        {exp.description}
                      </p>
                    )}
                  </div>
                  <div className="md:text-right flex-shrink-0">
                    <p className="text-[14px] font-medium text-gray-700">
                      {exp.dates}
                    </p>
                    <p className="text-[14px] text-gray-600 flex items-center md:justify-end gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {exp.location}
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-3 text-[15px] text-[#343F56] leading-relaxed">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-purple-500 font-bold flex-shrink-0 mt-1">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
