// src/components/overlays/FineTuningOverlay.jsx
import React from 'react'

export default function AdvancedModelOverlay({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* main card */}
      <div
        className="
          bg-white
          border-[3px] border-[#FAF9F8]
          rounded-[16px]
          shadow-[0_8px_16px_rgba(162,95,247,0.5)]
          max-w-3xl w-full
          overflow-hidden
        "
        onClick={e => e.stopPropagation()}
      >
        {/* Header area */}
        <div className="bg-[#FFDAB3] px-6 py-3">
          <h3 className="text-[24px] font-bold text-[#343F56] text-center">
            Advanced Model Fine-Tuning Applications
          </h3>
          <p className="mt-1 text-sm text-[#343F56] text-center">
            Python, PyTorch, NLP, DistilBERT, CodeBERT, MBART
          </p>
        </div>

        {/* Body: bullets + right-column buttons */}
        <div className="flex flex-col sm:flex-row px-6 py-6 gap-6">
          {/* bullet list */}
          <ul className="flex-1 list-disc pl-5 space-y-3 text-[#343F56] text-[16px]">
            <li>
              Enhanced the <strong>Llama3-8B</strong> model using Low-Rank Adaptation (LoRA)
              to predict math solution correctness with <strong>85.67% accuracy</strong>,
              streamlining parameter-tuning processes.
            </li>
            <li>
              Fine-tuned <strong>DistilBERT</strong> to generate code documentation for six
              programming languages, achieving a <strong>ROUGE-1 F1 score of 0.7226</strong>
              and a <strong>BLEU score of 0.685</strong>, showcasing its NLG capability.
            </li>
          </ul>

          {/* buttons column (must be wrapped in its own div!) */}
          <div className="flex flex-col justify-center items-center space-y-4">
            <a
              href="https://github.com/saumyaphadkar24/Advanced-Model-Fine-Tuning-Applications"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2
                border-2 border-[#343F56]
                rounded-full
                font-bold text-[#343F56] text-[16px]
                shadow-[0_4px_8px_rgba(162,95,247,0.25)]
                transition-transform duration-200 ease-out hover:scale-105
              "
            >
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
