import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#contact', label: 'Contact', id: 'contact' },
]

function Navbar({ activeSection, theme, onThemeToggle }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/55 bg-white/58 backdrop-blur-2xl transition-colors duration-300 dark:border-white/10 dark:bg-slate-950/58">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          href="#home"
          className="focus-ring rounded-md text-xl font-black tracking-tight text-slate-950 dark:text-white"
          aria-label="Farooq Shaik home"
        >
          Farooq
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-teal-500 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-white/55 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/8 dark:hover:text-white'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onThemeToggle}
            className="glass-pill focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:text-teal-600 dark:text-slate-200 dark:hover:text-teal-300"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="glass-pill focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-800 lg:hidden dark:text-white"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/55 bg-white/78 px-4 py-3 shadow-lg backdrop-blur-2xl lg:hidden dark:border-white/10 dark:bg-slate-950/82">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-semibold transition ${
                  activeSection === link.id
                    ? 'bg-teal-500 text-white'
                    : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
