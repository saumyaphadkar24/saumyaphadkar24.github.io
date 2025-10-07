export default function SustainableShopperOverlay({ onClose }) {
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
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header area */}
        <div className="bg-[#A9DDF5] px-6 py-3">
          <h3 className="text-[24px] font-bold text-[#343F56] text-center">
            SustainableShopper: Virtual Try-On & Smart Wardrobe App
          </h3>
          <p className="mt-1 text-sm text-[#343F56] text-center">
            HCI, HCD, Python, Flask, React, OpenAI API, CLIP, MongoDB
          </p>
        </div>

        {/* Body: bullets + right-column buttons */}
        <div className="flex flex-col sm:flex-row px-6 py-6 gap-6">
          {/* bullet list */}
          <ul className="flex-1 list-disc pl-5 space-y-3 text-[#343F56] text-[16px]">
            <li>
              Engineered a modular <strong>Flask</strong> backend with secure <strong>JWT</strong> auth,
              MongoDB integration, and async polling to Fashn.ai for virtual try-on predictions;
              integrated CI/CD pipelines with Docker and Jenkins, achieving <strong>98% uptime</strong> across 200+ real-time image inference sessions.
            </li>
            <li>
              Developed interactive dashboards and user flows in <strong>React</strong>; integrated backend with .NET Core web APIs
              for extended e-commerce functionality and seamless system interoperability.
            </li>
            <li>
              Deployed GPT-4-based garment description and outfit recommendation system using multimodal prompt
              pipelines and <strong>CLIP-based visual similarity search</strong>; validated through user study (n=11), achieving <strong>2x faster
              task completion and 91% user preference</strong>, driving final product design.
            </li>
          </ul>

          {/* buttons column */}
          <div className="flex flex-col items-center sm:items-start justify-start justify-center space-y-4">
            {[
              { label: "Code",    href: "https://github.com/saumyaphadkar24/sustainable-shopper"},
              { label: "Demo",    href: "https://www.youtube.com/watch?v=6KjAaJjTclU&t=7s"},
              { label: "Article", href: "https://engineering.nyu.edu/news/end-semester-showcases-give-students-chance-display-their-projects-and-hone-their-presentation"},
            ].map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-32
                  px-4 py-2
                  bg-white
                  border-2 border-[#343F56]
                  rounded-full
                  text-center text-[#343F56] font-bold text-[16px]
                  shadow-[0_4px_8px_rgba(162,95,247,0.25)]
                  transition-transform duration-200 ease-out
                  hover:scale-105
                "
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
