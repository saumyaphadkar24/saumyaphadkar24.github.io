// src/components/overlays/SmallDataOverlay.jsx
import React from 'react'

export default function SmallDataOverlay({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Main card */}
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
        {/* Header pill */}
        <div className="bg-[#FFC6E0] px-6 py-3">
          <h3 className="text-[24px] font-bold text-[#343F56] text-center">
            Robust Stock Movement Prediction from Noisy Small Data
          </h3>
          <p className="mt-1 text-sm text-[#343F56] text-center">
            Python, PyTorch, Meta-Learning, LSTM, Siamese Networks, Learn2Learn
          </p>
        </div>

        {/* Body: bullets on the left, buttons on the right */}
        <div className="flex flex-col sm:flex-row px-6 py-6 gap-6">
          {/* Bullet list */}
          <ul className="flex-1 list-disc pl-5 space-y-3 text-[#343F56] text-[16px]">
            <li>
              Evaluated ML model robustness under real-world data degradation by simulating noise,
              sparsity, and feature loss across stock price datasets from Apple, Microsoft, and Google.
            </li>
            <li>
              Applied meta-learning via MAML (using Learn2Learn) and introduced Siamese networks
              for sequential tabular classification, improving F1-score stability on degraded data.
            </li>
            <li>
              Conducted rigorous temporal cross-validation and hyperparameter tuning with Optuna
              to benchmark performance across LSTM, KNN, SVM, and neural models.
            </li>
          </ul>

          {/* Buttons column */}
          <div
                className="
                flex 
                flex-col 
                justify-center      /* vertical centering */
                items-center        /* horizontal centering */
                space-y-4           /* gap between pills */
                flex-shrink-0       /* prevent shrinking if parent flexes */
                "
            >
            <a
              href="https://github.com/saumyaphadkar24/SmallTimeSeriesData"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2
                border-2 border-[#343F56]
                rounded-full
                text-center text-[#343F56] font-bold text-[16px]
                shadow-[0_4px_8px_rgba(162,95,247,0.25)]
                transition-transform duration-200 ease-out hover:scale-105
              "
            >
              Code
            </a>
            <a
              href="https://docs.google.com/presentation/d/1xL3zzxeYGZAyVoxDfRZOWSx4R0t9NQhj1s9A4XqPrIE/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-4 py-2
                border-2 border-[#343F56]
                rounded-full
                text-center text-[#343F56] font-bold text-[16px]
                shadow-[0_4px_8px_rgba(162,95,247,0.25)]
                transition-transform duration-200 ease-out hover:scale-105
              "
            >
              Presentation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
