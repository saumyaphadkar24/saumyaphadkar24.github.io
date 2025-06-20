// src/components/overlays/FarmersMarketsOverlay.jsx
import React from 'react'

export default function FarmersMarketsOverlay({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* card */}
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
        {/* header pill */}
        <div className="bg-[#D6C5F5] px-6 py-3">
          <h3 className="text-[24px] font-bold text-[#343F56] text-center">
            Farmers Market Interactive Data Visualizations
          </h3>
          <p className="mt-1 text-sm text-[#343F56] text-center">
            Information Visualization, Python, Pandas, Plotly, GeoPandas, Folium
          </p>
        </div>

        {/* body: bullets on left, buttons on right */}
        <div className="flex flex-col sm:flex-row px-6 py-6 gap-6">
          {/* bullet list */}
          <ul className="flex-1 list-disc pl-5 space-y-3 text-[#343F56] text-[16px]">
            <li>
              Built a suite of interactive data visualizations for U.S. farmers markets: dynamic maps,
              market listings by state, and detailed product/category breakdowns.
            </li>
            <li>
              Leveraged Python’s visualization stack to create a colorful, intuitive dashboard for
              exploring spatial and product trends in local markets.
            </li>
          </ul>

          {/* right-column buttons */}
          <div className="flex flex-col justify-center items-center sm:items-start space-y-4">
            <a
              href="https://github.com/saumyaphadkar24/FarmersMarket"
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
              href="https://www.canva.com/design/DAGEdoUkKoY/sC-fRxaZB2fgMPFOcKvPKw/edit"
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
              Poster
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
