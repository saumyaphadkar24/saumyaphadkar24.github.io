// src/components/ProjectsSection.jsx
import { useState } from 'react'
import SustainableShopperOverlay from './overlays/SustainableShopperOverlay'
import WagSyncAIOverlay         from './overlays/WagSyncAIOverlay'
import UrbanHealthOptOverlay    from './overlays/UrbanHealthOptOverlay'
import AdvancedModelOverlay     from './overlays/AdvancedModelOverlay'
import FarmersMarketsOverlay    from './overlays/FarmersMarketsOverlay'
import SmallDataOverlay         from './overlays/SmallDataOverlay'

const projects = [
  { id: 1, title: "SustainableShopper: Virtual Try-On & Smart Wardrobe App",       key: 'SustainableShopper' },
  { id: 2, title: "WagSyncAI: AI-Powered Dog Parenting Assistant",                 key: 'WagSyncAI' },
  { id: 3, title: "UrbanHealthOpt: Urban Health Center Placement Simulation",      key: 'UrbanHealthOpt' },
  { id: 4, title: "Advanced Model Fine-Tuning Applications",                       key: 'AdvancedModel' },
  { id: 5, title: "Farmers’ Markets: Interactive Data Visualizations",             key: 'FarmersMarkets' },
  { id: 6, title: "Few-Shot Stock Prediction via Siamese Networks & Meta-Learning", key: 'FewShotStock' },
]

export default function ProjectsSection() {
  const [openKey, setOpenKey] = useState(null)

  // pick the right overlay component
  const Overlay = {
    SustainableShopper: SustainableShopperOverlay,
    WagSyncAI:         WagSyncAIOverlay,
    UrbanHealthOpt:    UrbanHealthOptOverlay,
    AdvancedModel:     AdvancedModelOverlay,
    FarmersMarkets:    FarmersMarketsOverlay,
    FewShotStock:      SmallDataOverlay
  }[openKey]

  return (
    <>
      <section id="projects" className="py-12 px-8 max-w-[1440px] mx-auto">
        <h2 className="text-[40px] font-extrabold text-[#343F56] text-center mb-8">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map(proj => (
            <div
              key={proj.id}
              onClick={() => setOpenKey(proj.key)}
              className="
                cursor-pointer
                flex items-center justify-center
                bg-white/30 backdrop-blur-sm
                border-[3px] border-[#FAF9F8]
                rounded-[16px]
                shadow-lg p-6
                text-center text-[18px] font-bold text-[#343F56]
                transform transition-all duration-300 ease-out
                hover:scale-105 hover:shadow-2xl
              "
              style={{ minHeight: '120px', maxWidth: '320px', margin: '0 auto' }}
            >
              {proj.title}
            </div>
          ))}
        </div>
      </section>

      {/* render the overlay if one is selected */}
      {Overlay && <Overlay onClose={() => setOpenKey(null)} />}
    </>
  )
}
