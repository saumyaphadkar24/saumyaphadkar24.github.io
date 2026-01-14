// src/components/overlays/StreetlivesOverlay.jsx
import OverlayWrapper from './OverlayWrapper'

export default function StreetlivesOverlay({ onClose, onNext, onPrev }) {
  return (
    <OverlayWrapper
      onClose={onClose}
      onNext={onNext}
      onPrev={onPrev}
      title="General Purpose QA Chatbot for Streetlives Inc."
      titleId="streetlives-title"
      subtitle="FastAPI, LangChain, LLMs, SQL, RAG, RPA, CCaaS, Multilingual NLP"
      headerColor="#C6F7E2"
    >
      <div className="relative flex">
        {/* Body */}
        <div className="p-6 flex-1 space-y-4 text-[#343F56]">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Streetlives</strong> is an NYC nonprofit building peer-driven tech connecting homeless individuals to critical services.
            </li>
            <li>
              Engineered <strong>hybrid multilingual chat flow</strong> combining LLM slot-filling and guided options for text + voice interaction.
            </li>
            <li>
              Replaced free-form LLM replies with a <strong>SQL-driven dialogue engine</strong> for accurate service recommendations.
            </li>
            <li>
              Integrated <strong>RPA-based form automation</strong> and privacy-safe CCaaS routing to streamline social-service intake.
            </li>
          </ul>
        </div>

        {/* Sidebar buttons */}
        <div className="p-6 flex flex-col items-center justify-center space-y-4">
          <a
            href="https://yourpeer.nyc"
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
            Streetlives- YourPeer
          </a>
        </div>
      </div>
    </OverlayWrapper>
  )
}
