import OverlayWrapper from './OverlayWrapper'

export default function SmallDataOverlay({ onClose, onNext, onPrev }) {
  return (
    <OverlayWrapper
      onClose={onClose}
      onNext={onNext}
      onPrev={onPrev}
      title="Robust Stock Movement Prediction from Noisy Small Data"
      titleId="smalldata-title"
      subtitle="Python, PyTorch, Meta-Learning, LSTM, Siamese Networks, Learn2Learn"
      headerColor="#FFC6E0"
    >
      <div className="px-6 py-6 flex flex-col sm:flex-row gap-6">
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
        <div className="flex flex-col justify-center items-center space-y-4 flex-shrink-0">
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
              focus:outline-none focus:ring-2 focus:ring-purple-500
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
              focus:outline-none focus:ring-2 focus:ring-purple-500
            "
          >
            Presentation
          </a>
        </div>
      </div>
    </OverlayWrapper>
  )
}
