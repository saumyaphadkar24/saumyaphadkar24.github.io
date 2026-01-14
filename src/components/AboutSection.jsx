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
              Full-Stack AI/ML Engineer who builds real-world AI systems and learns quickly when things get complex.
            </p>
            <p>
              I design and ship end-to-end ML and LLM products across cloud, ML infrastructure, and modern frontends. I have built large-scale attribute extraction pipelines, conversational AI systems, and data platforms that move from research to reliable deployment.
            </p>
            <p>
              I enjoy the intersection of engineering and product thinking. Turning messy ideas into clear systems, improving user experience, and making complex AI feel usable is where I do my best work.
            </p>
            <p>
              Outside work, I stay curious and playful. I collect side projects, product ideas, and weird technical experiments, and I bring that same energy into teams when solving high-pressure problems.
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
          <div className="space-y-3 text-[16px] leading-relaxed">
            <p>
              <span className="font-semibold">LLMs & Production AI:</span>{' '}
              I make language models work in production, not just demos. Multi-model orchestration, RAG systems, and smart prompt engineering that cut inference costs 55%.
            </p>
            <p>
              <span className="font-semibold">Full-Stack Development:</span>{' '}
              I build end-to-end. React/Angular/Vue frontends, Flask/Django/FastAPI backends. I care about the whole experience - API speed and how the button feels.
            </p>
            <p>
              <span className="font-semibold">Cloud & Data Infrastructure:</span>{' '}
              AWS-certified. Docker, Temporal, Spark, Hadoop, Neo4j. I know when to use which tool and how to make systems scale without over-engineering.
            </p>
            <p>
              <span className="font-semibold">Product & Research:</span>{' '}
              I prototype in Figma, run user studies, and back decisions with data. I've done meta-learning, geospatial optimization, and few-shot learning - but I care more about solving real problems than publishing papers.
            </p>
          </div>
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
