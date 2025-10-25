import { createContext, useContext, useState, lazy, Suspense } from 'react'

// Lazy load all overlay components
const SustainableShopperOverlay = lazy(() => import('../components/overlays/SustainableShopperOverlay'))
const WagSyncAIOverlay = lazy(() => import('../components/overlays/WagSyncAIOverlay'))
const UrbanHealthOptOverlay = lazy(() => import('../components/overlays/UrbanHealthOptOverlay'))
const AdvancedModelOverlay = lazy(() => import('../components/overlays/AdvancedModelOverlay'))
const FarmersMarketsOverlay = lazy(() => import('../components/overlays/FarmersMarketsOverlay'))
const SmallDataOverlay = lazy(() => import('../components/overlays/SmallDataOverlay'))

// Project keys in order
const PROJECT_KEYS = [
  'SustainableShopper',
  'WagSyncAI',
  'UrbanHealthOpt',
  'AdvancedModel',
  'FarmersMarkets',
  'FewShotStock'
]

// Overlay mapping
const OVERLAY_COMPONENTS = {
  SustainableShopper: SustainableShopperOverlay,
  WagSyncAI: WagSyncAIOverlay,
  UrbanHealthOpt: UrbanHealthOptOverlay,
  AdvancedModel: AdvancedModelOverlay,
  FarmersMarkets: FarmersMarketsOverlay,
  FewShotStock: SmallDataOverlay
}

// Create context
const OverlayContext = createContext(null)

// Custom hook to use overlay context
export function useOverlay() {
  const context = useContext(OverlayContext)
  if (!context) {
    throw new Error('useOverlay must be used within OverlayProvider')
  }
  return context
}

// Provider component
export function OverlayProvider({ children }) {
  const [openOverlay, setOpenOverlay] = useState(null)

  const openProject = (projectKey) => {
    setOpenOverlay(projectKey)
  }

  const closeOverlay = () => {
    setOpenOverlay(null)
  }

  const nextProject = () => {
    if (!openOverlay) return
    const currentIndex = PROJECT_KEYS.indexOf(openOverlay)
    const nextIndex = (currentIndex + 1) % PROJECT_KEYS.length
    setOpenOverlay(PROJECT_KEYS[nextIndex])
  }

  const prevProject = () => {
    if (!openOverlay) return
    const currentIndex = PROJECT_KEYS.indexOf(openOverlay)
    const prevIndex = (currentIndex - 1 + PROJECT_KEYS.length) % PROJECT_KEYS.length
    setOpenOverlay(PROJECT_KEYS[prevIndex])
  }

  const OverlayComponent = openOverlay ? OVERLAY_COMPONENTS[openOverlay] : null

  return (
    <OverlayContext.Provider value={{ openProject, closeOverlay, openOverlay, nextProject, prevProject }}>
      {children}

      {/* Render overlay if one is open */}
      {OverlayComponent && (
        <Suspense fallback={
          <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
                <span className="text-[#343F56] font-semibold">Loading project details...</span>
              </div>
            </div>
          </div>
        }>
          <OverlayComponent onClose={closeOverlay} onNext={nextProject} onPrev={prevProject} />
        </Suspense>
      )}
    </OverlayContext.Provider>
  )
}
