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
            bg-white/30 backdrop-blur-sm
            border-[3px] border-[#FAF9F8]
            rounded-[16px]
            shadow-lg
            p-8
            text-[#343F56]
            space-y-4
            transform              /* enable transforms */
            transition-transform   /* animate transforms */
            duration-300           /* 300ms timing */
            ease-out               /* easing */
            hover:scale-105        /* scale up to 105% on hover */
            hover:shadow-2xl       /* deepen the shadow a bit */
        ">
          <h3 className="text-[24px] font-semibold text-[#A259F7] text-center">
            Who I Am
          </h3>
          <div className="space-y-4 text-[16px] leading-relaxed">
            <p>
              Some people collect stamps—I collect algorithms, playlists, and a running list of product ideas that only seems to grow.
            </p>
            <p>
              Currently based in New York (by way of Pune, India), I build AI systems and web apps that don’t just work, they make life smoother, smarter, and maybe even a bit more fun.
            </p>
            <p>
              I thrive where code meets creativity: I’ve led AI projects for everything from virtual dog parenting to urban health planning (because who doesn’t want their sidekick or city to be healthier and smarter?).
            </p>
            <p>
              Whether it’s wrangling large language models, making sense of thousands of Bollywood scripts, or building dashboards that impress even the most jaded stakeholders, I believe technology should be just as fun and human as it is powerful and practical.
            </p>
            <p>
              If you want to talk code, design, or why data dashboards are the unsung heroes of modern institutions, my inbox is always open.
            </p>
          </div>
        </div>

        {/* What I’m Good At card */}
        <div className="
            flex-1
            bg-white/30 backdrop-blur-sm
            border-[3px] border-[#FAF9F8]
            rounded-[16px]
            shadow-lg
            p-8
            text-[#343F56]
            space-y-4
            transform              /* enable transforms */
            transition-transform   /* animate transforms */
            duration-300           /* 300ms timing */
            ease-out               /* easing */
            hover:scale-105        /* scale up to 105% on hover */
            hover:shadow-2xl       /* deepen the shadow a bit */
          ">
          <h3 className="text-[24px] font-semibold text-[#A259F7] text-center">
            What I’m Good At
          </h3>
          <ul className="list-disc list-inside space-y-2 text-[16px] leading-relaxed">
            <li>
              <span className="font-semibold">AI/ML Engineering:</span>{' '}
              <span className="font-medium text-gray-500">
                Deep learning, NLP, LLMs (e.g., GPT, BERT), GenAI applications
              </span>
            </li>
            <li>
              <span className="font-semibold">Full-Stack Development:</span>{' '}
              <span className="font-medium text-gray-500">
                React, Flask, MongoDB, REST APIs
              </span>
            </li>
            <li>
              <span className="font-semibold">Data Visualization:</span>{' '}
              <span className="font-medium text-gray-500">
                Tableau, Power BI, custom dashboards
              </span>
            </li>
            <li>
              <span className="font-semibold">Cloud & DevOps:</span>{' '}
              <span className="font-medium text-gray-500">
                AWS (S3, Lambda, EC2), CI/CD pipelines
              </span>
            </li>
            <li>
              <span className="font-semibold">UI/UX & Product Design:</span>{' '}
              <span className="font-medium text-gray-500">
                Figma, prototyping, user interviews, wireframes
              </span>
            </li>
            <li>
              <span className="font-semibold">Collaboration:</span>{' '}
              <span className="font-medium text-gray-500">
                Agile teams, cross-functional projects, mentoring
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Fun Facts button */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => setOpen(true)}
          className="
            px-8 py-3
            bg-[#C6F7E2]
            border border-[#343F56]
            rounded-full
            text-[#343F56]      /* dark text */
            text-[20px]
            font-bold           /* bold pixel font */
            tracking-wide 
            shadow-md
            transform
            transition-all
            duration-200 
            ease-out
            hover:scale-105
            hover:bg-[#A259F7] hover:text-black
            hover:scale-105
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
