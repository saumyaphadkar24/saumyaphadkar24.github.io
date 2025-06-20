import DataDropdown from './DataDropDown';

export default function UrbanHealthOptOverlay({ onClose }) {
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
          shadow-2xl 
          max-w-3xl w-full 
          overflow-hidden
        "
        onClick={e => e.stopPropagation()}
      >
        {/* — Header */}
        <div className="bg-[#C6F7E2] px-6 py-4 rounded-t-[16px]">
          <h3 className="text-[24px] font-bold text-[#343F56] text-center">
            UrbanHealthOpt: Simulation-Based Optimization of Urban Health Facility Placement
          </h3>
          <p className="mt-1 text-sm text-[#343F56] text-center">
            Big Data, Python, PyTorch, scikit-learn, TensorFlow, SciPy
          </p>
        </div>

        {/* — Body & Sidebar */}
        <div className="flex">
          {/* Body bullets */}
          <div className="p-6 flex-1 text-[#343F56] space-y-4">
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
