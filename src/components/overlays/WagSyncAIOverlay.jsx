// src/components/overlays/WagSyncAIOverlay.jsx
export default function WagSyncAIOverlay({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="
          bg-white/90
          border-[3px] border-[#FAF9F8]
          rounded-[16px]
          shadow-lg
          max-w-3xl w-full
          overflow-hidden
        "
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#FFFACD] px-6 py-4 rounded-t-[16px]">
          <h3 className="text-[24px] font-bold text-[#343F56] text-center">
            WagSyncAI: AI-Powered Dog Parenting Assistant
          </h3>
          <div className="mt-1 text-center text-[14px] text-[#343F56]">
            HCI, HCD, User Research, Figma, GenAI, VR
          </div>
        </div>

        <div className="relative flex">
          {/* Body */}
          <div className="p-6 flex-1 space-y-4 text-[#343F56]">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Conducted <strong>user-centered design research</strong> across 10+ participants,
                deriving high-priority features from surveys, interviews, and competitor analysis;
                mapped needs to develop AI-powered modules for health tracking,
                emergency support, training, and social routines.
              </li>
              <li>
                Built mid-fidelity wireframes in <strong>Figma</strong> and a functional
                <strong> Voiceflow</strong> chatbot with intent recognition and fallback strategies;
                prototyped magnetic tracker and VR training in <strong>Wonda VR</strong> to boost
                habit formation and engagement.
              </li>
            </ul>
          </div>

          {/* Sidebar buttons */}
          <div className="p-6 flex flex-col items-center justify-center space-y-4">
            <a
              href="https://www.figma.com/design/oQFQyvsr0ZwBk8ZxR2nJmG/WagSyncAI_Animation?node-id=0-1&t=xN0CzDHtRggtsXhj-1"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3
                border border-[#343F56]
                rounded-full
                font-bold text-[#343F56]
                transform transition-transform duration-200 ease-out
                hover:scale-105
              "
            >
              Wireframes
            </a>

            <a
              href="https://github.com/saumyaphadkar24/WagSyncAI"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3
                border border-[#343F56]
                rounded-full
                font-bold text-[#343F56]
                transform transition-transform duration-200 ease-out
                hover:scale-105
              "
            >
              User & Marker Research
            </a>

            <a
              href="https://wvr.li/qf3fc1"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3
                border border-[#343F56]
                rounded-full
                font-bold text-[#343F56]
                transform transition-transform duration-200 ease-out
                hover:scale-105
              "
            >
              VR Spaces
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
