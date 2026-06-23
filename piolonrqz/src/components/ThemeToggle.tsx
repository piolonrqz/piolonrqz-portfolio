import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg border border-border bg-card text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring transition-colors duration-200"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -10, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 10, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.15 }}
          className="flex items-center justify-center"
        >
          {theme === 'light' ? (
            <Moon className="h-[1.2rem] w-[1.2rem] text-muted-foreground hover:text-foreground" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem] text-muted-foreground hover:text-foreground" />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}
