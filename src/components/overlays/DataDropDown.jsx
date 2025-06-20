import { useState, useRef, useEffect } from 'react';

export default function DataDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside clicks
  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center px-4 py-2 border border-[#343F56] rounded-full font-bold text-[#343F56] hover:scale-105 transition-transform duration-200"
      >
        {/* Triangle */}
        <span
            className={`
            block w-0 h-0
            border-l-[6px] border-r-[6px] border-b-[6px]
            border-l-transparent border-r-transparent border-b-[#343F56]
            mr-2
            transform transition-transform duration-200
            ${open ? 'rotate-180' : 'rotate-0'}
            `}
        />
        <span>Data</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white/90 border border-[#FAF9F8] rounded shadow-lg flex flex-col z-10 overflow-hidden">
          <a
            href="https://health.data.ny.gov/Health/Health-Facility-General-Information/vn5v-hh5r/about_data"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-[#343F56] hover:bg-[#FAF9F8]"
          >
            Health Data
          </a>
          <a
            href="https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm text-[#343F56] hover:bg-[#FAF9F8]"
          >
            Census Data
          </a>
        </div>
      )}
    </div>
  );
}
