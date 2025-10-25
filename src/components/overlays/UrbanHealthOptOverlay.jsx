import OverlayWrapper from './OverlayWrapper'
import DataDropdown from './DataDropDown'

export default function UrbanHealthOptOverlay({ onClose, onNext, onPrev }) {
  return (
    <OverlayWrapper
      onClose={onClose}
      onNext={onNext}
      onPrev={onPrev}
      title="UrbanHealthOpt: Simulation-Based Optimization of Urban Health Facility Placement"
      titleId="urbanhealthopt-title"
      subtitle="Big Data, Python, PyTorch, scikit-learn, TensorFlow, SciPy"
      headerColor="#C6F7E2"
    >
      <div className="px-6 py-6 flex">
        {/* Body bullets */}
        <div className="flex-1 text-[#343F56] space-y-4">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Engineered a geospatial simulation system to determine <strong>optimal placement of 300+ healthcare facilities across NYC</strong>, leveraging TIGER/Line shapefiles and records from the U.S. Census Bureau and American Community Survey.
            </li>
            <li>
              Formulated 3 custom loss functions integrating demographic and epidemiological variables (age, income, hospitalization rates), and executed <strong>50 parameterized simulations</strong> to inform urban healthcare equity models.
            </li>
          </ul>
        </div>

        {/* Sidebar buttons */}
        <div className="p-6 flex flex-col justify-center items-center space-y-4">
          <a
            href="https://github.com/saumyaphadkar24/UrbanHealthOpt"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-2
              border border-[#343F56]
              rounded-full
              font-bold text-[#343F56]
              transform transition-transform duration-200 ease-out hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-purple-500
            "
          >
            Code
          </a>
          {/* Data dropdown */}
          <DataDropdown />
          <a
            href="https://drive.google.com/file/d/1wvdJie3h9TmBlwZfK7y9PwOMuDLGsFUm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-4 py-2
              border border-[#343F56]
              rounded-full
              font-bold text-[#343F56]
              transform transition-transform duration-200 ease-out hover:scale-105
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
