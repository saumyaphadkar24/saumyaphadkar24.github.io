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
          bg-white
          border-4 border-[#FFFACD]
          rounded-2xl
          shadow-[0_8px_20px_rgba(165,89,247,0.3)]
          p-8

          /* Animation */
          transform transition-transform duration-300 ease-out
          ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        `}
        onClick={(e) => e.stopPropagation()}  // prevent backdrop click from firing when clicking inside
      >
        {/* Close “×” */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-2xl text-[#343F56] hover:text-[#A259F7]"
          aria-label="Close fun facts"
        >
          ×
        </button>

        {/* Header pill */}
        <div className="flex justify-center mb-6">
          <div className="px-6 py-2 bg-[#C6F7E2] border border-[#343F56] rounded-full">
            <span className="text-[20px] font-bold text-[#343F56]">
              Fun Facts
            </span>
          </div>
        </div>

        {/* Fact list */}
        <ul className="list-disc list-inside space-y-2 text-[#343F56] text-[16px]">
          <li>Dog lover & accidental canine behavior analyst</li>
          <li>Ex-basketball captain who now mostly shoots hoops with data</li>
          <li>“Can we automate that?” is basically my catchphrase</li>
          <li>Runs on coffee and bubble tea for statistically significant periods</li>
        </ul>
      </div>
    </div>
  )
}
