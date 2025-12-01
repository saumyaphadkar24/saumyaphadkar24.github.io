// src/components/AboutSection.jsx
import { useState } from 'react'
import FunFactsModal from './FunFacts'

export default function AboutSection() {
  const [open, setOpen] = useState(false)

  return (
    <section id="about" className="py-12 px-8 max-w-[1440px] mx-auto">
      {/* Section title */}
      <h2 className="text-[40px] font-extrabold text-[#343F56] text-center mb-8">
        About Me
      </h2>

      {/* Two-column grid */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Who I Am card */}
            <div className="
            flex-1
            bg-white/70 backdrop-blur-sm
            border border-gray-200/60
            rounded-2xl
            shadow-md
            p-8
            text-[#343F56]
            space-y-4
            transition-all
            duration-300
            ease-out
            hover:shadow-xl
            hover:border-purple-300
        ">
          <h3 className="text-[24px] font-semibold text-purple-700 text-center">
            Who I Am
          </h3>
          <div className="space-y-4 text-[16px] leading-relaxed">
            <p>
              Full-Stack AI/ML Engineer with experience building and deploying production-grade AI systems across cloud platforms (AWS, SageMaker), ML infrastructure (Docker, LangChain, Temporal), and modern frontends (React, Angular, Vue3).
            </p>
            <p>
              Currently based in New York (by way of Pune, India), I'm working dual roles as a Machine Learning Engineer at Sanio AI and Software Engineer at Streetlives, Inc., where I specialize in LLM orchestration, RAG pipelines, conversational AI, and Explainable AI across startup and nonprofit environments.
            </p>
            <p>
              I thrive where code meets creativity: I've architected a 1M+ SKU attribute extraction pipeline using LangChain and OpenRouter, built hybrid multilingual chat flows reducing inference costs by 55%, and developed PhD alumni dashboards processing 20K+ records for NYU.
            </p>
            <p>
              Whether it's wrangling large language models, engineering hybrid normalization frameworks combining semantic embeddings with fuzzy matching, or building SQL-driven dialogue engines with RPA automation, I believe technology should be as intelligent as it is accessible.
            </p>
            <p>
              Some people collect stamps—I collect algorithms, side projects, and a running list of product ideas. From translating 4,000+ Bollywood scripts to optimizing urban health facility placement, I'm always looking for the next interesting problem to solve.
            </p>
          </div>
        </div>

        {/* What I'm Good At card */}
        <div className="
            flex-1
            bg-white/70 backdrop-blur-sm
            border border-gray-200/60
            rounded-2xl
            shadow-md
            p-8
            text-[#343F56]
            space-y-4
            transition-all
            duration-300
            ease-out
            hover:shadow-xl
            hover:border-purple-300
          ">
          <h3 className="text-[24px] font-semibold text-purple-700 text-center">
            What I'm Good At
          </h3>
          <ul className="list-disc list-inside space-y-3 text-[16px] leading-relaxed">
            <li>
              <span className="font-semibold">AI/ML Engineering:</span>{' '}
              Production LLM pipelines with multi-model orchestration. Expert in RAG, prompt engineering, fine-tuning (LoRA), and meta-learning.
            </li>
            <li>
              <span className="font-semibold">Scalable Infrastructure:</span>{' '}
              FastAPI microservices with Temporal workflows, Docker orchestration. Reduced memory usage by 90%. AWS certified (SageMaker, Lambda, EC2).
            </li>
            <li>
              <span className="font-semibold">Full-Stack Development:</span>{' '}
              React, Angular, Vue3, Redux frontends. Flask, Django, .NET Core backends. Production apps with 98% uptime.
            </li>
            <li>
              <span className="font-semibold">Data Engineering & Viz:</span>{' '}
              Advanced Tableau, D3.js. Spark, Hadoop, Neo4j, GraphDB. Built dashboards on AWS EC2 integrated with Java APIs.
            </li>
            <li>
              <span className="font-semibold">Product & Research:</span>{' '}
              User-centered design with Figma prototyping and user studies. Advanced research projects in meta-learning (MAML), geospatial optimization with TIGER/Line shapefiles, and few-shot learning with Siamese networks. Conducted 50+ parameterized simulations for data-driven decision making.
            </li>
          </ul>
        </div>
      </div>

      {/* Fun Facts button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => setOpen(true)}
          aria-label="View fun facts about Saumya"
          className="
            px-8 py-3
            bg-gradient-to-r from-purple-300 to-blue-300
            border-2 border-transparent
            rounded-full
            text-white
            text-[18px]
            font-semibold
            tracking-wide
            shadow-md
            transition-all
            duration-200
            ease-out
            hover:from-purple-400 hover:to-blue-400
            hover:shadow-lg
            focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
          "
        >
          Fun Facts
        </button>
      </div>

      {/* Modal pop-up */}
      <FunFactsModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
