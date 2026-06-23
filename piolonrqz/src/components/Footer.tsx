export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 border-t border-border/40 text-center text-xs text-muted-foreground">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          &copy; {currentYear} Piolo Frances Enriquez. All rights reserved.
        </p>
        <p className="font-light">
          Built with React &bull; TypeScript &bull; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
