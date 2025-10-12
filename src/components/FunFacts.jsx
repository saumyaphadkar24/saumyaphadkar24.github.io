import { useState, useEffect } from 'react'

export default function FunFactsModal({ open, onClose }) {
  // `visible` drives the slide animation in/out
  const [visible, setVisible] = useState(false)

  // whenever `open` goes true, bring the modal in
  useEffect(() => {
    if (open) setVisible(true)
  }, [open])

  // if parent says closed *and* we've finished sliding out, unmount
  if (!open && !visible) return null

  // handle backdrop click → play slide‐out then notify parent
  const handleClose = () => {
    setVisible(false)
    // wait for the animation to finish (300ms) then actually close
    setTimeout(onClose, 300)
  }

  return (
    // Backdrop
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
      onClick={handleClose}            // click on overlay closes
    >
      {/* Panel */}
      <div
        className={`
          relative
          w-[70%] max-w-3xl
          bg-white/95 backdrop-blur-sm
          border border-purple-300
          rounded-2xl
          shadow-xl
          p-8

          /* Animation */
          transform transition-transform duration-300 ease-out
          ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        `}
        onClick={(e) => e.stopPropagation()}  // prevent backdrop click from firing when clicking inside
      >
        {/* Close "×" */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-purple-600 transition-colors"
          aria-label="Close fun facts"
        >
          ×
        </button>

        {/* Header */}
        <div className="mb-6">
          <h3 className="text-[28px] font-bold text-purple-700 text-center">
            Fun Facts
          </h3>
        </div>

        {/* Fact list */}
        <ul className="list-disc list-inside space-y-3 text-[#343F56] text-[16px] leading-relaxed">
          <li>Dog lover & accidental canine behavior analyst (built WagSyncAI to prove it)</li>
          <li>Ex-basketball captain who now shoots hoops with data pipelines instead of basketballs</li>
          <li>"Can we automate that?" is basically my life motto</li>
          <li>Once fine-tuned LLMs to translate 4,000+ Bollywood film scripts (yes, really)</li>
          <li>Built a virtual try-on app because I believe shopping should be sustainable AND fun</li>
          <li>My idea of a good time: debugging code at 2am with lo-fi beats playing</li>
        </ul>
      </div>
    </div>
  )
}
