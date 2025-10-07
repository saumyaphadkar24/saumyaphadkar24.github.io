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
      'Deployed as modular, production-grade microservices with FastAPI + Temporal DAG workflows, Dockerized orchestration, and CLI/API interfaces for scalable, low-latency category-wide processing.',
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
            {exp.description && (
              <p className="text-[12px] italic opacity-70 mb-2 leading-relaxed">{exp.description}</p>
            )}
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
