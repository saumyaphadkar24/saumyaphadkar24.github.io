// src/components/ProjectsSection.jsx
import { useOverlay } from '../context/OverlayContext'

const projects = [
  { id: 1, title: "SustainableShopper: Virtual Try-On & Smart Wardrobe App",       key: 'SustainableShopper' },
  { id: 2, title: "WagSyncAI: AI-Powered Dog Parenting Assistant",                 key: 'WagSyncAI' },
  { id: 3, title: "UrbanHealthOpt: Urban Health Center Placement Simulation",      key: 'UrbanHealthOpt' },
  { id: 4, title: "Advanced Model Fine-Tuning Applications",                       key: 'AdvancedModel' },
  { id: 5, title: "Farmers' Markets: Interactive Data Visualizations",             key: 'FarmersMarkets' },
  { id: 6, title: "Few-Shot Stock Prediction via Siamese Networks & Meta-Learning", key: 'FewShotStock' },
]

export default function ProjectsSection() {
  const { openProject } = useOverlay()

  return (
    <section id="projects" className="py-12 px-8 max-w-[1440px] mx-auto">
      <h2 className="text-[40px] font-extrabold text-[#343F56] text-center mb-8">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {projects.map(proj => (
          <button
            key={proj.id}
            onClick={() => openProject(proj.key)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openProject(proj.key);
              }
            }}
            aria-label={`View details for ${proj.title}`}
            className="
              cursor-pointer
              flex items-center justify-center
              bg-white/70 backdrop-blur-sm
              border border-gray-200/60
              rounded-2xl
              shadow-md p-6
              text-center text-[18px] font-bold text-[#343F56]
              transition-all duration-300 ease-out
              hover:shadow-xl
              hover:border-purple-300
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
            "
            style={{ minHeight: '120px', maxWidth: '320px', margin: '0 auto' }}
          >
            {proj.title}
          </button>
        ))}
      </div>
    </section>
  )
}
