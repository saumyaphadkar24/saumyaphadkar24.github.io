// src/components/SkillsSection.jsx
import { useState, useRef, useEffect } from 'react'

const skills = [
  "AI/ML & Data Science",
  "Web & App Development",
  "Data Visualization",
  "Programming Languages",
  "Cloud & DevOps",
  "Tools & Platforms",
]

const techStacks = {
  "AI/ML & Data Science": [
    "TensorFlow","PyTorch","Keras","scikit-learn","Pandas","NumPy",
    "MBart","GPT","BERT","M2M","RAG","Prompt Engineering","Llama",
    "SpaCy","NLTK","OpenCV","Attention-based CNNs","SHAP (Explainable AI)","AWS SageMaker"
  ],
  "Web & App Development": [
    "React","Redux","Angular","Vue3","D3.js","HTML5","CSS3","JavaScript",
    "TypeScript","Flask","Django","Node.js","RESTful APIs","JWT Authentication"
  ],
  "Data Visualization": [
    "Tableau (Cloud & Desktop)","Power BI","D3.js","Matplotlib","Seaborn",
    "Custom dashboards","Figma (prototyping & wireframes)"
  ],
  "Programming Languages": [
    "Python","Java","JavaScript","C++","C","R","SQL","Scala","Kotlin","C#"
  ],
  "Cloud & DevOps": [
    "AWS (S3, Lambda, EC2, SageMaker)","Azure","Docker","Kubernetes",
    "CI/CD pipelines","Terraform","Spark","Hadoop Ecosystem",
    "Git & Version Control","Serverless functions"
  ],
  "Tools & Platforms": [
    "GitHub","Git","PyCharm","VS Code","UNIX/Linux","Windows",
    "Jupyter Notebooks","Google Colab","Figma","Jira","Slack","Agile methodologies"
  ],
}

const pillColors = [
  "#D1C2F6",  // purple
  "#FFC6E0",  // pink
  "#BEE7FB",  // light blue
  "#C6F7E2",  // mint green
  "#FFD6BA",  // peach
  "#FFFACD",  // pale yellow
]

export default function SkillsSection() {
  const [hovered, setHovered]       = useState(null)
  const [popupTop, setPopupTop]     = useState(0)
  const popupRef                    = useRef(null)

  // Auto-scroll effect whenever `hovered` becomes truthy
  useEffect(() => {
    const el = popupRef.current
    if (!hovered || !el) return

    let frameId
    let pos = 0
    const maxScroll = el.scrollWidth - el.clientWidth
    const speed     = 0.5  // px per frame

    function step() {
      pos = pos >= maxScroll ? 0 : pos + speed
      el.scrollLeft = pos
      frameId = requestAnimationFrame(step)
    }
    frameId = requestAnimationFrame(step)

    // cleanup on hover end
    return () => {
      cancelAnimationFrame(frameId)
      el.scrollLeft = 0
    }
  }, [hovered])

  return (
    <section id="skills" className="py-12 px-8 max-w-[1440px] mx-auto">
      <h2 className="text-[40px] font-extrabold text-[#343F56] text-center mb-8">
        Skills
      </h2>

      <div className="relative">
        {/* 1) Auto-scrolling popup */}
        {hovered && (
          <div
            ref={popupRef}
            onMouseLeave={() => setHovered(null)}
            style={{ top: popupTop }}
            className="
              absolute left-0 right-0 z-20 mb-8
              bg-white/90 border-[3px] border-[#FAF9F8]
              rounded-[16px] shadow-lg
              h-[120px] overflow-x-auto whitespace-nowrap
              flex items-center space-x-6 px-6
            "
          >
            {techStacks[hovered].map((tag, i) => {
              const hex = pillColors[i % pillColors.length];
              return (
                <span
                  key={tag}
                  style={{ backgroundColor: `${hex}33`, borderColor: hex }}
                  className="
                    inline-block border-2 rounded-full
                    px-6 py-2
                    text-[#343F56] text-[16px] font-bold
                    shadow-md transform transition-all duration-200 ease-out
                    hover:scale-105
                  "
                >
                  {tag}
                </span>
              );
            })} {/* <-- closes the .map callback and the map call */}
          </div>
        )}

        {/* 2) The six-tile grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {skills.map(skill => (
            <div
              key={skill}
              onMouseEnter={e => {
                const gridTop = e.currentTarget.parentElement
                  .getBoundingClientRect().top;
                const tileTop = e.currentTarget
                  .getBoundingClientRect().top;
                setPopupTop(tileTop - gridTop);
                setHovered(skill);
              }}
              className="
                flex items-center justify-center
                bg-white/30 backdrop-blur-sm
                border-[3px] border-[#FAF9F8]
                rounded-[16px]
                shadow-lg p-6
                text-center text-[18px] font-bold text-[#343F56]
                transform transition-all duration-300 ease-out
                hover:scale-105 hover:shadow-2xl
              "
              style={{ minHeight: '120px' }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}