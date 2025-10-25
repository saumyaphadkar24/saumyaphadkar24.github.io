import gmailIcon from '../assets/gmail.webp'
import githubIcon from '../assets/github.webp'
import linkedinIcon from '../assets/linkedin_blue.webp'

const menu = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: 'mailto:saumya.phadkar@gmail.com' },
]

export default function Header() {
  return (
    <header className="
      sticky top-0 z-50 w-full
      flex flex-col justify-between gap-2
      bg-white/60 backdrop-blur-md
      border-b-2 border-gray-200/50
      shadow-sm px-4 md:px-8 py-4
    ">

      {/* ─── Row 1: name on left, icons on right ───────────────────── */}
      <div className="flex justify-between items-center">
        <div className="font-extrabold text-[20px] text-[#343F56]">
          Saumya Parag Phadkar
        </div>
        <div className="flex items-center space-x-[16px]">
          <a
            href="/Resume.pdf"
            download
            aria-label="Download resume as PDF"
            className="
              px-4 py-2
              bg-gradient-to-r from-purple-300 to-blue-300
              border-2 border-transparent
              rounded-full
              text-white
              text-[14px]
              font-bold
              shadow-md
              transition-all
              duration-200
              ease-out
              hover:shadow-lg
              hover:from-purple-400 hover:to-blue-400
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
            "
          >
            Download Resume
          </a>
          <a
            href="https://linkedin.com/in/saumya-phadkar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Saumya's LinkedIn profile"
            className="focus:outline-none focus:ring-2 focus:ring-purple-500 focus:rounded transition-all"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-5" />
          </a>
          <a
            href="https://github.com/saumyaphadkar24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Saumya's GitHub profile"
            className="focus:outline-none focus:ring-2 focus:ring-purple-500 focus:rounded transition-all"
          >
            <img src={githubIcon} alt="GitHub" className="w-6 h-5" />
          </a>
          <a
            href="mailto:saumya.phadkar@gmail.com"
            aria-label="Send email to Saumya"
            className="focus:outline-none focus:ring-2 focus:ring-purple-500 focus:rounded transition-all"
          >
            <img src={gmailIcon} alt="Gmail" className="w-6 h-5" />
          </a>
        </div>
      </div>

      {/* ─── Row 2: nav links aligned right ────────────────────────── */}
      <nav className="mt-0.1 flex justify-end items-center space-x-[24px] text-[#343F56]" aria-label="Main navigation">
        {menu.map((item, i) => (
          <div key={item.name} className="flex items-center space-x-2">
            <a
              href={item.href}
              className="text-[16px] font-medium hover:text-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded px-2 py-1"
            >
              {item.name}
            </a>
            {i < menu.length - 1 && (
              <span className="opacity-50" aria-hidden="true">|</span>
            )}
          </div>
        ))}
      </nav>
    </header>
  )
}
