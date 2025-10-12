import gmailIcon from '../assets/gmail.png'
import githubIcon from '../assets/github.png'
import linkedinIcon from '../assets/linkedin_blue.png'

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
      sticky top-0 z-50 w-full h-[120px]
      flex flex-col justify-between      /* stack two rows, center vertically */
      bg-white/60 backdrop-blur-md
      border-b-2 border-gray-200/50
      shadow-sm px-[32px] py-4
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
            "
          >
            Download Resume
          </a>
          <a href="https://linkedin.com/in/saumya-phadkar" target="_blank" rel="noopener">
            <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-5" />
          </a>
          <a href="https://github.com/saumyaphadkar24" target="_blank" rel="noopener">
            <img src={githubIcon} alt="GitHub" className="w-6 h-5" />
          </a>
          <a href="mailto:saumya.phadkar@gmail.com">
            <img src={gmailIcon} alt="Gmail" className="w-6 h-5" />
          </a>
        </div>
      </div>

      {/* ─── Row 2: nav links aligned right ────────────────────────── */}
      <nav className="mt-0.1 flex justify-end items-center space-x-[24px] text-[#343F56]">
        {menu.map((item, i) => (
          <div key={item.name} className="flex items-center space-x-2">
            <a href={item.href} className="text-[16px] font-medium">
              {item.name}
            </a>
            {i < menu.length - 1 && (
              <span className="opacity-50">|</span>
            )}
          </div>
        ))}
      </nav>
    </header>
  )
}
