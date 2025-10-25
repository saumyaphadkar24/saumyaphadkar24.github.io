import { useEffect } from 'react'

export default function OverlayWrapper({
  onClose,
  onNext,
  onPrev,
  title,
  titleId,
  headerColor = '#FFFACD',
  subtitle,
  children,
  maxWidth = '3xl'
}) {
  useEffect(() => {
    const handleKeyboard = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && onNext) {
        onNext();
      } else if (e.key === 'ArrowLeft' && onPrev) {
        onPrev();
      }
    };

    document.addEventListener('keydown', handleKeyboard);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyboard);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      {/* Previous button */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label="Previous project"
          className="
            absolute left-4 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full
            bg-white/90 border-2 border-purple-300
            flex items-center justify-center
            hover:bg-purple-50 hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-purple-500
            transition-all duration-200
            shadow-lg z-50
          "
        >
          <svg className="w-6 h-6 text-[#343F56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      <div
        className="
          bg-white/90
          border-[3px] border-[#FAF9F8]
          rounded-[16px]
          shadow-lg
          max-w-3xl w-full
          overflow-hidden
          max-h-[90vh]
          overflow-y-auto
        "
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="px-6 py-4 rounded-t-[16px] sticky top-0 z-10"
          style={{ backgroundColor: headerColor }}
        >
          <div className="flex items-center justify-between">
            <h3 id={titleId} className="text-[24px] font-bold text-[#343F56] text-center flex-1">
              {title}
            </h3>
            <button
              onClick={onClose}
              aria-label="Close dialog"
              className="
                ml-4 p-2 rounded-full
                hover:bg-black/10
                focus:outline-none focus:ring-2 focus:ring-purple-500
                transition-colors
              "
            >
              <svg className="w-6 h-6 text-[#343F56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {subtitle && (
            <div className="mt-1 text-center text-[14px] text-[#343F56]">
              {subtitle}
            </div>
          )}
        </div>

        {/* Body */}
        {children}
      </div>

      {/* Next button */}
      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label="Next project"
          className="
            absolute right-4 top-1/2 -translate-y-1/2
            w-12 h-12 rounded-full
            bg-white/90 border-2 border-purple-300
            flex items-center justify-center
            hover:bg-purple-50 hover:scale-110
            focus:outline-none focus:ring-2 focus:ring-purple-500
            transition-all duration-200
            shadow-lg z-50
          "
        >
          <svg className="w-6 h-6 text-[#343F56]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  )
}
