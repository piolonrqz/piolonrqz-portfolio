import { useState, MouseEvent } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

interface HeaderProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export default function Header({ theme, toggleTheme }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    const targetId = href.replace('#', '')
    const elem = document.getElementById(targetId)
    if (elem) {
      const offset = 80 // header height offset
      const bodyRect = document.body.getBoundingClientRect().top
      const elemRect = elem.getBoundingClientRect().top
      const elemPosition = elemRect - bodyRect
      const offsetPosition = elemPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#top"
          onClick={(e) => handleScroll(e, '#top')}
          className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          Piolo Frances Enriquez
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-sm text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
