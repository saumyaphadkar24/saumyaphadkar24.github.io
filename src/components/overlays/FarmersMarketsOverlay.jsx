import OverlayWrapper from './OverlayWrapper'

export default function FarmersMarketsOverlay({ onClose, onNext, onPrev }) {
  return (
    <OverlayWrapper
      onClose={onClose}
      onNext={onNext}
      onPrev={onPrev}
      title="Farmers Market Interactive Data Visualizations"
      titleId="farmersmarkets-title"
      subtitle="Information Visualization, Python, Pandas, Plotly, GeoPandas, Folium"
      headerColor="#D6C5F5"
    >
      <div className="px-6 py-6 flex flex-col sm:flex-row gap-6">
        {/* bullet list */}
        <ul className="flex-1 list-disc pl-5 space-y-3 text-[#343F56] text-[16px]">
          <li>
            Built a suite of interactive data visualizations for U.S. farmers markets: dynamic maps,
            market listings by state, and detailed product/category breakdowns.
          </li>
          <li>
            Leveraged Python's visualization stack to create a colorful, intuitive dashboard for
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
              focus:outline-none focus:ring-2 focus:ring-purple-500
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
              focus:outline-none focus:ring-2 focus:ring-purple-500
            "
          >
            Poster
          </a>
        </div>
      </div>
    </OverlayWrapper>
  )
}
